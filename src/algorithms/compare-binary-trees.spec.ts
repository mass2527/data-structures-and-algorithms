import { compareBinaryTrees } from "./compare-binary-trees";
import { tree, tree2 } from "./constants";

test("Compare Binary Trees", function () {
  expect(compareBinaryTrees(tree, tree)).toEqual(true);
  expect(compareBinaryTrees(tree, tree2)).toEqual(false);
});
