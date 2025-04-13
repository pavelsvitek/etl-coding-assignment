import { parse } from 'csv-parse/sync';
import { RecordData } from '../types'

export function parseCSV(input: string): RecordData[] {
  return parse(input, { columns: true, skip_empty_lines: true });
}