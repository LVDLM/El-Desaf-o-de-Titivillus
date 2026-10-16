/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "titivillus.png",
    "revision": "8482b804b9838040158c14c9e2aa6ea9"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "adfb29118709c1a78a129cf4ef8bddb4"
  }, {
    "url": "pwa-512x512.png",
    "revision": "8d855dfb713d4e1ecf015114f6fdf35c"
  }, {
    "url": "pwa-192x192.png",
    "revision": "2444ce5dab0d59269487c041d50c3847"
  }, {
    "url": "index.html",
    "revision": "6f4738362c13e1e2d73598d7efb329e9"
  }, {
    "url": "favicon.png",
    "revision": "20eed9caa8dee8e635ec54a70823a1e1"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "b5bcf1ac3485828c8605b8783e192a88"
  }, {
    "url": "assets/index-BQTMUy_6.js",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "b5bcf1ac3485828c8605b8783e192a88"
  }, {
    "url": "favicon.png",
    "revision": "20eed9caa8dee8e635ec54a70823a1e1"
  }, {
    "url": "pwa-192x192.png",
    "revision": "2444ce5dab0d59269487c041d50c3847"
  }, {
    "url": "pwa-512x512.png",
    "revision": "8d855dfb713d4e1ecf015114f6fdf35c"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "adfb29118709c1a78a129cf4ef8bddb4"
  }, {
    "url": "titivillus.png",
    "revision": "8482b804b9838040158c14c9e2aa6ea9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "690c65901b99e46de956ee5b927c13b8"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/cdn\.pixabay\.com\/download\/audio\/.*/i, new workbox.CacheFirst({
    "cacheName": "audio-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 2592000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
