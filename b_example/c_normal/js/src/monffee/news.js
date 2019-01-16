// news.js
(function ($) {
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsLIst = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';

  // 링크, 사진, 제목, 내용
var imgUrl = "../../img/monfee/new_menu/";
// 제이슨 방식 : 자바스크립트 오브젝트 네임 제이슨 : 객체형식으로된 자바스크립트 문법
// 사용방식 : 주석 금지, 전부다 " "으로 사용 홑따옴표 사욯하지않는다.
var newsArray = '';

// 비동기식(병렬) 방식으로 처리되어 외부의 data를 불러오는 형식은 모두
// A(비동기식)J(자바스크립트)A(그리고)X(외부문서)를 불러오는 방식
var jsonDataUrl = "../../data/newsArray.json";
// $.ajax({ type:'get', async:false, url:jsonDataUrl});
// type(=유형):비보안(=get)|보안(=false) , async(비동기사요여부):비동기(=true 실시간)|동기(=false) , url:주소
var newsArray = $.ajax({ type:'get', async:false, url:jsonDataUrl}).responseJSON;





  // newsCon.append(newsList);
  var i = 0, list;
  var AppendListMenu = function(){
    newsCon.append(newsList);
    list = $('.news_list').eq(i);
    list.find('a').attr({'href':newsArray[i].link});
    list.find('.img_list').css({'backgroundImage': 'url(' + imgUrl + newsArray[i].pic +')'});
    list.find('dt').text(newsArray[i].tit);
    list.find('dd').text(newsArray[i].con);
  };

  for(; i< newsArray.length; i += 1){
    AppendListMenu(i);
  };

})(jQuery);
