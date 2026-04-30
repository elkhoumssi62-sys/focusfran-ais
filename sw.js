const cacheName = 'mlangue-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Installation du Service Worker et mise en cache des actifs
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Intercepter les requêtes pour servir le contenu du cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
