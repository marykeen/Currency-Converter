if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(response) {
    
    // Service worker registration done
    console.log('Registration Successful', response);
  }, function(error) {
    // Service worker registration failed
    console.log('Registration Failed', error);
  });
};


const url = 'https://free.currencyconverterapi.com/';


fetch(url)
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });






  self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(['/',
      	'./index.html',
      	'./index.css',
      	'./js/index.js',
      	'./js/db.js',
      	'./sw.js'

      	]);
    })
    .then(function() {
        console.log('service worker installed');
      })
  );
});




self.addEventListener('activate', function(event) {
    console.log('Activated sw.js', event);
});