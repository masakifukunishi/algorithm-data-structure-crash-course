# Linked List

## What is linked list?

Linked list is a data structure that consists of a sequence of nodes[^1], where each node contains a data element and a reference to the next node in the sequence.

## What is liked list good at?

- Sorted data

  Linked lists can have sorted data unlike hash table, Because nodes points the next node.

- Dynamic Size

  Linked list can dynamically grow or shrink in size during program execution. Unlike arrays, which have a fixed size, linked lists can accommodate new elements or remove existing elements without requiring a reallocation of memory.

- Insertion and Deletion

  Linked list excel at efficient insertion and deletion operations, especially at the beginning or middle of the list. Unlike arrays, which may require shifting elements to accommodate changes, linked lists only need to update a few pointers.

- Efficient Iteration

  Singly-linked lists are efficient for forward iteration, allowing easy traversal from the beginning to the end. Doubly-linked lists can traverse in both directions, enabling forward and backward traversal.

- Merging and Splitting

  Linked lists can be merged or split easily by manipulating the pointers.

## When is good to use liked list?

- When you need to maintain sorted data

  If you need to maintain data in a sorted order, linked lists can be a suitable option. As the nodes in a linked list contain pointers to the next node.

- When you need dynamic size

  If the size of your data is not known in advance or if it frequently changes, a linked list can accommodate these changes efficiently.

- When you need efficient insertion and deletion

  If your application requires frequent insertion or deletion operations, especially at the beginning or middle of the data structure, linked lists provide efficient performance.

- When you need efficient iteration

  If your application primarily involves sequential access to the data, linked lists provide an efficient way to iterate through the elements.

- When merging or splitting data structures
  Linked lists a good choice when you need to combine multiple lists into one or divide a list into smaller segments.

## What is head and tail in linked list?

- Head

  Head is the first node in the list. It is the entry point from which you can access the entire linked list structure

- Tail

  Tail is the last node in the list. It is the node that has a reference to null or points to nothing, indicating the end of the list.

## Analysis

What is the time complexity of following operations

### access by index

- O(n)

### insert at index

- O(n)

### delete at index

- O(n)

Accessing, inserting, or deleting an element by index requires traversing the list from the head to the desired index, which takes linear time.

### joint two listed list

- O(1)
  Joining two linked lists requires updating the tail of the first list to point to the head of the second list, which takes constant time.

### add(delete) head

- O(1)
  Addind or deliting elements at the top of the linked list, just update few nodes, which takes constant time.

### add(delete) tail

- Adding O(1)

  Addind elements at the end of the linked list, just update few nodes using tail, which takes constant time.

- Deleting O(n)

  Deleting elements at the end of the linked list, requires traversing the list from the head to the tail, which takes linear time.

## Exercise

### Exercise 01

Let's try to print all values in linked list.

```ts
class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const zero = new LinkedListNode(0);
const one = new LinkedListNode(1);
const two = new LinkedListNode(2);
const three = new LinkedListNode(3);
const four = new LinkedListNode(4);
zero.next = one;
one.next = two;
two.next = three;
three.next = four;

// Write the code to iterate and print all values connected to zero
// zero is the starting point.
// Ideally, it should print like
// 0
// 1
// 2
// 3
// 4

let currentNode: LinkedListNode | null = zero;

while (currentNode !== null) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
```

### Exercise 02

- Let's try to implement your own list
  https://leetcode.com/problems/design-linked-list/

- Hint: We can use a ListNode class used in Excersie 01
- Since 02 could be heavy task, you can try either 02 or 03

```ts
class LinkedListNode {
  val: number | null;
  next: LinkedListNode | null;

  constructor(val: number | null = null, next: LinkedListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    const leader = this.traverseToIndex(index);

    return leader!.val!;
  }

  addAtHead(val: number): void {
    const node = new LinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  addAtTail(val: number): void {
    const node = new LinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.length) {
      this.addAtTail(val);
      return;
    }

    const newNode = new LinkedListNode(val);
    const leader = this.traverseToIndex(index - 1);

    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
      if (this.head === null) {
        this.tail = null;
      }
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader!.next;
      leader!.next = unwantedNode!.next;
      if (unwantedNode === this.tail) {
        this.tail = leader;
      }
    }

    this.length--;
  }

  private traverseToIndex(index: number): LinkedListNode | null {
    let currentNode: LinkedListNode | null = this.head;
    let counter = 0;
    while (currentNode !== null && counter !== index) {
      currentNode = currentNode.next!;
      counter++;
    }
    return currentNode;
  }
}
```

### Exercise 03

- Let's try to solve some leet code questions. (You dont' havet to solve all, Just one is enough for now)
- https://leetcode.com/problems/linked-list-cycle/description/
- https://leetcode.com/problems/remove-nth-node-from-end-of-list/
- https://leetcode.com/problems/reverse-linked-list/
- https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

```ts
const swapNodes = (head: ListNode | null, k: number): ListNode | null => {
  let length = 0;
  let countLength = head;
  while (countLength) {
    countLength = countLength.next;
    length++;
  }

  const indexFromStart = k - 1;
  const indexFromEnd = length - k;

  let count = 0;
  let nodeFromStart: ListNode | null = null;
  let nodeFromEnd: ListNode | null = null;
  let current = head;

  while (current) {
    if (count === indexFromStart) {
      nodeFromStart = current;
    }
    if (count === indexFromEnd) {
      nodeFromEnd = current;
    }
    current = current.next;
    count++;
  }

  [nodeFromStart!.val, nodeFromEnd!.val] = [nodeFromEnd!.val, nodeFromStart!.val];

  return head;
};
```

## References

https://leetcode.com/explore/learn/card/linked-list/

# Advanced(optional): Double Liked List

## What is Doubly Linked List?

Doubly linked list is similar to a singly linked list, except that each node has a reference to both the next and previous nodes in the sequence.

## What is pros and cons compare to Singly Linked List?

### pros

- Bidirectional traversal

  Doubly linked lists allow for traversal in both forward and backward directions. Each node contains pointers to both the next and previous nodes, enabling efficient backward traversal.

### cons

- Extra memory

  Doubly linked lists require extra memory space to store the previous node reference.

### Can you come up with good example when to use Double Liked List?😁

- Music Player Playlist

  When adding a new song, a new element is inserted into the list. Also, when a user navigates to the previous or next song, the previous or next element in the list can be accessed.

[^1]: Node is a fundamental building block of a linked list or a tree. It is a data structure that holds a piece of data and one or more references to other nodes.
