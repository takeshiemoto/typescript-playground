type TrimLeft<T extends string> = T extends "" ? true : false;

type TrimLeftResult = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

/**
 * 実コード
 */
function trimLeft(value: string) {
  if (value.length === 0) {
    return value;
  }
  if (value.charAt(0) === " ") {
    return trimLeft(value.slice(1));
  }
  return value;
}
