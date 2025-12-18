const CACHE_NAME = 'appvoz-cache-v13.7';
const urlsToCache = [
  './index.html',
  './frases.html',
  './texto_chat.html',
  './carson/comunicador_educativo.html',
  './construir_frases.html',
  './manifest.json',
  './output.css',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
  //'https://cdn.tailwindcss.com?plugins=forms,container-queries',
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
  './img/respuestas/gracias.png',

  './img/necesidades/ayuda.png',
  './img/necesidades/médico.png',
  './img/necesidades/hambre.png',
  './img/necesidades/descansar.png',
  './img/necesidades/baños.png',

  './img/escuela/arte.png',
  './img/escuela/bolígrafo.png',
  './img/escuela/carpeta con anillos.png',
  './img/escuela/libro.png',
  './img/escuela/cuaderno.png',
  './img/escuela/cartuchera.png',
  './img/escuela/lápiz.png',
  './img/escuela/borrador.png',
  './img/escuela/regla.png',
  './img/escuela/tijera.png',
  './img/escuela/calendario.png',
  './img/escuela/cartulina.png',
  './img/escuela/ciencias sociales.png',
  './img/escuela/clase de geometría.png',
  './img/escuela/clase de lengua y literatura.png',
  './img/escuela/clase de matemáticas.png',
  './img/escuela/clase de tecnología.png',
  './img/escuela/naturales.png',
  './img/escuela/calse de música.png',
  './img/escuela/educación física.png',
  './img/escuela/educación artística.png',
  './img/escuela/cola.png',
  './img/escuela/compás.png',
  './img/escuela/cuaderno de comunicación.png',
  './img/escuela/cubos apilables.png',
  './img/escuela/cuento.png',
  './img/escuela/diccionario.png',
  './img/escuela/escuadra.png',
  './img/escuela/espacios.png',
  './img/escuela/etiqueta.png',
  './img/escuela/goma.png',
  './img/escuela/huerta.png',
  './img/escuela/inglés.png',
  './img/escuela/lápices de colores.png',
  './img/escuela/libro.png',
  './img/escuela/material escolar.png',
  './img/escuela/mesa de colegio.png',
  './img/escuela/mochila.png',
  './img/escuela/papel.png',
  './img/escuela/papeles.png',
  './img/escuela/pintura.png',
  './img/escuela/pincel.png',
  './img/escuela/pintura.png',
  './img/escuela/pizarrón.png',
  './img/escuela/plastilina.png',
  './img/escuela/recreo.png',
  './img/escuela/yoga.png',
  './img/escuela/proyecto.png',
  './img/escuela/tecnología.png',
  './img/escuela/rotulador.png',
  './img/escuela/sacapuntas.png',
  './img/escuela/silla de colegio.png',
  './img/escuela/témperas.png',
  './img/escuela/tiza.png',

  // Indumentaria Nueva
  './img/indumentaria/remera.png',
  './img/indumentaria/camisa-manga-corta.png',
  './img/indumentaria/camisa-polo.png',
  './img/indumentaria/camiseta-dama.png',
  './img/indumentaria/camiseta-sin-mangas.png',
  './img/indumentaria/calsa-dama.png',
  './img/indumentaria/pantalones-ajustados.png',
  './img/indumentaria/camiseta-de-futbol.png',
  './img/indumentaria/camisa.png', // Existentes
  './img/indumentaria/vaqueros.png',
  './img/indumentaria/zapatos.png',
  './img/indumentaria/indumentaria.png',

  // Alimentos Nuevos
  './img/alimentos/banana_ia_sf.png',
  './img/alimentos/barra_cereales.png',
  './img/alimentos/budin.png',
  './img/alimentos/gaseosa.png',
  './img/alimentos/hamburguesa.png',
  './img/alimentos/helado.png',
  './img/alimentos/limonada.png',
  './img/alimentos/manzana.png',
  './img/alimentos/naranja.png',
  './img/alimentos/pancho.png',
  './img/alimentos/papas-fritas.png',
  './img/alimentos/pera.png',
  './img/alimentos/pizza.png',
  './img/alimentos/sandwich_pollo-sf.png',
  // Alimentos existentes
  './img/alimentos/agua.png',
  './img/alimentos/alimentos.png',
  './img/alimentos/arroz.png',
  './img/alimentos/carne.png',
  './img/alimentos/cereales.png',
  './img/alimentos/fruta.png',
  './img/alimentos/galletas.png',
  './img/alimentos/huevo.png',
  './img/alimentos/leche.png',
  './img/alimentos/pan.png',
  './img/alimentos/pescado.png',
  './img/alimentos/pollo.png',
  './img/alimentos/queso.png',
  './img/alimentos/verduras.png',
  './img/alimentos/yogurt.png',

  './img/necesidades/hambre.png',
  './img/necesidades/descansar.png',
  './img/necesidades/baños.png',

  './img/frases.png',
  './img/ajustes.png',
  './img/texto-a-voz.png'
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
