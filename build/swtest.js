console.log('i am a service worker');

self.addEventListener('install', evt => {

});

self.addEventListener('fetch', event => {
  console.log(`fetch ${event.request.url}`);
  const response = new Response ('CHARGE IS ME');
  // HIJACKING a response
  event.respondWith(response);
});
