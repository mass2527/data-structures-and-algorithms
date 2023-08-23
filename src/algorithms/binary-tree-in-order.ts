import { BinaryNode } from "./types";

function traverse(tree: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (tree === null) {
    return path;
  }

  // recurse
  traverse(tree.left, path);
  path.push(tree.value);
  traverse(tree.right, path);

  //   post

  return path;
}

export function binaryTreeInOrder(tree: BinaryNode<number>) {
  return traverse(tree, []);
}
