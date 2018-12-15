// teacher_inner_content_01.js

(function($) {
  // console.log('start!!');
  /* ========================
  
  01. text()       : 작성한 내용을 확인/작성 하는 메소드
    ->console.log에 보이는 값은 다르지만, 브라우저에 변경되어 표기
    ->본래의 형태를 날리고 새로추가되는 기능
    ->div 및 css기능의 박스를 삽입할수 없다.why?텍스트로 입력하기때문에.
 
  02. html()       : html태그를 확인/제작 하는 메소드
    ->본래의 형태를 날리고 새로추가되는 기능
 
  03. wrap()       : 선택한 요소의 부모요소를 제작 하는 메소드
   ->ex)h1을 가진 header에 다른 div를 제작 할수있다.
  
  04. before()     : 선택요소의 이전(형제)에 요소를 제작/삽입하는 메소드
  05. after()      : 선택 요소의 이후(형제)에 요소를 제작/삽입하는 메소드
  
  06. prepend()    : 선택요소의 자식의 앞에 요소를 제작/삽입하는 메소드 
  06-1. prependTo() -> 주어 목적어를 변화주어서 사용
  07. append()     : 선택요소의 자식의 뒤에 요소를 제작/삽입하는 메소드
  07-1 appendTo() -> 주어 목적어를 변화주어서 사용
  
  * 08. clone() | clone(true)      : 내용/태그 ... 복제하는 메소드
  
  09. remove()     : 선택 요소를 삭제하는 메소드
  10. empty()      : 선택요소의 내부(자식)를 비우는 메소드
  11. removeAttr() | removeA('속성명') : 선택요소의 속성을 삭제하는 메소드 | 속성명 필요
  12. attr() | attr('속성명'(,'속성값') ) : 선택요소의 속성을 파악/수정/삽입 하는 메소드
  13. val()        : form 요소의 값을 파악/삽입 하는 메소드
   =========================*/

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

  viewBox.before('<div class="view view-before"></div>');
  viewBox.after('<div class="view view-after"></div>');
  $('.view').css({width:'100%', height:'1rem', backgroundColor:'#f0a'});

  // console.log( viewBox.prev() );
  // console.log( viewBox.next() );

  var headBox = $('#headBox');
  // headBox.children('h1').after('<nav id="gnb"></nav>');
  headBox.find('.head_wrap').append('<nav id="gnb"></nav>');
  var gnb = $('#gnb');
  // html()은 기존의 내용을 모두 삭제하고 새로 쓴다.
  gnb.html('<h2>navigation</h2>');
  // gnb.append('<h2>navigation</h2>');
  // gnb.prepend('<h2>navigation</h2>');

  // headBox.find('.head_wrap').append('<div id="member"></div>');
  // var member = $('#member');
  // 컴퓨터는 지시한 대로만 수행: 인격이 없기에 입력한대로만 수행한다.
  // member.append('<a href="#">로그인하기</a>');
  // member.append('<p>어서오세요 ...님</p>');
  // member.prepend('무엇이?');
 
 gnb.append('<ul></ul>');
 var gnbUl = gnb.children('ul');
 // li를 5개 만드시오.
 // 방법 1- 직접 작성하기
   // gnbUl.append('<li><a href="http://google.com">list_01</a></li>');
   // gnbUl.append('<li><a href="http://naver.com">list_02</a></li>');
   // gnbUl.append('<li><a href="http://daum.net">list_03</a></li>');
   // gnbUl.append('<li><a href="http://w3schools.com">list_04</a></li>');
   // gnbUl.append('<li><a href="http://caniuse.com">list_05</a></li>');

 // 방법 2- 반복문사용하기
  // var i = 0; var j;
  // for(; i<5; i+=1){
  //   j= i + 1; // 숫자를 0부터가 아닌 1부터 작성하도록 처리
  //   gnbUl.append('<li><a href="#">list_0'+ j +'</a></li>');
  // }

 // 덧1 - 링크주소 별도로 만들어 담기(배열사용)
  var i = 0; var j;
  var addr = [ 'http://google.com',
               'http://naver.com',
               'http://daum.net',
               'http://w3schools.com',
               'http://caniuse.com',
               'http://kakao.com'
              ];

  // for(; i < addr.length; i+=1){
  //   j= i + 1;
  //   gnbUl.append('<li><a href="' + addr[i] + '">list_0'+ j +'</a></li>');
  // }

  for(i = addr.length; i > 0 ; i-=1){
    j= i - 1;
    gnbUl.prepend('<li><a href="' + addr[j] + '">list_0'+ i +'</a></li>');
  }

  var head = $('head');
  head.append('<style></style>');
  var style = head.children('style');

  style.append('\
      #gnb{width:100%; height:auto; padding:0.5rem 1rem; box-sizing:border-box;}\
      #gnb>ul{width:100%; height:auto;}\
      #gnb>ul:after{content:" "; display:block; clear:both;}\
      #gnb li{width:100px; height:auto; float:left; margin-right:1rem; background-color:#fff; text-align:center;}\
      ');
// ======================================

var foot = $('#footBox');
/* //** appendTo , prependTo 기능이해하기
  var to1 = '<p>내용에 이전에 삽입하고 있음</p>';
  // 방에 아버지께서 들어가신다.
  // foot.prepend(to1);

  // 아버지께서 방에 들어가신다.
  $(to1).prependTo(foot);

  var to2 = '<p>내용에 뒤에 삽입하여 처리 </p>';
  // foot.append(to2);
  $(to2).appendTo(foot);
*/
 foot.css({height:'auto'});
 foot.append('<ul></ul>');
var footUl = foot.children('ul');
footUl.css({margin:'1rem auto', width:'70%', height:'30rem', backgroundColor:'#faf', boxSizing:'border-box', padding:'1rem'});

//  --------------------------------------
// footUl.append('<li>list_01</li>');
// footUl.append('<li>list_02</li>');
// footUl.append('<li>list_03</li>');
// footUl.append('<li>list_04</li>');
// footUl.append('<li>list_05</li>');

// footUl.prepend('<li>list_01</li>');
// footUl.prepend('<li>list_02</li>');
// footUl.prepend('<li>list_03</li>');


var addr2 = ['a', 'b', 'c', 'd'];
// console.log( addr2[3] );
// console.log( addr2.length );
var addLen = addr2.length;


// for(var k = 0; k<addLen; k+=1){
//  // console.log(k);
//  // console.log( addr2[k] );
//  footUl.append('<li><a href="' + addr2[k] + '">list_'+ (k+1) +'</a></li>');
// }

for(var k = addLen; k > 0; k-=1){
 // console.log(k);
 // console.log( addr2[k-1] );
 footUl.prepend('<li><a href="'+ addr2[k-1] + '"> list_'+ k +'</a></li>');
}


foot.find('li').css({width:'100%', height:'2rem', marginBottom:'0.5rem', fontSize:'1.3rem', fontWeight:'bold', textAlign:'center', backgroundColor:'#fff'});


// var footBox = $('#footBox');
// var footLi = footBox.find ('li');
// console.log( footLi.children('a'));
// //jquery에서는 a를 li의 모든요소를 찾아낸다.
// //js에서는 li의 순서를 명확하게 인지한 후에 찾아내야한다.
// //단, li의 순서에 맞는 지식a에게 기능을 부여하려면 li에서 정확하게 순서를 지칭해야한다.

// var footA = footLi.eq(0).children('a');
// //console.log(footA);
// var faa = footA.attr('href');
// //console.log(faa);

// var headId = $('header').attr('id');
// console.log(headId);
// var whatClass = $('#headBox').children().attr('class');
// console.log( whatClass );



// attr() 오로지 속성을 찾아오는것 !!! -------------
var lsBox = $('#listBox').children('ul');
//console.log(lsBox);
var lsList = lsBox.children('li').eq(3).find('a');
// 선택시[]로 순서를 선택하는 것은 값자체를 파악!
// 선택시 eq()로 순서를 선택하는 것은 이후의 어떠한 메소드 기능을 수행
console.log(lsList.attr('href'));

//a요소의 속성 target은 클릭시 이동처리하는 방법 : _self(기본) | _blank(새창에서 띄우기) | _top(iframe상에서 이동을 막기위해 처리) | _parent(iframe상에서 이동을 막기위한 처리)
var re_lsLista = lsList.attr({'href' : 'http://naver.com',
                               'target' : '_blank',//html사용법 : target_html
                               'class' : 'more' });
//console.log(re_lsLista);

// attr('href','#afc')
// attr({'href','#afc'})

/*
.css(' ') -> 1회성 : 속성도 문자로 인삭하게 해야한다. 'color'
$('a').css('color', '#fa0');
$('a').css('fontSize', '1.3rem');
$('a').css('margin', '0.5rem');

.css({clolr '#fff'}) -> 속성 ' '써도 되고 안써도됨 단,!통일성 가짐
$('a').css({color:'#fa0', fontSize:'1.3rem', margin:'0.5rem'});
*/

// removeAttr() -----
console.log( lsList.removeAttr('class'));
console.log( lsList.attr('class'));

// val() --------------------
var inputId = $('#input_1').val();
//console.log( inputId );

var input2 = $('#input_2').on('keyup', function(){
  var myText = $(this).val();
  console.log(myText);

});

// clone() ----------------
//var shop = $('.shop');
//shop.append(product); -> 일회성!

// var product = $('.shop').children().eq(0).clone(true);
// shop.append(product);
// var product = $('.shop').children().eq(0).clone(true);
// shop.append(product);
// var product = $('.shop').children().eq(0).clone(true);
// shop.append(product);
//   shop.append(product);


// clone() : 객체 | 배열을 이용해서 복제하기.
var shop = $('.shop');
var color = ['#ff0', '#cca', '#acf', '#f06', '#f7f', '#afa'];

var info = ['설명1을 해보자!!!',
            '설명2을 해보자!!!',
            '설명3을 해보자!!!',
            '설명4을 해보자!!!',
            '설명5을 해보자!!!',
            '설명6을 해보자!!!'];

var link = ['http://naver.com',
            'http://daum.net',
            'http://google.com',
            'http://behance.net',
            'http://pinterest.com',
            'http://dribbble.com'];
var productList = [
  {color:'#ff0', text:'설명1을 해보자!!!', link:'http://naver.com'     },
  {color:'#cca', text:'설명2을 해보자!!!', link:'http://daum.net'      },
  {color:'#acf', text:'설명3을 해보자!!!', link:'http://google.com'    },
  {color:'#f06', text:'설명4을 해보자!!!', link:'http://behance.net'   },
  {color:'#f7f', text:'설명5을 해보자!!!', link:'http://pinterest.com' },
  {color:'#afa', text:'설명6을 해보자!!!', link:'http://dribbble.com'  },
];

var product, prEq;
for (var i = 0; i < productList.length; i+=1) {//eq(0):첫번째만 복사해라. why?의도치않은 갯수로 복제가 되기 때문에.
  product = $('.product').eq(0).clone(true);
  shop.append(product);

  prEq = $('.product').eq(i);

  prEq.find('.shop_img').css({backgroundColor:productList[i].color});//객체구분 방식 '.' -> .color
  prEq.find('p').eq(0).text(productList[i].text);
  prEq.find('a').attr('href',productList[i].link);

  // $('.product').eq(i).find('.shop_img').css({backgroundColor:productList[i].color});//객체구분 방식 '.' -> .color
  // $('.product').eq(i).find('p').eq(0).text(productList[i].text);
  // $('.product').eq(i).find('a').attr('href',productList[i].link);

/*
  var product = $('.product').eq(0).clone(true);
  shop.append(product);
  $('.product').eq(i).find('.shop_img').css({backgroundColor:color[i]});
//$('.product').eq(i).find('p').eq(0).text(info[i]);
  $('.product').eq(i).find('.shop_img').next().text(info[i]);
*/
}

//var len = $('.product').length;
//console.log(len);
$('.product').eq(-1).remove();




})(jQuery);