chrome.contextMenus.create({
  "title": "Buscemi this!",
  "contexts": ["image"],
  "onclick" : function(e) {
    chrome.tabs.create({"url" : "http://buscemi.heroku.com/?src=" + encodeURI(e.srcUrl)});
  }
});
