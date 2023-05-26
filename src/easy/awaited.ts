type ExampleType = Promise<string>;
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type Inner = MyAwaited<ExampleType>;
