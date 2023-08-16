import { gptParser } from ".";
import { GPTParserJSONParseError, GPTParserOutputEmpty } from "./errors";

const output = JSON.stringify({
  name: "TestName",
  lastName: "TestLastName",
  nick_name: "TestNickName",
  Test_Value: true,
  age: 23,
  address: {
    Street: "TestStreet",
    city: "TestCity",
    country: "TestCountry",
    country_code: "testCode",
  },
  hobbies: ["Music", "It", "Games"],
});

describe("gptParser", () => {
  test("transform JSON to valid object", () => {
    expect(gptParser(output)).toBe({
      age: 23,
      city: "TestCity",
      country: "TestCountry",
      country_code: "testCode",
      hobbies: "Music, It, Games",
      lastname: "TestLastName",
      name: "TestName",
      nick_name: "TestNickName",
      street: "TestStreet",
      test_value: true,
    });
  });

  test("catch empty chatgtp output", () => {
    try {
      gptParser("");
    } catch (e) {
      expect(e).toEqual(new GPTParserOutputEmpty("GPTOutput is empty"));
    }
  });

  test("catch json error", () => {
    try {
      gptParser("{unvalid json}");
    } catch (e) {
      expect(e).toEqual(
        new GPTParserJSONParseError("Unexpected token u in JSON at position 1"),
      );
    }
  });
});
