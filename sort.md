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
### Merge
### Quick

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