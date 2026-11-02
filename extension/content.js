chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'copyUrl') copyUrl(location.href);
});
