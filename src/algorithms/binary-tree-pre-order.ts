import { BinaryNode } from "./types";

function traverse(tree: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (tree === null) {
    return path;
  }

  // pre
  path.push(tree.value);

  // recurse
  traverse(tree.left, path);
  traverse(tree.right, path);

  return path;
}

export function binaryTreePreOrder(tree: BinaryNode<number>) {
  return traverse(tree, []);
}
