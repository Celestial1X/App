const CACHE_NAME = "bmvisa-static-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/tasks.html",
  "/form.html",
  "/records.html",
  "/receivedocs.html",
  "/report90.html",
  "/visarun.html",
  "/nextform.html",
  "/returndocs.html",
  "/app.js",
  "/followup.js",
  "/styles.css",
  "/datepicker.js",
  "/manifest.json",
  "/bmvisa-logo.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/index.html")))
  );
});
