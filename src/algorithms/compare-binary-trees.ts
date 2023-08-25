import { BinaryNode } from "./types";

// null null
// null  O
//  O   null
//  O    O

export function compareBinaryTrees(
  treeA: BinaryNode<number> | null,
  treeB: BinaryNode<number> | null
): boolean {
  // structural check
  if (treeA === null && treeB === null) {
    return true;
  }

  // structural check
  if (treeA === null || treeB === null) {
    return false;
  }

  // value check
  if (treeA.value !== treeB.value) {
    return false;
  }

  // treeA.value === treeB.value
  return (
    compareBinaryTrees(treeA.left, treeB.left) &&
    compareBinaryTrees(treeA.right, treeB.right)
  );
}
