// slide_banner_02.js

(function($) {
// ** jqurery이용하여 슬라이드 광고배너를 만들기
// 기본 선택자 변수로 설정
  var viewOuter = $('.view_banner_outer');
  // viewOuter.animate({marginLeft:-200+'%'});
  var viewIndi = $('.view_indicator').find('li');

/*
** step_01 인디케이터 버튼을 클릭(포커스)하여 광고 이동하게 만들기
    viewIndi.children('a').on('focus',function(e){
      e.preventDefault();
      var _thisP = $(this).parent(); // index(); 해당 순서위치를 파악하는 기능ex)0~4번째 중 숫자로 알려줌
      var _thisI = _thisP.index();//a는 형제가 없으니 부모인 li에 위치값을 내놔라!
      var _index = _thisI * 100; // index는 순서위치를 알려주니 순서위치에 * 100%를 하면된다!

      viewIndi.removeClass('action');//클레스를 지운다
      viewIndi.eq(_thisI).addClass('action');//클레스를 생성한다

      console.log(_thisI);
      viewOuter.animate({marginLeft:-_index + '%'});

    });

  viewIndi.children('a').
    on('focus',function(e){
      e.preventDefault();
      var _thisI = $(this).parent().index(); // index(); 해당 순서위치를 파악하는 기능ex)0~4번째 중 숫자로 알려줌
      console.log(_thisI);
      var _index = _thisI * 100; // index는 순서위치를 알려주니 순서위치에 * 100%를 하면된다!
      viewOuter.animate({marginLeft:-_index + '%'});
    });
  
    viewIndi.children('a').
    on('clikc',function(e){
      e.preventDefault();
      var _thisI = $(this).parent().index(); // index(); 해당 순서위치를 파악하는 기능ex)0~4번째 중 숫자로 알려줌
      console.log(_thisI);
      var _index = _thisI * 100; // index는 순서위치를 알려주니 순서위치에 * 100%를 하면된다!
      viewOuter.animate({marginLeft:-_index + '%'});
    });

** step_02 오른쪽 버튼 클릭하여 오른쪽 광고 이동하게 만들기
  var next = $('.next_btn');
  var slideI = 0;
  
  next.on('click',function(e) {
    e.preventDefault();
    slideI += 1;
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index + '%'});

  });

** step_03 왼쪽 버튼 클릭하여 이전 광고로 이동하게 만들기
  var prev = $('.prev_btn');
  prev.on('click', function(e) {
    e.preventDefault();
    slideI -= 1;
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index + '%'});
  });


** step_05 인디케이터와 순서값을 연동하여 처리되게 만들기
*/
var next = $('.next_btn');
var prev = $('.prev_btn');
var slideI = 0;
var liLeng = viewIndi.length-1;//length는 갯수를 파악하는 것 0이면 없다는 의미

  next.on('click',function(e) {
    e.preventDefault();
    slideI += 1;
    if(slideI > liLeng){ slideI = liLeng; }
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index + '%'});
    viewIndi.removeClass('action');
    viewIndi.eq(slideI).addClass('action');

  });
  
  prev.on('click', function(e) {
    e.preventDefault();
    slideI -= 1;
    if(slideI < 0 ){ slideI = 0; }
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index + '%'});
    viewIndi.removeClass('action');
    viewIndi.eq(slideI).addClass('action');
  }); 
    

  viewIndi.children('a').on('focus',function(e){
      e.preventDefault();
      var _thisP = $(this).parent();
      slideI = _thisP.index();
      var _index = slideI * 100;
      viewOuter.animate({marginLeft:-_index + '%'});
      viewIndi.removeClass('action');
      viewIndi.eq(slideI).addClass('action');

})(jQuery);
  // step_04 해당광고의 끝으로 이동하면 버튼 사라지게 만들기