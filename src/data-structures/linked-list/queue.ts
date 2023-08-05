import {
  DoublyLinkedListNode,
  LinkedList,
  SinglyLinkedListNode,
} from "./linked-list.types";

interface Queue<T> {
  get length(): number;
  enqueue(value: T): void;
  dequeue(): T | null;
  peek(): T | null;
}

export class QueueMaker<T> implements Queue<T> {
  constructor(
    private readonly linkedList: LinkedList<
      T,
      SinglyLinkedListNode<T> | DoublyLinkedListNode<T>
    >
  ) {
    this.linkedList = linkedList;
  }

  get length() {
    return this.linkedList.length;
  }

  enqueue(value: T) {
    this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.removeAt(0);
  }

  peek() {
    return this.linkedList.get(0);
  }
}
