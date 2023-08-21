import { toCamelCase } from "./toCamelCase";
describe("toCamelCase", () => {
    test("from 2 words", () => {
        const output = toCamelCase("first name");
        expect(output).toEqual("firstName");
    });
    test("from snake case", () => {
        const output = toCamelCase("first_name");
        expect(output).toEqual("firstName");
    });
    test("from pascal case", () => {
        const output = toCamelCase("FirstName");
        expect(output).toEqual("firstName");
    });
});
