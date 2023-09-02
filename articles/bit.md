
# Bit

## Summary
A "bit" is the smallest unit of data and information storage in computing. The term "bit" is a contraction of "binary digit." It can have one of two possible values: 0 or 1, representing the two states of a binary system, which is the foundation of digital computing

## Q0: Terms
### What is a `Byte`?
A byte is a unit of digital information that consists of 8 bits. It's the fundamental building block of computer storage and communication, representing a single character, such as a letter, number, or symbol. 

### What is `LSb` and `MSb`?

#### LSb (Least Significant Bit)
This refers to the rightmost or lowest-value bit in a binary number. It holds the least weight in terms of value. For example, in the binary number 1101, the rightmost bit (1) is the least significant bit.

#### MSb (Most Significant Bit)
This refers to the leftmost or highest-value bit in a binary number. It holds the most weight in terms of value. In the binary number 1101, the leftmost bit (1) is the most significant bit.

## Conversion

A machine only treats a number by binary number Where is human to understand a number by base 10.

## Q0: Terms

If the base is 2, 8, 10, and 16, there is a specific name for each base. The base 2 is binary. What are rest of them?

- Base 2: binary
- Base 8: Octal
- Base 10: Decimal
- Base 16: Hexadecimal

**Representation**

Sometimes you will see some symbol like `0b******` or `0x****`. What are these? Explain them with examples.

- `0b******`: Binary number representation

`0b` is a prefix that indicates the number is binary.

e.g, `0b1010` is 10 in decimal.

- `0x****`: Hexadecimal number representation

`0x` is a prefix that indicates the number is hexadecimal.

e.g, `0x1A` is 26 in decimal.

## Q1
How do you convert base 10 number to base 2 (binary) number? Write an algorithm for it. 
```ts
const convertToBase2 = (numBase10: number): number[] => {
  if (numBase10 === 0) return [0];
  const binaryArray = [];

  while (numBase10 > 0) {
    const remainder = numBase10 % 2;
    binaryArray.push(remainder);
    numBase10 = Math.floor(numBase10 / 2);
  }

  return binaryArray.reverse();
};
```
## Q2
How do you convert base 2 number to base 10 number? Write an algorithm for it. 

```ts
const convertToBase10 = (binaryArray: number[]): number => {
  let i = 0;
  let decimalValue = 0;

  while (binaryArray.length > 0) {
    const binaryDigit = binaryArray.pop()!;
    if (binaryDigit !== 0 && binaryDigit !== 1) {
      throw new Error("Invalid binary number");
    }
    decimalValue += binaryDigit * Math.pow(2, i);
    i++;
  }

  return decimalValue;
};
```

## Q3
How do you convert base 10 number to base 3 number? Write an algorithm for it. 

```ts
const convertToBase3 = (numBase10: number): number[] => {
  if (numBase10 === 0) return [0];
  const base3Array = [];

  while (numBase10 > 0) {
    const remainder = numBase10 % 3;
    base3Array.push(remainder);
    numBase10 = Math.floor(numBase10 / 3);
  }

  return base3Array.reverse();
};
```

### Q4
How do you convert base 10 number to base 16 number? Write an algorithm for it. 

```ts
const convertToBase16 = (numBase10: number): string => {
  if (numBase10 === 0) return "0";

  const hexDigits = "0123456789ABCDEF";
  let result = [];

  while (numBase10 > 0) {
    const remainder = numBase10 % 16;
    result.push(hexDigits[remainder]);
    numBase10 = Math.floor(numBase10 / 16);
  }

  return result.reverse().join("");
};

```

## Unsigned integer

🚀 For each answer, **describe the steps and processes you followed**
e.g, Answer format

```
Step 1. ****
Step 2. ****
Step 3. ***
Thus, the answer is ****
```

### Q1
Bits can represent an integer. An `integer` is one of the privative data type of programming language.
What is the range of 8 bits integer?

You don't have to consider a negative number. We call this data type especially an `unsigned integer`.
An `unsigned integer` starts from zero.

