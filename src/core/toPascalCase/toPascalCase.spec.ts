import { toPascalCase } from "./toPascalCase";

describe("toPascalCase", () => {
  test("from 2 words", () => {
    const output = toPascalCase("first name test");
    expect(output).toEqual("FirstNameTest");
  });

  test("from snake case", () => {
    const output = toPascalCase("first_name_test");
    expect(output).toEqual("FirstNameTest");
  });

  test("from camel case", () => {
    const output = toPascalCase("firstNameTest");
    expect(output).toEqual("FirstNameTest");
  });
});
