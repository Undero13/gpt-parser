"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
function toCamelCase(key) {
    return key
        .replaceAll("_", " ")
        .replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) => index == 0 ? letter.toLowerCase() : letter.toUpperCase())
        .replace(/\s+/g, "");
}
exports.toCamelCase = toCamelCase;
