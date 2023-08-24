"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate = void 0;
const utils_1 = require("../../utils");
const toCamelCase_1 = require("../toCamelCase/toCamelCase");
const toPascalCase_1 = require("../toPascalCase/toPascalCase");
const toSnakeCase_1 = require("../toSnakeCase/toSnakeCase");
function iterate(object, options) {
    const stack = [object];
    const result = {};
    let caseStyleFunction = null;
    switch (options.keyCaseStyle) {
        case "camel":
            caseStyleFunction = toCamelCase_1.toCamelCase;
            break;
        case "snake":
            caseStyleFunction = toSnakeCase_1.toSnakeCase;
            break;
        case "pascal":
            caseStyleFunction = toPascalCase_1.toPascalCase;
    }
    while (stack?.length > 0) {
        const currentObj = stack.pop();
        const currentKeys = Object.keys(currentObj);
        currentKeys.forEach((key) => {
            if ((0, utils_1.isObject)(currentObj[key]) && !(0, utils_1.isArray)(currentObj[key])) {
                stack.push(currentObj[key]);
            }
            else if ((0, utils_1.isArray)(currentObj[key])) {
                result[caseStyleFunction(key)] = currentObj[key].join(", ");
            }
            else {
                result[caseStyleFunction(key)] = currentObj[key];
            }
        });
    }
    return result;
}
exports.iterate = iterate;
