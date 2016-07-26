// about-me function
(function(module) {
	var aboutmeController = {};

	aboutmeController.view = function() {
		$('.view-content').hide();
		$('#about-me').fadeIn(350);
	}

	module.aboutmeController = aboutmeController;
})(window);