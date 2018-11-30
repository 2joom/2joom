//test_result.js

(function($) {
// li:nth-child(1){color:#fff}  == $('li').eq(0).css({color:'#fff'});     -> eq는 순서를 지정해서 처리하게하는것
// $('li').on('click',function(){  $(this).index(); });    -> index는 선택한 아이가 몇번째인지 찾아서 나에게 알려주는 것


  var indi =$('.indicator li');
  var indiLink = indi.children('a');
  var banner = $('.product>ul');
  //indi.parent('li').eq(0).addClass('action');

  indiLink.on('click', function(e){
    e.preventDefault();
    var i = $(this).parent('li').index();
    var per = -i *100;
    banner.css({marginLeft: per + '%'})//(-i * 100) + '%'동일

    indi.removeClass('action');
    indi.ep(i).addClass('action');

  });

})(jQuery);

// (function($) {
//       // li:nth-child(1){color:#fff}  == $('li').eq(0).css({color:'#fff'});     -> eq는 순서를 지정해서 처리하게하는것
//       // $('li').on('click',function(){  $(this).index(); });    -> index는 선택한 아이가 몇번째인지 찾아서 나에게 알려주는 것

//         var indi   = $('.indicator li');
//         var indiLink = indi.children('a');
//         var banner = $('.product>ul');
//         // indi.eq(0).addClass('action');

//         indiLink.on('click', function(e){
//           e.preventDefault( );
//           var i = $(this).parent('li').index();
//           var per = -i * 100;
//           banner.css({marginLeft: per + '%'});

//           indi.removeClass('action');
//           indi.eq( i ).addClass('action');
//         });
//     })(jQuery);