### Answer
- Step 1. 8-bit integer can represent values using 8 binary digits.
- Step 2. The maximum value of 8-bit integer is 11111111 (binary) = 255 (decimal).
- Step 3. The minimum value of 8-bit integer is 00000000 (binary) = 0 (decimal).
- Thus, the answer is 0 to 255.

### Q2
What is the range of 32 bits unsigned integer?

### Answer
- Step 1. 32-bit integer can represent values using 32 binary digits.
- Step 2. With 32 bits, you can have 2^32 unique combinations.
- Step 3. The range of values for a 32-bit unsigned integer is from 0 to 2^32 - 1.
- Thus, the answer is 0 to 4,294,967,295.

## Singed integer

We also want to represent a negative number by using bits.

When a integer can treat both negative and positive number, we call this type `singed integer`. There 

are several ways to make a negative integer. One of the common way is "Two's complement"

### Q1
Calculate the binary representation of the `8-bit signed integer -7` using the "Two's complement" method. Outline the steps and processes you followed.

### Answer
- Step 1. Convert 7 to binary number `00000111`.
- Step 2. Flip all the bits `11111000`.
- Step 3. Add 1 to the result `11111001`.
- Thus, the answer is `11111001`.

### Q2
Calculate the binary representation of the `32-bit signed integer -7` using the "Two's complement" method.

### Answer
- Step 1. Convert 7 to binary number `00000000 00000000 00000000 00000111`.
- Step 2. Flip all the bits `11111111 11111111 11111111 11111000`.
- Step 3. Add 1 to the result `11111111 11111111 11111111 11111001`.
- Thus, the answer is `11111111 11111111 11111111 11111001`.

### Q3
Calculate the binary representation of the `32-bit signed integer -239,472,903` using the "Two's complement" method.

### Answer
- Step 1. Convert 239,472,903 to binary number `00001110 01000110 00010001 00000111`.
- Step 2. Flip all the bits `11110001 10111001 11101110 11111000`.
- Step 3. Add 1 to the result `11110001 10111001 11101110 11111001`.
- Thus, the answer is `11110001 10111001 11101110 11111001`.

### Q4
Convert the binary value `11010101` into an `8-bit signed integer` representation using the "Two's complement" method.

### Answer
- Step 1. Flip all the bits `00101010`.
- Step 2. Add 1 to the result `00101011`.
- Thus, the answer is `00101011`.

## Ice Break Question

Masaki likes to play retro tv games👾. One day he was playing one of the RPG games🗡️. He finally faced the last boss 😈 and the boss's HP (hit point) was a maximum of HP 32,000. Masaki was excited but he'd wrongly casted a spell of healing the HP (increasing the HP) ❤️‍🩹 to the Boss instead of a fire attack🧙‍♂️. The boss got healed by + HP 1,000. 

However, as soon as the boss got healed, it got died and was defeated😇. Can you assume and explain what happened? 😁

## Answer
The boss's HP was 32,000. I assume the boss's HP was set by 16-bit signed integer.

So the boss can have a max HP of 32,767.

When the boss got healed by + HP 1,000, the boss's HP became 33,000.

However, 33,000 is out of the range of 16-bit signed integer so the boss's HP became negative number. 

## Bitwise operation

Bitwise operations are fundamental operations performed on individual bits (binary digits) within a binary representation of data. 

### Basics
#### Exercise01
There are mainly six common bitwise operations. List up all of them with example.

- AND `&`
```
A = 0101 (decimal 5)
B = 0011 (decimal 3)
A & B is 0001 (decimal 1)
```

- OR `|`
```
A = 0101 (decimal 5)
B = 0011 (decimal 3)
A | B is 0111 (decimal 7)
```

- XOR `^`
```
A = 0101 (decimal 5)
B = 0011 (decimal 3)
A ^ B is 0110 (decimal 6)
```

- NOT `~`
```
A = 0101 (decimal 5)
~A is 1010 (decimal 10)
```

- Left shift `<<`
```
A = 0101 (decimal 5)
A << 3 is 0101000 (decimal 40)
```

- Right shift `>>`
```
A = 0101 (decimal 5)
A >> 2 is 0001 (decimal 1)
```

