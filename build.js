#!/usr/bin/env node
// Genera la vista local; index.html queda reservado al contenido cifrado.
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
fs.mkdirSync(path.join(DIR, 'tmp'), { recursive: true });
fs.writeFileSync(path.join(DIR, 'tmp', 'tablero-local.html'), out);
console.log('Vista local actualizada: tmp/tablero-local.html');
