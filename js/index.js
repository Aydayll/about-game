$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
  });
});

// function timer() {
//   TweenMax.from('.header__logo', 1, {
//     opacity: 0,
//     x: -20,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.staggerFrom(
//     '.nav ul li',1,{
//       opacity: 0,
//       x: -20,
//       ease: Power3.easeInOut,
//     },
//     0.08,
//   );
//   TweenMax.from('.header__items', 2, {
//     opacity: 0,
//     x: -30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.hero__title, .hero__description', 2, {
//     opacity: 0,
//     y: -30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.hero__btn', 1, {
//     delay: 0,
//     opacity: -1,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.hero__arrow', 1, {
//     delay: 0,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.social__subtitle, .quotess__subtitle', 1, {
//     opacity: 0,
//     x: -30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.social__title, .quotess__title', 1, {
//     delay: 0.5,
//     opacity: 0,
//     x: -30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.social__description, .quotess__description', 1, {
//     delay: 1,
//     opacity: 0,
//     x: -30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.social__block', 1, {
//     delay: 0.8,
//     opacity: 0,
//     x: 30,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.features__subtitle, .subscribe__subtitle', 1, {
//     delay: 0.1,
//     opacity: 0,
//     x: 50,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.features__title, .subscribe__title', 1, {
//     delay: 0.3  ,
//     opacity: 0,
//     x: 70,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.accordeon__title', 1, {
//     delay: 0.5,
//     opacity: 0,
//     x: 70,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.system__subtitle', 1, {
//     delay: 0.1,
//     opacity: 0,
//     y: -50,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.system__title', 1, {
//     delay: 0.3,
//     opacity: 0,
//     y: 50,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.system__content', 1, {
//     delay: 0.3,
//     opacity: 0,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.quotess__btn', 1, {
//     delay: 1.3,
//     opacity: 0,
//     x: -50,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from(paramount__anim,  1, {
//     delay: 0.4,
//     opacity: 0,
//     x: 100,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from(secondary__anim,  1, {
//     delay: 0.8,
//     opacity: 0,
//     x: 100,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.subscribe__description',  1, {
//     delay: 0.5,
//     opacity: 0,
//     x: 100,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.col-8',  1, {
//     delay: 0.7,
//     opacity: 0,
//     x: 100,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.col-4',  1, {
//     delay: 0.9,
//     opacity: 0,
//     x: 100,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.footer__logo',  1.2, {
//     delay: 0.1,
//     opacity: 0,
//     x: -60,
//     ease: Expo.easeInOut,
//   });
//   TweenMax.from('.fa-facebook',  1, {
//     delay: 0.1,
//     opacity: -1,
//     x: 180,
//     ease: Expo.ease,
//   });
//   TweenMax.from('.fa-twitter',  1, {
//     delay: 0.3,
//     opacity: -1,
//     x: 180,
//     ease: Expo.ease,
//   });
//   TweenMax.from('.fa-youtube',  1, {
//     delay: 0.5,
//     opacity: -1,
//     x: 180,
//     ease: Expo.ease,
//   });
//   TweenMax.from('.fa-twitch',  1, {
//     delay: 0.7,
//     opacity: -1,
//     x: 180,
//     ease: Expo.ease,
//   });
//   TweenMax.from('.footer__bottom--left',  2, {
//     delay: 0.2,
//     opacity: -1,
//     x: -50,
//     ease: Expo.ease,
//   });
//   TweenMax.from('.footer__bottom--right',  2, {
//     delay: 0.2,
//     opacity: -1,
//     x: 50,
//     ease: Expo.ease,
//   });
// }
// setTimeout(timer, 1800)

TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-120%",
  ease: Expo.easeInOut
})
TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
  delay: .3,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})