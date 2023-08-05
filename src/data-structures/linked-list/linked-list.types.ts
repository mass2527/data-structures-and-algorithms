interface Node<T> {
  value: T;
}

export interface SinglyLinkedListNode<T> extends Node<T> {
  next: SinglyLinkedListNode<T> | null;
}

export interface DoublyLinkedListNode<T> extends Node<T> {
  previous: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;
}
export interface LinkedList<
  TValue,
  TNode extends SinglyLinkedListNode<TValue> | DoublyLinkedListNode<TValue>
> {
  get head(): TNode | null;
  get tail(): TNode | null;
  get length(): number;
  insertAt(value: TValue, index: number): void;
  remove(value: TValue): TValue | null;
  removeAt(index: number): TValue | null;
  append(value: TValue): void;
  prepend(value: TValue): void;
  get(index: number): TValue | null;
}
