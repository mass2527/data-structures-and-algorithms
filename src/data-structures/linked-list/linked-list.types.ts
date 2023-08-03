export interface LinkedList<T> {
  get head(): T | null;
  get tail(): T | null;
  get length(): number;
  insertAt(node: T, index: number): void;
  remove(node: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(node: T): void;
  prepend(node: T): void;
  get(index: number): T | undefined;
}
