import { parseCSV } from '../src/parser/csvParser';

test('parses CSV with multiple rows correctly', () => {
  const input =
    'Name,Address,Postcode,Phone,Credit Limit,Birthday\n' +
    '"Johnson, John",Voorstraat 32,3122gg,020 3849381,10000,01/01/1987\n' +
    '"Anderson, Paul",Dorpsplein 3A,4532 AA,030 3458986,109093,03/12/1965';

  const output = parseCSV(input);

  expect(output).toEqual([
    {
      Name: 'Johnson, John',
      Address: 'Voorstraat 32',
      Postcode: '3122gg',
      Phone: '020 3849381',
      'Credit Limit': '10000',
      Birthday: '01/01/1987'
    },
    {
      Name: 'Anderson, Paul',
      Address: 'Dorpsplein 3A',
      Postcode: '4532 AA',
      Phone: '030 3458986',
      'Credit Limit': '109093',
      Birthday: '03/12/1965'
    }
  ]);
});