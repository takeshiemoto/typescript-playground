const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

/**
 * 1. PromiseAll([Promise, Promise, Promise]) という関数がある
 * 2. これをPromiseじゃなくしたらどうなるか
 * 3. PromiseAll(args: unknown[]) => args;
 * 4. 配列の中身を推論する型をつくると？
 */

/**
 * temp type
 */
type PromiseAllFunction = (args: unknown[]) => typeof args;
type InAwaited<T> = T extends Promise<infer U> ? InAwaited<U> : T;

// Uが配列になってる
type InArray<T extends any[]> = T extends [...infer U]
  ? InAwaited<U[number]>
  : never;

/**
 * Sandbox
 */
type A = InAwaited<Promise<string>>;
type B = InAwaited<string>;
type C = InArray<[Promise<string>, Promise<number>, Promise<11>]>;

/**
 * 解答
 */
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

const p = PromiseAll([promise1, promise2, promise3] as const);

type D<T extends any[]> = {
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
};
type E = D<
  ["hello", "word", true, false, 120, Promise<130>, Promise<"Hello world">]
>;

/**
 * 解説
 *
 * ```md
 * `keyof` は TypeScript のインデックス型クエリ演算子で、ある型のすべてのプロパティ名の型を生成します。つまり、`keyof T` は `T` の全てのプロパティ名（キー）の型を生成します。
 *
 * 配列では、そのプロパティ（キー）はインデックス（つまり数値）です。なので `keyof T` は、配列 `T` の場合、そのインデックスの型となります。つまり、`keyof ["hello", "world"]` は `0 | 1` という型になります（配列のインデックスは0から始まるため）。
 *
 * したがって、あなたが示した型定義では `F<["hello", "world"]>` という型は `{ [key in keyof T]: T[key] }` により `{ 0: "hello", 1: "world" }` となります。
 *
 * しかし、TypeScriptでは、数値インデックスでアクセスできる型は配列として解釈されます。そのため `{ 0: "hello", 1: "world" }` という形式のオブジェクトは、TypeScriptによって `["hello", "world"]` という形式の配列として解釈されます。
 *
 * なお、これはJavaScriptとTypeScriptがプロパティ（キー）名を自動的に文字列に変換するという特性にも関連しています。したがって、TypeScriptでは数値をプロパティ名として持つオブジェクトは、そのプロパティ名が配列のインデックスであるかのように解釈されます。
 * ```
 */
type F<T extends unknown[]> = { [key in keyof T]: T[key] };
type R = F<["hello", "world"]>;
