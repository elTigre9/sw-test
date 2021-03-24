const schedule = require('node-schedule');

// install the service worker
const CACHE_NAME = 'test-site-cache-v1';
const urlsToCache = [
  '/',
  '/App.css',
  '/index.css'
];

self.addEventListener('install', (event) => {
  console.log('worker install event in progress...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  )
});

if(window.Notification.permission === 'granted') {
  console.log('service twerker');
  const job = schedule.scheduleJob('*/1 * * * *', () => {
    console.log('run job');
    const Notification = new Notification('snaps!', {
      body: 'meow meow'
    })
  })
}