//my_study.js 예습,복습

(function(e) {
var Indi = $('.indicator')
var aMom = $('li')
var a = $('li'.children('a'))

a.on('click', function(e){
  e.preventDefault();
  var _this = $(this).parent().index();
  console.log(_this);
  var V = _this*100;
  
  aMom.removeClass('action');//클레스를 지운다
  aMom.eq(_this).addClass('action');//클레스를 생성한다





});

  
})(jQuery);






//$('li.third-item').siblings().css('background-color', 'red'); 다른 표현 방식으로 의문! 왜 {}가 쓰이지 않는가?

