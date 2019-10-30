chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get(["enabled"], function(result) {
    chrome.storage.local.set({ enabled: !result.enabled }, function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" }, function(
          response
        ) {
          // console.log(response.farewell);
        });
      });
    });
  });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({ enabled: true });
});
