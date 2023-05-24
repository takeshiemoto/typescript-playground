type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// 自分の答え
type First<T extends (string | number)[]> = T[0];

type Head1 = First<arr1>;
type Head2 = First<arr2>;

type emptyAry = [];
// 空の配列に対して処理が行われていない。undefined型になる。
type Head3 = First<emptyAry>;

// Firstとの違いは「ひとつ以上の値を保持しているか」のチェックを行っている
// 保持している場合はその型を利用したい = infer P
// 保持していない場合はnever;
// never型とは？
// 値を保持していないことを表す型。何も代入できない。
type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never;

type Head4 = First2<arr1>; // a型
type Head5 = First2<arr2>; // 3型
type Head6 = First2<emptyAry>; // never

// 参考
// 一つ以上の配列型
type OneArray = [any, ...any[]];
// 二つ以上の配列型
type TowArray = [any, any, ...any[]];

const oneAry: OneArray = [1];
const towAry: TowArray = [1, 2];
