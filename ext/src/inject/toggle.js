const enable = () =>
  (document.body.className =
    document.body.className.replace("DraculaHubDisabled", "") +
    " " +
    "DraculaHub");
const disable = () =>
  (document.body.className = document.body.className.replace(
    "DraculaHub",
    "DraculaHubDisabled"
  ));

chrome.storage.local.get(["enabled"], function(result) {
  if (result.enabled) {
    enable();
  } else {
    disable();
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "toggle")
    chrome.storage.local.get(["enabled"], function(result) {
      if (result.enabled) {
        enable();
      } else {
        disable();
      }
    });
});
