'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a8dc960e232810ed60bc6f25867799ea",
"assets/AssetManifest.bin.json": "178a87bffa9892233a467b7b3ace2474",
"assets/AssetManifest.json": "1ac58d2cd48d11db7ff13fe82c26018e",
"assets/assets/10780551_19199515-PhotoRoom.png-PhotoRoom.png": "1655d7ca42d276571ac2321997040a73",
"assets/assets/11879298_202011_04.jpg": "a75351e7b5d3e5f6d70098e3a181fb8b",
"assets/assets/12.png": "16daa75b2f1476f0275cea101d34c5f9",
"assets/assets/123.png": "b8e5f022e6d94e5b9b9775e609bad422",
"assets/assets/1234.png": "456a61230eb5090efde22eb2c0746a25",
"assets/assets/12345.png": "071ff3b910d74daf8047b5dc32a0bf28",
"assets/assets/1234567.png": "61cefc8cb412406fd3f2638ea2322b29",
"assets/assets/2485257.jpg": "59cc531338f515dc4fe8d8cf944b37ce",
"assets/assets/7606000.jpg": "ad81e59ae8aca88f190c75ee9546ce0f",
"assets/assets/aichatbot.png": "0c0b9135d2e19879a239be9de5c9c0ee",
"assets/assets/ajk.png": "d8320f9a3fcd20ece679bc5bffb88a3e",
"assets/assets/ajk1%2520(1).png": "71b743d9a74c9f4620ba56760d90bda9",
"assets/assets/ajk1.png": "6a89887b67a480d7e73205591a37b454",
"assets/assets/assignment.png": "ca6fb8700ab57343def86b78295ba847",
"assets/assets/attendence.png": "739f20b4082e653cdea1a6c0fb062071",
"assets/assets/attendence1.png": "308608c2d2183bf2fc8aab499365e0c6",
"assets/assets/back.png": "19b48f16e302763544bf10ef3f0e81e1",
"assets/assets/back1.png": "5e9d5dae84be6f82a293f1897cc36441",
"assets/assets/books.png": "a7528065ea95d97896b504556ab7d8cd",
"assets/assets/chatWithTeacher.png": "84abdfe07a5256a1291fabd0a8265e10",
"assets/assets/class.png": "2650391d15f9103448e4405b0dcb12b0",
"assets/assets/COMPUTERNETWORKS.pdf": "1d19b7024a7a6040c47104887f991e60",
"assets/assets/download.png": "70bba9cd71fcc0f619819c0a0fe01f82",
"assets/assets/ebook.png": "772e39deb1374f869d9a7957b757f4fe",
"assets/assets/GRAPHICSANDMULTIMEDIA.pdf": "bd460e924dc9535a741dc5c313a36ad9",
"assets/assets/illustration-1.png": "fe71adcc8c40782af7b7555f0ffd44c1",
"assets/assets/illustration-2.png": "5ad69c7624875b76c84eebb06806ff46",
"assets/assets/illustration-3.png": "af558689fdcffd35185981e4838029a0",
"assets/assets/illustration.png": "306c2ae849d84875b1c9b92f839daa1a",
"assets/assets/IoT.pdf": "e1eaac438cc57aab7b6cb3abc0387f71",
"assets/assets/learn.png": "dc27bc93c4a0d5e24587fb2b37dd1390",
"assets/assets/manthumbs.png": "f2cfc81c25e70f918f95620cfe1f00bd",
"assets/assets/overlay.png": "92a65184f546225636a13a0d1c058744",
"assets/assets/parwe_institution.jpeg": "b8d19aef07ea3d04a9641a9bfe30fd5e",
"assets/assets/profile.jpg": "e7cbd2bc6872252d5d6b4671e309b500",
"assets/assets/readingbook.png": "71a1a993172f1fbcd5f4689ac5b69961",
"assets/assets/settings.png": "d52fcb298d1c4af0426a4d51b1062b42",
"assets/assets/studyMaterial.png": "aff6e63297add87d69fb386cb8c9b558",
"assets/assets/timetable.png": "6d79eadf4db2184a08c1ebffa7352a68",
"assets/assets/video.png": "98887633b427ea3354f3c1cd65d6ad98",
"assets/assets/videoLectures.png": "38bd287255f1ea87f7f5dc9cde9ddb6d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "dfc8e72c8210fb7754141ff075c0bef7",
"assets/NOTICES": "1e6687231ca6e1bee542c7102b6847a9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "4579c3a2644fe20c7f8495644ad35c38",
"canvaskit/canvaskit.wasm": "cec53dd1ee2102fa245ad250f918cd98",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "d29271f8faa7fc4b0355218fb427a92a",
"canvaskit/chromium/canvaskit.wasm": "88dc0786b13b9f657a1cbfaced6cb323",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm.js.symbols": "904aa9cd0e3718f06981fad267fea5ab",
"canvaskit/skwasm.wasm": "ec06ad7fa98846beff7a925010fa323e",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm_heavy.js.symbols": "10f2e2916283498fd095622d70e02304",
"canvaskit/skwasm_heavy.wasm": "d1241e4b140f4d536ccb2ede46b182f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"flutter_bootstrap.js": "7e692f0e627294ce8884e4e617a81384",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "211f5091d214aa290d86ebf2cda46e77",
"/": "211f5091d214aa290d86ebf2cda46e77",
"main.dart.js": "a5f719df9814770a0532aca054e9ddd2",
"manifest.json": "91d4d092710a8eb84143067301e0a485",
"version.json": "4c41efebad13a930c2c7c0c2f00c3db5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
