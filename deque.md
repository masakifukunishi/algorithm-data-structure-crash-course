# Deque

## What is Deque?

Deque is a double-ended queue, which is a generalization of a stack and a queue that supports adding and removing items from either the front or the back of the data structure.

## When is Deque often used instead of using Stack or Queue in the real world?

- Bus and Train

  - Passengers can board and get off the bus from both the front and the back.

- Trading Card Game

  - Players draw the card from the top and sometime put the card to the bottom and top of the deck.

## What is difference between Deque VS Stack, Queue?

### Deque

Deque supports both FIFO (First-In-First-Out) and LIFO (Last-In-First-Out) operations.
Elements can be inserted and removed from the front and back in O(1) constant time.
Deque is more flexible than both Stack and Queue, as it combines the features of both.

### Stack

Stack supports only LIFO (Last-In-First-Out) operations.

### Queue

Queue supports only FIFO (First-In-First-Out) operations.

- Could you come up with some real world example of using Deque? ---

## Analysis

- To make a Deque, what kind of data structure can be good to used internally?
- What is the time and space complexity of following operations for Deque? Why?
  - push_back: Add element at the end
  - push_front: Insert element at beginning
  - pop_back: Delete last element
  - pop_front: Delete first element
