export type Options = {
    keyCaseStyle: "camel" | "snake" | "pascal";
    valueCanBeArray?: boolean;
};
export declare function gptParser(chatGPTOutput: string, options?: Options): {};
