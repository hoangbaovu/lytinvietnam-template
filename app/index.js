/**
 * Application entry point
 */
import 'core-js';
import Chocolat from 'chocolat';

// Load application styles
import "styles/styles.scss";

// ================================
// START YOUR APP HERE
// ================================

// Pages
import "./pages/home";

$(document).ready(function ($) {
  Chocolat(document.querySelectorAll('.chocolat-image'), {
    // options here
    container: document.querySelector('.chocolat-container'),
    loop: true,
    allowFullScreen: true,
    imageSize: 'native',
  });

  $('#mobile-nav-button').click(function () {
		$(this).toggleClass('open');
		$(".navbar-mobile").slideToggle("fast");
		if ($(this).hasClass('open')) {
			document.body.classList.add("navbar-mobile-body-open");
		} else {
			document.body.classList.remove("navbar-mobile-body-open");
		}
	});
});