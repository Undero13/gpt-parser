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
  test_value_active: "test",
  testValueTest: "test",
  TestValueValue: "test" 
});

describe("gptParser", () => {
  test("transform JSON to valid object", () => {
    expect(gptParser(output, {keyCaseStyle: "snake"})).toEqual({
      age: 23,
      city: "TestCity",
      country: "TestCountry",
      country_code: "testCode",
      hobbies: "Music, It, Games",
      last_name: "TestLastName",
      name: "TestName",
      nick_name: "TestNickName",
      street: "TestStreet",
      test_value: true,
      test_value_active: "test",
      test_value_test: "test",
      test_value_value: "test",
    });
  });

  test("catch empty chatgtp output", () => {
    try {
      gptParser("", {keyCaseStyle: "snake"});
    } catch (e) {
      expect(e).toEqual(new GPTParserOutputEmpty("GPTOutput is empty"));
    }
  });

  test("catch json error", () => {
    try {
      gptParser("{unvalid json}", {keyCaseStyle: "snake"});
    } catch (e) {
      expect(e).toEqual(
        new GPTParserJSONParseError("Unexpected token u in JSON at position 1"),
      );
    }
  });
});
