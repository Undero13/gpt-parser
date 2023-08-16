export function camelToUnderscore(key) {
    const haveUnderscore = key.includes("_");
    const haveSpaceSeparator = key.includes(" ");
    if (haveUnderscore)
        return key.toLowerCase();
    if (!haveSpaceSeparator)
        return key.toLowerCase();
    return key.replace(/([A-Z])/g, "_$1").toLowerCase();
}
