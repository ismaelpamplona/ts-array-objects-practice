import { extractUserInfo } from "../src/05_objectDestructuring";

test("extract user info using object destructuring", () => {
  const user = {
    name: "Tim Tones",
    age: 100,
  };
  expect(extractUserInfo(user)).toBe("Name: Tim Tones, Age: 100");
});
