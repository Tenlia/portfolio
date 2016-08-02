articlesRender = {};

articlesRender.render = function() {
  Entry.allEntries.forEach(function(entry) {
    	$('#articles').append(entry.toHtml());
  	});
};


function pullAndMakeArticles(){
	reposObject.callingRepos(Entry.processArticles);
	Entry.pullArticles();
};

viewSorting.makeAuthorOptionTags(viewSorting.filterAuthorEntries());
viewSorting.selectAuthor();
