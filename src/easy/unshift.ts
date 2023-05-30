type MyUnshift<T extends unknown[], U> = [U, ...T];
type MyUnshiftResult = MyUnshift<[1, 2], 0>;
