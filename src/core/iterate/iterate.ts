import { Options } from "../..";
import { isObject, isArray } from "../../utils";
import { toCamelCase } from "../toCamelCase/toCamelCase";
import { toPascalCase } from "../toPascalCase/toPascalCase";
import { toSnakeCase } from "../toSnakeCase/toSnakeCase";

export function iterate(object: object, options: Options) {
  const stack = [object];
  const result = {};
  let caseStyleFunction = null;

  switch (options.keyCaseStyle) {
    case "camel":
      caseStyleFunction = toCamelCase;
      break;
    case "snake":
      caseStyleFunction = toSnakeCase;
      break;
    case "pascal":
      caseStyleFunction = toPascalCase;
  }

  while (stack?.length > 0) {
    const currentObj = stack.pop();
    const currentKeys = Object.keys(currentObj);

    currentKeys.forEach((key) => {
      if (isObject(currentObj[key]) && !isArray(currentObj[key])) {
        stack.push(currentObj[key]);
      } else if (isArray(currentObj[key])) {
        if (options.valueCanBeArray)
          result[caseStyleFunction(key)] = currentObj[key];
        else result[caseStyleFunction(key)] = currentObj[key].join(", ");
      } else {
        result[caseStyleFunction(key)] = currentObj[key];
      }
    });
  }

  return result;
}
