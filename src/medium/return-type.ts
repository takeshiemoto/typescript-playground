// inferを使った推論で返す
// Tは関数のみ
// Tの戻り値にinferを書けば推論可能

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends (args: any) => any> = T extends (
  args: any
) => infer S
  ? S
  : any;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
