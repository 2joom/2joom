// main_01.js
(function($){
  // header **********************************************
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
  
  // slideBox *******************************************
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

  // conBox **********************************************
  var tab = $('.con_box01');
  var tabMenu = tab.children('ul').children('li');
  var tabCon = tab.children('.content');

  tabMenu.on('click',function(e) {
    //탭메뉴를 클릭하면
    e.preventDefault();
    var _this = $(this);
    var index = _this.index();
    _this.addClass('active');
    _this.siblings('li').removeClass('active');
    // 이것에 클레스 active를 생성하라
    // li를 제외한 모든 형제li에 클레스 active를 삭제하라 

    tabCon.children('div').eq(index).show();
    // 큰컨텐츠박스 자식인 갯수번째를 보여라
    tabCon.children('div').eq(index).siblings('div').hide();
    // 큰컨텐츠박스 자식인 갯수번째를 제외한 형제들은 숨어라
  });

  // 팝업창 열기
  var popUp = $('.pop_up01');
  var conTent = $('.content');
  var popUp_div = conTent.find('.pop_up02');
  var popUp02 = popUp_div.children('a');

  popUp.on('click',function(e){
    e.preventDefault();
    $(this).css('background-color:#ccc');
    // popUp.css('display:none');
  });



})(jQuery);
