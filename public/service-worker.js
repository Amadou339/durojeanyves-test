self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', (event) => {
  // Stratégie de cache simple ou réseau par défaut
});