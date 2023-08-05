import { DoublyLinkedListMaker } from "./doubly-linked-list";
import { QueueMaker } from "./queue";
import { SinglyLinkedListMaker } from "./singly-linked-list";

test("queue - with SinglyLinkedList", () => {
  const queue = new QueueMaker(new SinglyLinkedListMaker<number>());

  // check initial values
  expect(queue.length).toBe(0);
  expect(queue.peek()).toBeNull();

  // enqueue
  queue.enqueue(1);
  expect(queue.peek()).toBe(1);

  queue.enqueue(2);
  expect(queue.peek()).toBe(1);

  // dequeue
  expect(queue.dequeue()).toBe(1);
  expect(queue.peek()).toBe(2);

  expect(queue.dequeue()).toBe(2);
  expect(queue.peek()).toBeNull();

  expect(queue.dequeue()).toBeNull();
});

test("queue - with DoublyLinkedList", () => {
  const queue = new QueueMaker(new DoublyLinkedListMaker<number>());

  // check initial values
  expect(queue.length).toBe(0);
  expect(queue.peek()).toBeNull();

  // enqueue
  queue.enqueue(1);
  expect(queue.peek()).toBe(1);

  queue.enqueue(2);
  expect(queue.peek()).toBe(1);

  // dequeue
  expect(queue.dequeue()).toBe(1);
  expect(queue.peek()).toBe(2);

  expect(queue.dequeue()).toBe(2);
  expect(queue.peek()).toBeNull();

  expect(queue.dequeue()).toBeNull();
});
