import { toCamelCase } from "./toCamelCase";

describe("toCamelCase", () => {
  test("from 2 words", () => {
    const output = toCamelCase("first name test");
    expect(output).toEqual("firstNameTest");
  });

  test("from snake case", () => {
    const output = toCamelCase("first_name_test");
    expect(output).toEqual("firstNameTest");
  });

  test("from pascal case", () => {
    const output = toCamelCase("FirstNameTest");
    expect(output).toEqual("firstNameTest");
  });
});
