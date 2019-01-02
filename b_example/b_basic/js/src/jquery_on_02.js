// jquery_on_02.js

(function($){
// ========================================
// mouseenter | mouseover -----------------------
var enter = $('.mouseenter');
var over = $('.mouseover');
var num1 = 0,
    num2 = 0;

var enterOut = enter.children('.out');
// mouseenter는 내부의 자식을 포함하지 않고 오롯이 '나'만을 영역으로 인정

var overOut = over.children('.out');
// mouseover는 대상의 자식들까지 영역으로 인정한다.

enter.on('mouseenter',function(){
  num1 += 1;
  enterOut.text(num1);
});
over.on('mouseover',function(){
  num2 += 1;
  overOut.text(num2);
});

// change -------------------------------
var sel = $('#sel');
sel.on('change',function(e){
  e.preventDefault();

  // var nar = $(this).val();
  var nar = $(this).children('option:selected').text();
  // 선택된(select요소 내부의 option)요소의 경우는 별도의 선택 되었을 때('selected')의 경우를 지정해야 한다.
  // selected: '선택된','선택되었을때'를 의미한다.
  // checked: '체크된','체크되었을때'를 의미한다.

  $('.change').find('p').children('span').text(nar);
});

// scroll ---------------------------------
var st = $(window).scrollTop();
//메소드의 내부가 ()비어있을경우 확인하는 값인 경우가 대부분
// console.log(st);
var pt = $('.position').offset().top;
console.log(pt);

$(window).on('scroll',function(){
  st = $(window).scrollTop();
  // console.log(st);

  // console.log('스크롤변경: ', st);
  if(st >= pt){
    $('.fix').css({position:'fixed',top:0});
  }else{
    $('.fix').removeAttr('style');
  }


  $('body').css({backgroundColor:"#133"});
});

// scroll 이벤트 수행시 다음과같은 메소드를 같이 알아야 한다!
// scrollTop : 현재 스크롤 바의 상단부분이 얼마만큼 떨어져 있는지를 파악
// offset().top | offset().left : scrollTop(0)기준이다. '스크롤'을 내려도 기준이scrollTop(0)인것이 변하지 않으니 offset().top , offset().left의 값은 변하지않는다.  

//  offset 이해
var porOffset = $('.por').offset().top;
var pofOffset = $('.pof').offset().top;

console.log(porOffset, 'vs', pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);

$(window).on('scroll', function(){
  porOffset = $('.por').offset().top;
  pofOffset = $('.pof').offset().top;

console.log(porOffset, ' * ', pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);
});
})(jQuery);