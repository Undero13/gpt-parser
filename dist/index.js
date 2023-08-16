// example chatgp-output json
import { iterate } from "./core/iterate/iterate";
import { GPTParserJSONParseError, GPTParserOutputEmpty } from "./errors";
const output = JSON.stringify({
    "name": "Patryk",
    "lastName": "Loter",
    "nick_name": "Undero",
    "Test_Value": true,
    "age": 23,
    "address": {
        "Street": "Kościuszki",
        "city": "Warszawa",
        "country": "Polska",
        "country_code": "PL"
    },
    hobbies: [
        "Music",
        "It",
        "Games"
    ]
});
function gptParser(chatGPTOutput) {
    if (!chatGPTOutput) {
        throw new GPTParserOutputEmpty('GPTOutput is empty');
    }
    let parsedOutput;
    try {
        parsedOutput = JSON.parse(chatGPTOutput);
    }
    catch (e) {
        throw new GPTParserJSONParseError(e);
    }
    return iterate(parsedOutput);
}
console.log(gptParser(output));
