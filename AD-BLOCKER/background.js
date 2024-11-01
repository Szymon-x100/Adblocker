chrome.webRequest.onBeforeRequest.addListener(
   function(details) { 
    return { cancel: true };
   },{urls: ["*://*.zedo.com/*", "*://*.publicis.com/*", "*://*.wpp.com/*", "*://*.adfox.ru/*", "*://*.omnicomgroup.com/*", "*://*.dentsu.com/*", "*://*.havas.com/*", "*://*.adx.com/*"]},
   ["blocking"]
);
