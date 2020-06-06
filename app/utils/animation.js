import anime from 'animejs/lib/anime.es.js';

const animeRevealAni = (elm, delay = 800) => {
  elm.classList.add('anime-reveal');
  var oldElm = elm.innerHTML;
  var newElm = `<div class="anime-reveal__text">${oldElm}</div>`;
  elm.innerHTML = newElm;
  elm.insertAdjacentHTML('beforeend', '<div class="anime-reveal__box"></div>')
  var animeText = elm.querySelector('.anime-reveal__text'),
      animeBox = elm.querySelector('.anime-reveal__box');

      animeBox.style.transform = "scaleX(0)";
      animeText.style.opacity = "0";

      animeBox.style.transformOrigin = "0% 50%";

      if (delay > 800) {
        const animateDelay = setInterval(() => {
          anime({
            targets: animeBox,
            easing: "easeInOutQuint",
            scaleX: 1,
            duration: 800,
            complete: function() {
              animeBox.style.transformOrigin = "100% 50%";
              animeText.style.opacity = "1";
              anime({
                targets: animeBox,
                delay: 100,
                easing: "easeInOutQuint",
                duration: 800,
                scaleX: 0,
              })
            }
          })
        }, delay)

        clearInterval(animateDelay);
      }

      anime({
        targets: animeBox,
        easing: "easeInOutQuint",
        scaleX: 1,
        duration: delay,
        complete: function() {
          animeBox.style.transformOrigin = "100% 50%";
          animeText.style.opacity = "1";
          anime({
            targets: animeBox,
            delay: 100,
            easing: "easeInOutQuint",
            duration: 1000,
            scaleX: 0,
          })
        }
      })
}


export const animeReveal = (elm, delay) => {
  if(elm !== null) {
    var watcher = scrollMonitor.create(elm);

    watcher.enterViewport(function() {
      animeRevealAni(elm, delay);
      watcher.destroy();
    });
  }
}

export const animeTransform = (elm, duration = 1400) => {
  if(elm !== null) {
    var watcher = scrollMonitor.create(elm);
    elm.style.overflow = 'hidden';

    watcher.enterViewport(function() {
      elm.innerHTML = elm.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({loop: false})
        .add({
          targets: [elm, '.letter'],
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: duration,
          delay: (el, i) => 30 * i
        })
      watcher.destroy();
    });
  }
}