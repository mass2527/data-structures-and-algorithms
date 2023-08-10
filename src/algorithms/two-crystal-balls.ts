export function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let index = jumpAmount;

  for (let i = index; i < breaks.length; i += jumpAmount) {
    if (breaks[index]) {
      break;
    }
  }

  for (let j = index - jumpAmount; j < breaks.length; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
