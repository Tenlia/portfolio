articlesRender = {};

articlesRender.render = function() {
  Entry.allEntries.forEach(function(entry) {
    	$('#articles').append(entry.toHtml());
  	});
};

Entry.pullArticles();

viewSorting.makeAuthorOptionTags(viewSorting.filterAuthorEntries());
viewSorting.selectAuthor();
viewSorting.switchTabs();