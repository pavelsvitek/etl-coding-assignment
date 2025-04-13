import { RecordData } from '../types'
import { parseDate } from './parseDate'

export function normalizeRecords(records: RecordData[]): RecordData[] {
  return records.map(record => {
    const updated = { ...record };

    // Normalize and overwrite the original field name
    const creditRaw = record['Credit Limit'] || record.CreditLimit;
    updated['Credit Limit'] = parseFloat(String(creditRaw).replace(/[^\d.-]/g, ''));

    // Normalize birthday
    updated.Birthday = parseDate(String(record.Birthday));

    // Optional: remove "CreditLimit" if present (from PRN parsing)
    delete (updated as any).CreditLimit;

    return updated;
  });
}