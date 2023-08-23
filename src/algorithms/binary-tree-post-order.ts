import { BinaryNode } from "./types";

function traverse(tree: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (tree === null) {
    return path;
  }

  // recurse
  traverse(tree.left, path);
  traverse(tree.right, path);

  //   post
  path.push(tree.value);
  return path;
}

export function binaryTreePostOrder(tree: BinaryNode<number>) {
  return traverse(tree, []);
}
