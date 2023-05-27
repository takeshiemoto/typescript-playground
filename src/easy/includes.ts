type MyIncludes<T extends unknown[], P> = P extends T[number] ? true : false;

type MyIncludesResult1 = MyIncludes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Dio"
>;

type MyIncludesResult2 = MyIncludes<
  ["John", "Paul", "George", "Ringo"],
  "Ringo"
>;

// 正解
// {"Kars": true}["Kars"]がtrueならtrue
type MyIncludes2<T extends readonly any[], U> = {
  [P in T[number]]: true;
}[U] extends true
  ? true
  : false;

type MyIncludesResult3 = MyIncludes2<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Dio"
>;
