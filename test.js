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
