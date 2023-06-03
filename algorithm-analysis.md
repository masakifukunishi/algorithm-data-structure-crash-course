# Algorithm Analysis

## What is time complexity?

- Time complexity is a measure of how much time an algorithm takes to execute relative to its input size. Specifically, it evaluates how the algorithm's execution time increases as the input size of the problem to be solved by the algorithm increases.

- Time complexity is expressed using Big O notation.

- Time complexity usually considering worst-case execution time.

```javascript
const list: number[] = [1, 7, 2, 6, 5];
const target: number = 1;

const getOne = (list: number[], target: number): boolean => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return true;
    }
  }
  return false;
};

// O(n)
// The loop is executed once. But the worst case is 1 is the last element. O(n) expresses the worst case (5 loops).
```

- Remove constant

```javascript
const test = (boxes: string[]) => {
  boxes.forEach((box: string[]) => console.log(box));

  boxes.forEach((box: string[]) => console.log(box));
};

// O(2n) => O(n)
```

- Drop non-dominant terms

```javascript
const test = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// O(n + n^2) => O(n^2)
```

### Why use Big O notation?

#### Simplicity

- Big O notation expresses efficiency in terms of O( ). This notation can be used to convey the efficiency of an algorithm in a simplified form.

#### Comparison

- The Big O notation makes it easy to compare the efficiency of different algorithms.
- O(log n) is better than O(n), etc.

#### Accuracy

- The actual algorithm execution time depends on the CPU, but the Big O can be used to determine efficiency without having to execute the algorithm exactly.

**O(1)** is expressed as constant time, **O(n)** as linear time, **O(n^2)** as quadratic time, etc...

![BigO](/images/algorithm-analysis/big_o.jpeg)

## What is space complexity?

- Space complexity is a measure how much amount of memory and storage required to execute relative to its input size. In other words, it considers the size of additional memory or data structures required when an algorithm is executed.

## Why and when do we use time (space) complexity?

- Algorithm comparison

  - Time and space complexity help in comparing different algorithms for the same problem. By analyzing their complexity, you can determine which algorithm is more efficient in terms of runtime or memory usage, enabling you to select the most suitable solution.

- Optimization

  - Complexity analysis identifies areas for optimization within algorithms or programs. It allows developers to focus on improving the performance of specific parts of the code that contribute significantly to the overall time or space usage.

- Resource management

  - By understanding the complexity, you can design algorithms or select solutions that fit within the available resources, avoiding performance issues and ensuring optimal usage.

- Predictive power
  - Complexity analysis enables you to predict and estimate the performance characteristics of an algorithm before running it on actual data. This helps in understanding how the algorithm will scale with larger input sizes, allowing you to anticipate and plan for potential performance challenges.

## Is running time == time complexity?

- No Running time refers to the actual time it takes for an algorithm or program to execute on a specific input. It is typically measured in seconds or millisecond but on the other hand, time complexity is a measure of how much time an algorithm takes to execute relative to its input size. It is typically expressed using Big O notation.

## Is number of calculations == time complexity??

No The number of calculations is not necessarily equal to time complexity.
The number of calculations refers to the actual count of computations or operations performed during the execution of an algorithm or program.

```js
const array1: number[] = [1, 7, 2, 6, 5];
const array2: number[] = [1, 7, 2, 6, 5, 1, 1, 2, 10, 1];

const fn1 = (array: number[]): void => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

fn(array1); // O(n) number of calculation is 5
fn(array2); // O(n) number of calculation is 10
```

## What are the complexity of these functions?

```py
def q0(n):
	print(n)
# O(1)

def q1(n):
    i = 0
    while i < n:
        print(i)
        i += 1
# O(n)

def q2(n):
    i = 0
    while i < n:
        print(i)
        i += 2
# O(n/2) = O(n)

def q3(n):
    i = 1
    while i < n:
        print(i)
        i *= 2
# O(log n) --

def q4(n):
    i = 0
    while i < n:
        j = 0
        while j < n:
            print(i, j)
            j += 1
        i += 1
# O(n^2)

def q5(n):
    i = 0
    while i < n:
        j = 0
        while j < n:
            k = 0
            while k < n:
                print(i, j, k)
                k += 1
            j += 1
        i += 1
# O(n^3) => O(n^2)

def q6(n):
    i = 0
    while i < n:
        j = 0
        while j < i:
            print(i, j)
            j += 1
        i += 1

# O(n^2) --

def q7(n):
    i = 0
    while i < 100000000:
        print(i)
        i += 1
# O(1)

def q8(n):
    i = 0
    while i < n:
        j = 0
        while j < 100000000:
            print(i, j)
            j += 1
        i += 1
# O(n)

def q9(n):
    i = 0
    while i < n:
        print(i)
        i += 1

    i = 0
    while i < n:
        j = 0
        while j < n:
            print(i, j)
            j += 1
        i += 1
# O(n + n^2) = O(n^2)

def q10(n):
    i = 0
    while i < n:
        print(i)
        i += 1

    i = 0
    while i < n:
        j = 0
        while j < n:
            print(i, j)
            j += 1
        i += 1

    i = 0
    while i < n:
        j = 0
        while j < 100000000:
            print(i, j)
            j += 1
        i += 1

    i = 1
    while i < n:
        print(i)
        i *= 2

# O(n + n^2 + n + log n) = O(n^2)

```

```javascript
// O(n!)
// it means that we're adding a nested loop for every input

const factorial = (n: number) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// O(log n)
const searchInsert = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
```
