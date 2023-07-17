interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

// type LookUp<
//   T extends { type: string },
//   U extends string
// > = T["type"] extends "dog" ? T : never;

type LookUp<U, T> = U extends { type: T } ? U : never;

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
