// issueText.js
(function($){
  var issue = $('.issue_text');
  // indicator
  var indi = issue.children('.indi_cator').children('ul');
  var indiLi = indi.find('li');
  
  // move_btn
  var moveBtn = issue.children('.move_btn');
  var moveBtnLi = moveBtn.children('button');
  
  // news_text
  var newsText = issue.children('.news_text');
  var newsLi = newsText.children('dl');
  
  // news_img
  var imgBg = issue.children('.news_img');

  // ==================================================
  // step1 : indicator를 선택시 해당하는 dl이 나타나게 만들기
  // step2 : dl이 나타날때, imgBg(배경이미지)에 해당하는 이미지가 변경되게
  // step3 : dl의 요소가 시간의 순서에의해 변경되게 만들기
  // ==================================================
  // step4 : 버튼을 클릭시 멈추거나 , 재생되게 처리하게 만들기
  // step5 : dl의 요소를 json기법으로 내용을 별도록 담아 자동처리되게 만들기
  // step5 : dl의 내용의 갯수만큼 indicator가 자동으로 생성되어 삽입되게 만들기
  // ==================================================

  // step1 : indicator를 선택시 해당하는 dl이 나타나게 만들기
  var index = 0;
  indiLi.on('click',function(e){
    e.preventDefault();
    var index = $(this).index();
    
  });






})(jQuery);
