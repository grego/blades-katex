#!/usr/bin/env node

import renderMathInText from '../src/auto-render.js';
import fs from 'fs';

let data = fs.readFileSync(0, 'utf-8');
let options = {};
options.delimiters = [
    {left: "$$", right: "$$", display: true},
    {left: "$", right: "$", display: false},
];

console.log(renderMathInText(data, options));
