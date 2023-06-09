type MyDeepReadonly<T> = { readonly [key in keyof T]: MyDeepReadonly<T[key]> };

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Results = MyDeepReadonly<X>;

/**
 * 1. keyof T extend never = Tのkeyが存在しない場合はTを返す
 * 2. 存在する場合はReadonlyにして再起
 */
type MyDeepReadOnly2<T> = keyof T extends never
  ? T
  : { readonly [key in keyof T]: MyDeepReadOnly2<T[key]> };

type Result2 = MyDeepReadOnly2<X>;
