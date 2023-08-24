"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
function isArray(obj) {
    return typeof obj === "object" && Array.isArray(obj);
}
exports.isArray = isArray;
