"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const fs_1 = require("fs");
const fileContent = (0, fs_1.readFileSync)('file.txt', 'utf-8');
console.log(fileContent);
