export function toCamelCase(key) {
    return key
        .replace("_", " ")
        .replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) => index == 0 ? letter.toLowerCase() : letter.toUpperCase())
        .replace(/\s+/g, '');
}
