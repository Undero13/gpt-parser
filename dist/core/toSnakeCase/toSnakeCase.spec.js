import { toSnakeCase } from "./toSnakeCase";
describe("toSnakeCase", () => {
    test("from 2 words", () => {
        const output = toSnakeCase("first name");
        expect(output).toEqual("first_name");
    });
    test("from camel case", () => {
        const output = toSnakeCase("firstName");
        expect(output).toEqual("first_name");
    });
    test("from pascal case", () => {
        const output = toSnakeCase("FirstName");
        expect(output).toEqual("first_name");
    });
});
