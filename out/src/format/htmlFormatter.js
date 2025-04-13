"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHTML = toHTML;
function escapeHTML(value) {
    if (value === null || value === undefined)
        return 'null';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
function toHTML(records) {
    if (!records || records.length === 0) {
        return '<table><thead></thead><tbody></tbody></table>';
    }
    //const headers = Object.keys(records[0]);
    const headers = ['Name', 'Address', 'Postcode', 'Phone', 'Credit Limit', 'Birthday'];
    const rows = records.map(record => `<tr>${headers.map(key => `<td>${escapeHTML(record[key])}</td>`).join('')}</tr>`).join('\n');
    return `<table>
    <thead><tr>${headers.map(h => `<th>${escapeHTML(h)}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}
