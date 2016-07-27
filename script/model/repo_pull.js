(function(module){
	var reposObject = {};

	reposObject.myRepos = [];

	reposObject.callingRepos = function(nextfunction) {
		$.ajax({
			url: 'https://api.github.com/users/tenlia/repos',
			type: 'GET',
			headers: {
				'Authorization': 'token ' + token,
			},
			success: function(data, message, xhr) {
				data.forEach(function(current) {
					reposObject.callingCollaborators(current.name);
				});
			}
		});
	}

	reposObject.callingCollaborators = function(name) {
		$.ajax({
			url: 'https://api.github.com/repos/Tenlia/' + name + '/collaborators',
			type: 'GET',
			headers: {
				'Authorization': 'token ' + token,
			},
			success: function(collabData, message, xhr) {
				console.log(name);
				// console.log(collabData);
				current.collabData = collabData;
				console.log(current.collabData);
			}
		});
	}

	reposObject.callingRepos();

	module.reposObject = reposObject;
})(window);