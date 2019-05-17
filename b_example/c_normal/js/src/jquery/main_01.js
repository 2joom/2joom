// main_01.js
(function($){
  // header
  var gnb = $('.gnb_big');
  var gnbMenu = $('.gnb_menu');
  var gnbUl = $('.gnb_ul');




gnb.on('mouseover',function(e){
    e.preventDefault();
    gnbMenu.stop().slideDown(300);
    gnbUl.css('display:block');
 });


 
 gnb.mouseleave(function(e){
    e.preventDefault();
    gnbMenu.slideUp(300);
 });
  
  // slideBox
  var outerUl = $('.outer');
  var slideLi = outerUl.children('li');
  var slideLiH = outerUl.children('li').height();

setInterval(function(){ 
  outerUl.animate({marginTop:-slideLiH},2000,function(){
    // -height()인 이유는 아래서 위로 가는 방향을 위해서 -높이값을 설정해줌
    slideLi.eq(0).appendTo(outerUl);
    // 처음것을 맨뒤로 보낸다.
    // 위로 보내면서 밀려가는것을 재배치 하기위해서 
    // ex) 1->2->3 => 2->3->1
    outerUl.css({marginTop:0});
    // marginTop을 0으로 만드는 이유는 올라가서 다음화면이 보여야하기 때문에
    slideLi = outerUl.children('li');
    // 재배치가 된 상태.
  });
},1000); // setInterval은 지정된 함수를 지속적으로 시간동안 실행하라는 뜻.

})(jQuery);
