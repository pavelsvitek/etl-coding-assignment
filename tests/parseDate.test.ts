import { parseDate } from '../src/utils/parseDate';

test('parses DD/MM/YYYY to ISO', () => {
  expect(parseDate('01/01/1987')).toBe('1987-01-01');
});

test('throws on invalid date', () => {
  expect(() => parseDate('not-a-date')).toThrow();
});