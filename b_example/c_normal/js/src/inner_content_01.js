//inner_content_01.js 

(function($) {
  //console.log('start!!');
  /*==================== 메소드 : ___()를 가져와
  01. text()       : 작성한 내용을 확인/작성 하는 메소드
    ->console.log에 보이는 값은 다르지만, 브라우저에 변경되어 표기
    ->본래의 형태를 날리고 새로추가되는 기능
    ->div 및 css기능의 박스를 삽입할수 없다.why?텍스트로 입력하기때문에.

  02. html()       : html태그를 확인/제작 하는 메소드
    ->본래의 형태를 날리고 새로추가되는 기능

  03. wrap()       : 선택한 요소의 부모요소를 제작하는 메소드
   ->ex)h1을 가진 header에 다른 div를 제작 할수있다.

  04. before()     : 선택 요소의 이전(형제)에 요소를 제작하는 메소드
  05. after()      : 선택 요소의 이후(형제)에 요소를 제작하는 메소드
 ---- 12/07:여기까지 수업해주심
  
  06. prepend()    : 선택요소의 자식의 앞에 제작/삽입하는 메소드
  07-1 appendTo() -> 주어를 변화주어서 사용
  07. append()     : 선택요소의 자식의 뒤에 요소를 제작/삽입하는 메소드
  07-1 appendTo() -> 주어를 변화주어서 사용
  ***** 08. clone()      : 내용/태그 ... 복제하는 메소드
   09. remove()     : 선택 요소를 삭제하는 메소드
  10. empty()      : 선택요소의 내부(자식)를 비우는 메소드
  11. removeAttr() | removeA('속성명') : 선택요소의 속성을 삭제하는 메소드 | 속성명 필요
  12. attr() | attr('속성명'(,'속성값') ) : 선택요소의 속성을 파악/수정/삽입 하는 메소드
  13. val()        : form 요소의 값을 파악/삽입 하는 메소드
  ===================== */
   
  // text() ----------------------
  var h1 =$('h1');
  var h1T = h1.text();
  var h1TreWrite = h1.text('링크를 삽입하고 다시 처리하기');
  //console.log(h1T);

  // html() -------------------------
  var myText = '와 <br /> 함께 jquery 추가기능 사용하기';

  var h1Link = h1.html('<a href=["#"]>'+ h1T + myText +'</a>');
  console.log(h1Link);

  // wrap() ---------------------------
  var h1Wrap = h1.wrap('<div class="head_wrap"></div>');
  var headWrap = $('.head_wrap');
  headWrap.css({margin:'auto', width:1+'rem', width:60+'rem', textAlign:'center'});
  console.log(h1Wrap)

  // before() ---------------------------
  var viewBox = $('#viewBox')
  //console.log( viewBox.prev() );
  //console.log( viewBox.next() );

  viewBox.before('<div class="view-before"></div>');
  viewBox.after('<div class="view-after"></div>');
  $('.view').css({width:'100%', height:'1rem', backgroundColor:'#f0a'});
  
  console.log( viewBox.prev() );
  console.log( viewBox.next() );

  // prepend() --------------------------
  var foot = $('#footBox');
  var to1 = '<p>내용에 이전에 삽입하고있음</p>';
  foot.prepend('<p>내용에 이전에 삽입하고 있음</p>');
  // prependTo() --------------------------
  $(tol).prependTo(foot);
  
  // append() ---------------------------
  foot.append('<p>내용에 뒤에 삽입하고 있음</p>');
  
  // appendTo() ---------------------------
  var to2 = '<p>내용에 뒤에 삽입하고 있음</p>';
  $(to2).appendTo(foot);

  // remove() ----------
  var conBox =$('#conBox');
  conBox.emty();








})(jQuery);