// page() routes file
page();
page('/', articles);
page('/aboutme', aboutme);

function articles() {
	homeController.view();
	console.log('articles() ran');
}

function aboutme() {
	aboutmeController.view();
	console.log('aboutme() ran');
}