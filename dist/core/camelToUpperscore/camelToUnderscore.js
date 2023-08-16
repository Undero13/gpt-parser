export function camelToUnderscore(key) {
    const haveUnderscore = key.includes("_");
    const haveSpaceSeparator = key.includes(" ");
    if (haveUnderscore)
        return key.toLowerCase();
    if (!haveSpaceSeparator)
        return key.toLowerCase();
    let newKey = key
        .replace(/([A-Z])/g, "_$1")
        .toLowerCase()
        .replaceAll(" ", "");
    if (newKey.startsWith("_"))
        newKey = newKey.replace("_", "");
    return newKey;
}
