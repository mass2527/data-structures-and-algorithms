export function binarySearch(numbers: number[], target: number): boolean {
  if (numbers.length === 0) {
    return false;
  }

  let data = numbers;

  while (data.length > 0) {
    if (data.length === 1) {
      if (data[0] === target) {
        return true;
      } else {
        return false;
      }
    }

    if (isEven(data.length)) {
      if (target <= data[data.length / 2 - 1]) {
        data = data.slice(0, data.length / 2);
      } else {
        data = data.slice(data.length / 2, data.length);
      }
    } else {
      const centerIndex = Math.floor(data.length / 2);
      const centerValue = data[centerIndex];

      if (centerValue === target) {
        return true;
      } else {
        if (target < centerValue) {
          data = data.slice(0, centerIndex);
        } else {
          data = data.slice(centerIndex + 1, data.length);
        }
      }
    }
  }

  return false;
}

const isEven = (value: number) => {
  return value % 2 === 0;
};
