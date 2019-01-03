// gnbMenu_01.js

(function($){
  var gnb = $('#gnb').find('dl');
  var gnbDt = gnb.children('dt');
  var gnbDd = gnb.children('dd');

  // [1]
  // dt의 자식인 a에 포커스가 잡히면, 그 부모의 바로뒤에있는 dd를 보이게해라

  //1. dt의 자식인 a에 포커스가 잡히면,
  gnbDt.children('a').on('click',function(e){
    e.preventDefault();
  //2.그(a) 부모의 바로뒤에있는 dd를 보이게해라
    var nextDd = $(this).parent('dt').next('dd');
    // nextDd : 내가 클릭한 dl의 dd
    gnbDd.stop(true, false).slideUp();
    nextDd.stop(true, false).slideDown();

  // 그런데!, 내용중에 마지막a가 blur 처리가 된다면, 해당dd는 사라져라
    // 1. 내용중에 마지막 a
    var ddLast = nextDd.find('a').eq(-1);
    // nextDd : 내가 클릭한 dl의 마지막 dd
    // 2.blur 처리가 된다면
    ddLast.on('blur',function(){
    // 3.해당dd는 사라져라
    nextDd.slideUp();
    });

  });
  // // 마지막 a요소에서 포커스가 빠져나간다면 ,그 부모인 dd를 사라지게 해라
  //   //1. dt에서 자식인 a가 포커스가 빠져나간다면
  // gnbDd.find('a').eq(-1).on('blur',function(e){
  //   //2.부모의 바로뒤에 있는 dd를 사라지게 해라
  //   var nextDd = $(this).parents('dd');
  //   nextDd.stop(true, false).slideUp();
  // });

//[2]
// 각 dd의 마지막 a에 포커스가 빠져나가면 해당 dd를 사라지게 해라!
  // console.log( gnbDd );

  // //1. 각 dd의
  // $.each( gnbDd, function(index , data){
  //   // console.log( index , data );
  //   var li = data.find()
  // });

// dl에 마우스가 빠져나간다면, 모든 dd를 사라지게 만들어라!
  $('#gnb').on('mouseleave',function(e){
    gnbDd.slideUp();
  });

})(jQuery);