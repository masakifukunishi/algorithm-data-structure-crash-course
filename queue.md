# Queue

## What is Queue?

A queue is a data structure that follows the First-In-First-Out (FIFO) principle. It has two main operations.

- Enqueue

  This operation adds an element to the end of the queue.

- Dequeue
  This operation removes the first element from the queue.

## What is difference between Queue and Array. Pros and Cons

### Queue

#### Pros

- Dynamic size

#### Cons

- Random access is not supported

### Array

#### Pros

- Random access is supported

#### Cons

- Fixed size
- Inefficient insertions
  Unlike Queue, Array has to shift all the elements when inserting an element at the beginning of the array.

## Come you can come when to use Queue? (Real world example is ok!)

## Analysis

What is the time complexity of following operations for Queue? Why?
Since they are multiple types of queue, consider a type using **linked list**.

### Basics

- enqueue (add an element to the Queue)
- dequeue (remove and return an element from the Queue)
- peek (return an element from the Queue)
- size (get the size of the Queue)
- merge two Queue

### Comparison

What if we try to implement Queue with Array instead of Linked List?
What would be the difference?

## Exercise

### Exercise 01

Let's try to implement your own Queue with using Linked-List!

```ts
class MyQueue {
  constructor() {}

  enqueue(value: number) {}

  dequeue(value: number): number {}

  peek(): number {}

  size(): number {}
}
```

```ts
class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
```

### Exercise 02

- Let's try to solve some leet code questions
- https://leetcode.com/problems/number-of-recent-calls/
<!-- - https://leetcode.com/problems/reveal-cards-in-increasing-order/ ?? -->
