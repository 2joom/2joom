// rwd_page.js
(function($){
  var winW = $(window).width();
  var size = $('.size');

// step1 =================================
/*  var ViewSize = function(e){
    e.preventDefault();
    var nowW = $(window).width();
    if(winW !== nowW){
      location.reload();
    }
    size.text(nowW);
  };
  $(window).on('resize',ViewSize);
*/

// step1 =================================
/* 각각의 디바이스 환경이 변하면 새로고침 
  var mob = 480;
  var tab = 768;
  var pc = 1366;
  var myDevice;
  var product = $('.product');

  var Device = function(width){
    if(width <= mob){
      myDevice = 'mobile';
      $('.device').css({bacgroundColor:'#caa'});

    }else if(width > mob && width <= tab){
      myDevice = 'tablet';
      $('.device').css({color:'#f5f'});

    }else if(width > tab && width <= pc){
      myDevice = 'pc';
      $('.device').css({border:'5px solid #fa0'});

    }else{
      myDevice = 'pcfull';
    }

  product.text(myDevice);
  console.log(myDevice);
  return myDevice;
  }; // Device();함수가 끝남
  // return이 필요한 이유 : 반환 되돌려주는것.함수자체가 돌려받아야될것. 각각의 상황에 따른 반환값을 확인(비교)하기위해 ,실제로 함수의 값을 저장하기위해서.




  var beforeDevice = Device(winW);
  // 비교할수있는 기존의 디바이스 넓이값을 저장
   
  $(window).on('resize',function(){
    var nowW = $(window).width();
    var afterDevice = Device(nowW);
    // 비교할수있는 현재의 디바이스 넓이값을 저장

    if(beforeDevice !== afterDevice){
    // 기존의 값과 현재의 넓이값을 비교
    // 비교값이 다르다면
      location.reload();
    // 새로고침해라(새로고침 하여 각 디바이스의(넓이) 기능만을 가져라)
    }
    // console.log(beforeDevice,afterDevice);
  });
*/




})(jQuery);
