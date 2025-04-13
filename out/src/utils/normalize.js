"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeRecords = normalizeRecords;
const parseDate_1 = require("./parseDate");
function normalizeRecords(records) {
    return records.map(record => {
        const updated = Object.assign({}, record);
        // Normalize and overwrite the original field name
        const creditRaw = record['Credit Limit'] || record.CreditLimit;
        updated['Credit Limit'] = parseFloat(String(creditRaw).replace(/[^\d.-]/g, ''));
        // Normalize birthday
        updated.Birthday = (0, parseDate_1.parseDate)(String(record.Birthday));
        // Optional: remove "CreditLimit" if present (from PRN parsing)
        delete updated.CreditLimit;
        return updated;
    });
}
