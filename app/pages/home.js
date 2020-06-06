import { animeReveal, animeTransform } from '../utils/animation';

document.addEventListener('DOMContentLoaded', function(e) {
  if(document.querySelector('#homepage')) {
    document.body.classList.add("bg-homepage");
  }
});

const initHome = () => {
  animeReveal(document.querySelector('.introduction__title'), 1000);
  animeReveal(document.querySelector('.introduction__sub-title'), 1200);
  animeReveal(document.querySelector('.about-us__title'), 1000);
  animeReveal(document.querySelector('.album-intro__title'), 1000);
}

let isPreload = false;

if (sessionStorage.getItem('isPreload') ) {
  $('#preload').remove();
  $('body').removeClass('preloading');
  initHome();
} else {
  sessionStorage.setItem( 'isPreload', true );
  $(window).on('load', function(){
    isPreload = true;

    $('#preload').delay(1000).fadeOut('fast');
    $('body').removeClass('preloading');

    if (isPreload) {
      setTimeout(function(){
        if (document.querySelector('#homepage')) {
          initHome();
        }
      }, 1000);
    }
  });
}