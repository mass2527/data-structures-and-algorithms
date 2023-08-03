import { invariant } from "../../utils";
import { LinkedList } from "./linked-list.types";

interface Node<T> {
  value: T;
  next: Node<T> | null;
}

export class SinglyLinkedListNode<T> implements Node<T> {
  next = null;

  constructor(public value: T) {
    this.value = value;
  }
}

export class SinglyLinkedList<T> implements LinkedList<Node<T>> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _length = 0;

  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
  get length() {
    return this._length;
  }

  insertAt(node: Node<T>, index: number) {
    if (
      (this.length === 0 && index !== 0) ||
      (this.length > 0 && index > this.length)
    ) {
      return;
    }

    const foundNode = this.find(index);

    if (!foundNode && index === 0) {
      this._head = node;
      this._tail = node;
    } else if (
      foundNode?.currentNode === this.head &&
      foundNode?.currentNode === this.tail
    ) {
      const head = this.head;
      this._head = node;
      this._head.next = head;
    } else if (foundNode?.currentNode === this.head) {
      node.next = this.head;
      this._head = node;
    } else {
      const prevNode = this.find(index - 1);
      invariant(prevNode);
      invariant(foundNode);

      prevNode.currentNode.next = node;
      node.next = foundNode.currentNode;
    }

    this._length++;
  }

  remove(node: Node<T>): Node<T> | undefined {
    const foundNode = this.find(node);
    return typeof foundNode === "undefined"
      ? undefined
      : this.removeAt(foundNode.currentIndex);
  }

  removeAt(index: number): Node<T> | undefined {
    const foundNode = this.find(index);
    if (!foundNode) {
      return undefined;
    }

    if (
      foundNode.currentNode === this.head &&
      foundNode.currentNode === this.tail
    ) {
      this._head = null;
      this._tail = null;
    } else if (foundNode.currentNode === this.head) {
      const head = this.head;
      this._head = this.head.next;
      head.next = null;
    } else if (foundNode.currentNode === this.tail) {
      const foundNode = this.find(this.length - 2);
      invariant(foundNode);
      foundNode.currentNode.next = null;
      this._tail = foundNode.currentNode;
    } else {
      const prevNode = this.find(index - 1);
      invariant(prevNode);
      const targetNode = this.find(index);
      invariant(targetNode);
      prevNode.currentNode.next = targetNode.currentNode.next;
      targetNode.currentNode.next = null;
    }

    this._length--;

    return foundNode.currentNode;
  }

  append(node: Node<T>) {
    if (this.length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      invariant(this._tail);
      this._tail.next = node;
      this._tail = node;
    }
    this._length++;
  }

  prepend(node: Node<T>) {
    if (this.length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this.head;
      this._head = node;
    }
    this._length++;
  }

  get(index: number): Node<T> | undefined {
    return this.find(index)?.currentNode;
  }

  private find(indexOrNode: number | Node<T>) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (
        indexOrNode === (this.isNode(indexOrNode) ? currentNode : currentIndex)
      ) {
        return { currentNode, currentIndex };
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }

    return undefined;
  }

  private isNode<T>(value: any): value is Node<T> {
    return typeof value === "object" && "value" in value && "next" in value;
  }
}