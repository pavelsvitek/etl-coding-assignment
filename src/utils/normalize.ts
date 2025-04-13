import { RecordData } from '../types'
import { parseDate } from './parseDate'

export function normalizeRecords(records: RecordData[]): RecordData[] {
  return records.map(record => {
    const updated = { ...record };

    // Versuche beide Varianten abzugreifen
    const raw = record['Credit Limit'] ?? record.CreditLimit ?? '';
    let credit = parseFloat(String(raw).replace(/[^\d.-]/g, ''));

    // Falls der ursprüngliche Key "CreditLimit" war (PRN), umrechnen
    const isPRN = record.hasOwnProperty('CreditLimit');

    if (isPRN) {
      credit = credit / 100;
    }

    updated['Credit Limit'] = credit;
    updated.Birthday = parseDate(String(record.Birthday));
    delete (updated as any).CreditLimit;

    return updated;
  });
}