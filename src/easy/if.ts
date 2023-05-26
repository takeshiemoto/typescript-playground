type MyIf<C extends boolean, T, F> = C extends true ? T : F;

type MyIfResult1 = MyIf<false, "a", "b">;
type MyIfResult2 = MyIf<true, "a", "b">;
// type MyIfResult3 = MyIf<"C", "a", "b">; error
