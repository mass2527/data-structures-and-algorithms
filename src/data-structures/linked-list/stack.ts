import {
  DoublyLinkedListNode,
  LinkedList,
  SinglyLinkedListNode,
} from "./linked-list.types";

interface Stack<T> {
  push(value: T): void;
  pop(): T | null;
  peek(): T | null;
}

export class StackMaker<T> implements Stack<T> {
  constructor(
    private readonly linkedList: LinkedList<
      T,
      SinglyLinkedListNode<T> | DoublyLinkedListNode<T>
    >
  ) {
    this.linkedList = linkedList;
  }

  push(value: T) {
    this.linkedList.prepend(value);
  }

  pop(): T | null {
    return this.linkedList.removeAt(0);
  }

  peek(): T | null {
    return this.linkedList.head?.value ?? null;
  }
}
