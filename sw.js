var schedule = require('node-schedule');

// install the service worker
var CACHE_NAME = 'test-site-cache-v1';
var urlsToCache = [
  '/',
  '/App.css',
  '/index.css'
];

self.addEventListener('install', function(event) {
  console.log('worker install event in progress...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  )
});

if(window.Notification.permission === 'granted') {
  console.log('service twerker');
  var job = schedule.scheduleJob('*/1 * * * *', function() {
    console.log('run job');
    var Notification = new Notification('snaps!', {
      body: 'meow meow'
    })
  })
}