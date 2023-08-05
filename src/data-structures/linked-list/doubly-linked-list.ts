import { invariant } from "../../utils";
import { DoublyLinkedListNode, LinkedList } from "./linked-list.types";

class DoublyLinkedListNodeMaker<T> implements DoublyLinkedListNode<T> {
  previous: DoublyLinkedListNode<T> | null = null;
  next: DoublyLinkedListNode<T> | null = null;

  constructor(public value: T) {
    this.value = value;
  }
}

export class DoublyLinkedListMaker<T>
  implements LinkedList<T, DoublyLinkedListNode<T>>
{
  private _head: DoublyLinkedListNode<T> | null = null;
  private _tail: DoublyLinkedListNode<T> | null = null;
  private _length = 0;

  get head() {
    return this._head;
  }
  private set head(node: DoublyLinkedListNode<T> | null) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }
  private set tail(node: DoublyLinkedListNode<T> | null) {
    this._tail = node;
  }

  get length() {
    return this._length;
  }
  private set length(length: number) {
    this._length = length;
  }

  insertAt(value: T, index: number) {
    const node = new DoublyLinkedListNodeMaker(value);
    const target = this.findByIndex(index);
    if (!target) {
      if (this.length === 0 && index === 0) {
        this.head = node;
        this.tail = node;
        this.length++;
      }

      return;
    }

    if (
      (target?.node === this.head && target.node === this.tail) ||
      target?.node === this.head
    ) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    } else if (target?.node === this.tail) {
      node.next = this.tail;
      node.previous = this.tail.previous;
      invariant(this.tail.previous);
      this.tail.previous.next = node;
      this.tail.previous = node;
    } else {
      const previous = target.node.previous;
      invariant(previous);
      previous.next = node;
      target.node.previous = node;
      node.next = target.node;
      node.previous = previous;
    }

    this.length++;
  }

  remove(value: T) {
    return this._removeBy(({ currentNode }) => currentNode?.value === value);
  }

  removeAt(index: number) {
    return this._removeByIndex(index);
  }

  append(value: T) {
    const node = new DoublyLinkedListNodeMaker(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      invariant(this.tail);
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: T) {
    const node = new DoublyLinkedListNodeMaker(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      invariant(this.head);
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  get(index: number) {
    return this.findByIndex(index)?.node.value ?? null;
  }

  private findByIndex(index: number) {
    return this.findBy(({ currentIndex }) => currentIndex === index);
  }

  private findBy(
    predicate: ({
      currentIndex,
      currentNode,
    }: {
      currentIndex: number;
      currentNode: DoublyLinkedListNode<T> | null;
    }) => boolean
  ) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (predicate({ currentIndex, currentNode })) {
        return {
          index: currentIndex,
          node: currentNode,
        };
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }
  }

  private _removeBy(predicate: Parameters<typeof this.findBy>[0]) {
    const target = this.findBy(predicate);
    if (!target) {
      return null;
    }

    if (target.node === this.head && target.node === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (target.node === this.head) {
      const next = this.head.next;
      invariant(next);
      this.head.next = null;
      this.head = next;
      this.head.previous = null;
    } else if (target.node === this.tail) {
      const previous = this.tail.previous;
      invariant(previous);
      this.tail.previous = null;
      this.tail = previous;
      this.tail.next = null;
    } else {
      const previous = target.node.previous;
      invariant(previous);
      const next = target.node.next;
      invariant(next);
      target.node.previous = null;
      target.node.next = null;
      previous.next = next;
      next.previous = previous;
    }

    this.length--;

    return target.node.value;
  }

  private _removeByIndex(index: number) {
    return this._removeBy(({ currentIndex }) => currentIndex === index);
  }
}
