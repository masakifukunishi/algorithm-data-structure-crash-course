# Array

## What is array?

Array is the simplest and most widely used data structure, allowing multiple elements to be stored in order.
Each element is uniquely accessible by index.

## How do we allocate memory when constructing the array?

### In JavaScript

JavaScript arrays are dynamically allocated memory.

When you add an element to an array, the JavaScript runtime environment automatically allocates memory internally to store the element. Memory management is handled by the JavaScript runtime engine, and the programmer does not need to write explicit memory allocation code.

```typescript
const os: string[] = ["Mac", "Windows", "Linux"];
```

## What is fixed size vs dynamic size array?

### Fixed size array

- Uses a fixed-size memory area to store elements. The size is specified at declaration and cannot be changed thereafter
- Elements are stored in contiguous memory areas.
- Access to the elements of a fixed size array is fast and can be accessed directly using indexes.
- The size of the fixed size array is determined at compile time and cannot be changed at run time.

### Dynamic size array

- Uses a dynamically allocated memory area to store elements.
- Elements are stored in contiguous memory areas, but memory may be reallocated as needed.
- Access to the elements of a dynamic size array is also fast and can be accessed directly using indexes.
- The size of the dynamic size array is determined at runtime and can be changed at runtime.

## What is pros and cons about array?

### Pros

- Random Access[^1]

  - Arrays provide constant-time access to individual elements based on their index. This means you can access any element directly using its index without iterating through the entire array.

- Efficient use of memory

  - Arrays store elements in contiguous memory locations, which allows for efficient memory management.

- Easy Iteration
  - Arrays provide a straightforward way to iterate over their elements using loops or iterators. This makes it convenient to perform operations on each element or process the entire array.

### Cons

- Wasted Memory

  - If an array is not fully populated with elements, there may be wasted memory space. If the size of the array is much larger than the number of elements it contains, it can result in inefficient memory usage.

- Insertion and Deletion Overhead[^2]

  - Inserting or deleting elements in the middle of an array requires shifting subsequent elements, which can be computationally expensive.

- Fixed Size **(For fixed size array)**

  - Arrays have a fixed size, meaning they cannot dynamically grow or shrink once they are created. This inflexibility can be problematic if you need to store a varying number of elements or if the required size is not known in advance.

## When do we use array?

1. When the number of elements is known and fixed

   - If you have a collection of elements with a predetermined size that will not change throughout the program's execution, arrays are a suitable choice.

2. When random access is required

   - If you need to access elements in the collection directly by their indices or perform operations on specific elements without iterating through the entire collection, arrays provide constant-time random access, making them efficient for such use cases.

3. When you need to iterate over the elements

   - Arrays provide a straightforward way to iterate over their elements using loops or iterators. This makes it convenient to perform operations on each element or process the entire array.

4. When memory efficiency is a concern
   - Arrays have a compact memory representation, as elements are stored in contiguous memory locations.

## What is the time & space complexity of following instruction. Why do think that?

### insert (push)

- Time Complexity: O(1)
- Space Complexity: O(1)

  Inserting an element at the end of an array does not require shifting other elements.

### delete by index

- Time Complexity: O(n)
- Space Complexity: O(1)

  Deleting an element from an array requires shifting all the elements after the deleted index to fill the gap.

### access by index

- Time Complexity: O(1)
- Space Complexity: O(1)

  Accessing an element in an array or a list by index can be done in constant time since the position of the element is known and does not require iterating through the entire data structure.

### find a specific value

- Time Complexity: O(n)
- Space Complexity: O(1)

  Finding a specific value in an array or a list requires iterating through the entire data structure until the value is found.

### pop (delete last)

- Time Complexity: O(1)
- Space Complexity: O(1)

  Deleting the last element of an array or a list does not require shifting other elements.

### pop left (delte first, shift)

- Time Complexity: O(n)
- Space Complexity: O(1)

  Deleting the first element of an array or a list requires shifting all the elements after the deleted index to fill the gap.

## Exercise (Optional)

## Exercise 1:

Let's try to implement an dynamic size array with using only fixed size array.
Since there is no fixed size array in Ts, pseudo code is ok

```ts
class DynamicArray {
  private array: FixedArray<number>; // Suppose this is a TS Array with fixed size. You can use all the features of a TS Array, but with a fixed size.
  private length: number;

  public constructor(size: number) {
    this.array = new FixedArray(size);
    // Feel free to add any class properties if needed
    this.length = 0;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public getLength(): number {
    return this.length;
  }

  public push(value: number): void {
    // Add an element to the dynamic array. Check if the dynamic array is already full, and if so, create a new FixedArray instance with a larger size and copy the elements from the old array to the new one.
    // When creating a new fixed size array, it is doubled in size.
    if (this.length === this.array.length()) {
      const newArray = new FixedArray(this.array.length * 2);
      for (let i = 0; i < this.array.length; i++) {
        newArray.push(this.array);
      }
      this.array = newArray;
    }
    this.array.push(value);
    this.length++;
  }

  public removeAt(index: number): void {
    // remove an element at that index and shift all subsequent elements to fill the gap
    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    // After shifting, unnecessary values remain at the end, delete by pop
    this.array.pop();
    this.length--;
  }
}
```

## Exercise 02: Remove Master

## Q1

Congratulation! You'are hired by that Big tech company😎
Your first job is to implement

- `removeAt` function which removes an element at the givien index
- `removeAll` function which removes all the elements that matches to the given element.

```ts
function removeAt(arr: Array<number>, index: number): Array<number> {
  // implement your code
  // e.g.  removeAll([1,4,5,6], 2) -> [1,4,6]
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();

  // or
  // return arr.splice(index, 1);

  return arr;
}
console.log(removeAt([1, 4, 5, 6], 5));

function removeAll(arr: Array<number>, value: number): Array<number> {
  // implement your code
  // e.g.  removeAll([1,4,5,6,3,4,2,4], 4) -> [1,5,6,3,2]

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) continue;
    newArray.push(arr[i]);
  }
  return newArray;

  // or
  // return arr.filter((element) => element !== value);
}

console.log(removeAll([1, 4, 5, 6, 3, 4, 2, 4], 4));
```

## Q2

Easy Peasy? What is your codes **time complexity and space complexity.**

- removeAt

  - Time Complexity: O(n)
    - It iterates through the entire array to shift the elements after the deleted index.
  - Space Complexity: O(1)
    - It modifies the input array in place without creating any additional data structures that grow with the size of the input.

- removeAll

  - Time Complexity: O(n)
    - It iterates through the entire array to find the elements that match the given value.
  - Space Complexity: O(n)
    - It creates a new array to store the elements that do not match the given value.

## Q3: optional

Since your company is big and needs to handle a large amount of data,
you are asked to make it as efficient as possible.

Can you make it O(n) time complexity and O(1) space complexity for both functions? 😁
Let's try and get the bonus!

Hint:
https://leetcode.com/problems/move-zeroes/

```ts
function removeAll(arr: Array<number>, value: number): Array<number> {
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[idx] = arr[i];
      idx++;
    }
  }
  arr.length = idx;
  return arr;
}
```

Since the original array is used and no additional array is created, the spatial computational complexity is O(1).

[^1]: Random access refers to the ability to access individual elements in a data structure directly, without the need to traverse or iterate through the entire structure.
[^2]: In computing, overhead refers to any additional resources or costs incurred in performing a particular operation or executing a program that are not directly related to the desired task or functionality.
