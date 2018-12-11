// make_jquery_01_test.js
(function($){
//var body = $('body')
var html = $('html');
var body = $('body');

$('body').append('<div id="wrap"></div>')
$('#wrap').append('<header id="headBox"></header>')
$('#headBox').after('<section id="viewBox"></section>')
$('#viewBox').after('<article id="newsBox"></article>')
$('#newsBox').after('<article id="conBox"></article>')
$('#conBox').after('<footer id="footBox"></footer>');

var wrap = $('#wrap');
var headBox = $('#headBox');
var viewBox = $('#viewBox');
var newsBox = $('#newsBox');
var conBox = $('#conBox');
var footBox = $('#footBox');

// headBox ----------
headBox.append('<h1><a href="../../index.html"></a></h1>');
$('h1').children('a').text('index page 이동');
headBox.append('<nav id="gnb"></nav>');

var gnb = $('#gnb')
var headH2 = $('.hidden').children('h2')

gnb.append('<h2 class="hidden"><span>global navigation</span></h2>')
$('.hidden').after('<ul></ul>');
gnb.children('ul').append('<li><a hraf="#">link_name_01</a></li>');
gnb.children('ul').children('li').after('<li><a hraf="#">link_name_02</a></li>');
gnb.children('ul').children('li').eq(1).after('<li><a hraf="#">link_name_03</a></li>');
gnb.children('ul').children('li').eq(2).after('<li><a hraf="#">link_name_04</a></li>');
gnb.children('ul').children('li').eq(3).after('<li><a hraf="#">link_name_05</a></li>');

// viewBox ------------
viewBox.append('<h2>viewBox</a></h2>');
viewBox.append('<div class="view_btn"></div>');
$('.view_btn').append('<ul class="view_indi_btn"></ul>');

var viewBtn = $('.view_btn')
var viewIndi = $('.view_btn').children('.view_indi_btn')

$('.view_indi_btn').append('<li><a href="#link_01">narr_01</a></li>');
$('.view_indi_btn').children('li').eq(0).after('<li><a href="#link_01">narr_02</a></li>');
$('.view_indi_btn').children('li').eq(1).after('<li><a href="#link_01">narr_03</a></li>');
$('.view_indi_btn').children('li').eq(2).after('<li><a href="#link_01">narr_04</a></li>');

$('.view_btn').after('<div class="view_slide_btn"></div>');
var viewSlide = $('.view_btn').children('.view_indi_btn')

$('.view_slide_btn').append('<button type="button">다음내용 보기</button>');
$('.view_slide_btn').children('button').after('<button type="button">이전내용 보기</button>');

$('.view_slide_btn').after('<div class="view_banner"></div>');
$('.view_banner').append('<div id="link_01"><h3>광고내용제목_01</h3>\
                          <p>광고설명_01</p>\
                          <div class="view_link"><a href="http://link_01.com">자세히 보기</a></div></div>');
$('.view_banner').children('#link_01').after('<div id="link_02"><h3>광고내용제목_02</h3>\
                           <p>광고설명_02</p>\
                           <div class="view_link"><a href="http://link_02.com">자세히 보기</a></div></div>');
$('.view_banner').children('#link_02').after('<div id="link_03"><h3>광고내용제목_03</h3>\
                           <p>광고설명_03</p>\
                           <div class="view_link"><a href="http://link_03.com">자세히 보기</a></div></div>');
$('.view_banner').children('#link_03').after('<div id="link_04"><h3>광고내용제목_04</h3>\
                           <p>광고설명_04</p>\
                           <div class="view_link"><a href="http://link_04.com">자세히 보기</a></div></div>');

// newsBox ------
newsBox.append('<h2>newsBox</h2>');
newsBox.append('<div class="news_outer">\
                <div class="news_01"></div>\
                <div class="img"><span>뉴스이미지1</span></div>\
                <dl class="news_content"><dt>news_title1</dt><dd>news_content1</dd></dl></div><br />')
$('.news_outer').append('<div class="news_02"></div>\
                <div class="img"><span>뉴스이미지2</span></div>\
                <dl class="news_content"><dt>news_title2</dt><dd>news_content2</dd></dl><br />');
$('.news_outer').append('<div class="news_03"></div>\
                <div class="img"><span>뉴스이미지3</span></div>\
                <dl class="news_content"><dt>news_title3</dt><dd>news_content3</dd></dl><br />');
$('.news_outer').append('<div class="news_04"></div>\
                <div class="img"><span>뉴스이미지4</span></div>\
                <dl class="news_content"><dt>news_title4</dt><dd>news_content4</dd></dl><br />');
$('.news_outer').append('<div class="news_05"></div>\
                <div class="img"><span>뉴스이미지5</span></div>\
                <dl class="news_content"><dt>news_title5</dt><dd>news_content5</dd></dl><br />');
$('.news_outer').append('<div class="news_06"></div>\
                <div class="img"><span>뉴스이미지6</span></div>\
                <dl class="news_content"><dt>news_title6</dt><dd>news_content6</dd></dl><br />');
$('.news_outer').append('<div class="news_07"></div>\
                <div class="img"><span>뉴스이미지7</span></div>\
                <dl class="news_content"><dt>news_title7</dt><dd>news_content7</dd></dl><br />');
$('.news_outer').append('<div class="news_08"></div>\
                <div class="img"><span>뉴스이미지8</span></div>\
                <dl class="news_content"><dt>news_title8</dt><dd>news_content8</dd></dl><br />');
$('.news_outer').append('<div class="news_09"></div>\
                <div class="img"><span>뉴스이미지9</span></div>\
                <dl class="news_content"><dt>news_title9</dt><dd>news_content9</dd></dl><br />');
$('.news_outer').append('<div class="news_10"></div>\
                <div class="img"><span>뉴스이미지10</span></div>\
                <dl class="news_content"><dt>news_title10</dt><dd>news_content10</dd></dl><br />');
$('.news_outer').append('<div class="news_11"></div>\
                <div class="img"><span>뉴스이미지11</span></div>\
                <dl class="news_content"><dt>news_title11</dt><dd>news_content11</dd></dl><br />');
$('.news_outer').append('<div class="news_12"></div>\
                <div class="img"><span>뉴스이미지12</span></div>\
                <dl class="news_content"><dt>news_title12</dt><dd>news_content12</dd></dl>');



// conBox --------
conBox.append('<h2>conBox<h2>');

// footBox -------
footBox.append('<h2>company info<h2>')



console.log(body);





})(jQuery);


