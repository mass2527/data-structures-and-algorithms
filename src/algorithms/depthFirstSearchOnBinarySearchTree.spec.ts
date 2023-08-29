import { depthFirstSearchOnBinarySearchTree } from "./DepthFirstSearchOnBinarySearchTree";
import { tree } from "./constants";

test("DFS on BST", function () {
  expect(depthFirstSearchOnBinarySearchTree(tree, 45)).toEqual(true);
  expect(depthFirstSearchOnBinarySearchTree(tree, 7)).toEqual(true);
  expect(depthFirstSearchOnBinarySearchTree(tree, 69)).toEqual(false);
});
