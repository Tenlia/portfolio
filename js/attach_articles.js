articlesRender = {};

articlesRender.render = function() {
	Entry.allEntries.forEach(function(entry) {
    	$('#articles').append(entry.toHtml());
  	});
}

Entry.pullArticles();

viewSorting.fillFilters();
var filteredAuthors = viewSorting.fillFilters();
console.log(filteredAuthors);
viewSorting.makeAuthorOptionTags(filteredAuthors);
viewSorting.selectAuthor();
viewSorting.switchTabs();