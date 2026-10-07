#!/bin/bash
# Publicación cifrada por el comando canónico publica.
set -euo pipefail
cd "$(dirname "$0")"
exec ./rendidor/publicar-cifrado.sh "${1:-Actualiza tablero cifrado}"
