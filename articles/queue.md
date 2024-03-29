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

- Efficient deletion

    Unlike Array, Queue does not have to shift all the elements when deliting an element at the beginning of the queue.

#### Cons

- Random access is not supported

### Array

#### Pros

- Random access is supported

#### Cons

- Fixed size
  
- Inefficient deletion

    Unlike Queue, Array has to shift all the elements when deliting an element at the beginning of the array.

## Can you come up with when to use Queue?

- Printer

    In a printing system, a queue is used to manage multiple print jobs, ensuring they are printed in the order they were requested.

- Asynchronous processing

    In applications where tasks can take varying amounts of time to complete, using a queue can decouple task submission from task execution.

- Stackable Pencil

    In a Stackable Pencil, the first piece inserted into the pencil is the first one to be removed.

## Analysis

What is the time complexity of following operations for Queue? Why?
Since they are multiple types of queue, consider a type using **linked list**.

### Basics

#### enqueue (add an element to the Queue)

- O(1)

    Adding an element to the last of the queue requires updating only the last pointer, which takes constant time.

#### dequeue (remove and return an element from the Queue)

- O(1)

    Removing an element from the first of the queue requires updating only the first pointer, which takes constant time.

#### peek (return an element from the Queue)

- O(1)

    Returning an element from the first of the queue is just accessing the first pointer, which takes constant time.

#### size (get the size of the Queue)

- O(1)

    Getting the size of the queue is just accessing the size property, which takes constant time.

#### merge two Queue

- O(1)

    Merging two queues is just updating the last pointer of the first queue to the first pointer of the second queue, which takes constant time.

### Comparison

What if we try to implement Queue with Array instead of Linked List?
What would be the difference?

#### Memory Usage

Linked lists require additional memory to store pointers for linking elements, while arrays can store elements in a contiguous block of memory.

#### Dynamic vs. Static Size

Linked lists can grow dynamically without requiring resizing operations, while arrays have a fixed size and require resizing operations when the capacity is exceeded.

#### Dequeue

Linked lists are more efficient than arrays when deleting an element at the beginning of the queue, since they do not have to shift all the elements.

## Exercise

### Exercise 01

Let's try to implement your own Queue with using Linked-List!

```ts
class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  private head: ListNode | null;
  private tail: ListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value: number) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (!this.tail) throw new Error("Unexpected: The tail is null.");
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): number | null {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const holdingPointer = this.head;
    this.head = this.head.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): number | null {
    if (!this.head) return null;
    return this.head.val;
  }

  size(): number {
    return this.length;
  }
}

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // 1
console.log(myQueue.peek()); // 2
console.log(myQueue.size()); // 2
console.log(myQueue);
```

### Exercise 02

Let's try to solve some leet code questions

- https://leetcode.com/problems/number-of-recent-calls/

```ts
class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyQueue {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value: number) {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (!this.tail) throw new Error("Unexpected: The tail is null.");
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): number | null {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const holdingPointer = this.head;
    this.head = this.head.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): number | null {
    if (!this.head) return null;
    return this.head.val;
  }

  size(): number {
    return this.length;
  }
}

class RecentCounter {
  private requests: MyQueue;

  constructor() {
    this.requests = new MyQueue();
  }

  ping(t: number): number {
    this.requests.enqueue(t);
    while (this.requests.peek()) {
      const head = this.requests.peek()
      if (!head || head >= t - 3000) {
        break
      }
      this.requests.dequeue();
    }
    return this.requests.size();
  }
}
```
