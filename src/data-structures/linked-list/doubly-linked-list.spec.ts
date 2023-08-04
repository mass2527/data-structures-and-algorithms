import {
  DoublyLinkedListMaker,
  DoublyLinkedListNodeMaker,
} from "./doubly-linked-list";

test("initial length: 0", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  expect(doublyLinkedList.length).toBe(0);
});

test("insertAt - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  doublyLinkedList.insertAt(firstNode, 0);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.length).toBe(1);
});

test("insertAt - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.insertAt(firstNode, 0);
  doublyLinkedList.insertAt(secondNode, 0);
  expect(doublyLinkedList.head).toBe(secondNode);
  expect(doublyLinkedList.head?.next).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.tail?.previous).toBe(secondNode);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(2);
});

test("insertAt - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  const thirdNode = new DoublyLinkedListNodeMaker(3);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  doublyLinkedList.insertAt(thirdNode, 0);
  expect(doublyLinkedList.head).toBe(thirdNode);
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.tail?.previous).toBe(firstNode);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(3);
});

test("insertAt - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  const thirdNode = new DoublyLinkedListNodeMaker(3);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  doublyLinkedList.insertAt(thirdNode, 1);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(thirdNode);
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.tail?.previous).toBe(thirdNode);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(3);
});

test("insertAt - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  const thirdNode = new DoublyLinkedListNodeMaker(3);
  const fourthNode = new DoublyLinkedListNodeMaker(4);

  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  doublyLinkedList.append(thirdNode);
  doublyLinkedList.insertAt(fourthNode, 1);
  expect(doublyLinkedList.tail).toBe(thirdNode);
  expect(doublyLinkedList.tail?.previous).toBe(secondNode);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(fourthNode);
  expect(doublyLinkedList.length).toBe(4);
});

test("remove - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);

  expect(doublyLinkedList.remove(firstNode)).toBeNull();
  expect(doublyLinkedList.length).toBe(0);

  doublyLinkedList.append(firstNode);
  expect(doublyLinkedList.remove(firstNode)).toBe(firstNode);
  expect(doublyLinkedList.length).toBe(0);
});

test("remove - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  expect(doublyLinkedList.remove(firstNode)).toBe(firstNode);
  expect(doublyLinkedList.head).toBe(secondNode);
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("remove - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  expect(doublyLinkedList.remove(secondNode)).toBe(secondNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("remove - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  const thirdNode = new DoublyLinkedListNodeMaker(3);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  doublyLinkedList.append(thirdNode);
  expect(doublyLinkedList.remove(secondNode)).toBe(secondNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(doublyLinkedList.tail);
  expect(doublyLinkedList.tail).toBe(thirdNode);
  expect(doublyLinkedList.tail?.previous).toBe(doublyLinkedList.head);
  expect(doublyLinkedList.tail?.next).toBe(null);
  expect(doublyLinkedList.length).toBe(2);
});

test("removeAt - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  expect(doublyLinkedList.removeAt(0)).toBeNull();
  expect(doublyLinkedList.length).toBe(0);

  const firstNode = new DoublyLinkedListNodeMaker(1);
  doublyLinkedList.append(firstNode);
  expect(doublyLinkedList.removeAt(0)).toBe(firstNode);
  expect(doublyLinkedList.length).toBe(0);
});

test("removeAt - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  expect(doublyLinkedList.removeAt(0)).toBe(firstNode);
  expect(doublyLinkedList.head).toBe(secondNode);
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("removeAt - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  expect(doublyLinkedList.removeAt(1)).toBe(secondNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("removeAt - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  const thirdNode = new DoublyLinkedListNodeMaker(3);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  doublyLinkedList.append(thirdNode);
  expect(doublyLinkedList.removeAt(1)).toBe(secondNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(doublyLinkedList.tail);
  expect(doublyLinkedList.tail).toBe(thirdNode);
  expect(doublyLinkedList.tail?.previous).toBe(doublyLinkedList.head);
  expect(doublyLinkedList.tail?.next).toBe(null);
  expect(doublyLinkedList.length).toBe(2);
});

test("append - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  doublyLinkedList.append(firstNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.tail?.previous).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("append - non-initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.append(firstNode);
  doublyLinkedList.append(secondNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.next).toBe(secondNode);
  expect(doublyLinkedList.tail).toBe(secondNode);
  expect(doublyLinkedList.tail?.previous).toBe(firstNode);
  expect(doublyLinkedList.length).toBe(2);
});

test("prepend - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  doublyLinkedList.prepend(firstNode);
  expect(doublyLinkedList.head).toBe(firstNode);
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.tail?.previous).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("prepend - non-initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  const firstNode = new DoublyLinkedListNodeMaker(1);
  const secondNode = new DoublyLinkedListNodeMaker(2);
  doublyLinkedList.prepend(firstNode);
  doublyLinkedList.prepend(secondNode);
  expect(doublyLinkedList.head).toBe(secondNode);
  expect(doublyLinkedList.head?.next).toBe(firstNode);
  expect(doublyLinkedList.tail).toBe(firstNode);
  expect(doublyLinkedList.tail?.previous).toBe(secondNode);
  expect(doublyLinkedList.length).toBe(2);
});

test("get", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();
  expect(doublyLinkedList.get(0)).toBeNull();

  const firstNode = new DoublyLinkedListNodeMaker(1);
  doublyLinkedList.append(firstNode);
  expect(doublyLinkedList.get(0)).toBe(firstNode);
});
