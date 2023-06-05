interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/**
 * - 型Tを受け取る
 * - 型Kは可変で複数受け取る
 * - key in keyof T、keyはTのプロパティである
 * - as でそれを再Mapする
 * - Tのプロパティであるkeyは第二引数以降のKにextends可能か？
 * - 可能な場合は削除したいのでnever
 * - 不可能な場合は残すのでkey
 * - あとはT[key]する。
 */

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;
