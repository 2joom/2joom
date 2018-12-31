// jquery_on_01.js
(function($){
/*
  var h1 = document.getElementsByTagName('h1')[0];
  h1.style.backgroundColor = '#f55';
  h1.style.height = 150;
  h1.style.color = '#fff';
*/

  var h1 = $('h1');
  $('h1').animate({backgroundColor:'#f55',height:70, padding:'1rem'},500,'easeInOutBounce');

  var btnUl = $('.btn_area');
  var btnLi = btnUl.children('li');
  // console.log(btnLi.length);
  var span = $('.result>span');

// click -------------------------------------------

  btnLi.on('click', function(e){
    e.preventDefault();
    span.text('일단 클릭했습니다.');
  });

// dbclick ---------------------------------------------

  btnLi.on('dblclick', function(e){
    //pre + event + default : 이벤트 기능을 날려라
    e.preventDefault();
    var mythis = $(this).index();
    span.text('선택된 li는'+ (mythis + 1) + '번째 입니다.');
  });

// mouse ---------------------------------------------
  var mouse = $('.mouse');
  mouse.on('mousedown',function(e){
      console.log(e.which);
      var num = e.which;

//   if(num == 1){
//   $(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
// }else if(num == 2){
//   $(this).children('span').text('마우스 가운데버튼을 눌렀습니다.');
// }else if(nume == 3){
//   $(this).children('span').text('마우스 오른버튼을 눌렀습니다.');
// }else{
//     $(this).children('span').text('그런버튼 안키웁니다.@@@');
// }

  switch(num){//하나의 기능이 아닌 복합적인 기능을 할때 수행한다. 또다른 조건문으로 사용할수있다. break로 else의 역할을 한다. break없다면 통합적으로 인지하여 한가지만 인식할것이다.
    case 1 :
      $(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
    break;

    case 2 :
      $(this).children('span').text('마우스 가운데버튼을 눌렀습니다.');
    break;

    case 3 :
      $(this).children('span').text('마우스 오른버튼을 눌렀습니다.');
    break;

    default:
      $(this).children('span').text('그런버튼 안키웁니다.@@@');
  }

 });

  mouse.on('mouseup',function(e){
      $(this).children('span').text('마우스를 띄었지비~');
  });

// focus / blur / moseenter / mouseleave ==========================================================================
  var fc = $('.focus');
  var fcList = fc.children('li');

  fcList.children().on('focus mouseenter' , function(){//''안에있는 요소들은 " (space)"로 구분한다. (,)는 쓰지않는다.
    $(this).css({backgroundColor:'#07a', color:'#fff', fontWeight:'bold'});// focus:대상에 인식이 잡혔을때
  });
  fcList.children().on('blur mouseleave' , function(){
    $(this).removeAttr('style');
  });// blur:대상에 인식이 잡혔다 나갈때
  fcList.children().on('mouseenter' , function(){//''안에있는 요소들은 " (space)"로 구분한다. (,)는 쓰지않는다.
    $(this).css({backgroundColor:'#999'});
  });
  fcList.children().on('mouseleave' , function(){
    $(this).css({backgroundColor:'#fa0'});
  });
// key ======================================
$('#key1').on('keypress',function(e){
  console.log(e);
});//한글은 지원하지않는다.

$('#key2').on('keydown',function(e){
  // console.log(e.key.toString().toLowerCase());
  console.log(e.keyCode);//keydown은 모든 키보드를 인지한다.

  switch(e.keyCode){
    case 37:
    $(this).css({backgroundColor:'#f06'});
    break;
    case 38:
    $(this).css({backgroundColor:'#116'});
    break;
    case 39:
    $(this).css({backgroundColor:'#0f6'});
    break;
    case 40:
    $(this).css({backgroundColor:'#ff0'});
  }
});

// key ======================================
// 브라우저의 화면의 크기가 변형되었을때
//$(window):브라우저 전체 통틀어(스크롤 즐겨찾기 닫기버튼 등등 포함)
//$(document):브라우저에 작업하기위한 가장 큰 틀이라고 할수있다.
//$(this):선택하는 그것 *변수의기능
var ww = $(window).width();
 console.log(ww);

$(window).on('resize',function(){
  $('body').css({backgroundColor:'#ca9'});
 var nw = $(window).width();
 console.log(nw);// resize : 원래사이즈에서 변형이된다면 적용하라

 if(ww !== nw){
  window.location.reload(); // location이동해라 reload()새로고침
 }

});






})(jQuery);