import { sumNumbers } from "../src/03_reduceExample";

test("return the sum of the array", () => {
  const reduced = sumNumbers([1, 2, 3, 4]);
  expect(reduced).toEqual(10);
});
