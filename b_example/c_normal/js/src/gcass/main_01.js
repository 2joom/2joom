// main_01.js
(function ($){
  //console.log('!!!!!!');

  var aUrl = './commonBox/'
  var homeBox = $('#homeBox');
  var headBox = $('#headBox');
  var footBox = $('#footBox');
  // load() : 외부에 존재하는 문서를 불러와서 담는 기능
  // 반드시 서버로만 구동되어야한다!!
  // html 문서의 경우 기준 상대경로는 삽입하려고하는 문서(html)를 기준으로 한다. 
  homeBox.load( aUrl + 'homeBox.html');
  headBox.load( aUrl + 'headBox.html');
  footBox.load( aUrl + 'footBox.html');


})(jQuery);