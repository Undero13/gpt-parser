import { toSnakeCase } from "./toSnakeCase";

describe("toSnakeCase", () => {
  test("from 2 words", () => {
    const output = toSnakeCase("first name test")
    expect(output).toEqual("first_name_test");
  });

  test("from camel case", () => {
    const output = toSnakeCase("firstNameTest")
    expect(output).toEqual("first_name_test");
  });

  test("from pascal case", () => {
    const output = toSnakeCase("FirstNameTest")
    expect(output).toEqual("first_name_test");
  });
});
