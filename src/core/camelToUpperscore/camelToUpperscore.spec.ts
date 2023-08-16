
import { camelToUnderscore } from './camelToUnderscore';

describe('camelToUnderscore', () => {
    test('text to lowercase', () => {
      expect(camelToUnderscore('FirsTNamE')).toBe("firstname");
    });

    test('text to snakecase', () => {
        expect(camelToUnderscore('First Name')).toBe("first_name");
      });
  });
