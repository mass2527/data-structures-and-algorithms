import { invariant } from "../../utils";
import { LinkedList, SinglyLinkedListNode } from "./linked-list.types";

class SinglyLinkedListNodeMaker<T> implements SinglyLinkedListNode<T> {
  next: SinglyLinkedListNode<T> | null = null;

  constructor(public value: T) {
    this.value = value;
  }
}

export class SinglyLinkedListMaker<T>
  implements LinkedList<T, SinglyLinkedListNode<T>>
{
  private _head: SinglyLinkedListNode<T> | null = null;
  private _tail: SinglyLinkedListNode<T> | null = null;
  private _length = 0;

  get head() {
    return this._head;
  }
  private set head(node: SinglyLinkedListNode<T> | null) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }
  private set tail(node: SinglyLinkedListNode<T> | null) {
    this._tail = node;
  }

  get length() {
    return this._length;
  }
  private set length(length: number) {
    this._length = length;
  }

  insertAt(value: T, index: number) {
    if (
      (this.length === 0 && index !== 0) ||
      (this.length > 0 && index > this.length)
    ) {
      return;
    }

    const node = new SinglyLinkedListNodeMaker(value);
    const foundNode = this.findByIndex(index);

    if (!foundNode && index === 0) {
      this.head = node;
      this.tail = node;
    } else if (
      foundNode?.currentNode === this.head &&
      foundNode?.currentNode === this.tail
    ) {
      const head = this.head;
      this.head = node;
      this.head.next = head;
    } else if (foundNode?.currentNode === this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      const prevNode = this.findByIndex(index - 1);
      invariant(prevNode);
      invariant(foundNode);

      prevNode.currentNode.next = node;
      node.next = foundNode.currentNode;
    }

    this.length++;
  }

  remove(value: T) {
    const foundNode = this.findBy(
      ({ currentNode }) => currentNode?.value === value
    );
    return foundNode ? this.removeAt(foundNode.currentIndex) : null;
  }

  removeAt(index: number) {
    const foundNode = this.findByIndex(index);
    if (!foundNode) {
      return null;
    }

    if (
      foundNode.currentNode === this.head &&
      foundNode.currentNode === this.tail
    ) {
      this.head = null;
      this.tail = null;
    } else if (foundNode.currentNode === this.head) {
      const head = this.head;
      this.head = this.head.next;
      head.next = null;
    } else if (foundNode.currentNode === this.tail) {
      const foundNode = this.findByIndex(this.length - 2);
      invariant(foundNode);
      foundNode.currentNode.next = null;
      this.tail = foundNode.currentNode;
    } else {
      const prevNode = this.findByIndex(index - 1);
      invariant(prevNode);
      const targetNode = this.findByIndex(index);
      invariant(targetNode);
      prevNode.currentNode.next = targetNode.currentNode.next;
      targetNode.currentNode.next = null;
    }

    this.length--;

    return foundNode.currentNode.value;
  }

  append(value: T) {
    const node = new SinglyLinkedListNodeMaker(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      invariant(this.tail);
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value: T) {
    const node = new SinglyLinkedListNodeMaker(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  get(index: number) {
    return this.findByIndex(index)?.currentNode.value ?? null;
  }

  private findBy(
    predicate: ({
      currentNode,
      currentIndex,
    }: {
      currentNode: SinglyLinkedListNode<T> | null;
      currentIndex: number;
    }) => boolean
  ) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (predicate({ currentIndex, currentNode })) {
        return { currentNode, currentIndex };
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }

    return null;
  }

  private findByIndex(index: number) {
    return this.findBy(({ currentIndex }) => currentIndex === index);
  }
}
