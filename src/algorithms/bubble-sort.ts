export function bubbleSort(numbers: number[]) {
  const result = [...numbers];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
      const a = result[j];
      const b = result[j + 1];

      if (a > b) {
        result[j] = b;
        result[j + 1] = a;
      }
    }
  }

  return result;
}
