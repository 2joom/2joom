/* menu_btn_01.js */

/*햄버거 원리

//함수 표현식(익명함수(이름이없는 함수)를 변수에 대입처리)
var Fn = function(e){
  return e+5;
};
var a = Fn(10);
console.log(a);

// 함수 선언식(함수자체에 이름을 생성)
function Fn2(e) {
  return e * 2;
}
var b = Fn2(5);
console.log(b);

//테스트
var tt = ("snan" + "momo")+'jiyoun';
console.log(tt);

//즉시 실행함수
(function(e){
  var j =  e *2 +3;
  console.log(j);
  return j;
})(3);
*/

//-------------------------------------------


  // jQuery 선택자
  /* step1:
    - css의 선택자형태와 똑같다.
    - 단, css형태 그대로 표현할 수는 없기에, $()를 감싸야한다.
    - 문자일 경우에는 ()안에 ''로 감싸주어야 한다.

    var 이름=class라고 보면 될듯.
  

  var h1        = $('h1');
  var mya       = $('ul>li>a');
  var dichildDd = $('dl>dt+dd');
  var liOne     = $('ul>li:nth-lild(1)');
  */
  /* step2:
    - 형제인지, 자식(children : API명령어라고 한다.)인지, 부모인지, 자손인지를 파악하여, 메소드(ex:myObj.come();형태로 나눠서 처리
    - 순서를 나타날때에는 내부에서 처리하는 방법과, 외부에서 순서값을 작성하는 방법

    **메소드 정리 : name() -> come() ()를 가져와
                             show() ()를 보여줘
                             hide() ()를 숨겨줘
                             ...등

  var Go = function(a) { return a+2; };
  var myObj = { coffee : 'americano',
                come : Go
              };
  var a = myObj.come(10);
  console.log(a);

  
var mya = $('ul>li>a');
var aa = $('ul').childeren('li').children('a');
*/

(function($){

var btn = $('.menu_btn_01');
btn.css({padding:'1rem', borderTop:'1rem solid #fa0'});

var dt = btn.children('dt');
dt.css({bacgroundColor:'#faa', color:'#177', fontStyle:'italic'});

var dtChild = dt.children('button');//'mouseenter'마우스 올렸을때
    dtChild.on('mouseenter',function(){ //'mouseleave'마우스 떠났을때
      $(this).css({backgroundColor:'#555', color:'#fff'});
}); //dt의 자식에 마우스 올렸을때!.css라는 메소드를 실행하라

    dtChild.on('mouseleave',function() {
      $(this).removeAttr('style');//지우다속성을(스타일)
});

// ------------------------------------------
var show = $('.show');
var hide = $('.hide');
var btnDd = btn.find('dd');

// show를 클릭시 dd를 나타나게 만들기
//button이라는 태그가 가지고있는 이벤트를 없애주기.
show.on('click',function(e){
  e.preventDefault();
  //btnDd.show();
  //btnDd.fadeIn();
  btnDd.slideDown(6000);

});

// hide를 클릭시 dd를 사라지게 만들기
hide.on('click',function(evt){
  evt.preventDefault();
  //btnDd.hide();
  btnDd.fadeOut(5000);//offset:사라지기(x000초 안에)
  //btnDd.slideUp(6000);

});

//--------------------------------------------
//toggle[on,off 기능키]
var dual = $('.dual');
dual.on('click', function(e) {
  e.preventDefault();
/* var status = btnDd.css('display');
  console.log(status);

  if(status !== 'none'){
    btnDd.slideUp(500);
  }else{
  } */
    btnDd.slideToggle();
  
});





})(jQuery);

// -------------------------------------------( function($){ }(jQuery) );


// -------------------------------------------$(document).ready(function(){ });//브라우저(html)가 준비가 되면 실행하라
