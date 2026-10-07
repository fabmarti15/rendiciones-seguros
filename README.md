# Rendiciones Salud

Tablero de reembolsos protegido con clave. La página publicada contiene únicamente el tablero cifrado.

- `datos.json`: fuente local, excluida de Git.
- `node build.js`: actualiza la vista local `tmp/tablero-local.html`, excluida de Git.
- `./publicar.sh`: pide la clave localmente, cifra y publica mediante el comando canónico `publica`.
- `index.html`: salida cifrada AES-256-GCM / PBKDF2-SHA256, 200.000 iteraciones.

Nunca subir la vista local, los documentos ni la clave. El cifrado nuevo no modifica el historial existente.
