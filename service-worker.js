const CACHE_NAME = 'appvoz-cache-v1';
const urlsToCache = [
  './',
  './home.html',
  './frases.html',
  './texto.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
  'https://cdn.tailwindcss.com?plugins=forms,container-queries'
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
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
