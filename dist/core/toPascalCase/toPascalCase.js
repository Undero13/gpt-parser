"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
const toCamelCase_1 = require("../toCamelCase/toCamelCase");
function toPascalCase(key) {
    const camelCaseString = (0, toCamelCase_1.toCamelCase)(key);
    return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
}
exports.toPascalCase = toPascalCase;
