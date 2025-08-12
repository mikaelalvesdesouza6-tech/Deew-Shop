
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open('deew-shop-v4').then(cache => cache.addAll([
    './','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
    './dr_planta_prensado.png','./dr_planta_flor.png','./homem_gelo_ice.png','./homem_barro_dry.png'
  ])));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
