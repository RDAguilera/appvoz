importScripts('./sw-imagenes.js');

const CACHE_NAME = 'appvoz-cache-v14.0';
const urlsToCache = [
  './index.html',
  './frases.html',
  './texto.html',
  './texto_chat.html',
  './evento_interactivo.html',
  './carson/comunicador_educativo.html',
  './construir_frases.html',
  './manifest.json',
  './output.css',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  // Imágenes: la lista se genera sola con "npm run sw:imagenes" (archivo sw-imagenes.js).
  ...self.IMAGENES_APP,
];

// Páginas, CSS, manifest e iconos son imprescindibles: si falta alguno, la instalación falla.
// Imágenes y fuentes se cachean una por una, para que un archivo faltante
// no deje a la app sin modo offline.
const esCore = url => !url.startsWith('http') && !url.startsWith('./img/');

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const unicos = [...new Set(urlsToCache)];
    await cache.addAll(unicos.filter(esCore));
    const resto = unicos.filter(url => !esCore(url));
    const resultados = await Promise.allSettled(resto.map(url => cache.add(url)));
    resultados.forEach((r, i) => {
      if (r.status === 'rejected') console.warn('[SW] No se pudo cachear:', resto[i]);
    });
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== 'google-fonts')
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Cachea fuentes de Google Fonts (iconos y tipografías) para modo offline
  if (event.request.url.startsWith('https://fonts.gstatic.com/') ||
    event.request.url.startsWith('https://fonts.googleapis.com/')) {
    event.respondWith(
      caches.open('google-fonts').then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }
  // Páginas HTML: primero la red (así llegan las actualizaciones); sin conexión, la caché.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          const copia = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
          return networkResponse;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true }))
    );
    return;
  }
  // Resto de recursos: primero la caché; si no está, la red
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(networkResponse => {
        // Lo que se descargue del propio sitio (p. ej. una imagen nueva) queda guardado para usarlo offline.
        const mismoSitio = new URL(event.request.url).origin === self.location.origin;
        if (event.request.method === 'GET' && mismoSitio && networkResponse.ok) {
          const copia = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
        }
        return networkResponse;
      });
    })
  );
});
