export const sumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => (acc += num), 0);
};
