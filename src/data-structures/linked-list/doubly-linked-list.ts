import { invariant } from "../../utils";
import { LinkedList } from "./linked-list.types";

interface Node<T> {
  value: T;
  previous: Node<T> | null;
  next: Node<T> | null;
}

export class DoublyLinkedListNodeMaker<T> implements Node<T> {
  previous = null;
  next = null;

  constructor(public value: T) {
    this.value = value;
  }
}

export class DoublyLinkedListMaker<T> implements LinkedList<Node<T>> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _length = 0;

  get head() {
    return this._head;
  }
  private set head(node: Node<T> | null) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }
  private set tail(node: Node<T> | null) {
    this._tail = node;
  }

  get length() {
    return this._length;
  }
  private set length(length: number) {
    this._length = length;
  }

  insertAt(node: Node<T>, index: number) {
    const target = this.find(index);
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

  remove(node: Node<T>) {
    return this._remove(node);
  }

  removeAt(index: number) {
    return this._remove(index);
  }

  append(node: Node<T>) {
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

  prepend(node: Node<T>) {
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
    return this.find(index)?.node ?? null;
  }

  private find(indexOrNode: number | Node<T>) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (
        typeof indexOrNode === "number"
          ? currentIndex === indexOrNode
          : currentNode === indexOrNode
      ) {
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

  private _remove(indexOrNode: number | Node<T>) {
    const target = this.find(indexOrNode);
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

    return target.node;
  }
}
