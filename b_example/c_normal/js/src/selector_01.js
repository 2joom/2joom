// selector_01.js

(function($) {
  //console.log('jquery가 동작합니다.');

  // #wrap{width:60rem; height:auto; min-hight:30rem; background-color:#ccc; margin:auto;}
  var wrap = $('#wrap');
  $('#wrap').css({width:60+'rem', height:'auto', minHeight:30+'rem', 
                  backgroundColor:'#ccc', // 'rgba('+255+','+255+','+255+','+0.5+')'
                  margin:'auto'});

  // #headBox{margin:auto; width:80%; height:auto; text-align:center; background-color:#a10; color:#fff; padding-bottom:1rem; border-bottom:0.2rem solid #fff;}
  var white='#fff';
  var headBox = ('#headBox')

  $('#headBox').css({margin:'auto', width:80+'%', height:'auto', textAlign:'center', 
                     backgroundColor:'#a10', color:'#fff',
                     paddingBottom:1+'rem', borderBottom:0.2+'rem solid #fff'});

  var listBox = $('#list');
  var listOuter = listBox.children('ul');
  var listLi = listOuter.children('li');
  // var listLi2 = listBox.find('li');
  var full = 100 + '%'

  listBox.css({margin:'auto', width: full, height:'auto', backgroundColor:'#acf'});

  listOuter.css({width: full, height:'auto', padding:5+'rem ' + 0 , boxSizing:'borderBox', backgroundColor:'#810'});

  listLi.css({width: full, height:2.5+'rem', textAlign:'center', paddingTop:1+'rem' ,borderBottom:'0.2rem solid #333'});

  // listOuter.children('li:nth-child(1)').css({backgroundColor:'#faa'});
  // listOuter.children('li:nth-child(2n)').css({backgroundColor:'#fda'});
  // listOuter.children('li:nth-child(3)').css({backgroundColor:'#faa'});

     listOuter.children('li:nth(1)').css({backgroundColor:'#faa'});
     listOuter.children('li').eq(-2).css({backgroundColor:'#fda'});
     listOuter.children('li:eq(2)').css({backgroundColor:'#faa'});

     

      var i = 0;
      console.log(i); // 0
      if(i <= 4){console.log('i는 아직 5가 되지 않았습니다!');}
      i = i+=1;
      console.log(i); // 1
      i = i+=1;
      console.log(i); // 2
      if(i <= 4){console.log('i는 아직 5가 되지 않았습니다!');}
      i = i+=1;
      console.log(i); // 3
      if(i <= 4){console.log('i는 아직 5가 되지 않았습니다!');}
      i = i+=1;
      console.log(i); // 4
      if(i <= 4){console.log('i는 아직 5가 되지 않았습니다!');}
      i = i+=1;

      // 처음값은 i가 0이다.
      // i를 4보다 작거나 같을때 까지 기능을 수행하려한다.
      // i에다 1을 더해서 ...
      // i가 4보다 작거나 같을때 나는 어떠한 표현을 진행하려고한다.

// step_01 ----------------------------------------------------------
      //  처음어떤값은 i가 0 ; 
      //  for( 공백; i를 4보다 작거나 같을때까지 수행하려고한다.; 공백;){
      //      어떠한 표현을 진행하려고한다
      //      }
      //      i에다 1을 더해서){
      //   }

      var i = 0;//미리 변수선언 해주어도 무관
      for(; i<=4;){//절대규칙 : 2개의 ';'의 자리가 있어야한다.
        console.log(i);
        i+=1;//후에 선언해주어도 무관
      }

// step_02 ----------------------------------------------------------
      // for( 처음어떤값은 i가 0 ; 
      //      i를 4보다 작거나 같을때까지 수행하려고한다. ; 
      //      i에다 1을 더해서){
      //     어떠한 표현을 진행하려고한다}
      //   }

      // for(var i=0; i<=4; i+=1){
      //   console.log(i);
      // }

// step_03 ----------------------------------------------------------
      // * 방법1.
      // var i=0;
      // for(; i<=4; i+=1){
      //   console.log(i);
      // }

      // * 방법2.
      // for(let i=0; i<=4; i+=1){
      //   console.log(i);
      // }

      // * let : 새로나온 변수(지역변수에 사용) 
      // let을 사용하는 이유? 
      // step02에서 지역변수인 i가 선언함수로 인식하는 오류가 생긴다.



      var color1 = ['#fff', '#ccc', '#acf', '#f06', '#47a'];
      var colorLen = color1.length;//length:갯수,기록
      var listLilen = listLi.length;
      console.log(listLi);
      
      var i=0;
      for(; i < listLilen; i+=1/*(i++)*/){
        listLi.eq(i).css({backgroundColor:color1[i]});
      }

     /* 
      var i=0;
      for(; i < listLilen; li라는 변수의 객체의 갯수보다 i가 작을때!!; i+=1){
        listLi.eq(i).css({backgroundColor:color1[i]});
      }
       for(var i=0;이다 i<=4;같거나작을때 i+=1(i++)){
       listLi.eq(i).css({backgroundColor:color1[i]});
       } 
     */

// jquery 선택자
/*
    * 직접 선택하는 방법, id, class $()
        - $('div'), $('#box'), $('.box'), $('div>ul a')
    * 메소드를 활용하는 방법, children, find
        - $('div>ul a')일 경우
          $('div').children('ul');
          $('div').find('a');

*/


})(jQuery); 