// jquery_scroll_ex01.js
(function($){
    // #viewBox에 마우스 스크롤시 화면이 이동처리하는 기능
    // 1. 마우스 버튼(sambtn)을 클릭시 오른쪽 내용이 나타나게...
    // 2. 마우스 휠기능으로 대체

    var viewBox = $('#viewBox');
    var close = viewBox.children('.close');
    var samplebtn = viewBox.children('.sambtn');
    var viewOuter = $('.view_outer');
    var viewOuterUl = viewOuter.children('ul');
    var voLi = viewOuterUl.find('li');
    var viewLiWidth = viewOuterUl.children('li').eq(0).width();
//    첫번째 가로값 만큼 움직여라( per -= viewliWidth)
//    viewOuterUl.animate({marginLeft:per});

    var per = 0;
    var i = 0;
//  $(viewBox).scrollLeft();

//     samplebtn.on('click',function(){
//       i += 1;
//       per -= viewLiWidth; | 또는  | per = 1 * -100 '%'
//       if(i < voLi.length){
//         viewOuterUl.animate({marginLeft:per});
//       }
//     });

// 스크롤 처리시 스크롤바를 보이지 않게 수정
    var viewCon = viewOuterUl.wrap('<div class="scroll_box">');
    $('.scroll_box').css({width:'100%' , height:viewOuter.height() , paddingBottom:'3rem' , overflow:'hidden' , overflowX:'auto'} );
    viewOuter.css({overflow:'hidden'});

    // viewOuter.on('scroll',function(){
    //   var sl = $(this).scrollLeft();
    //   console.log(sl);
    // });


// 마우스 스크롤 처리
  var go = true;
viewOuter.on('mousewheel DOMMouseScroll', function(e){
  e.preventDefault();

  if(go){
  var go = false;
  var E = e.originalEvent;
  var delta;

    if(E.wheelDelta){
      delta = E.wheelDelta; // wheelDelta : 120 , -120
    }else{
      delta = E.detail * -40; // detail : -3 , 3
    }
    console.log(delta);
  
    if(delta < 0 && i < voLi.length-1){
      // 마우스를 아래로 휠을 움직였을경우
      i += 1;
    }else if(delta > 0 && i > 0){
      // 마우스를 위로 휠을 움직였을경우
     i -= 1;
    }

    per = i * -100 + '%'; // 1 * -100 => -100
    viewOuterUl.stop().animate({marginLeft:per},function(){
    });
  }
});

close.on('click',function(){
  viewBox.remove();
});


// ----------------------------------------------------------------
var conBox = $('#conBox');
var conBoxChild = conBox.children().eq(0).outerWidth();
var wheelresult = 0;


conBox.on('mousewheel',function(e){
  var E = e.originalEvent;
  var delta = E.wheelDelta;

  // console.log(delta);

  $(this).parents().animate({scrollLeft:500});




});












})(jQuery);
