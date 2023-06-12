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
