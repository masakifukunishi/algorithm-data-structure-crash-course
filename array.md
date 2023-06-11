# Array

## What is array?

Array is the simplest and most widely used data structure, allowing multiple elements to be stored in order.
Each element is uniquely accessible by index.

```typescript
// array
const os = ["Mac", "Windows", "Linux"];

// access by index
console.log(os[0]); // Mac
```

## How do we allocate memory when constructing the array?

It depends on the language.

### In JavaScript

JavaScript arrays are dynamically allocated memory.

When you add an element to an array, the JavaScript runtime environment automatically allocates memory internally to store the element. Memory management is handled by the JavaScript runtime engine, and the programmer does not need to write explicit memory allocation code.

### In C

#### Fixed size array

For a fixed-size array in C, you specify the number of elements when declaring the array.

```C
int array[10]; // Declaration of a fixed-size array with 10 elements
```

#### Dynamic size array

For a dynamic-size array in C, you allocate memory at runtime using the malloc function from the standard library. The malloc function allows you to request a specific amount of memory dynamically. The size of the array can be determined during runtime, and you can change the size as needed.

```C
int* array = malloc(10 * sizeof(int));
```

After you finish using the dynamic array, you should free the allocated memory using the free function to prevent memory leaks:

```C
free(array);
```

## What is fixed size vs dynamic size array?

### Fixed size array

- Uses a fixed-size memory area to store elements. The size is specified at declaration and cannot be changed thereafter
- Elements are stored in contiguous memory areas.
- Access to the elements of a fixed size array is fast and can be accessed directly using indexes.
- The size of the fixed size array is determined at compile time and cannot be changed at run time.

### Dynamic size array

- Uses a dynamically allocated memory area to store elements. The size can be changed at runtime.
- Elements are stored in contiguous memory areas, but memory may be reallocated as needed.
- Access to the elements of a fixed size array is also fast and can be accessed directly using indexes.
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
Since there is no fixed size array in Ts, sudo code is ok

```ts
class DynamicArray {
    this.array: FixedArray<number> // Suppose this is ts Array with Fixed size. You can use every ts Array features but the fixed size.

    public constructor(size: number) {
        this.array = new FixedArray(size)
        // Feel free to add any class properties if needed
    };

    func isEmpty(): bool {

    }

    func getLength(): number {

    }

    func push(value: number) {

    }

    func push(array: FixedArray<number>) {

    }

    func removeAt(index: number) {

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
func removeAt(arr: Array<number>, index: number) {
    // implement your code
    // e.g.  removeAll([1,4,5,6], 2) -> [1,4,6]
}

func removeAll(arr: Array<number>, value: number) {
    // implement your code
    // e.g.  removeAll([1,4,5,6,3,4,2,4], 4) -> [1,5,6,3,2]
}

```

## Q2

Easy Peasy? What is your codes **time complexity and space complexity.**

## Q3: optional

Since your company is big and needs to handle a large amount of data,
you are asked to make it as efficient as possible.

Can you make it O(n) time complexity and O(1) space complexity for both functions? 😁
Let's try and get the bonus!

Hint:
https://leetcode.com/problems/move-zeroes/

[^1]: Random access refers to the ability to access individual elements in a data structure directly, without the need to traverse or iterate through the entire structure.
[^2]: In computing, overhead refers to any additional resources or costs incurred in performing a particular operation or executing a program that are not directly related to the desired task or functionality.
