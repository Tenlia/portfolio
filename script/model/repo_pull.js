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
					// console.log(current);
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
				// console.log(name);
				// console.log(collabData);
			}
		});
	}
	
	$.ajax({
		url: 'https://api.github.com/repos/Tenlia/learning_journal/contents/',
		type: 'GET',
		headers: {
			'Authorization': 'token ' + token,
		},
		success: function(entryData, message, xhr) {
			// console.log(entryData);
			entryData.forEach(function(current) {
				$.ajax({
					url: current.url,
					type: 'GET',
					headers: {
						'Accept': 'application/vnd.github.v3.raw',
						'Authorization': 'token ' + token,
					},
					success: function(urldata, message, xhr) {
						// console.log(urldata);
					}
				})
			});
		}
	});

	reposObject.callingRepos();

	module.reposObject = reposObject;
})(window);