#### Exercise02
and what are time complexity of all bitwise operations?

O(1) because computer can do bitwise operations in one step?

#### Exercise03
What are the benefits of using bit operations?

- Efficiency
Bitwise operations are faster than arithmetic operations.
This is because bitwise operations are performed at the bit level.

- Memory Optimization
Bitwise operations can save memory space.
This is because 


### Tips and tricks
#### Exercise01
How do you write a code that determines that if the input number is odd or even?
Can you write a code without using any math operators `+, -, *, /`? 😁


**Constraints:**
- input: 32 bit signed integer

```ts
const = isOdd(input: number) : bool => {
  // Check if LSB is 1
  return (input & 1) === 1; 
}
```

#### Exercise02
Can you write a code which multiplies the input number by 2 and 4 without using `*`? 😁

**Constraints:**
- input: 32 bit unsigned integer
- You don't have to care about integer overflow

```ts
const = multiplyByTwo(input: number): number => {
  // move all bits to left by 1
  return input << 1;
}
```

```ts
const = multiplyByFour(input: number): number => {
  // move all bits to left by 2
  return input << 2;
}
```

#### Exercise03
Can you write a code which divides the input number by 2 or 4 without using `/`? 😁

**Constraints:**
- input: 32 bit unsigned integer
- The result will be always round down
- You don't have to care about integer overflow

```ts
const = divideByTwo(input: number): number => {
  // move all bits to right by 1
  return input >> 1;
}
```

```ts
const = divideByFour(input: number): number => {
  // move all bits to right by 2
  return input >> 2;
}
```

#### Exercise04
Write a code which inverts the sign of number. 

e.g, `invertSign(3) -> -3`, `invertSign(-6) -> 6`

Can you write the code without using `-` nor `*`? 😁

**Constraints:**
- input: 32 bit signed integer


```ts
function invertSign(input: number): number {
  // flip all bits and add 1
  return ~input + 1;
}
```

### LeadCode Practice
**Do not use a build in library such as count bits**

- https://leetcode.com/problems/number-of-1-bits/
```ts
const hammingWeight = (n: number): number => {
  let count = 0;
  // n is a decimal number
  while (n > 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

console.log(hammingWeight(0b00000000000000000000000000001011))
```

- https://leetcode.com/problems/hamming-distance/submissions/
```ts
const hammingDistance = (x: number, y: number): number => {
  let xor = x ^ y;
  let count = 0;
  while (xor > 0) {
    count += xor & 1;
    xor = xor >>> 1;
  }
  return count;
};
```
- https://leetcode.com/problems/single-number/
```ts
const singleNumber = (nums: number[]): number => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};
```
- https://leetcode.com/problems/power-of-two/
```ts
const isPowerOfTwo = (n: number): boolean => {
  if (n <= 0) {
    return false;
  }
  // if n is 16 (Ob10000)
  // 16 - 1 is 15 (Ob01111)
  // 16 & 15 is 0 (Ob00000)
  return (n & (n - 1)) === 0;
};

isPowerOfTwo(16)
```

### Ice Break Question 02

🚧


### Tips and tricks: Advanced (Optional)
#### Exercise05: Set a Bit 
Write a code which set the specific `n` th digit to `1`. 
e.g,
``` 
- input: 0 (Ob00000000), digit: 2 -> return: 4 (0b00000100)
- input: 89 (Ob01011001), digit: 5 -> return: 121 (Ob01111001)
```

**Constraints:**
- input: 32 bit signed integer
- 0 < digit < 32 


```ts
function setBit(input: number, digit: number): number {

}

```

#### Exercise06: Clear a Bit 
Write a code which clear the specific `n` th digit to `1`. 
e.g,
``` 
- input: -1 (Ob11111111), digit: 3 -> return: 9 (Ob11110111)
- input: 89 (Ob01011001), digit: 6 -> return: 25 (Ob00011001)
```

**Constraints:**
- input: 32 bit signed integer
- 0 < digit < 32 

```ts
function clearBit(input: number, digit: number): number {

}

```