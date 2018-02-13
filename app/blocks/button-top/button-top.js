const $ = window.$;
/* eslint-disable */
export default function upbutton() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 500);
  });
}
/* eslint-enable */
