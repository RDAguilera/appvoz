const CACHE_NAME = 'appvoz-cache-v6';
const urlsToCache = [  
  './index.html',
  './frases.html',
  './texto.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
  'https://cdn.tailwindcss.com?plugins=forms,container-queries',
  // Agrega aquí todas las imágenes y recursos locales usados en la app:
  './img/emociones/alegre.png',
  './img/emociones/triste.png',
  './img/emociones/enfadado.png',
  './img/emociones/sorprendido.png',
  './img/emociones/asustado.png',
  './img/emociones/desanimado.png',
  './img/familiares/mamá.png',
  './img/familiares/papá.png',
  './img/familiares/hermana.png',
  './img/familiares/hermano.png',
  './img/familiares/abuela.png',
  './img/familiares/abuelo.png',
  './img/familiares/tía.png',
  './img/familiares/tío.png',
  './img/familiares/prima.png',
  './img/familiares/primo.png',
  './img/respuestas/sí.png',
  './img/respuestas/no.png',
  './img/respuestas/estoy bien.png',
  './img/respuestas/no lo sé.png',
  './img/respuestas/ayuda.png',
  './img/respuestas/gracias.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
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
  // Resto de recursos: cache normal
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
