import { getFirstTwoElements } from "../src/04_arrayDestructuring";

test("return the first two elements of the array", () => {
  const result = getFirstTwoElements([10, 20, 30, 40]);
  expect(result).toEqual([10, 20]);
});

test("return the first two elements of the array of one element", () => {
  const result = getFirstTwoElements([10]);
  expect(result).toEqual([10, undefined]);
});
