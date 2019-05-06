/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || []);
//workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// App Shell
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html")
);

//Permite utilizar google analyticis offline
workbox.googleAnalytics.initialize();

//Esta estrategia primero devuelve de cache y a la vez consulta a la red, si la red responde actualiza el cache
workbox.routing.registerRoute(
  /^https?:\/\/www.themealdb.com\/api\/.*/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
);

//Esta estrategia primero consulta de cache y luego en la red, si existe en el cache ya no consulta en la red, por eso se le puede
//poner un vencimiento a lo que se cachea para que no sea eterno
workbox.routing.registerRoute(
  /^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Only cache requests for a day
        maxAgeSeconds: 24 * 60 * 60,
        // Only cache 10 requests.
        maxEntries: 10
      })
    ]
  }),
  "GET"
);

//Esta estrategia primero consulta el red, si no lo encuentra entonces devuelve de cache
workbox.routing.registerRoute(
  /^https?.*/,
  new workbox.strategies.NetworkFirst(),
  "GET"
);
