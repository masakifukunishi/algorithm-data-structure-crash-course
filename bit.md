
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

## Q1
How do you convert base 10 number to base 2 (binary) number? Write an algorithm for it. 
```ts
const convertToBase2 = (numBase10: number): number[] => {
  if (numBase10 === 0) return [0];
  const binaryArray = [];

  while (numBase10 > 0) {
    const remainder = numBase10 % 2;
    binaryArray.unshift(remainder);
    numBase10 = Math.floor(numBase10 / 2);
  }

  return binaryArray;
};
```
## Q2
How do you convert base 2 number to base 10 number? Write an algorithm for it. 

```ts
const convertToBase10 = (binaryArray: number[]): number => {
  let weight = 1;
  let decimalValue = 0;

  while (binaryArray.length > 0) {
    const binaryDigit = binaryArray.pop()!;
    decimalValue += binaryDigit * weight;
    weight *= 2;
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
    base3Array.unshift(remainder);
    numBase10 = Math.floor(numBase10 / 3);
  }

  return base3Array;
};
```

### Q4
How do you convert base 10 number to base 16 number? Write an algorithm for it. 

```ts
const convertToBase16 = (numBase10: number): string => {
  if (numBase10 === 0) return "0";

  const hexDigits = "0123456789ABCDEF";
  let result = "";

  while (numBase10 > 0) {
    const remainder = numBase10 % 16;
    result = hexDigits[remainder] + result;
    numBase10 = Math.floor(numBase10 / 16);
  }

  return result;
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
What is the range of 8 bits integer.?

You don't have to consider a negative number. We call this data type especially an `unsigned integer`.
An `unsigned integer` starts from zero.

### Q2
What is the range of 32 bits unsigned integer?

## Singed integer

We also want to represent a negative number by using bits.
When a integer can treat both negative and positive number, we call this type `singed integer`. There are several ways to make a negative integer. One of the common way is "Two's complement"


### Q1
Calculate the binary representation of the `8-bit signed integer -7` using the "Two's complement" method. Outline the steps and processes you followed.

### Q2
Calculate the binary representation of the `32-bit signed integer -7` using the "Two's complement" method. 
### Q3
Calculate the binary representation of the `32-bit signed integer -239,472,903` using the "Two's complement" method.

### Q4
Convert the binary value `11010101` into an `8-bit signed integer` representation using the "Two's complement" method.


## Ice Break Question

Masaki likes to play retro tv games👾. One day he was playing one of the RPG games🗡️. He finally faced the last boss 😈 and the boss's HP (hit point) was a maximum of HP 32,000. Masaki was excited but he'd wrongly casted a spell of healing the HP (increasing the HP) ❤️‍🩹 to the Boss instead of a fire attack🧙‍♂️. The boss got healed by + HP 1,000. 

However, as soon as the boss got healed, it got died and defeated😇. Can you assume and explain what happened? 😁


<!-- [Integer overflow](https://en.wikipedia.org/wiki/Integer_overflow) 

---
## Bitwise operation

Bitwise operations are fundamental operations performed on individual bits (binary digits) within a binary representation of data. 

There are several common bitwise operations:

- AND (&): This operation performs a logical AND between corresponding bits of two operands. The result is 1 only if both bits are 1.

- OR (|): This operation performs a logical OR between corresponding bits of two operands. The result is 1 if at least one of the bits is 1.

- XOR (^): This operation performs a logical XOR (exclusive OR) between corresponding bits of two operands. The result is 1 if the bits are different.

- NOT (~): This operation performs a bitwise negation on each bit of the operand, flipping 0s to 1s and 1s to 0s.

- Left Shift (<<): This operation shifts the bits of a number to the left by a specified number of positions. This effectively multiplies the number by 2 to the power of the shift amount.

- Right Shift (>>): This operation shifts the bits of a number to the right by a specified number of positions. This effectively divides the number by 2 to the power of the shift amount.
-->