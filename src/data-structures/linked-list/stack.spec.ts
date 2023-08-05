import { DoublyLinkedListMaker } from "./doubly-linked-list";
import { SinglyLinkedListMaker } from "./singly-linked-list";
import { StackMaker } from "./stack";

test("stack - with SinglyLinkedList", () => {
  const stack = new StackMaker<number>(new SinglyLinkedListMaker());

  expect(stack.peek()).toBeNull();
  expect(stack.pop()).toBeNull();

  stack.push(1);
  expect(stack.peek()).toBe(1);
  expect(stack.pop()).toBe(1);
  expect(stack.peek()).toBeNull();

  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
  expect(stack.pop()).toBe(2);
});

test("stack - with DoublyLinkedList", () => {
  const stack = new StackMaker<number>(new DoublyLinkedListMaker());

  expect(stack.peek()).toBeNull();
  expect(stack.pop()).toBeNull();

  stack.push(1);
  expect(stack.peek()).toBe(1);
  expect(stack.pop()).toBe(1);
  expect(stack.peek()).toBeNull();

  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
  expect(stack.pop()).toBe(2);
});
