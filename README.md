# Rendiciones Salud

Tablero de reembolsos protegido con clave. La página publicada contiene únicamente el tablero cifrado.

- `datos.json`: fuente local, excluida de Git.
- `node build.js`: actualiza la vista local `tmp/tablero-local.html`, excluida de Git.
- `./publicar.sh`: usa la clave del llavero local sin pedirla, cifra y publica mediante el comando canónico `publica`.
- `index.html`: salida cifrada AES-256-GCM / PBKDF2-SHA256, 200.000 iteraciones.

Nunca subir la vista local, los documentos ni la clave. El cifrado nuevo no modifica el historial existente.

La activación inicial usa `rendidor/publicacion_local.py`: valida la clave actual y la guarda en el llavero de este Mac. Las publicaciones siguientes usan `./publicar.sh`; no requieren ingresar la clave ni repetir la activación. Si el llavero está bloqueado o la clave no está disponible, se detiene sin pedirla ni publicar en claro. La clave para abrir el tablero sigue siendo la misma.
