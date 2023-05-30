type MyParameters<T> = T extends (...args: infer Params) => any
  ? Params
  : never;

// 別解: extendsによる制限
type MyParameters2<T extends (...args: any[]) => any> = T extends (
  ...any: infer S
) => any
  ? S
  : any;

const foo = (arg1: string, arg2: number): void => {};

type MyParametersResult = MyParameters<typeof foo>;
type MyParametersResult2 = MyParameters2<typeof foo>;
