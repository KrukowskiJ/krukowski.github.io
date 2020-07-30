jQuery(window).bind('scroll', function() {
var navHeight = jQuery( window ).height() - 90;
  if (jQuery(window).scrollTop() > navHeight) {
    jQuery('nav').addClass('fixed');
  }
  else {
    jQuery('nav').removeClass('fixed');
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //animate navLinks
    navLinks.forEach((link,index) => {
    if(link.style.animation){
    link.style.animation = `navLinkFade 0.5s ease forwards 5s`;
  }
    else{
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
    }
  });

  //burger animation
  burger.classList.toggle('toggle');
});

 nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

 });
}

navSlide();
