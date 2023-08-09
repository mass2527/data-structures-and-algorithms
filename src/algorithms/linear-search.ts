export function linearSearch(numbers: number[], target: number): boolean {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return true;
    }
  }

  return false;
}
