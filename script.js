jQuery(document).load(function() {
  jQuery(window).bind('scroll', function() {
  var navHeight = jQuery( window ).height() - 90;
    if (jQuery(window).scrollTop() > navHeight) {
      jQuery('nav').addClass('fixed');
    }
    else {
      jQuery('nav').removeClass('fixed');
    }
 });
});
