// device_code.js
(function($){
  var winW = $(window).width();
  var mob = 480;
  var tab = 768;
  var pc = 1366;

  // mobile 환경일때 구동되는 기능
  if(winW <= mob){
    Mobile();
  }

  // tablet 환경일때 구동되는 기능
  if(winW > mob && winW <= tab){}

  // mobile 환경일때 구동되는 기능
  if(winW > tab && winW <= pc){}

  // pcfull 환경일때 구동되는 기능
  if(winW > pc){}



  function Mobile(){  
    $('div').on('click',function(){ 
      $(this).css({backgroundColor:'#456',color:'#f2f'});
    });
  };

})(jQuery);
