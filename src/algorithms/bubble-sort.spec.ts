import { bubbleSort } from "./bubble-sort";

test("bubble sort", () => {
  expect(bubbleSort([1, 3, 7, 4, 2])).toEqual([1, 2, 3, 4, 7]);
  expect(bubbleSort([2, 1])).toEqual([1, 2]);
});
