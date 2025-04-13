import { parsePRN } from '../src/parser/prnParser';

function pad(value: string, width: number): string {
  return value.padEnd(width, ' ');
}

test('parses PRN correctly', () => {
  const header = [
    pad('Name', 16),
    pad('Address', 22),
    pad('Postcode', 9),
    pad('Phone', 14),
    pad('CreditLimit', 12),
    pad('Birthday', 10)
  ].join('');

  const row = [
    pad('Alice', 16),
    pad('123 Lane', 22),
    pad('12345', 9),
    pad('555-1234', 14),
    pad('1,000.00', 12),
    pad('1990-01-01', 10)
  ].join('');

  const input = `${header}\n${row}`;

  const output = parsePRN(input);

  expect(output).toEqual([
    {
      Name: 'Alice',
      Address: '123 Lane',
      Postcode: '12345',
      Phone: '555-1234',
      CreditLimit: 1000,
      Birthday: '1990-01-01'
    }
  ]);
});