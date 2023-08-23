import { binaryTreePostOrder } from "./binary-tree-post-order";
import { tree } from "./constants";

test("post order", function () {
  expect(binaryTreePostOrder(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});
