* El paquete "Serve" nos permite levantar un servidor para ejecutar el proyecto, tal como lo haríamos con Next.

* Para ejecutar el proyecto en modo release: npm run build & npm start

* En el manifiesto:
    start_url colocar en '/' para evitar problemas de compatibilidad en iOS
    related_applications
    prefer_realted_applications
    scope

* Para poder utilizar https sin necesidad de publicarlo en un sitio, podemos utilizar ngrok
    Descargar ngrok y ejecutarlo: ngrok http 5000
    Estar pendiente de la dirección https que aparece en el resultado y ejecutar la misma para acceder al sitio.

* Para conocer detalles de compatibilidad y funcionalidad de "Add to homescreen" revisar:
    https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen

* Para la compatibilidad con iOS es necesario agregar metadatas especiales:
    <link rel='apple-touch-icon' href='/icon.png'/>
    <meta name="apple-mobile-web-app-title" content="Recetas" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

* Desde iOS 11.3 el archivo que tiene precedencia en iOS es manifest.json, antes que los tags en index.html

* Para agregar un splashscreen en iOS:
    https://medium.com/appscope/adding-custom-ios-splash-screens-to-your-progressive-web-app-41a9b18bdca3

* Los service workers no funcionan en desarrollo, solo en producción

* Para las pruebas con los service workers recordar primero borrar la cache de la aplicación, para esto: F12 -> Application -> Clear Storage -> Clear Site Data

* Para crear nuestros service workers:
    npm install workbox-webpack-plugin
    npm install react-app-rewire-workbox react-app-rewired
    Crear el archivo config-overrides.js
    Crear el archivo src/service-worker.js
    Cambiar los scripts de package.json