// accordion_01.js

(function($){
  var accordion  = $('.accordion');
  var accorBtn  = accordion.find('dt').children('button');
  var accorDd  = accordion.find('dd');
  // console.log(accorBtn,accorDd);
 
  /*
    accorDd.css({display:'none'});
   -> 처음부터 CSS에서 세팅해놓는것이 좋다. dispaly:none; 
   */

  accorDd.eq(0).show();
  accorBtn.eq(0).addClass('active');

  accorBtn.on('focus',function(e) {
    e.preventDefault();

    var _this = $(this);
    var dd = _this.parent().next('dd');
    // dd.css({display:'block'});
    dd.slideDown();
  
  
    // var ddState = dd.css('display') == 'none';
    // if(ddState){    dd.slideDown();    }else{      dd.slideUp();    };
    //이와 동일한 기능을 한다. : dd.slideToggle()

  
    var ddS = dd.siblings('dd'); // siblings 나를 제외한 모든 형제
    // ddS.css({display:'none'})
    // ddS.removeAttr('style');
    ddS.slideUp();

    // --------------------
    // accorBtn.removeClass('active'); 모든 버튼의 클레스를 지운후
    _this.addClass('active'); // 지정한 this에만 클레스를 살린다.
    var dtButton = _this.parent().siblings('dt').children('button');
    dtButton.removeClass('active');
  });

    accorBtn.on('blur',function(){ // focus가 빠져나 갔을때 접혀라
    var _this = $(this);
    var dd = _this.parent().next('dd');
    _this.removeClass('active');
    dd.slideUp();
    // 조건 및 상황이 다르기때문에 변수선언은 꼭 해주어야한다. : 위에 dd와는 다른 dd라고 인식한다.
  });
      
})(jQuery);