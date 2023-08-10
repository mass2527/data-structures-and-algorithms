export function binarySearch(numbers: number[], target: number): boolean {
  let lowIndex = 0;
  let highIndex = numbers.length;

  while (lowIndex < highIndex) {
    const middleIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    const middleValue = numbers[middleIndex];
    if (middleValue === target) {
      return true;
    } else if (middleValue < target) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex;
    }
  }

  return false;
}
