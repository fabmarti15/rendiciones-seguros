# Rendiciones Salud

Tablero público para llevar las rendiciones mensuales de salud (Isapre Más Vida + seguros complementarios Sura y Bupa) de Fabián, Jacinta y Vale.

## Cómo funciona
- `datos.json` → fuente de la verdad local (está en `.gitignore`).
- `build.js` → inserta los datos en `index.html`.
- `index.html` → tablero público, sin clave.

## Actualizar (2 formas)

**A) Desde el navegador (sin terminal):**
1. Abre el tablero.
2. Botón **✏️ Editar** → edita el JSON → **⬇️ Descargar index.html**.
3. Sube ese `index.html` a GitHub (reemplaza el anterior).

**B) Desde la terminal (recomendado, sin gastar tokens):**
```bash
cd "Rendiciones Salud"
# edita datos.json con cualquier editor
./publicar.sh "mensaje opcional"
```
`publicar.sh` regenera `index.html` y hace commit+push.

## Flujo mensual
1. 2º miércoles: rendir en Isapre Más Vida (los 3).
2. Tras aprobación MV → rendir en Sura y Bupa.
3. Marcar estados en el tablero.

Estados: `liquidado` (con `monto`), `ingresado`, `falta`, `verificar`, `novino`, `na`.

Para calcular **Costo total**, cada registro atendido debe incluir `monto_documento` con el valor original de la boleta o documento. Si falta, el tablero muestra `—` para evitar cifras falsas.
