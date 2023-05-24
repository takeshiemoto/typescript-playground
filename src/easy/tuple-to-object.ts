const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// Tはstring配列を受け取る
// as constしているのでreadonlyである必要がある
// 配列の値の型は[number]で取得できる
// P in T[number]はTのいずれかの要素である
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

type MyTuple = TupleToObject<typeof tuple>;
