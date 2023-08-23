import { binaryTreePreOrder } from "./binary-tree-pre-order";
import { tree } from "./constants";

test("Pre order", function () {
  expect(binaryTreePreOrder(tree)).toEqual([
    20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
  ]);
});
