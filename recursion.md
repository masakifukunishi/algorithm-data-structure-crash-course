# Recursion

## Exercise

- https://leetcode.com/problems/fibonacci-number/

```ts
const fib = (n: number): number => {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
};
```

- https://leetcode.com/problems/power-of-two/

```ts
const isPowerOfTwo = (n: number): boolean => {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
};
```

- https://leetcode.com/problems/palindrome-number/

```ts
const isPalindrome = (x: number): boolean => {
  const isPalindromeHelper = (start: number, end: number): boolean => {
    if (start >= end) {
      return true;
    }
    if (str[start] !== str[end]) {
      return false;
    }
    return isPalindromeHelper(start + 1, end - 1);
  };

  const str = String(x);
  return isPalindromeHelper(0, str.length - 1);
};
```

- https://leetcode.com/problems/reverse-linked-list/
