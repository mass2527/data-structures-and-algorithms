import { SinglyLinkedListMaker } from "./singly-linked-list";

test("get length", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  expect("length" in singlyLinkedList).toBe(true);
  expect(singlyLinkedList.length).toBe(0);

  singlyLinkedList.append(1);
  expect(singlyLinkedList.length).toBe(1);

  singlyLinkedList.append(2);
  expect(singlyLinkedList.length).toBe(2);
});

test("insertAt", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  singlyLinkedList.insertAt(1, 1);
  expect(singlyLinkedList.length).toBe(0);

  singlyLinkedList.insertAt(1, 0);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(1);

  singlyLinkedList.insertAt(2, 0);
  expect(singlyLinkedList.head?.value).toBe(2);
  expect(singlyLinkedList.tail?.value).toBe(1);

  singlyLinkedList.insertAt(3, 1);
  expect(singlyLinkedList.head?.value).toBe(2);
  expect(singlyLinkedList.head?.next?.value).toBe(3);
  expect(singlyLinkedList.tail?.value).toBe(1);

  singlyLinkedList.insertAt(4, 1);
  expect(singlyLinkedList.head?.next?.value).toBe(4);
});

test("remove", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  expect(singlyLinkedList.remove(1)).toBeNull();

  singlyLinkedList.append(1);
  expect(singlyLinkedList.remove(1)).toBe(1);
  expect(singlyLinkedList.head).toBeNull();
  expect(singlyLinkedList.tail).toBeNull();

  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  expect(singlyLinkedList.remove(2)).toBe(2);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(1);
});

test("removeAt", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  expect(singlyLinkedList.removeAt(0)).toBeNull();

  singlyLinkedList.append(1);
  expect(singlyLinkedList.removeAt(0)).toBe(1);
  expect(singlyLinkedList.head).toBeNull();
  expect(singlyLinkedList.tail).toBeNull();

  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  expect(singlyLinkedList.removeAt(1)).toBe(2);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(1);

  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.removeAt(1);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.head?.next?.value).toBe(3);
  expect(singlyLinkedList.tail?.value).toBe(3);
});

test("append", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  singlyLinkedList.append(1);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(1);
  expect(singlyLinkedList.length).toBe(1);

  singlyLinkedList.append(2);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(2);
  expect(singlyLinkedList.length).toBe(2);
});

test("prepend", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  singlyLinkedList.prepend(1);
  expect(singlyLinkedList.head?.value).toBe(1);
  expect(singlyLinkedList.tail?.value).toBe(1);

  singlyLinkedList.prepend(2);
  expect(singlyLinkedList.head?.value).toBe(2);
  expect(singlyLinkedList.tail?.value).toBe(1);
});

test("get", () => {
  const singlyLinkedList = new SinglyLinkedListMaker();

  singlyLinkedList.append(1);
  singlyLinkedList.append(2);

  expect(singlyLinkedList.get(0)).toBe(1);
  expect(singlyLinkedList.get(1)).toBe(2);
  expect(singlyLinkedList.get(2)).toBeNull();
});
