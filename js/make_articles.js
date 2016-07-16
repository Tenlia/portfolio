'use strict';

var allArticles = [];

function Entry(input) {
  this.title = input.title;
  this.authors = input.authors;
  this.pubDate = input.pubDate;
  this.lastUpdate = input.lastUpdate;
  this.link = input.link;
  this.about = input.about;
}

Entry.prototype.toHtml = function() {
  var source = $('#article-template').html();

  this.publishDaysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
  this.publishStatus = this.pubDate ? 'Published ' + this.publishDaysAgo + ' days ago' : '(in progress)';
  this.updateDaysAgo = parseInt((new Date() - new Date(this.lastUpdate))/60/60/24/1000);
  this.updateStatus = this.lastUpdate ? 'Updated ' + this.updateDaysAgo + ' days ago' : '(not updated)';

  var content = Handlebars.compile(source);
  
  return content(this);
};

ourArticles.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

ourArticles.forEach(function(obj) {
  allArticles.push(new Entry(obj));
});

allArticles.forEach(function(entry) {
  $('#articles').append(entry.toHtml());
});
