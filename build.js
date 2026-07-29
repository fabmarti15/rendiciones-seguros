#!/usr/bin/env node
// Inserta datos.json en index.html y genera el tablero público.
// Uso: node build.js
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const data = fs.readFileSync(path.join(DIR, 'datos.json'), 'utf8');
JSON.parse(data); // valida que el JSON esté bien antes de cifrar

const tpl = fs.readFileSync(path.join(DIR, 'plantilla.html'), 'utf8');
const encoded = JSON.stringify(data)
  .replace(/</g, '\\u003c')
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029');
const out = tpl.replace('"__DATA_JSON__"', encoded);
fs.writeFileSync(path.join(DIR, 'index.html'), out);
console.log('✅ index.html público generado (' + data.length + ' bytes de datos).');
