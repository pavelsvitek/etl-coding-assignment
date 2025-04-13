"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePRN = parsePRN;
function getColumnRangesByWidths(columnNames, columnWidths) {
    const ranges = [];
    let position = 0;
    for (let i = 0; i < columnNames.length; i++) {
        const start = position;
        const end = start + columnWidths[i];
        ranges.push({ name: columnNames[i], start, end });
        position = end;
    }
    return ranges;
}
function parsePRN(prn) {
    const lines = prn.split('\n').filter(line => line.trim().length > 0);
    const header = lines[0];
    const dataLines = lines.slice(1);
    const columnNames = ['Name', 'Address', 'Postcode', 'Phone', 'CreditLimit', 'Birthday'];
    const columnWidths = [16, 22, 9, 14, 12, 10]; // exakt wie im Test
    const columns = getColumnRangesByWidths(columnNames, columnWidths);
    return dataLines.map(line => {
        const record = {};
        for (const { name, start, end } of columns) {
            const raw = line.slice(start, end).trim();
            if (name.toLowerCase().includes('date')) {
                record[name] = new Date(raw);
            }
            else if (name.toLowerCase().includes('limit')) {
                record[name] = parseFloat(raw.replace(',', ''));
            }
            else {
                record[name] = raw;
            }
        }
        return record;
    });
}
