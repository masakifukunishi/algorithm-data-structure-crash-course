# Sort

## Exercise 01
There so many sort algorithm so far. More than 100!
These are one of the common algorithm. 

### Bubble
```ts
const sortArray = (nums: number[]): number[] => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
```
- Time complexity: O(n^2)
- Space complexity: O(1)

### Insertion
```ts
const sortArray = (nums: number[]): number[] => {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const temp = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};
```

- Time complexity: O(n^2)
- Space complexity: O(1)

### Selection
```ts
const sortArray = (nums: number[]): number[] => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
};
```
- Time complexity: O(n^2)
- Space complexity: O(1)

### Merge
```ts
const sortArray = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  const center = Math.floor(nums.length / 2);
  const left = nums.slice(0, center);
  const right = nums.slice(center);

  sortArray(left);
  sortArray(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      nums[k] = left[i];
      i++;
    } else {
      nums[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    nums[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    nums[k] = right[j];
    j++;
    k++;
  }
  return nums
};
```
- Time complexity: O(log n)
- Space complexity: O(n)

### Quick
```ts
// Procedure
// const pivot = right end
// i = -1
// j = 0

// if (nums[j] < pivot) {
//   i++
//   swam(nums[i], nums[j])
// }
// j++


const sortArray = (nums: number[]): number[] => {
  const swap = (nums: number[], i: number, j: number): void => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const partition = (nums: number[], low: number, high: number): number => {
    let i = low - 1;
    const pivot = nums[high];
    for (let j = low; j < high; j++) {
      if (nums[j] <= pivot) {
        i++;
        swap(nums, i, j);
      }
    }
    swap(nums, i + 1, high);
    return i + 1;
  };

  const quickSort = (nums: number[], low: number, high: number): void => {
    if (low < high) {
      const partitionIndex = partition(nums, low, high);
      quickSort(nums, low, partitionIndex - 1);
      quickSort(nums, partitionIndex + 1, high);
    }
  };
  quickSort(nums, 0, nums.length - 1);

  return nums;
};
```
- Time complexity: O(log n)? or O(n^2)?
- Space complexity: O(log n)? or O(n)?

The fastest way to understand is get hands on it!
Try to implement and analyze its time and space complexity.
You can assess the algorithm at this questions. 
https://leetcode.com/problems/sort-an-array/


## Exercise 02
### What do you think is the best algorithm and why?
I think the best algorithm is merge sort.
this is becaunse merge sort is stable and fast.
the time complexity is always O(log n).

### Compare Merge sort VS Quick Sort. Pros and Cons?
#### Merge sort
- Pros
    - Predictable Performance
        Merge Sort guarantees a worst-case time complexity of O(log n) regardless of the initial order of elements.

- Cons
    - Space Complexity
        Merge Sort requires additional memory space of 0(n) for the temporary array.

#### Quick sort
- Pros
    - Average Case Efficiency
        Quick Sort has an average-case time complexity of O(log n), making it one of the fastest sorting algorithms for general purposes.

    - Space Complexity
        Space Complexity: Quick Sort has a favorable space complexity of O(log n) for the function call stack in most cases.

- Cons
    - Worst Case Efficiency
        Quick Sort has a worst-case time complexity of O(n^2) when the pivot is either the smallest or the largest element in the list.

## Exercise 03
### What is the internal sort algorithm that the language you're familiar is using?

In JavaScript, the internal sorting algorithm used by the Array.prototype.sort() method is implementation-dependent and not explicitly specified in the ECMAScript language specification. Different JavaScript engines use different sorting algorithms for their respective Array sort() implementations.

## Exercise 04

- Pick up any favorite sort algorithm you like. (Excluding the list in above.)
- Any sort algorithm is ok! Even a stupid one!