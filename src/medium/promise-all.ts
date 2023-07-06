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
