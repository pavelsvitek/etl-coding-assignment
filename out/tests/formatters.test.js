"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlFormatter_1 = require("../src/format/htmlFormatter");
const jsonFormatter_1 = require("../src/format/jsonFormatter");
const mockData = [
    {
        Name: 'Alice',
        Address: '123 Lane',
        Postcode: '12345',
        Phone: '555-1234',
        CreditLimit: 1000,
        Birthday: '1990-01-01'
    }
];
test('formats HTML correctly', () => {
    const output = (0, htmlFormatter_1.toHTML)(mockData);
    expect(output).toContain('<table>');
    expect(output).toContain('<td>123 Lane</td>');
});
test('formats JSON correctly', () => {
    const output = (0, jsonFormatter_1.toJSON)(mockData);
    expect(output).toContain('"Name": "Alice"');
    expect(output).toContain('"CreditLimit": 1000');
});
