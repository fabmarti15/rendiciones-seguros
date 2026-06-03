# Rendiciones Salud

Tablero privado para llevar las rendiciones mensuales de salud (Isapre Más Vida + seguros complementarios Sura y Bupa) de Fabián, Jacinta y Vale.

## Cómo funciona
- `datos.json` → fuente de la verdad, **en texto plano, solo local** (está en `.gitignore`, NUNCA se sube).
- `build.js` → cifra `datos.json` con tu clave (AES-256-GCM) y genera `index.html`.
- `index.html` → tablero publicable. Aunque el repo sea público, sin la clave los datos son ilegibles.

## Actualizar (2 formas)

**A) Desde el navegador (sin terminal):**
1. Abre el tablero, entra con tu clave.
2. Botón **✏️ Editar** → edita el JSON → **⬇️ Descargar index.html cifrado**.
3. Sube ese `index.html` a GitHub (reemplaza el anterior).

**B) Desde la terminal:**
```bash
cd "Rendiciones Salud"
# edita datos.json
node build.js "TU_CLAVE"
git add index.html && git commit -m "actualiza rendiciones" && git push
```

## Cambiar la clave
`node build.js "NUEVA_CLAVE"` y vuelve a subir `index.html`.

## Flujo mensual
1. 2º miércoles: rendir en Isapre Más Vida (los 3).
2. Tras aprobación MV → rendir en Sura y Bupa.
3. Marcar estados en el tablero.

Estados: `liquidado` (con `monto`), `ingresado`, `falta`, `verificar`, `novino`, `na`.
