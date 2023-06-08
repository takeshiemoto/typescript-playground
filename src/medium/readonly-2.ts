interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 1. Kに一致しない = 第二引数に指定していないフィールドの型を生成する
// 2. Kに一致するreadonlyのフィールドの型を生成する
// 3. 合成！

type Temp1<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

type Temp1Result = Temp1<Todo, "description">; // descriptionが落ちる

type Temp2<T, K extends keyof T> = {
  readonly [key in K]: T[key];
};

type Temp2Result = Temp2<Todo, "description">; // descriptionのみ

type TempOneAndTow<T, K extends keyof T> = Temp1<T, K> & Temp2<T, K>;

const tempTodo: TempOneAndTow<Todo, "title"> = {
  completed: false,
  description: "",
  title: "",
}; // titleのみreadonly

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
} & { readonly [key in K]: T[key] };

const todo: MyReadonly2<Todo> = {
  completed: false,
  description: "",
  title: "",
};

const todo2: MyReadonly2<Todo, "description"> = {
  completed: false,
  description: "",
  title: "",
};

todo2.completed = true;
todo2.title = "Hello Rust";
// todo2.description = "hello typescript" error!
