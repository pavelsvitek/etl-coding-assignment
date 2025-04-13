"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = toJSON;
function toJSON(records) {
    return JSON.stringify(records, null, 2);
}
