function swap(numbers: number[], indexA: number, indexB: number) {
  const temp = numbers[indexA];
  numbers[indexA] = numbers[indexB];
  numbers[indexB] = temp;
}

function partition(numbers: number[], lowIndex: number, highIndex: number) {
  const pivot = numbers[highIndex];

  let index = lowIndex - 1;

  for (let i = lowIndex; i < highIndex; i++) {
    if (numbers[i] <= pivot) {
      index++;
      swap(numbers, i, index);
    }
  }

  index++;
  swap(numbers, index, highIndex);

  return index;
}

function qs(numbers: number[], lowIndex: number, highIndex: number) {
  if (lowIndex >= highIndex) {
    return;
  }

  const pivotIndex = partition(numbers, lowIndex, highIndex);
  qs(numbers, lowIndex, pivotIndex - 1);
  qs(numbers, pivotIndex + 1, highIndex);
}

export function quickSort(numbers: number[]) {
  qs(numbers, 0, numbers.length - 1);
}
