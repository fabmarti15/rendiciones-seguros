#!/bin/bash
# Publica el tablero: cifra datos.json, regenera index.html y lo sube a GitHub.
# Uso: ./publicar.sh "TU_CLAVE" ["mensaje de commit"]
set -e
cd "$(dirname "$0")"
if [ -z "$1" ]; then
  echo "Uso: ./publicar.sh \"TU_CLAVE\" [\"mensaje de commit\"]"
  exit 1
fi
node build.js "$1"
git add index.html
git commit -m "${2:-Actualiza rendiciones}"
git push
echo "✅ Publicado: https://fabmarti15.github.io/rendiciones-seguros/"
