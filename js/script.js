$(document).ready(function () {
	$(".menu-bar").on('click', function (e) {
		e.preventDefault();
		$("nav").toggleClass('hide');
		$("span", this).toggleClass("lnr-menu lnr-cross");
		$(".menu").addClass('mobile-menu');
	});
});