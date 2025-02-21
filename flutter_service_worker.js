'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "10781caecf960daedb5d2b1b8d3d9761",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f47c55a0ab78f1132b5690944ad47dbd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9566c9b8eff66b37eb123c2f4d9adfa5",
".git/logs/refs/heads/master": "9566c9b8eff66b37eb123c2f4d9adfa5",
".git/logs/refs/remotes/origin/master": "bc6ba850bd456dd40a8734fadc6d5079",
".git/objects/04/7c4664811a298d6a50a163a48430e322dbaafe": "09590f5ad9d607ae76e3fd068985538b",
".git/objects/04/c8fde367e04b0ee68b6354587e05cb14c33a60": "9b58e1de9927637e8e8a9bba6c18c6f1",
".git/objects/05/3ffc71328e9742a5b4b38a51d7f676b66ac22d": "e944e270bd6f846021ab2a992f6c7148",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1c/3075c05e87ba02d7b5b386fca481ad219cae53": "0217b884e838d249659559ae9da21790",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/20/32cb6fdc1a5b7c8df90e74f7873d7490ddbf14": "795d3be6d91b5e5fa572f8eb01f4fc93",
".git/objects/25/bfccc621b5066d139a9f5e27bf4e25554e46e4": "fc55fffadc980de0f227a1140a88307d",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2c/f34951ff3679950e6f4c1c3d33bcdc820e2908": "849f104af199f32bfddb78fd47d6f4f1",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/73d3d54797d2b2ce68ee78429f0613120588f4": "167cd0109eab0653a9fe211d1d08b3a7",
".git/objects/37/458ae2be93c7250c59319650c76917ef7f5cb6": "93f53a0c84899a9ca405842d78dcfd34",
".git/objects/38/14dd3cb05884c4dc47a50069cd00f143f9c958": "d50c8939f18130599c65100b0985eadb",
".git/objects/3a/590bce4359147779f6b3eff527c904b20fb1fe": "3e6981c69311d4c2994353be7319d215",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3b/1dfcd64c3cda799f36cef325f2676675dd1578": "097953de52a445d6477b82b785722b53",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/54/199048f88b002ff7ab360bff7ef8c0817627fb": "d17c90512efef5deef93e6a3649f25bb",
".git/objects/5a/b9f8499716cd29d3e8dfa482348305f4fbbcda": "a8d77f2de9d8b1fefac0ca2ccf518cb6",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/64/7037f35c2fb425f61bbd616bfbfda5550f65b5": "8aa7186a89c00a1d6ee7a6c2b9da1c86",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/97c7b4f3ac59102401cd9033f814d41ab65a38": "42c17e51ba37045ddce1badb109e8a2c",
".git/objects/78/b533810418de625f624316c2181ca85f950ab9": "a544662db7a87dd3758a48dc50b6d0c3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e0af76a399da90fc36d926b7fda8e1e7eefb54": "d3cc1d90f2d792f95eae0ea11b936c9f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/dab5b73a001e1b3a589f3d70102851c1948a00": "6ecbc175fa81c1d30401093068bf9844",
".git/objects/7e/657963ca16080455d448ee8ec2499180ca5dee": "1f1c878458df262ef0636bbc13e1bfae",
".git/objects/85/f0edfd03c3d8717d570c2a8347b1be9c070ede": "95492f1bc2d570a107f4f2dd64d920b9",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/9b0dbe91f5a03a1e4fd26cf2e56dbf3112468f": "b7e3aed4bdf5d9c57ee3921f4d63b404",
".git/objects/93/99156ddbfaaa650c98b62cda8bba87cb9cef6e": "6cd5b37bbdec2b12af008e25ae8a62b7",
".git/objects/94/2473df4d54ba09bf92d10720a33a82f9ee1b3d": "661d72719bc82db9edebb8d04e06afb2",
".git/objects/95/7a6c6ab4d3797f5ff41ca016b94636e9391e6c": "42298ee323721817dc4e032d89cc3171",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9f/e3eec3917fb00a5e0b07e3fcbdc9e09e57bb08": "50454e7e7432aa0dd47d8901bd95e0bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/f96038f5a046dfab26a15f53a19a81db69c7f0": "7b5beb00e90475b4e197ba2de6949cec",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/b9d04f00a7cc4b6da69a98f188d4019f180d2c": "8e5f6f3feb3be4ebf871428cd1155933",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c2/107cacbced41f6e689ae2ebe9a06b24a69b45d": "3dbf6560dfa733a64c19319605fc055f",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/e2/e2303659211e588943d8b3376798e1155e3a4d": "5308637ff96547b96e9913a2ffdcbf8a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/844960ab7cbcc8cc800674c684ea0fe2e8394c": "f6b55719bc54d47f828b056183c494e5",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/fa/a4dc535adeee79af9810f4ef3f9eb7dde7ee4d": "e49b26e8c394e6fb4079da975c7978d3",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "be2daba3a22df771242b3bb4d21ae829",
".git/refs/remotes/origin/master": "be2daba3a22df771242b3bb4d21ae829",
"assets/AssetManifest.bin": "4da75390a88f1d4e457fb45bd997342b",
"assets/AssetManifest.json": "37e1f3f8a839bc4e5ca390917a602cb2",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/Kalameh(FaNum)-Regular.ttf": "4a854c670da8973d948df10109aea302",
"assets/assets/fonts/YekanBakh-Regular.ttf": "5adb67783888af8ae17889839ef566b1",
"assets/assets/images/bot1.png": "beb154c65b857b0e6eea05f3b95f66c1",
"assets/assets/images/coin.png": "391e3f19b454082f93d1e595bd2222c8",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/login.png": "bdc30aa805050c69a3acaa304ce61cd3",
"assets/assets/images/login_btn.png": "d547632b78afb5721e623644dde95d80",
"assets/assets/images/logo.json": "5a69c7bb3a5cb5a9ebceeb54eab5ca43",
"assets/assets/images/logo.png": "341b1dd158ba71fb61c8927bccdd87df",
"assets/assets/images/logo_png.png": "269ce4721701cadfb9c4528d9d97b911",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/images/welcome.png": "aa90cd34b96e537804490b9c4e46089f",
"assets/assets/translations/en-US.json": "d5ce0a8429b02763b17f2f9f7357298a",
"assets/assets/translations/fa-IR.json": "fef75a42b4c7f05a1f65aaf1c3fd40de",
"assets/FontManifest.json": "9c231cf6286be0ee8ce94ab3ab7d6d39",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2a37fffa4198790be0812ec40369f55a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "4bb9f8b459baa118d5a1c0113de83e50",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f3ec67c83c0632310dead14107bd4071",
"icons/Icon-512.png": "db6da95d294df918e1b605145be7c8ea",
"icons/Icon-maskable-192.png": "f3ec67c83c0632310dead14107bd4071",
"icons/Icon-maskable-512.png": "db6da95d294df918e1b605145be7c8ea",
"index.html": "592d998792d5547cc7ec8e99f5900cf7",
"/": "592d998792d5547cc7ec8e99f5900cf7",
"main.dart.js": "26f0b9e2759b0372ca82c1f3ed94ca85",
"manifest.json": "a50d5e404bdc67864bccd054eb4708f8",
"version.json": "0611ec9a45e391e766beb8ac47564deb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
