// TODO: add listener and handler to cache static assets
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
	"./",
	"./index.html",
	"./manifest.webmanifest",
	"./assets/css/style.css",
	"./assets/images/brandenburg.jpg",
	"./assets/images/logo16.png",
	"./assets/images/logo48.png",
	"./assets/images/logo128.png",
	"./assets/images/logo512.png",
	"./assets/images/map.jpg",
	"./assets/images/reichstag.jpg",
];

// TODO: add listener and handler to retrieve static assets from the Cache Storage in the browser

// install
self.addEventListener("install", function (evt) {
	// pre cache image data
	evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.add("./assets/images"))
	);

	// pre cache all static assets
	evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
	);

	// tell the browser to activate this service worker immediately once it
	// has finished installing
	self.skipWaiting();
});

// activate
self.addEventListener("activate", function (evt) {
	evt.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== CACHE_NAME) {
						console.log("Removing old cache data", key);
						return caches.delete(key);
					}
				})
			);
		})
	);

	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
