/* Fonction de modification navbar au défilement de la page */
$(window).trigger('scroll');
$(window).on('scroll', function () {
	var pixels = 50;
	var top = 1200;
	if ($(window).scrollTop() > pixels) {
		$('.navbar-expand-md').addClass('navbar-reduce');
		$('.navbar-expand-md').removeClass('navbar-trans');
	} else {
		$('.navbar-expand-md').addClass('navbar-trans');
		$('.navbar-expand-md').removeClass('navbar-reduce');
	}

});

