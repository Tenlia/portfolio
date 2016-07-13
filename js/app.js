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
  var $newEntry = $('article.template').clone();
  $newEntry.find('title').text(this.title);
  $newEntry.find('.authors').text(this.authors);
  $newEntry.find('a[href]').html(this.link);
  $newEntry.find('.about').text(this.about);

  $newEntry.removeClass('template').addClass('blog_entry');

  $newEntry.find('time[pubdate]').attr('title', this.pubDate);
  $newEntry.find('time.pub_date').html('about ' + parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000) + ' days ago');
  $newEntry.find('time[update]').attr('title', this.lastUpdate);
  $newEntry.find('time.update').html('about ' + parseInt((new Date() - new Date(this.lastUpdate))/60/60/24/1000) + ' days ago');
  console.log($newEntry);
  return($newEntry);
};

ourArticles.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

ourArticles.forEach(function(obj) {
  allArticles.push(new Entry(obj));
});

allArticles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
