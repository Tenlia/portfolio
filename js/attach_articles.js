articlesRender = {};

articlesRender.render = function() {
	Entry.allEntries.forEach(function(entry) {
    	$('#articles').append(entry.toHtml());
  	});
}

Entry.pullArticles();

viewSorting.fillFilters();
viewSorting.selectAuthor();
viewSorting.switchTabs();