(function(module){
	var reposObject = {};

	reposObject.myRepos = [];

	reposObject.callingRepos = function(nextfunction) {
		$.get('/github/users/tenlia/repos')
		.done(function(data, message, xhr) {
			data.filter(function(current) {
				return !current.fork;
			})
			.map(function(currentRepo) {
				reposObject.callingCollaborators(currentRepo);
			})
			nextfunction(reposObject.myRepos);
		});
	}

	reposObject.callingCollaborators = function(currentRepo) {
		$.get('/github/repos/tenlia/' + currentRepo.name + '/collaborators')
		.done(function(collabData, message, xhr) {
			repoAuthors = [];
			collabData.forEach(function(currentAuthor) {
				repoAuthors.push(currentAuthor.login);
			});
			(reposObject.myRepos).push({
				title: currentRepo.name,
				authors: repoAuthors,
				url: currentRepo.url,
				pubDate: currentRepo.created_at,
				lastUpdate: currentRepo.updated_at
			});
			console.log(reposObject.myRepos);
		});
	}

	module.reposObject = reposObject;
})(window);
