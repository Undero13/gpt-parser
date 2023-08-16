import { isObject, isArray } from "../../utils";
import { camelToUnderscore } from "../camelToUpperscore/camelToUnderscore";

export function iterate(object: object) {
  const stack = [object];
  const result = {};

  while (stack?.length > 0) {
    const currentObj = stack.pop();
    const currentKeys = Object.keys(currentObj);

    currentKeys.forEach((key) => {
      if (isObject(currentObj[key]) && !isArray(currentObj[key])) {
        stack.push(currentObj[key]);
      } else if (isArray(currentObj[key])) {
        result[camelToUnderscore(key)] = currentObj[key].join(", ");
      } else {
        result[camelToUnderscore(key)] = currentObj[key];
      }
    });
  }

  return result;
}
