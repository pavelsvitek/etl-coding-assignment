"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseDate_1 = require("../src/utils/parseDate");
test('parses DD/MM/YYYY to ISO', () => {
    expect((0, parseDate_1.parseDate)('01/01/1987')).toBe('1987-01-01');
});
test('throws on invalid date', () => {
    expect(() => (0, parseDate_1.parseDate)('not-a-date')).toThrow();
});
