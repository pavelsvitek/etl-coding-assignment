import { RecordData } from '../types'

export function toJSON(records: RecordData[]): string {
    return JSON.stringify(records, null, 2);
  }