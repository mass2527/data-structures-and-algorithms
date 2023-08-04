import { LinkedList } from "./linked-list.types";

interface Queue<T> {
  get length(): number;
  enqueue(node: T): void;
  dequeue(): T | null;
  peek(): T | null;
}

export class QueueMaker<T> implements Queue<T> {
  constructor(private linkedList: LinkedList<T>) {
    this.linkedList = linkedList;
  }

  get length() {
    return this.linkedList.length;
  }

  enqueue(node: T) {
    this.linkedList.append(node);
  }

  dequeue() {
    return this.linkedList.removeAt(0);
  }

  peek() {
    return this.linkedList.head;
  }
}
