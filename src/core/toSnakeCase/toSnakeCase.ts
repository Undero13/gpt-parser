import { toCamelCase } from "../toCamelCase/toCamelCase";

export function toSnakeCase(key: string) {
  const camelCaseString = toCamelCase(key);
  return camelCaseString.replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`,
  );
}
