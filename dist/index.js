"use strict";
// example chatgp-output json
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptParser = void 0;
const iterate_1 = require("./core/iterate/iterate");
const errors_1 = require("./errors");
function gptParser(chatGPTOutput, options = null) {
    const defaultOptions = {
        keyCaseStyle: "snake",
        valueCanBeArray: false,
        ...options,
    };
    if (!chatGPTOutput) {
        throw new errors_1.GPTParserOutputEmpty("GPTOutput is empty");
    }
    let parsedOutput;
    try {
        parsedOutput = JSON.parse(chatGPTOutput);
    }
    catch (e) {
        throw new errors_1.GPTParserJSONParseError(e.message);
    }
    return (0, iterate_1.iterate)(parsedOutput, defaultOptions);
}
exports.gptParser = gptParser;
