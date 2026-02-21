
const CACHE_NAME = 'sentanna-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// GESTION DES NOTIFICATIONS PUSH
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'Sentann@vantou', body: 'Nouvelle actualité sur le terrain !' };
  
  const options = {
    body: data.body,
    icon: '/logosentannavantou.jpeg',
    badge: '/logosentannavantou.jpeg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://famous-zuccutto-840977.netlify.app/')
  );
});
