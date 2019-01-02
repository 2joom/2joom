// jquery_on_03.js
// 인디케이터 기능 ============================
(function($){
  var btn1 = $('.btn').children('button').eq(0);
  var btn2 = $('.btn').children('button').eq(1);
  var viewBox = $('.view_box')

  function(e){
    e.preventDefault();
    viewBox.css({transform:'translate(0)',
                transition:'all 300ms ease'});
  });
  
  btn2.on('click',function(e){
    e.preventDefault();
    viewBox.css({transform:'translate(-50%)',
                transition:'all 300ms ease'});
  });

// swipe기능 이해하기1 ============================
// touchstart 터치가 시작되는 지점을 체크하는것

  var start = '';
  var end = '';
 // 터치 시작/끝 기능으로 처리하기 
 $(window).on('touchstart',function(e){
    // console.log(e);
    
    console.log(e.touches[0].pageX);
    'e'라는 객체 안에 수많은 객체중 'originalEvent'라는 객체 안에서 'touches'라는 객체의 '[0]첫번째' 객체안에 'pageX'의 값을 찾아와라
    = e > originalEvent > touches-[0]첫번째 > pageX

   
    // var y = e.touches[0].pageY;
    console.log('터치시작:', start);
  });

  $(window).on('touchend',function(e){
    end = e.changedTouches[0].pageX;
    // var y = e.touches[0].pageY;
    console.log('터치끝:', end);
    console.log( end - start );

    var result = end - start;
    if(result < 0){
      // viewBox.css({transform:'translate(-50%)',transition:'all 300ms ease'});
      btn2.trigger('click');

    }else if(result > 0){
      // viewBox.css({transform:'translate(0)',
                // transition:'all 300ms ease'});
      btn1.trigger('click');
    }

  });

// *click의 경우 : touchstart = touchend 일치
// *drag의 경우 : touchstart != touchendf 불일칠


  //  브라우저 크기값 계산
  var winW = $(window).width();

  $(window).on('touchmove',function(e){
    console.log(e.originalEvent.touches[0].pageX);
    var move = e.originalEvent.touches[0].pageX / winW * 50;

    $('.view_box').css({transform:'translate('+ -move/2 +'%)'});
  });



  // clientX, clientY : 브라우저 기준 좌표
  // offsetX, offsetY : 이벤트 대상요소의 상대적 좌표
  // pageX, pageY : page(문서 전체)기준 : 상태표시줄 꼭대기 부터 좌표:0 0을 의미한다.
  // screenX, screenY : 모니터 화면기준의 좌표위치



})(jQuery);