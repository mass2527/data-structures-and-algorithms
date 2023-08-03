import { SinglyLinkedList, SinglyLinkedListNode } from "./singly-linked-list";

test("get length", () => {
  const singlyLinkedList = new SinglyLinkedList();
  expect("length" in singlyLinkedList).toBe(true);
  expect(singlyLinkedList.length).toBe(0);

  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.append(firstNode);
  expect(singlyLinkedList.length).toBe(1);

  const secondNode = new SinglyLinkedListNode(1);
  singlyLinkedList.append(secondNode);
  expect(singlyLinkedList.length).toBe(2);
});

test("insertAt", () => {
  const singlyLinkedList = new SinglyLinkedList();

  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.insertAt(firstNode, 1);
  expect(singlyLinkedList.length).toBe(0);

  singlyLinkedList.insertAt(firstNode, 0);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(firstNode);

  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.insertAt(secondNode, 0);
  expect(singlyLinkedList.head).toBe(secondNode);
  expect(singlyLinkedList.tail).toBe(firstNode);

  const thirdNode = new SinglyLinkedListNode(3);
  singlyLinkedList.insertAt(thirdNode, 1);
  expect(singlyLinkedList.head).toBe(secondNode);
  expect(singlyLinkedList.head?.next).toBe(thirdNode);
  expect(singlyLinkedList.tail).toBe(firstNode);

  const fourthNode = new SinglyLinkedListNode(4);
  singlyLinkedList.insertAt(fourthNode, 1);
  expect(singlyLinkedList.head?.next).toBe(fourthNode);
});

test("remove", () => {
  const singlyLinkedList = new SinglyLinkedList();
  const firstNode = new SinglyLinkedListNode(1);
  expect(singlyLinkedList.remove(firstNode)).toBeUndefined();

  singlyLinkedList.append(firstNode);
  expect(singlyLinkedList.remove(firstNode)).toBe(firstNode);
  expect(singlyLinkedList.head).toBeNull();
  expect(singlyLinkedList.tail).toBeNull();

  singlyLinkedList.append(firstNode);
  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.append(secondNode);
  expect(singlyLinkedList.remove(secondNode)).toBe(secondNode);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(firstNode);
});

test("removeAt", () => {
  const singlyLinkedList = new SinglyLinkedList();
  expect(singlyLinkedList.removeAt(0)).toBeUndefined();

  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.append(firstNode);
  expect(singlyLinkedList.removeAt(0)).toBe(firstNode);
  expect(singlyLinkedList.head).toBeNull();
  expect(singlyLinkedList.tail).toBeNull();

  singlyLinkedList.append(firstNode);
  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.append(secondNode);
  expect(singlyLinkedList.removeAt(1)).toBe(secondNode);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(firstNode);

  singlyLinkedList.append(secondNode);
  const thirdNode = new SinglyLinkedListNode(3);
  singlyLinkedList.append(thirdNode);
  singlyLinkedList.removeAt(1);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.head?.next).toBe(thirdNode);
  expect(singlyLinkedList.tail).toBe(thirdNode);
});

test("append", () => {
  const singlyLinkedList = new SinglyLinkedList();

  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.append(firstNode);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(firstNode);
  expect(singlyLinkedList.length).toBe(1);

  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.append(secondNode);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(secondNode);
  expect(singlyLinkedList.length).toBe(2);
});

test("prepend", () => {
  const singlyLinkedList = new SinglyLinkedList();
  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.prepend(firstNode);
  expect(singlyLinkedList.head).toBe(firstNode);
  expect(singlyLinkedList.tail).toBe(firstNode);

  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.prepend(secondNode);
  expect(singlyLinkedList.head).toBe(secondNode);
  expect(singlyLinkedList.tail).toBe(firstNode);
});

test("get", () => {
  const singlyLinkedList = new SinglyLinkedList();

  const firstNode = new SinglyLinkedListNode(1);
  singlyLinkedList.append(firstNode);

  const secondNode = new SinglyLinkedListNode(2);
  singlyLinkedList.append(secondNode);

  expect(singlyLinkedList.get(0)).toBe(firstNode);
  expect(singlyLinkedList.get(1)).toBe(secondNode);
  expect(singlyLinkedList.get(2)).toBeUndefined();
});
