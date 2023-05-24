interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Pickを自作する
// Tは対象の型
// keyof Tは対象の型のkey 'title' | 'description' | 'completed' |となる
// この時点でKはTのKeyである必要がある
// [key in K]はkeyはKのユニオン（いずれかになる）keyは変数。
// T[key]でKに指定した型のみが生き残る = Pickの完成
type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

type MyTodo = MyPick<Todo, "title">;

const myTodo: MyTodo = { title: "Learn Type Script" };
