export function toCamelCase(key: string) {
  return key
    .replaceAll("_", " ")
    .replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) =>
      index == 0 ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .replace(/\s+/g, "");
}
