function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}


function launch() {
  var list = document.getElementById('list');

  var items = [
    {name: "google", url: "https://google.com"},
    {name: "reuters", url: "http://reuters.com"},
    {name: "instagram", url: "https://instagram.com"}
  ];

  items.forEach(function(item) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", item.url);
    anchor.setAttribute("target", "_blank");
    anchor.textContent = item.name;

    li.appendChild(anchor);

    list.appendChild(li)
  });
}

document.addEventListener('DOMContentLoaded', function () {
  getCurrentTabUrl(function(url) {
    launch();
  });
});
