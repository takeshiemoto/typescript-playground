type MyConcat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type MyConcat2 = MyConcat<["a"], ["b"]>; // Array['a', 'b']
