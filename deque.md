# Deque

## What is Deque?

Deque is a double-ended queue, which is a generalization of a stack and a queue that supports adding and removing items from either the front or the back of the data structure.

## When is Deque often used instead of using Stack or Queue?

### Task Management

Task management apps or queuing systems use Deque to handle tasks based on their priority. Tasks with higher priority are inserted from the front (FIFO), while lower-priority tasks may be inserted from the back (FILO).

### Palindrome Checking

When checking whether a sequence is a palindrome, Deque can be utilized to efficiently compare characters from both ends, making it faster than traditional stack-based approaches.

## What is difference between Deque VS Stack, Queue?

### Deque

Deque supports both FIFO (First-In-First-Out) and LIFO (Last-In-First-Out) operations.
Elements can be inserted and removed from the front and back in O(1) constant time.
Deque is more flexible than both Stack and Queue, as it combines the features of both.

### Stack

Stack supports only LIFO (Last-In-First-Out) operations.

### Queue

Queue supports only FIFO (First-In-First-Out) operations.

## Could you come up with some real world example of using Deque?

### Bus and Train

Passengers can board and get off the bus from both the front and the back.

### Trading Card Game

Players draw the card from the top and sometime put the card to the bottom and top of the deck.

## Analysis

### To make a Deque, what kind of data structure can be good to used internally?

### Doubly Linked List

In a doubly linked list, each node contains a reference to both the next and previous nodes. This allows for efficient insertion and removal of elements from both ends of the Deque (front and back) in constant time O(1).

### Dynamic Array

In an array, elements are stored in contiguous memory locations. This allows for efficient random access to elements in the Deque. However, insertion and removal of elements from the front of the Deque requires shifting all the elements, which takes linear time O(n).

## What is the time and space complexity of following operations for Deque? Why?

### When using Doubly Linked List

#### Time complexity

##### push_back: Add element at the end

- O(1)

##### push_front: Insert element at beginning

- O(1)

##### pop_back: Delete last element

- O(1)

##### pop_front: Delete first element

- O(1)

Adding or removing elements involves updating the pointers of the first or last node, and this process takes constant time regardless of the number of elements.

#### Space complexity

The space complexity of a doubly linked list-based Deque depends on the number of elements stored in it.

### When using Dynamic Array

#### Time complexity

##### push_back: Add element at the end

- O(1)

##### push_front: Insert element at beginning

- O(n)

##### pop_back: Delete last element

- O(1)

##### pop_front: Delete first element

- O(n)

Manipulating the first element takes O(n) because all elements must be shifted.
On the other hand, manipulating the last element takes O(1) since it only resizes the array.

#### Spase complexity

The space complexity of a dynamic array-based Deque depends on the number of elements stored in it.
