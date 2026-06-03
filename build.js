#!/usr/bin/env node
// Cifra datos.json con una clave y genera index.html (seguro para publicar en GitHub).
// Uso:  node build.js "TU_CLAVE"
//   o:  RENDICIONES_CLAVE="TU_CLAVE" node build.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DIR = __dirname;
const password = process.argv[2] || process.env.RENDICIONES_CLAVE;
if (!password) {
  console.error('Falta la clave.  Uso:  node build.js "TU_CLAVE"');
  process.exit(1);
}

const ITER = 200000;
const data = fs.readFileSync(path.join(DIR, 'datos.json'), 'utf8');
JSON.parse(data); // valida que el JSON esté bien antes de cifrar

const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(password, salt, ITER, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const ct = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
const tag = cipher.getAuthTag();
const payload = {
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  iter: ITER,
  data: Buffer.concat([ct, tag]).toString('base64') // AES-GCM: ct||tag (compatible Web Crypto)
};

const tpl = fs.readFileSync(path.join(DIR, 'plantilla.html'), 'utf8');
const out = tpl.replace('"__PAYLOAD__"', JSON.stringify(payload));
fs.writeFileSync(path.join(DIR, 'index.html'), out);
console.log('✅ index.html generado y cifrado (' + data.length + ' bytes de datos).');
