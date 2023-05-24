interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type ReadonlyTodo = MyReadonly<Todo>;
