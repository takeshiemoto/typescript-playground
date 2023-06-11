type Arr = ["1", "2", "3", 2, false];

type MyTupleToUnion<T extends unknown[]> = T[number];

type Test = MyTupleToUnion<Arr>;
