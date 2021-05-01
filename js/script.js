$(document).ready(function() {
	var wow = new wow({
		mobile: false
	});

	wow.init();

	$(function() {
		$('#emailForm').validate();
	});
});
