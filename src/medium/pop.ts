type Pop<T extends any[]> = T extends [...infer U, infer _] ? U : never;

type re1 = Pop<["a", "b", "c", "d"]>; // expected to be ['a', 'b', 'c']
type re2 = Pop<[3, 2, 1]>; // expected to be [3, 2]
