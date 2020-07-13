$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 90;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    }
    else {
      $('nav').removeClass('fixed');
    }
 });
});
