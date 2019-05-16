// multiSlide.js
(function($){
  var next = $('.next');
  var prev = $('.prev');
  var view = $('.view_outer');
  var viewUl = view.children('ul');
  var viewLl;

  var viewArr = [
    '<iframe src="https://www.youtube.com/embed/lCuBx4quL6c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe src="https://www.youtube.com/embed/rKHQPaPaaX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe src="https://www.youtube.com/embed/6H4bmY5EA4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe src="https://www.youtube.com/embed/BFJb0ZOWglg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    
    '<iframe src="https://www.youtube.com/embed/BFJb0ZOWglg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    
    '<iframe src="https://www.youtube.com/embed/f2oPwk3Hnrs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  ];

for(var i=0; i<viewArr.length; i++){
  viewUl.append('<li></li>');
  viewUl.children('li').eq(i).html(viewArr[i]);
}

viewLi = viewUl.children('li');
var viewLiW = viewUl.children('li').eq(0).outerWidth();

viewUl.css({marginLeft:0});

prev.on('click',function(){
  // viewUl.eq(-1).prependTo(viewUl);
  //  viewLi = viewUl.children('li');
  viewUl.animate({marginLeft:viewLiW},1000,function(){
    viewUl.css({marginLeft:0});
    viewLi.eq(-1).prependTo(viewUl);
    viewLi = viewUl.children('li');
  });
});

next.on('click',function(){
  // viewUl.eq(0).appendTo(viewUl);
  //  viewLi = viewUl.children('li');
  viewUl.animate({marginLeft:-viewLiW},1000,function(){
    viewUl.css({marginLeft:0});
    viewLi.eq(0).appendTo(viewUl);
    viewLi = viewUl.children('li');
  });
});



})(jQuery);