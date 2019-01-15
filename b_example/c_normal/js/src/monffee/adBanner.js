// adBanner.js

(function($) {
  var banner = $('#adBanner');
  var viewOuter = banner.find('.view_outer');
  var viewBanner = viewOuter.find('ul');
  var viewBannerList = viewBanner.children('li');

  // adBanner영역의 구성을 변경
  // - 기존의 갯수에서 마지막 하나를 복제하여 앞에 배치
  // (css문서에 nth-child로 배경이미지를 처리하면 안된다. 즉, 각각 이름을 부여해서 처리)

  var viewBannerLast = viewBannerList.eq(-1).clone(true);
  //viewBannerList.eq(0).before(viewBannerLast);// 0번쨰로 리스트 li앞에 생성하여 넣어라
  viewBanner.prepend(viewBannerLast); // ul안에 첫 순서로 넣어 생성하라
  
  // 내용 변경 후 갯수 다시 파악  
  var viewBannerList = viewBanner.children('li');

  // - 감싸는 영역의 크기를 갯수의 * 100% 크기만큼으로 변경
  // - 첫번째 보이는 요소는 첫배너로 처리하기위해 전체를 왼쪽으로 이동/ li내용의 크기값 재 수정

  // console.log(len);
  // 복제되어진 마지막 상자인 첫번째자리에 있는 클레스를 뒤로보내주기 위해서 첫번째 보여야하는 메인 클레스 만큼 100%를 뒤로가라고 -100%만큼 marginLeft처리한다.
  
  // ======================= css 처리 하였을때
  // var len = viewBannerList.length;
  // viewBanner.css({ width : len * 100 + '%' , marginLeft: -100 + '%' ,
  //           position:'relative' , top:0, left:0, transition:'left 500ms ease'}); // transform:'translateX(' + -100/len + '%' +')' == marginLeft
  // viewBannerList.css({ width : 100 / len + '%'});

  // ======================= animate 처리하였을때
  var len = viewBannerList.length;
  viewBanner.css({ width : len * 100 + '%' , marginLeft: -100 + '%' ,
            position:'relative' , top:0, left:0}); // transform:'translateX(' + -100/len + '%' +')' == marginLeft
  viewBannerList.css({ width : 100 / len + '%'});

// ==============================================================

  //좌,우 버튼을 클릭하든, 인디케이트를 클릭하든 공통의 기능을 하는 변수가 하나 필요하다!
  var showI = 0;
  var btnArea = banner.find('.arrow_btn');
  var nextBtn = btnArea.children('.next_btn');
  var prevBtn = btnArea.children('.prev_btn');
  var indicator = banner.find('.indicator');
  var indiLi = indicator.find('li');
  

  var SlideBanner = function(i){
    indiLi.removeClass('active');
    indiLi.eq(showI).addClass('active');
    viewBanner.animate({ left : i * -100 + '%'});
  };
  SlideBanner(showI);

  //좌,우 버튼 클릭시

  // nextBtn클릭시 변수 showI에 1씩 더하는 기능 부여
  // 최대 숫자는 전체 갯수-2 까지만 가능하게 (6개 중 5개까지 움직여아하니까 5개는 4번째라는 jquery식을 이용하여 -2했음)
  nextBtn.on('click', function(e) {
    e.preventDefault();
    // 맨뒤 eq(4):5번째 그림까지 가게만들어줬다.
    if(showI >= len-2){ // eq(4) : 5번째 이미지에 왔을때
      viewBanner.stop(true,false).css({left: 100 + '%'}); // css는 콜백 함수의 기능이없다.css( ,funcution(){})안됨
      // 맨앞에 5번째로 가라 why? 스르륵 애니메이트 효과를 주기위해서
      showI = 0; // 다시 초기화 시켜서 한칸씩 가라 : 무한회전으로 보이도록
      // SlideBanner(showI);
      // viewBanner.animate({left:showI * -100 + '%'});
      // indiLi.removeClass('active');
      // indiLi.eq(showI).addClass('active');
    }else{
      showI += 1;
    }
    console.log(showI);
    SlideBanner(showI);
  });


  // // prevBtn클릭시 변수 showI에 1씩 빼는 기능 부여
  // prevBtn.on('click', function(e) {
  //   e.preventDefault();

  //   if(showI <= -1){
  //     showI = -1;
  //   }else{
  //     showI -= 1;
  //   };
  //   SlideBanner(showI);
  // });

<<<<<<< HEAD
  // 2차 기능처리
    prevBtn.on('click', function(e){
      e.preventDefault();
      if(showI <= 0){
        showI = -1;
        viewBanner.css({ left: showI * -100 + '%' });
        console.log(showI);
        // 0.5초 뒤에 마지막 위치로 이동
        // setTimeout(function(){}, 500);
        setTimeout(function () { 
          showI = len - 2;
          console.log(showI);
          viewBanner.css({ left: showI * -100 + '%', transition:'none'});

          setTimeout(function(){
            viewBanner.css({ transition: 'left 500ms ease' });
          },10);

        }, 500);

      }else{
        showI -= 1;
        SlideBanner(showI);
      }
=======



    // 2차 기능처리
    // prevBtn.on('click', function(e){
    //   e.preventDefault();
    //   if(showI <= 0){
    //     showI = -1;
    //     viewBanner.css({ left: showI * -100 + '%' });
    //     console.log(showI);
    //     // 0.5초 뒤에 마지막 위치로 이동
    //     // setTimeout(function(){}, 500);
    //     setTimeout(function () { 
    //       showI = len - 2;
    //       console.log(showI);
    //       viewBanner.css({ left: showI * -100 + '%', transition:'none'});

    //       setTimeout(function(){
    //         viewBanner.css({ transition: 'left 500ms ease' });
    //       },10);

    //     }, 500);

    //   }else{
    //     showI -= 1;
    //     SlideBanner(showI);
    //   }
    // });

    // 3차 기능처리
    prevBtn.on('click',function(e){
      e.preventDefault();
      if(showI <= 0){ // 0보다 작거나 같다면,
        showI = -1; // 무조건 -1이 되어라
        indiLi.removeClass('active');
        indiLi.eq(showI).addClass('active');
        viewBanner.stop(true,true).animate({ left : showI * -100 + '%'},500,function(){ 
          //  -1 x -100% : +100% 하면 사실 상 맨앞에 5였다.하지만, 
          // function으로 실행하면서
          // 맨 뒤에 5로 이동하게 되었다.
          // showI값은 4가 되면서 -> eq(4) = 5번째 이미지
          showI = len -2;
          viewBanner.css({left:showI * -100 + '%'});
        });
      }else{        //아니면
        showI -= 1; // 1씩 빼줘라
        SlideBanner(showI);
      };

>>>>>>> 19d7f40d8f4d7fb7f2337755bc58eebb49a30487
    });



  // 인디케이터

  
  indiLi.on('click',function(e) {
    e.preventDefault();
    showI = $(this).index();
    console.log(showI);
   
    SlideBanner(showI);
  });

  // 위 문제점: 전체를 순환하는 기능을 만들어야한다!
    // 왼버튼클릭시 showI -= 1 --> -1 이었던 아이를 leng-2의 수치로 변경하여, 해당위치로 이동하게 만들자!
    // 일부 오류발생

  // 덤: 일정 시간마다 자동으로 순환하는 기능을 수행하게 만들자!
  // setInterval(function(){}, 1000);  // 일정시간(1000)마다 동작하게 하는 함수
  // clearInterval(function(){});  // setInterval을 강제로 멈추게(setInterval을 삭제)하는 함수
<<<<<<< HEAD

  var movingSlide;

  var startMove = function(){
    movingSlide = setInterval(function(){
      console.log('go!go!go!');
      nextBtn.trigger('click');
    }, 1000);
  };

  var stopMove = function(){
    clearInterval( movingSlide );
  };
  
  startMove();
  banner.on({ 'mouseenter': stopMove, 'mouseleave': startMove  });

=======
>>>>>>> 19d7f40d8f4d7fb7f2337755bc58eebb49a30487

  var movingSlide;

  var startMove = function(){
    movingSlide = setInterval(function(){
      console.log('go!go!go!');
      nextBtn.trigger('click');
    }, 1000);
  };

  var stopMove = function(){
    clearInterval( movingSlide );
  };
  
  // startMove();
  // banner.on({ 'mouseenter': stopMove, 'mouseleave': startMove  });

  
})(jQuery);

