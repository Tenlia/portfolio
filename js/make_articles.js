'use strict';

function Entry(input) {
  for(var keys in input) {
    this[keys] = input[keys]
  }
};

Entry.pullArticles = function() {
  $.getJSON('json/articles.json', function(articleContent) {
    Entry.processArticles(articleContent);
    localStorage.storedArticles = JSON.stringify(articleContent);
    articlesRender.render();
  })
};

Entry.allEntries = [];

Entry.prototype.toHtml = function() {
  var source = $('#article-template').html();

  this.publishDaysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
  this.publishStatus = this.pubDate ? 'Published ' + this.publishDaysAgo + ' days ago' : '(in progress)';
  this.updateDaysAgo = parseInt((new Date() - new Date(this.lastUpdate))/60/60/24/1000);
  this.updateStatus = this.lastUpdate ? 'Updated ' + this.updateDaysAgo + ' days ago' : '(not updated)';

  var content = Handlebars.compile(source);
  
  return content(this);
};

Entry.processArticles = function(articlesPassedIn) {
  articlesPassedIn.sort(function(a,b) {
    return (new Date(b.pubDate)) - (new Date(a.pubDate));
  })
  .forEach(function(obj) {
    Entry.allEntries.push(new Entry(obj));
  });
};

Entry.pullArticles();