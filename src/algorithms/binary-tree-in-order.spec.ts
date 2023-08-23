import { binaryTreeInOrder } from "./binary-tree-in-order";
import { tree } from "./constants";

test("In order", function () {
  expect(binaryTreeInOrder(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
});
