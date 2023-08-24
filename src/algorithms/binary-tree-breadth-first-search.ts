import { QueueMaker } from "../data-structures/linked-list/queue";
import { SinglyLinkedListMaker } from "../data-structures/linked-list/singly-linked-list";
import { BinaryNode } from "./types";

// O(N^2)
// export function binaryTreeBreadthFirstSearch(
//   tree: BinaryNode<number>,
//   target: number
// ): boolean {
//   const queue: (BinaryNode<number> | null)[] = [tree];

//   while (queue.length) {
//     const currentNode = queue.shift();
//     if (!currentNode) {
//       continue;
//     }

//     if (currentNode.value === target) {
//       return true;
//     }

//     queue.push(currentNode.left);
//     queue.push(currentNode.right);
//   }

//   return false;
// }

// O(N)
export function binaryTreeBreadthFirstSearch(
  tree: BinaryNode<number>,
  target: number
): boolean {
  const queue = new QueueMaker(
    new SinglyLinkedListMaker<BinaryNode<number> | null>()
  );
  queue.enqueue(tree);

  while (queue.length) {
    const currentNode = queue.dequeue();
    if (!currentNode) {
      continue;
    }

    if (currentNode.value === target) {
      return true;
    }

    queue.enqueue(currentNode.left);
    queue.enqueue(currentNode.right);
  }

  return false;
}
