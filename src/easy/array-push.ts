type MyPush<T extends unknown[], U> = [...T, U];

type PushResult = MyPush<["hello", "world"], "hello">;
