import { doubleNumbers } from "../src/01_mapExample";

test("return a doubled array", () => {
  const doubled = doubleNumbers([1, 2, 3, 4]);
  expect(doubled).toEqual([2, 4, 6, 8]);
});
