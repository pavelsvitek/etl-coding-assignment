import { RecordData } from '../types'

// export function toJSON(records: RecordData[]): string {
//     return JSON.stringify(records, null, 2);
//   }

export function toJSON(records: RecordData[]): string {
  const ordered = records.map(record => {
    return {
      Name: record.Name,
      Address: record.Address,
      Postcode: record.Postcode,
      Phone: record.Phone,
      'Credit Limit': record['Credit Limit'],
      Birthday: record.Birthday
    };
  });

  return JSON.stringify(ordered, null, 2);
}