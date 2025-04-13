"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = parseCSV;
const sync_1 = require("csv-parse/sync");
function parseCSV(input) {
    return (0, sync_1.parse)(input, { columns: true, skip_empty_lines: true });
}
