import { isArray } from "./isArray.util";

test("is Array - object", () => {
  const output = isArray({});
  expect(output).toBeFalsy();
});

test("is Array - array", () => {
  const output = isArray([]);
  expect(output).toBeTruthy();
});

test("is Array - string", () => {
  const output = isArray("" as any);
  expect(output).toBeFalsy();
});

test("is Array - map", () => {
  const output = isArray(new Map());
  expect(output).toBeFalsy();
});

test("is Array - set", () => {
  const output = isArray(new Set());
  expect(output).toBeFalsy();
});
