chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({farewell: data});
  });
var myRequest = new Request('data.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
		data = text;
    });
  });
  var data = "fail"