// example chatgp-output json

import { iterate } from "./core/iterate/iterate";
import { GPTParserJSONParseError, GPTParserOutputEmpty } from "./errors";

export type Options = {
  keyCaseStyle: "camel" | "snake" | "pascal";
  valueCanBeArray?: boolean;
};

export function gptParser(chatGPTOutput: string, options: Options = null) {
  const defaultOptions = {
    keyCaseStyle: "snake",
    valueCanBeArray: false,
    ...options,
  };

  if (!chatGPTOutput) {
    throw new GPTParserOutputEmpty("GPTOutput is empty");
  }

  let parsedOutput: object;

  try {
    parsedOutput = JSON.parse(chatGPTOutput);
  } catch (e) {
    throw new GPTParserJSONParseError(e.message);
  }

  return iterate(parsedOutput, defaultOptions);
}
