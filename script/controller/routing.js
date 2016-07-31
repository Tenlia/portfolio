// page() routes file
page();
page('/', articles);
page('/aboutme', aboutme);

function articles() {
	homeController.view();
}

function aboutme() {
	aboutmeController.view();
}