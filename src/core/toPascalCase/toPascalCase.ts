import { toCamelCase } from "../toCamelCase/toCamelCase";

export function toPascalCase(key: string) {
  const camelCaseString = toCamelCase(key);
  return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
}
