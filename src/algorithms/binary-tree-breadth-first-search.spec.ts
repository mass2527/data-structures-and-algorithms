import { binaryTreeBreadthFirstSearch } from "./binary-tree-breadth-first-search";
import { tree } from "./constants";

test("bt bfs", function () {
  expect(binaryTreeBreadthFirstSearch(tree, 45)).toEqual(true);
  expect(binaryTreeBreadthFirstSearch(tree, 7)).toEqual(true);
  expect(binaryTreeBreadthFirstSearch(tree, 69)).toEqual(false);
});
