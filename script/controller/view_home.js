
(function(module) {
	var homeController = {};

	homeController.view = function() {
		$('.view-content').hide();
		$('#articles').fadeIn(350);
	}
	
	module.homeController = homeController;
})(window);