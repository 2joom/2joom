// news.js
(function ($) {
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsLIst = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';

  // 링크, 사진, 제목, 내용
var newsArray = [
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
                  {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"}
                ]; // 제이슨 방식 : 자바스크립트 오브젝트 네임 제이슨 : 객체형식으로된 자바스크립트 문법

  // newsCon.append(newsList);
  var i = 0;
  for(; i< newsArray.length; i += 1){
    newsCon.append(newsList);
  };


})(jQuery);
