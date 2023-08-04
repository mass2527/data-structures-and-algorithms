import {
  DoublyLinkedListMaker,
  DoublyLinkedListNodeMaker,
} from "./doubly-linked-list";
import { QueueMaker } from "./queue";
import {
  SinglyLinkedListMaker,
  SinglyLinkedListNodeMaker,
} from "./singly-linked-list";

test("queue - with SinglyLinkedList", () => {
  const queue = new QueueMaker(new SinglyLinkedListMaker<number>());

  // check initial values
  expect(queue.length).toBe(0);
  expect(queue.peek()).toBeNull();

  // enqueue
  const firstNode = new SinglyLinkedListNodeMaker(1);
  queue.enqueue(firstNode);
  expect(queue.peek()).toBe(firstNode);

  const secondNode = new SinglyLinkedListNodeMaker(2);
  queue.enqueue(secondNode);
  expect(queue.peek()).toBe(firstNode);
  expect(queue.peek()?.next).toBe(secondNode);

  // dequeue
  expect(queue.dequeue()).toBe(firstNode);
  expect(queue.peek()).toBe(secondNode);

  expect(queue.dequeue()).toBe(secondNode);
  expect(queue.peek()).toBeNull();

  expect(queue.dequeue()).toBeNull();
});

test("queue - with DoublyLinkedList", () => {
  const queue = new QueueMaker(new DoublyLinkedListMaker<number>());

  // check initial values
  expect(queue.length).toBe(0);
  expect(queue.peek()).toBeNull();

  // enqueue
  const firstNode = new DoublyLinkedListNodeMaker(1);
  queue.enqueue(firstNode);
  expect(queue.peek()).toBe(firstNode);

  const secondNode = new DoublyLinkedListNodeMaker(2);
  queue.enqueue(secondNode);
  expect(queue.peek()).toBe(firstNode);
  expect(queue.peek()?.next).toBe(secondNode);

  // dequeue
  expect(queue.dequeue()).toBe(firstNode);
  expect(queue.peek()).toBe(secondNode);

  expect(queue.dequeue()).toBe(secondNode);
  expect(queue.peek()).toBeNull();

  expect(queue.dequeue()).toBeNull();
});
