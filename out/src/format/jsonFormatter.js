"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = toJSON;
// export function toJSON(records: RecordData[]): string {
//     return JSON.stringify(records, null, 2);
//   }
function toJSON(records) {
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
