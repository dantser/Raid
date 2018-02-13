const $ = window.$;
/* eslint-disable */
export default function hideCont() {
  $('#hide').on('click', function(e) {
    e.preventDefault();
    const EL = $(this);
    const SLIDE_EL = $(this).parents('.contents').find('.contents__content');
    const TEXT = EL.text();
    SLIDE_EL.slideToggle();
    EL.text(TEXT === '[скрыть]' ? '[показать]' : '[скрыть]');
  });
}
/* eslint-enable */
