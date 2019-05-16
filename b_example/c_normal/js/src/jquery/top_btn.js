// top_btn.js
(function($){
  // 스크롤 1000px 기준으로 이하일 경우에 사라지고,초과시 나타나게 만들기

  var topBtn = $('.top_button');
  var st;

var scrollView = function(){
  st = $(window).scrollTop();
  if( st <= 1000 ){ topBtn.fadeOut(); }else{ topBtn.fadeIn(); }
};
scrollView();

  $(window).on('scroll',function(){
    scrollView();
  });



})(jQuery);
