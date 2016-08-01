'use strict';
(function(module) {

  Entry.allEntries = [];

  function Entry(input) {
    for(var keys in input) this[keys] = input[keys];
    console.log(Entry);
  };

  Entry.pullArticles = function() {
    if(localStorage.storedArticles){
      Entry.processArticles(JSON.parse(localStorage.storedArticles));
      articlesRender.render();
    } else {
      reposObject.callingRepos(Entry.processArticles);
      // localStorage.storedArticles = JSON.stringify(reposObject.myRepos);
      articlesRender.render();
      console.log(reposObject.myRepos);
      console.log('pulled repos');
    }
  };

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
    return Entry.allEntries;
  };

  module.Entry = Entry;

})(window);
