/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app/app.component.html","08524bc65fa2fd2a15cf684608066ab2"],["app/app.component.scss","822ab68762cd70e57df19a42ed2d39d8"],["app/app.component.spec.ts","c67db0b96b734d4d8dfeeb504de67b03"],["app/app.component.ts","d29d8dd66bfb24062c8c37650f4029cc"],["app/app.config.ts","4320449dfcea5382039d9b1b6edee015"],["app/app.module.ts","f66e2d1d02d7f59a527442e359bbf440"],["app/app.routes.ts","db8906c15582334c230a09e814d6699d"],["app/auth/auth.module.ts","966982220ef9cd5f1d78f26feb2a0686"],["app/auth/auth.routes.ts","d830a0ee678ea9e3cb26dfeed617c4a9"],["app/auth/auth.service.spec.ts","9799e9d9b3f48f6d32fd566ce11a7de4"],["app/auth/auth.service.ts","2ce8a4897873cee3fa8b39a7d4e58660"],["app/auth/email/email.component.html","b271c1f13420c3b27769a3e19e60b163"],["app/auth/email/email.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/auth/email/email.component.spec.ts","16aec767c40914392290801f22420446"],["app/auth/email/email.component.ts","dca37cf0eb70a4f82fb26a0da3ad0b0d"],["app/auth/index.ts","5557fce767f28f1bad498b78f5aaaec7"],["app/auth/login/login.component.html","06a8dee99ce766c7d7e4adc24bea39ac"],["app/auth/login/login.component.scss","c1ed40cbdb1df0942541b548667d5c66"],["app/auth/login/login.component.spec.ts","f6a61a4cb764b3162f167f6635872162"],["app/auth/login/login.component.ts","64ecd64423e31a6faf41a6e81b1d5a87"],["app/auth/offline/offline.component.html","3ab5f7a95dfe4aca32e0624a9f5acf46"],["app/auth/offline/offline.component.scss","77055e8054f50f334c6c50117ae50b24"],["app/auth/offline/offline.component.spec.ts","126170778ac5ea01d850c38bb67cf0cb"],["app/auth/offline/offline.component.ts","1d8db5e8ae0c938c959c4e5170c34736"],["app/auth/profile/profile.component.html","cafff62242b49f2d8b4dfea66b496eff"],["app/auth/profile/profile.component.scss","e653c33f7ebfbdd3263df46e6184cb3c"],["app/auth/profile/profile.component.spec.ts","ba16e0f58b11c6617ed65ca608770180"],["app/auth/profile/profile.component.ts","0bf54c2250d1ffa0dc92cdac46fd7031"],["app/auth/signup/signup.component.html","2284a09bdf4a43866d3cff1451bf4c6d"],["app/auth/signup/signup.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/auth/signup/signup.component.spec.ts","fb0f42ef19d5502b2bb11148e0f3a72d"],["app/auth/signup/signup.component.ts","3b23453ff29dc4ecdb5e7313f7a2001c"],["app/auth/user/user.component.html","eb540be5e4274583972b5944d713f2a2"],["app/auth/user/user.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/auth/user/user.component.spec.ts","f3e3cea10d49979ca8a1233654d8f4e4"],["app/auth/user/user.component.ts","b34de85dc3db31697513eaa2f4fb2fcb"],["app/layouts/categories/categories.component.html","1b4726090c7ffcf9c4b8bd06a9c77f31"],["app/layouts/categories/categories.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/layouts/categories/categories.component.spec.ts","ce4a6ac46bb5153d966c614ccbfbf6b8"],["app/layouts/categories/categories.component.ts","bae191fe954bcb42b6ae843f7297b23c"],["app/layouts/header/header.component.html","07f02e238f80bae20630ce60f5191158"],["app/layouts/header/header.component.scss","4fe8a3ff38bb1ba4ee6f46027772b69b"],["app/layouts/header/header.component.spec.ts","c83a5297b7b34ef1b60d759b62d8644c"],["app/layouts/header/header.component.ts","fb2ee5fcf7b4e0c569e72cee6deee926"],["app/layouts/index.ts","633a1b22a4ac0246e2d4ff9d286dca6d"],["app/layouts/sidenav/sidenav.component.html","c10a77d4b5c4b0ddb5cf684e7df39f1d"],["app/layouts/sidenav/sidenav.component.scss","8f0721fc2c06b974cce8744d5c5cd14d"],["app/layouts/sidenav/sidenav.component.spec.ts","eead6f95f5174e5f52d71733c1845d9a"],["app/layouts/sidenav/sidenav.component.ts","c78a8c8eceeaffbea188f6b7969f153d"],["app/material.module.ts","2716f1ede1f4e5fe413376a5a92e0d4b"],["app/models/income.ts","2a9b216372f0ec0b6a6e9010c41fc0e6"],["app/pages/contact/contact.component.html","cb71e424c8c14b0c118acaaafb1f0463"],["app/pages/contact/contact.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/pages/contact/contact.component.spec.ts","945f4fb90122ae3e10112a237d1ecc89"],["app/pages/contact/contact.component.ts","78d00a41be0f5582c32798f794d7add0"],["app/pages/expenses/expenses.component.html","51f74c6b30db2a7d72e3153896252d9c"],["app/pages/expenses/expenses.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/pages/expenses/expenses.component.spec.ts","b9492a6f77e3a2758642825ed5591047"],["app/pages/expenses/expenses.component.ts","c39d08593aef6192b2f2d2bd244c939f"],["app/pages/home/home.component.html","665a591f480b70373524c8b6eebecc39"],["app/pages/home/home.component.scss","f69ce0cc41b3a3b6b887acd09eb3680f"],["app/pages/home/home.component.spec.ts","b09ec13a91ab3345bfb59bb913cee4d2"],["app/pages/home/home.component.ts","503e258a9d16b9b0a93bf337b1f2093d"],["app/pages/income/income.component.html","fdb936a6ab2e7f23c58c5657a760544f"],["app/pages/income/income.component.scss","5fada5e2954ecfa77a22f5d3c649b317"],["app/pages/income/income.component.spec.ts","0ed5abb367ea76ca5788b021f4f10b38"],["app/pages/income/income.component.ts","d5d8231ffb2d4ff1b40603d6d14fa2d2"],["app/pages/index.ts","82a0ae27db9cb1f6113b8e80b4c0f7db"],["app/pages/stock/stock.component.html","218d69e668cb2eda000104ad5820d165"],["app/pages/stock/stock.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/pages/stock/stock.component.spec.ts","13c7d863f929e9f05760a167dd648cbf"],["app/pages/stock/stock.component.ts","ad53b3b16270f7dbd42f35b19a5c3b1a"],["app/pages/tax/tax.component.html","b516f7f75951e718d7b94cb3322709ab"],["app/pages/tax/tax.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/pages/tax/tax.component.spec.ts","51307184b74af41d8fa9f7a651bdfa17"],["app/pages/tax/tax.component.ts","ce8031a91f39d538e321778eec92fb9b"],["app/pages/vat/vat.component.html","b8f2c39678f5f816bc81f456fd362cbb"],["app/pages/vat/vat.component.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/pages/vat/vat.component.spec.ts","58c217d6849e2cf1cb50bbb01285592a"],["app/pages/vat/vat.component.ts","955100590ef29d77a6caf0b7bdd1a1ea"],["app/pipes/firstname/firstname.pipe.spec.ts","3f5c39d4c16706ff38e32859e09ec436"],["app/pipes/firstname/firstname.pipe.ts","b247037ab3f163773b1050f5ab480586"],["app/pipes/index.ts","81a74ceaa14436110dbbb5d75aebfa84"],["app/pipes/pipes.module.ts","2a830e5caae17bdba6df988d0329b839"],["app/pipes/reverse/reverse.pipe.spec.ts","7f564c43ec132e13bc76828535d6d336"],["app/pipes/reverse/reverse.pipe.ts","05aa97bf500ffc8fb34537795ffd0b6f"],["assets/css/deep.scss","c4574f1b7424f435ac2c98a4f5db2254"],["assets/css/index.scss","df0b6d9cf2931f0acabcbadc4098c9ff"],["assets/css/loading.scss","452d776ec40e0728945d1ba6d7d29c99"],["assets/css/media.scss","a27d026555f95a407a057fc61dd01cdf"],["assets/css/mixins.scss","b482bd15b9780ed39e75506e83805845"],["assets/css/themes/bluegrey-deeporange.scss","fb2a6a5cc00c6300d39054640bcd8b6d"],["assets/css/themes/deeppurple-amber.css","b26d920663a24b497b401276376f2504"],["assets/css/themes/deeppurple-amber.css.map","b63b9f4941ff5eedafa5fd0da020b03b"],["assets/css/themes/deeppurple-amber.scss","b6b4a27ad65d16f8b0de340079b02bdf"],["assets/images/email.svg","e75a0390ebcf4b02d1bdb6fa9e063da3"],["assets/images/facebook.svg","d526b8a8c08d30bc0c96995a80d7adbf"],["assets/images/filler.png","0e634ade4d59817c5adb3ab5db680626"],["assets/images/google.svg","45dff0bab1cfddd025515bb1c940497d"],["assets/images/lock.svg","579f8dd004c64038cc7d3326a6fb4810"],["assets/touch/apple-touch-icon.png","45c3ba5e3e9ad3835e2eebaf7ef7aa2b"],["assets/touch/chrome-touch-icon-192x192.png","e258edd4a6f950148d5fb3dabaff6c1d"],["assets/touch/icon-128x128.png","ba2844094c8facc68c54d830d2795605"],["assets/touch/ms-touch-icon-144x144-precomposed.png","faa46644852e6d27c731b0c7f87b4343"],["environments/environment.prod.ts","6de221395114600b523995704b7d1caa"],["environments/environment.ts","085238d3fde053b58e5a0b3c7ce1b840"],["favicon.ico","a5093dc547e40e618e577549e90418ea"],["index.html","b096f806356f50938223e8dffabd2c16"],["main.ts","3d19bfd2e6a98c7d6227e2a043ddda9d"],["manifest.json","a543f8cf2eb0d8e20c7a36ba051905b8"],["polyfills.ts","40834fb162fcb2a4fe965c9510a3f08d"],["styles.scss","a798e89db46ab8ed3e227b63b1722e91"],["system/static-log.ts","8e33b2ef75e8a9340e58d047356441d5"],["test.ts","eee1e62494ea9f62931c7ff6a8dc24a7"],["tsconfig.app.json","e451b2604ea0f3a057f16da3107da11c"],["tsconfig.spec.json","31e6fd066bc52e228ab10003d8bea375"],["typings.d.ts","dec45b6ead5c1deed3d6de0bb5ec4fcc"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







