import { DoublyLinkedListMaker } from "./doubly-linked-list";

test("initial length: 0", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  expect(doublyLinkedList.length).toBe(0);
});

test("insertAt - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.insertAt(1, 0);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.length).toBe(1);
});

test("insertAt - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.insertAt(1, 0);
  doublyLinkedList.insertAt(2, 0);
  expect(doublyLinkedList.head?.value).toBe(2);
  expect(doublyLinkedList.head?.next?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.tail?.previous?.value).toBe(2);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(2);
});

test("insertAt - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.insertAt(3, 0);
  expect(doublyLinkedList.head?.value).toBe(3);
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.head?.next?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.tail?.previous?.value).toBe(1);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(3);
});

test("insertAt - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.insertAt(3, 1);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next?.value).toBe(3);
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.tail?.previous?.value).toBe(3);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(3);
});

test("insertAt - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.insertAt(4, 1);
  expect(doublyLinkedList.tail?.value).toBe(3);
  expect(doublyLinkedList.tail?.previous?.value).toBe(2);
  expect(doublyLinkedList.tail?.next).toBeNull();
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next?.value).toBe(4);
  expect(doublyLinkedList.length).toBe(4);
});

test("remove - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  expect(doublyLinkedList.remove(1)).toBeNull();
  expect(doublyLinkedList.length).toBe(0);

  doublyLinkedList.append(1);
  expect(doublyLinkedList.remove(1)).toBe(1);
  expect(doublyLinkedList.length).toBe(0);
});

test("remove - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  expect(doublyLinkedList.remove(1)).toBe(1);
  expect(doublyLinkedList.head?.value).toBe(2);
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("remove - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  expect(doublyLinkedList.remove(2)).toBe(2);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("remove - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  expect(doublyLinkedList.remove(2)).toBe(2);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(doublyLinkedList.tail);
  expect(doublyLinkedList.tail?.value).toBe(3);
  expect(doublyLinkedList.tail?.previous).toBe(doublyLinkedList.head);
  expect(doublyLinkedList.tail?.next).toBe(null);
  expect(doublyLinkedList.length).toBe(2);
});

test("removeAt - target node is either head or tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  expect(doublyLinkedList.removeAt(0)).toBeNull();
  expect(doublyLinkedList.length).toBe(0);

  doublyLinkedList.append(1);
  expect(doublyLinkedList.removeAt(0)).toBe(1);
  expect(doublyLinkedList.length).toBe(0);
});

test("removeAt - target node is head", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  expect(doublyLinkedList.removeAt(0)).toBe(1);
  expect(doublyLinkedList.head?.value).toBe(2);
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("removeAt - target node is tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  expect(doublyLinkedList.removeAt(1)).toBe(2);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("removeAt - target node is neither head nor tail", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  expect(doublyLinkedList.removeAt(1)).toBe(2);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.previous).toBeNull();
  expect(doublyLinkedList.head?.next).toBe(doublyLinkedList.tail);
  expect(doublyLinkedList.tail?.value).toBe(3);
  expect(doublyLinkedList.tail?.previous).toBe(doublyLinkedList.head);
  expect(doublyLinkedList.tail?.next).toBe(null);
  expect(doublyLinkedList.length).toBe(2);
});

test("append - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.tail?.previous).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("append - non-initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.next?.value).toBe(2);
  expect(doublyLinkedList.tail?.value).toBe(2);
  expect(doublyLinkedList.tail?.previous?.value).toBe(1);
  expect(doublyLinkedList.length).toBe(2);
});

test("prepend - initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.prepend(1);
  expect(doublyLinkedList.head?.value).toBe(1);
  expect(doublyLinkedList.head?.next).toBeNull();
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.tail?.previous).toBeNull();
  expect(doublyLinkedList.length).toBe(1);
});

test("prepend - non-initial", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  doublyLinkedList.prepend(1);
  doublyLinkedList.prepend(2);
  expect(doublyLinkedList.head?.value).toBe(2);
  expect(doublyLinkedList.head?.next?.value).toBe(1);
  expect(doublyLinkedList.tail?.value).toBe(1);
  expect(doublyLinkedList.tail?.previous?.value).toBe(2);
  expect(doublyLinkedList.length).toBe(2);
});

test("get", () => {
  const doublyLinkedList = new DoublyLinkedListMaker();

  expect(doublyLinkedList.get(0)).toBeNull();

  doublyLinkedList.append(1);
  expect(doublyLinkedList.get(0)).toBe(1);
});
