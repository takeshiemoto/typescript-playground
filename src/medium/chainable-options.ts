/**
 *  1. 再起的に状態を保持するケースはだいたいジェネリクスを受け取る
 *  2. Tに常に最新の値（型）が入ってくるイメージ
 *  3. 途中でOmitが入っているのは同じKeyの重複を許さないため
 */
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get: () => T;
};
