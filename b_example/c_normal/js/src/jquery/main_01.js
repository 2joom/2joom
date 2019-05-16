// main_01.js
(function($){
  // header
  var gnb = $('.gnb');
  var gnbMenu = $('.gnb_menu');
  var gnbUl = $('.gnb_ul');

 gnb.mouseover(function(e){
    e.preventDefault();
    gnbMenu.slideDown(300);
    gnbUl.css('display:block');
 });
  gnbMenu.mouseleave(function(e){
    e.preventDefault();
    gnbMenu.slideUp(300);
 });
  
  // slideBox
  var outerUl = $('.outer');
  var slideLi = outerUl.children('li');
  var i

  // outerUl


})(jQuery);
