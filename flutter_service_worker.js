'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26f69b3b3b105846dc78118785e86cef",
"index.html": "6dad7481a03657b48fedf3a2a060907f",
"/": "6dad7481a03657b48fedf3a2a060907f",
"main.dart.js": "b9f41ef5f86048b2ffed7f6cda947748",
"favicon.png": "ada9d55a88c5596a756af517c294bb34",
"manifest.json": "460b9302ea8afc8fdcb1a9f5e5ae5fed",
"assets/AssetManifest.json": "dfe218ad9d78153b2e4deb02e65c401e",
"assets/NOTICES": "5c96b39c825cf040429ab3bf9b5ad8a7",
"assets/FontManifest.json": "7427687f28c88abd3e7f42b3f9b20b33",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/appstore.svg": "f54563d839be5e4bfa1a49e60cc600d4",
"assets/assets/images/appollo_logo_black.png": "2725adf2dee98c5d35eb950f89cc8c51",
"assets/assets/images/Map.jpg": "239af7484a2fa20499e1b320733435b5",
"assets/assets/images/Map.png": "5e6b08ac3eec8e1090f1b976d88270f9",
"assets/assets/images/appollo_logo_a_white.png": "bfa30b3494875c2421fdd4c07e7aa87d",
"assets/assets/images/placeholderImages/bar_chart_sample_4.png": "47eb8c0ebe66b10016cd46a345c178c4",
"assets/assets/images/appollo_logo_purple.png": "e26432ba029a5dec8f36ec2480259e82",
"assets/assets/images/appollo_logo_white.png": "ffd0e5e72daa46f682a44f49ea197af7",
"assets/assets/images/playstore.svg": "82258ec055a487721095072f4796d040",
"assets/assets/images/appollo_logo_a_purple.png": "6437abb4c76c7889681247f48e47f74f",
"assets/assets/icons/search-outline.svg": "d20b124f937b0403d1710a562360b481",
"assets/assets/icons/trophy2.svg": "f4e2354338dc065f23bdb21b064977d3",
"assets/assets/icons/trophy3.svg": "697c1374db3fc40dc16aab02190c0daa",
"assets/assets/icons/trophy1.svg": "cdba2ffe4ba7ceacef5175d960bb9861",
"assets/assets/icons/hamburger.svg": "79c139dd0f48c2bf7ed8475a4e089254",
"assets/assets/icons/person.svg": "dd8f280cf671b92c66934c4763898906",
"assets/assets/icons/pin.png": "4e5f7753725c733d5a20c3123731222a",
"assets/assets/icons/tickets.svg": "9c70f6db5ab83433dca28f926f7a9ba7",
"assets/assets/icons/credit_card.svg": "ac7fde1400658ecfe7d7583b9ef371d9",
"assets/assets/icons/clipboard-outline.svg": "870f4e36b0cb29ca1d89beab28e4a000",
"assets/assets/icons/Map.svg": "31a3217bea2184ffda10d24f137bef59",
"assets/assets/icons/qr-code.svg": "802b9d765ab109c47a7a5a87934626e8",
"assets/assets/icons/dot.svg": "b75e456226d8e5431c79f6fd8523bc99",
"assets/assets/icons/star-outline.svg": "c389261741f0031107738d614e32c8c2",
"assets/assets/icons/calender.svg": "df3e0f64de67ae799608fba93524a27d",
"assets/assets/icons/pin.svg": "44d4001d89937b2a89ccf319e0c028aa",
"assets/assets/icons/google_icon.svg": "a02c965629eb6dfcd7e9ec8b1986028a",
"assets/assets/icons/level1.svg": "45e05b249c1c5c3c0cbf70ff503827f8",
"assets/assets/icons/cake.svg": "ab881bc197077961c3d4e5416ce64f83",
"assets/assets/icons/gps.svg": "bf63460100eaa2725010f6305742c3e7",
"assets/assets/icons/list-outline.svg": "5f28d359420ea30a74d817b08c4c0574",
"assets/assets/icons/arrow-ios-downward-outline.svg": "b33d018c650d1b44248d60559aec363b",
"assets/assets/icons/level2.svg": "467948f0951d9fd712410cb4b7b8a05a",
"assets/assets/icons/level3.svg": "14d064d8bcc740924cab794987bc2665",
"assets/assets/icons/alert-triangle-outline.svg": "71486662773d7880b113d26b3f226969",
"assets/assets/icons/people.svg": "7357ae3e53ad6a8b274b0334c781c453",
"assets/assets/icons/no_events.svg": "6f65093969cd3e0197db3723cbfcd6da",
"assets/assets/icons/cake_with_bg.svg": "a72f3e055e38fe1c0fbe7db733b07b0e",
"assets/assets/icons/calender_outline.svg": "37ae372fa9cd808bea4529b69f0dbb92",
"assets/assets/icons/arrow-back-outline.svg": "c4a253c8fc2e465ada9ab367364de75e",
"assets/assets/icons/arrow-ios-upward-outline.svg": "cb9bc2d12e02fc679566185cdda41101",
"assets/assets/icons/clock.svg": "8fb56b4bf99ec22221ed9087e362a38e",
"assets/assets/icons/facebook_icon.svg": "d2b74c6b6c73adef0609b601114e717a",
"assets/assets/icons/calendar.svg": "92be5dcd8a3be78086c5fec49a113c11",
"assets/assets/icons/apple_icon.svg": "0b1172280f37170efd38930058db89b7",
"assets/assets/icons/close-circle-outline.svg": "3049547e3a3a77b67df19590c25eec83",
"assets/assets/icons/aonly.png": "41b36a5fc0bdf683fcfcb4bb8357bf39",
"assets/assets/icons/heart.svg": "cc3c3049804ffc355929a5312ed33375",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Cocon-RegularTR.ttf": "3cb2dc7f975186787930e7b93ee18dc0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
