import { isObject } from "./isObject.util";
test("isObject - object", () => {
    const output = isObject({});
    expect(output).toBeTruthy();
});
test("isObject - array", () => {
    const output = isObject([]);
    expect(output).toBeFalsy();
});
test("isObject - string", () => {
    const output = isObject("");
    expect(output).toBeFalsy();
});
test("isObject - map", () => {
    const output = isObject(new Map());
    expect(output).toBeFalsy();
});
test("isObject - set", () => {
    const output = isObject(new Set());
    expect(output).toBeFalsy();
});
