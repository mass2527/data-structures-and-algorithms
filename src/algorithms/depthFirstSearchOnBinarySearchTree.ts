import { BinaryNode } from "./types";

export function depthFirstSearchOnBinarySearchTree(
  tree: BinaryNode<number> | null,
  value: number
): boolean {
  if (tree === null) {
    return false;
  }

  if (tree.value === value) {
    return true;
  }

  if (tree.value < value) {
    return depthFirstSearchOnBinarySearchTree(tree.right, value);
  }
  return depthFirstSearchOnBinarySearchTree(tree.left, value);
}
