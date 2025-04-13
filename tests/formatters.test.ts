import { toHTML } from '../src/format/htmlFormatter';
import { toJSON } from '../src/format/jsonFormatter';

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
  const output = toHTML(mockData);
  expect(output).toContain('<table>');
  expect(output).toContain('<td>123 Lane</td>');
});


test('formats JSON correctly', () => {
    const output = toJSON(mockData);
    expect(output).toContain('"Name": "Alice"');
    expect(output).toContain('"CreditLimit": 1000');
  });
  