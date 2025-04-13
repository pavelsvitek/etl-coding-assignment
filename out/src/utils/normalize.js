"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeRecords = normalizeRecords;
const parseDate_1 = require("./parseDate");
function normalizeRecords(records) {
    return records.map(record => {
        var _a, _b;
        const updated = Object.assign({}, record);
        // Versuche beide Varianten abzugreifen
        const raw = (_b = (_a = record['Credit Limit']) !== null && _a !== void 0 ? _a : record.CreditLimit) !== null && _b !== void 0 ? _b : '';
        let credit = parseFloat(String(raw).replace(/[^\d.-]/g, ''));
        // Falls der ursprüngliche Key "CreditLimit" war (PRN), umrechnen
        const isPRN = record.hasOwnProperty('CreditLimit');
        if (isPRN) {
            credit = credit / 100;
        }
        updated['Credit Limit'] = credit;
        updated.Birthday = (0, parseDate_1.parseDate)(String(record.Birthday));
        delete updated.CreditLimit;
        return updated;
    });
}
