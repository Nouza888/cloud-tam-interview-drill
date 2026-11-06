/* Cache only this app's static files; never caches external reference links. */
'use strict';
const BASE = new URL('./', self.location.href);
const PREFIX = 'cloud-tam-drill:' + BASE.pathname + ':';
const CACHE = PREFIX + '5aee9a9c517155';
const FILES = ['index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];
const URLS = FILES.map(path => new URL(path, BASE).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URLS.map(url => new Request(url,{cache:'reload'})))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {if (event.data?.type === 'ACTIVATE') self.skipWaiting();});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  const isHome = request.mode === 'navigate' && [BASE.pathname,BASE.pathname+'index.html'].includes(url.pathname);
  const cleanUrl = url.origin + url.pathname;
  if (!isHome && !URLS.includes(cleanUrl)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(isHome ? new URL('index.html',BASE).href : cleanUrl);
    return cached || fetch(request);
  })());
});
