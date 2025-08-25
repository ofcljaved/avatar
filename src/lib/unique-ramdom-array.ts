export function getUniqueRandomArray(
  size: number,
  min: number = 1,
  max: number = 60
) {
  const numbers = new Set<number>();
  while (numbers.size < size) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(rand);
  }
  return [...numbers];
}

