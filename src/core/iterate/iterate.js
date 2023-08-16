"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate = void 0;
var utils_1 = require("../../utils");
var camelToUnderscore_1 = require("../camelToUpperscore/camelToUnderscore");
function iterate(object) {
    var stack = [object];
    var result = {};
    var _loop_1 = function () {
        var currentObj = stack.pop();
        var currentKeys = Object.keys(currentObj);
        currentKeys.forEach(function (key) {
            if ((0, utils_1.isObject)(currentObj[key]) && !(0, utils_1.isArray)(currentObj[key])) {
                stack.push(currentObj[key]);
            }
            else if ((0, utils_1.isArray)(currentObj[key])) {
                result[(0, camelToUnderscore_1.camelToUnderscore)(key)] = currentObj[key].join(", ");
            }
            else {
                result[(0, camelToUnderscore_1.camelToUnderscore)(key)] = currentObj[key];
            }
        });
    };
    while ((stack === null || stack === void 0 ? void 0 : stack.length) > 0) {
        _loop_1();
    }
    return result;
}
exports.iterate = iterate;
