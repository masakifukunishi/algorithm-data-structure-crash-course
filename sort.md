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
    const len = nums.length;
    const mid = Math.floor(len / 2);
};
```
```
### Quick
```ts
const sortArray = (nums: number[]): number[] => {
  const len = nums.length;
  const quickSort = (nums: number[], left: number, right: number) => {
    if (left >= right) return;
    const pivot = partition(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  };
  const partition = (nums: number[], left: number, right: number) => {
    const pivot = right;
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j] < nums[pivot]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
      }
    }
    const temp = nums[i];
    nums[i] = nums[pivot];
    nums[pivot] = temp;
    return i;
  };
  quickSort(nums, 0, len - 1);
  return nums;
};

```
The fastest way to understand is get hands on it!
Try to implement and analyze its time and space complexity.
You can assess the algorithm at this questions. 
https://leetcode.com/problems/sort-an-array/


## Exercise 02
- What do you think is the best algorithm and why?
- Compare Merge sort VS Quick Sort. Pros and Cons?

## Exercise 03
What is the internal sort algorithm that the language you're familiar is using?

## Exercise 04

- Pick up any favorite sort algorithm you like. (Excluding the list in above.)
- Any sort algorithm is ok! Even a stupid one!