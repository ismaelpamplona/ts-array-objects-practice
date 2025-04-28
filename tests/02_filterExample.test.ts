import { filterEvenNumbers } from "../src/02_filterExample";

test("return a filtered even numbers array", () => {
  const evenArr = filterEvenNumbers([1, 2, 3, 4]);
  expect(evenArr).toEqual([2, 4]);
});
