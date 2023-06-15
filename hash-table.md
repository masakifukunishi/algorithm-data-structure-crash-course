# Hash Table

## What is hash?

Hash is a function that takes an input and produces a fixed-size string of characters.

### Characteristics of Hash

- Deterministic

  - Hash function always produces the same output for the same input.

- Non-Reversible

  - Hash functions are designed to be one-way functions, meaning it is impossible to get the original input from the hash output.

- Fixed Output Size

  - Hash function always produces the same size of output regardless of the input size. For example, a common hash function called SHA-256 generates a 256-bit (32-byte) hash value.

- Uniform Distribution

  - A good hash function evenly distributes hash values across its output space, reducing the likelihood of collisions.

- Avalanche Effect
  - A small change in the input should result in a significant change in the output, making it difficult to predict the original input based on the hash value alone.

## How do you make hash?

Hashes are created using algorithms such as MD5, SHA-1, SHA-256, etc.

SHA-256 currently has no known security issues. Since it is suitable for modern security requirements.

Here is the code to create a hash using SHA-256 in JavaScript

```js
import crypto from "crypto";

const data = "Hello!";
const hash = crypto.createHash("sha256");
hash.update(data);
// Specify a hexadecimal string
const hashedData = hash.digest("hex");

console.log(hashedData);
```

## What is Hash Table?

Hash table is a data structure that stores key value pairs.

The basic idea behind a hash table is to convert a key into a unique numerical value using hash function that represents the index in an array or a bucket[^1] where the value associated with the key will be stored.

## What do you have to care when you create the Hash Table?

- Hash Function Selection

  - Choose a suitable hash function that distributes the keys uniformly across the hash table. A good hash function minimizes collisions.

- Collision Resolution
  - Determine an appropriate strategy for handling collisions that may occur when two keys map to the same hash value. Common collision resolution techniques are separate chaining (using linked lists or other data structures to store multiple elements at the same hash index) etc.

## What is good(bad) about Hash Table compare to array?

### Advantages of Hash Table over array

- Dynamic Size

  - Hash tables can dynamically resize themselves as the number of elements changes.

- Flexibility in Keys

  - Hash tables allow for flexible key types. Unlike arrays, where the keys are typically integers representing indices, hash tables can use a wide range of data types as keys, including strings.

- Efficient Lookup -----

  - Hash tables provide fast lookup and retrieval of elements. The time complexity for accessing an element in a hash table is typically O(1) on average, making it suitable for applications where fast access is required.

- Efficient Insertion and Deletion

  - Adding or removing elements from a hash table is generally fast. The time complexity for insertions and deletions in a hash table is also typically O(1) on average.

### Disadvantages of Hash Table over array

- Unordered Data

  - Hash tables do not guarantee an order of elements. If you need to maintain a specific order, arrays may be more suitable since they store elements contiguously.

- Additional Overhead

  - Hash tables have additional memory overhead due to the need for hash functions, hash buckets, and potential collisions.

### When is better to use Hash Table over array

## Analysis

What are the time complexity of

### add(insert)

O(1)

### get value by key

O(1)

### find value

O(n)

finding a value without knowing its corresponding key requires traversing the entire table to search for a match, resulting in a linear time complexity.

### remove key, value

O(1)

### update value

O(1)

In add, get, remove and update, In the case of collisions, the time complexity can increase to O(n) in the worst case

## Exercise

### Exercise 1

Let's try to implement your own hash function. There is a good leedcode question here!

- https://leetcode.com/problems/design-hashmap/

- Rules
  - **Do not ever use pre existing hash table API**
  - **If you use an array, try to fixed the size with 1000**

### Exercise 2 (Optional)

Let's try to sovle some leetcode quesiton.
These can be optimized by leveraging array and hash table data structure💪

- https://leetcode.com/problems/two-sum/
- https://leetcode.com/problems/first-unique-character-in-a-string/
- (optional) https://leetcode.com/problems/minimum-index-sum-of-two-lists/

## References

https://leetcode.com/explore/learn/card/hash-table/

---

# Set

## Q: Concept

- What is Set?
- What is Set vs Hash Table?
  - when is better to use Set over Hash Table

[^1]: Bucket is a container for storing key value pairs.