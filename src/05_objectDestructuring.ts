export const extractUserInfo = (user: {
  name: string;
  age: number;
}): string => {
  const { name, age } = user;
  return `Name: ${name}, Age: ${age}`;
};
