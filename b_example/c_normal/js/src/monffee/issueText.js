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
  var url = "../../img/monfee/issueBanner/";
  var imgList = [
                  'issue_banner_01.png',
                  'issue_banner_02.png',
                  'issue_banner_03.png',
                  'issue_banner_04.png'
                ];
                // url + imgList[순서];

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
  // newsLi.eq(0).show();
  // imgBg.css({backgroundImage:'url(' + url + imgList[index] + ')'});
  // 먼저 선언해줘야하는 이유 : 클릭했을때 사진이 나와라고했으니까 클릭하지않으면 배경이 없음
 
 // ********************* step1 + step2 함수로 만들어서 변수처리하였다. =============================================================== start
  var IssueView = function(index){
    var dl = newsLi.eq(index);
    dl.delay(500).stop(true, false).fadeIn(500);
    dl.siblings('dl').removeClass('active');
    
    dl.siblings('dl').stop(true, false).fadeOut(500);
    dl.addClass('active');
    
    indiLi.eq(index).addClass('active');
    indiLi.eq(index).siblings('li').removeClass('active');

    // 점점점 사라지고 점점점 나타나는
    // fadeIn(1000);시간을 설정하여 조절
    // newsLi.eq(index).siblings('dl').stop().fadeOut(500);
    // newsLi.eq(index).delay(500).stop().fadeIn(500);
    
    // newsLi.eq(index).siblings('dl').removeClass('active');
    // newsLi.eq(index).addClass('active');
    // active처리시 정적(띡띡)으로 변환

  // step2 : dl이 나타날때, imgBg(배경이미지)에 해당하는 이미지가 변경되게
  // 단 함수 전에 미리 선언해줘야한다.
    imgBg.css({backgroundImage:'url(' + url + imgList[index] + ')'}); // url 설정 '' 이용 못하겠음 질문요망 
  };
 // ********************* step1 + step2 함수로 만들어서 변수처리하였다. =============================================================== end
  IssueView(index);
  // 먼저 함수 실행해야하는 이유 : 
  // 1. 첫번째 화면이나와야한다.
  // 2. (클릭할경우 함수를 돌려도)백그라운드 이미지가 클릭하지않으면 나오지않는다.
  // 3. 클릭하지않을경우에도 보여야 하기때문에 실행해주어야한다.

  indiLi.on('click',function(e){
    e.preventDefault();
    index = $(this).index();
    //newsLi.eq(index).fadeOut(); 
    IssueView(index);
  });





})(jQuery);
