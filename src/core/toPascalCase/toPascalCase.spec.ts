import { toPascalCase } from "./toPascalCase";

describe("toPascalCase", () => {
  test("from 2 words", () => {
    const output = toPascalCase("first name")
    expect(output).toEqual("FirstName");
  });

  test("from snake case", () => {
    const output = toPascalCase("first_name")
    expect(output).toEqual("FirstName");
  });

  test("from camel case", () => {
    const output = toPascalCase("firstName")
    expect(output).toEqual("FirstName");
  });
});
