#!/bin/bash
# Publica el tablero abierto: regenera index.html y lo sube a GitHub.
# Uso: ./publicar.sh ["mensaje de commit"]
set -e
cd "$(dirname "$0")"
node build.js
git add index.html plantilla.html build.js publicar.sh README.md
git commit -m "${1:-Publica tablero abierto}"
git push
echo "✅ Publicado: https://fabmarti15.github.io/rendiciones-seguros/"
