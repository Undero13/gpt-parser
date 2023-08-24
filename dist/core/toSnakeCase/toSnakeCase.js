"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = void 0;
const toCamelCase_1 = require("../toCamelCase/toCamelCase");
function toSnakeCase(key) {
    const camelCaseString = (0, toCamelCase_1.toCamelCase)(key);
    return camelCaseString.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
exports.toSnakeCase = toSnakeCase;
