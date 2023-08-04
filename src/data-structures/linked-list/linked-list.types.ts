export interface LinkedList<T> {
  get head(): T | null;
  get tail(): T | null;
  get length(): number;
  insertAt(node: T, index: number): void;
  remove(node: T): T | null;
  removeAt(index: number): T | null;
  append(node: T): void;
  prepend(node: T): void;
  get(index: number): T | null;
}
