// Genera sw-imagenes.js con todas las imágenes que usan las páginas de la app,
// para que el service worker las guarde y funcionen sin conexión.
//
// Uso: npm run sw:imagenes   (correr cada vez que se agregan o cambian pictogramas)

const fs = require('fs');
const path = require('path');

const raiz = path.resolve(__dirname, '..');
const paginas = [
  ...fs.readdirSync(raiz).filter(f => f.endsWith('.html')),
  ...fs.readdirSync(path.join(raiz, 'carson')).filter(f => f.endsWith('.html')).map(f => 'carson/' + f),
].filter(f => !/_Old\.html$/.test(f));

const patron = /["'(]((?:\.\.\/|\.\/)?img\/[^"'()]+?\.(?:png|svg|jpe?g|webp|gif))["')]/gi;
const encontradas = new Set();
const faltantes = new Set();

for (const pagina of paginas) {
  const html = fs.readFileSync(path.join(raiz, pagina), 'utf8');
  const carpeta = path.dirname(pagina);
  for (const [, ref] of html.matchAll(patron)) {
    const relativa = path.posix.normalize(path.posix.join(carpeta, ref));
    if (fs.existsSync(path.join(raiz, relativa))) encontradas.add('./' + relativa);
    else faltantes.add(`${relativa}  (en ${pagina})`);
  }
}

const lista = [...encontradas].sort();
const salida =
  '// ARCHIVO GENERADO por scripts/generar-lista-imagenes.js — no editar a mano.\n' +
  `// ${lista.length} imágenes usadas por las páginas de la app.\n` +
  'self.IMAGENES_APP = ' + JSON.stringify(lista, null, 2) + ';\n';

fs.writeFileSync(path.join(raiz, 'sw-imagenes.js'), salida);
console.log(`sw-imagenes.js: ${lista.length} imágenes.`);
if (faltantes.size) {
  console.log(`\nReferencias a imágenes que no existen (${faltantes.size}):`);
  for (const f of faltantes) console.log('  - ' + f);
}
