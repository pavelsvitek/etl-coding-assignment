#!/usr/bin/env node
import { parseCSV } from './parser/csvParser';
import { parsePRN } from './parser/prnParser';
import { normalizeRecords } from './utils/normalize';
import { toJSON } from './format/jsonFormatter';
import { toHTML } from './format/htmlFormatter';

async function main() {
  const [,, format, outputFormat] = process.argv;

  const input = await new Promise<string>((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', reject);
  });

  let records;

  if (format === 'csv') {
    records = parseCSV(input);
  } else if (format === 'prn') {
    records = parsePRN(input);
  } else {
    throw new Error('Invalid format: use csv or prn');
  }

  const normalized = normalizeRecords(records);

  if (outputFormat === 'json') {
    process.stdout.write(toJSON(normalized));
  } else if (outputFormat === 'html') {
    process.stdout.write(toHTML(normalized));
  } else {
    throw new Error('Invalid output format: use json or html');
  }
}

main();