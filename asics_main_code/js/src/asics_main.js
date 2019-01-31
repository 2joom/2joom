// ascis_main.js
(function($){
    // console.log('gnbLieq');

var navBox = $('#navBox');

var menu   = navBox.find('.menu');
var gnb    = navBox.find('.gnb');
var gnbLi  = gnb.children('li');
var index  = 0;

var gnbP   = navBox.find('.gnb_p');
var gnbpLi = gnbP.children('li');
var gnbLieq, gnbpLieq;

// ************* #headBox =======================================
//step1: gnbLi의 eq(index)를 누르면 gnbLi의 eq(index)가 나타나라

  var Enter  = function(e){
      e.preventDefault();
      index    = $(this).index();
      gnbpLieq = gnbpLi.eq(index);
      gnbpLieq.stop(true, false).fadeIn();
      gnbP.addClass('active');
      gnbpLieq.siblings('li').removeClass('active');
  };
  var Out = function(e){
    e.preventDefault();
    index    = $(this).index();
    gnbpLieq = gnbpLi.eq(index);
    gnbP     = navBox.find('.gnb_p');
    gnbpLi.stop(true, false).fadeOut(100);   
    gnbP.removeClass('active');
  };

  gnbLi.on('mouseenter',Enter);
  gnbLi.on('mouseleave',Out);
    
// ************* #headBox end=======================================
 


// ************* #bannerBox=======================================
  var bannerBox = $('#bannerBox');
  var bannerView = $('.banner_view');
  var banneImg = bannerView.children('.banner_img');
  var num =0;
  var banneImg01 = banneImg.children('div').eq(0).width();
  var indicator = $('.indicator');
  var indiLi = indicator.find('li');
console.log(banneImg01)

  var indiSelect = function(n){
    indiLi.eq(n).addClass('active');
    indiLi.eq(n).siblings('li').removeClass('active');
    banneImg.animate({marginLeft: -banneImg01 * n +'px'});
  };


  indiLi.eq(0).addClass('active');

  indiLi.on('click',function(e){
    e.preventDefault();
    num = $(this).index();
    indiSelect(num);
  });

})(jQuery);


// 과제 : 재생 정지버튼 생성 ,  li 뜯어서 붙이는걸로 바꾸기