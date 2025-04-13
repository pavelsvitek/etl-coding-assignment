#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvParser_1 = require("./parser/csvParser");
const prnParser_1 = require("./parser/prnParser");
const normalize_1 = require("./utils/normalize");
const jsonFormatter_1 = require("./format/jsonFormatter");
const htmlFormatter_1 = require("./format/htmlFormatter");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const [, , format, outputFormat] = process.argv;
        const input = yield new Promise((resolve, reject) => {
            let data = '';
            process.stdin.setEncoding('utf8');
            process.stdin.on('data', chunk => data += chunk);
            process.stdin.on('end', () => resolve(data));
            process.stdin.on('error', reject);
        });
        let records;
        if (format === 'csv') {
            records = (0, csvParser_1.parseCSV)(input);
        }
        else if (format === 'prn') {
            records = (0, prnParser_1.parsePRN)(input);
        }
        else {
            throw new Error('Invalid format: use csv or prn');
        }
        const normalized = (0, normalize_1.normalizeRecords)(records);
        if (outputFormat === 'json') {
            process.stdout.write((0, jsonFormatter_1.toJSON)(normalized));
        }
        else if (outputFormat === 'html') {
            process.stdout.write((0, htmlFormatter_1.toHTML)(normalized));
        }
        else {
            throw new Error('Invalid output format: use json or html');
        }
    });
}
main();
