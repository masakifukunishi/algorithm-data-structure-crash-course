# Stack

## What is Stack (data structure)?

A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. It has two main operations:

- Push

  This operation adds an element to the top of the stack.

- Pop

  This operation removes the top element from the stack.

## What is the difference between Stack and Queue?

- Stack

  - Follows the Last-In-First-Out (LIFO) principle, where the last element inserted is the first one to be removed

- Queue

  - Follows the First-In-First-Out (FIFO) principle, where the first element inserted is the first one to be removed.

## Can you come up with when to use Stack? (Real world example is ok!)

- Function call stack

  Used in programming languages to manage function calls. When a function is called, its variables and context are pushed onto the stack. When the function finishes, it is popped off the stack, returning control to the previous function.

- Browser History

  Web browsers use a stack-like structure to store the history of visited web pages. When the user clicks the back button, the most recently visited page is popped from the history stack, enabling navigation to the previous page.

- Stacking of dishes

  When stacking dishes, the last dish placed on the stack is the first one to be removed.

## Analysis

What is the time complexity of following operations for Stack? Why?

Since they are multiple types of stack, consider a type using **linked list**.

### Basics

#### push (add an element to the Stack)

- O(1)

  Adding an element to the top of the stack requires updating the top pointer, which takes constant time.

#### pop (remove and return an element from the Stack)

- O(1)

  Removing an element from the top of the stack requires updating the top pointer, which takes constant time.

#### peek (return the element from the Stack)

- O(1)

  Returning the element from the top of the stack requires accessing the top pointer, which takes constant time.

#### size (get the size of the Stack)

- O(1)

  Getting the size of the stack requires just accessing the size property, which takes constant time.

#### merge two Stack

- O(1)

  Merging two stacks requires updatting the first stack's bottom pointer to point to the second stack's top pointer, which takes constant time.

### Comparison

What if we try to implement Stack with Array instead of Linked List?
What would be the difference?

- Dynamic resizing

  Since an array has a fixed size, if you exceed the capacity of the array, you need to resize it to accommodate more elements. On the other hand, Linked lists can grow dynamically without requiring resizing operations.

- Memory efficiency

  - Linked lists require extra memory for storing pointers to the next element. This overhead is not present in arrays.

- Implementation simplicity

  Implementing a stack using an array is often simpler than using a linked list since it doesn't involve managing pointers or dealing with dynamic memory allocation.

## Exercise

### Exercise 01

Let's try to implement your own Stack with using Linked-List!

```ts
class ListNode {
  val: number | null;
  next: ListNode | null;

  constructor(val: number | null = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyStack {
  top: ListNode | null;
  bottom: ListNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value: number) {
    const newNode = new ListNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop(): number | null {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.val;
  }

  peek(): number | null {
    if (!this.top) return null;
    return this.top.val;
  }

  size(): number {
    return this.length;
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
```

### Exercise 02

- Let's try to solve some leet code questions
- https://leetcode.com/problems/valid-parentheses/

```ts
const isValid = (s: string): boolean => {
  let stack = [];
  let parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in parentheses) {
      stack.push(parentheses[char]);
    } else if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
```

- https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
- https://leetcode.com/problems/crawler-log-folder/
