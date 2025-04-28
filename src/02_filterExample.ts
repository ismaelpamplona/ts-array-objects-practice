export const filterEvenNumbers = (numbers: number[]): number[] => {
  const result = numbers.filter((num) => num % 2 === 0);
  return result;
};
