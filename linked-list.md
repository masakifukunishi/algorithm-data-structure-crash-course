# Linked List

## What is linked list?

Linked list is a data structure that consists of a sequence of nodes[^1], where each node contains a data element and a reference to the next node in the sequence.

## What is liked list good at?

- Sorted data

  - Linked lists can have sorted data unlike hash table, Because nodes points the next node.

- Dynamic Size

  - Linked list can dynamically grow or shrink in size during program execution. Unlike arrays, which have a fixed size, linked lists can accommodate new elements or remove existing elements without requiring a reallocation of memory.

- Insertion and Deletion

  - Linked list excel at efficient insertion and deletion operations, especially at the beginning or middle of the list. Unlike arrays, which may require shifting elements to accommodate changes, linked lists only need to update a few pointers.

- Efficient Iteration

  - Singly-linked lists are efficient for forward iteration, allowing easy traversal from the beginning to the end. Doubly-linked lists can traverse in both directions, enabling forward and backward traversal.

- Merging and Splitting
  - Linked lists can be merged or split easily by manipulating the pointers.

## When is good to use liked list?

## What is head and tail in linked list?

## Analysis

What is the time complexity of folloing operations

### access by index

### insert at index

### delete at index

### joint two listed list

### add(delete) head

### add(delete) tail

## Exercise

### Exercise 01

Let's try to print all values in linked list.

```ts
class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const zero = new ListNode(0);
const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
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
```

### Exercise 02

- Let's try to implement your own list
  https://leetcode.com/problems/design-linked-list/

- Hint: We can use a ListNode class used in Excersie 01
- Since 02 could be heavy task, you can try either 02 or 03

### Exercise 03

- Let's try to solve some leet code questions. (You dont' havet to solve all, Just one is enough for now)
- https://leetcode.com/problems/linked-list-cycle/description/
- https://leetcode.com/problems/remove-nth-node-from-end-of-list/
- https://leetcode.com/problems/reverse-linked-list/

## References

https://leetcode.com/explore/learn/card/linked-list/

# Advanced(optional): Double Liked List

- What is Doubly Linked List?
- What is pros and cons compare to Singly Linked List?
- Can you come up with good example when to use Double Liked List?😁

[^1]: Node is a fundamental building block of a linked list or a tree. It is a data structure that holds a piece of data and one or more references to other nodes.