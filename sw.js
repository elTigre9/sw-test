/// <reference lib="webworker" />
var schedule = require('node-schedule');

// register first
// window.navigator.serviceWorkerContainer
//   .register('sw.js').then(function(reg) {
//     console.log(reg);
//   });

// install the service worker
// var CACHE_NAME = 'test-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/App.css',
//   '/index.css'
// ];

// self.addEventListener('install', function(event) {
//   console.log('worker install event in progress...');
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   )
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });

// self.addEventListener('activate', function(event) {

//   var cacheAllowlist = ['test-site-cache-v1'];

//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.skipWaiting();

if(window.Notification.permission === 'granted') {
  console.log('service twerker');
  var job = schedule.scheduleJob('*/1 * * * *', function() {
    console.log('run job');
    var notification = new Notification('snaps!', {
      body: 'meow meow'
    })
  })
}