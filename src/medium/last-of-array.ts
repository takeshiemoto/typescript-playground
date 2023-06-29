type Last<T> = T extends [...infer _, infer U] ? U : never;

type tail1 = Last<["a", "b", "c"]>; // expected to be 'c'
type tail2 = Last<[3, 2, 1]>; // expected to be 1

/**
 * 別回答
 */
type Last2<T extends any[]> = [any, ...T]["T"["length"]];
type tail3 = Last<["a", "b", "c"]>; // expected to be 'c'
type tail4 = Last<[3, 2, 1]>; // expected to be 1

/**
 * 解説
 */
export function run() {
  const ary1 = [3, 2, 1];
  const len = ary1.length; // 3
  const ary2 = [4, ...ary1];
  const last = ary2[len];

  console.log(last); // 1
}
