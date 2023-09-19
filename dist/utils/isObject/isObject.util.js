"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
function isObject(obj) {
    return (Object.prototype.toString.call(obj) === "[object Object]" && obj !== null);
}
exports.isObject = isObject;
