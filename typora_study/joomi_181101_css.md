[css의 기능1](https://meyerweb.com/eric/css/)

[css의 기능2](http://aboooks.tistory.com/346)

[다음페이지 접근성](http://darum.daum.net/ )

[section과 article의 차이점](http://aboooks.tistory.com/3460)

-광고 ->s : 작은영역이란 뜻도 있다.

-본문 및 내용->a



 ```common사용시 /* common.css */ -> 공통적으로 적용한다는 의미로 주석설정
/* common.css */ -> 공통적으로 적용한다는 의미로 주석설정
.hidden{width:0; height:0; overflow:hidden;} ->숨기기
.clearfix{width:100%; height:0; clear:both;}->float의 고정키기능
.full{width:100%; height:100%;}

 /**웹에서 사용하는 단위
1px => 웹상의 가장 작은 점의 크기
일반형 : 16px == 12pt == 100% == 1em == 1rem -> 최초의 설정에서 서체크기
반응형 : 브라우저의 전체 가로기준크기를 VW, 브라우저 세로기준크기 VH (100분율)
          */
 ```



```border사용기능
article_04{height:125px;}

.box_04_1{width:25%; height:100%; background-color:#00A0EE; float:right; border:1px solid #fff; box-sizing: border-box;}
.box_04_2{width:25%; height:100%; background-color:#00A0EE; float:right; border:1px solid #fff; box-sizing: border-box;}
.box_04_3{width:25%; height:100%; background-color:#00A0EE; float:right; border:1px solid #fff; box-sizing: border-box;}
.box_04_4{width:25%; height:100%; background-color:#00A0EE; float:right; border:1px solid #fff; box-sizing: border-box;}
```



[layout : 결과물](http://localhost:3000/html/layout_02_a_result.html)

```연습
<!doctype html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>스스로해보기_result</title>
    <style type="text/css">
    /* reset.css */
    html,body{margin:0; width:100%; height:100%;}
    h1,h2,h3,h4,h5,h6,p,div,ul,ol,li,dt,dd,dl{margin:0; padding:0;}
    ul,ol,li{list-style:none;}
    a{text-decoration:none;}
    a:hover, a:focus{color:#fa0; font-weight:bold; text-decoration:underline;
      outline:3px solid #fa0;}

    header,nav,aside,section,article,footer,main,figure{display:block;}

    /* common.css */
    .hidden{width:0; height:0; overflow:hidden;}
    .clearfix{width:100%; height:0; clear:both;}
    .full{width:100%; height:100%;}

    /* design.css */

    #wrap{margin:0 auto; border:5px solid #f06;
        width:960px; height:auto;}
        /* headBox */
        #headBox{padding-top:10px; box-sizing:border-box; width:100%; height:150px; background-color:#0af;}
          h1{width:380px; height:70px; margin-bottom:20px; margin-left:20px; background-color:#f06; color:#fff;}
          #gnb{width:100%; height:50px; background-color:#079;}
          #gnb>ul{width:100%; height:100%;}
          #gnb li{float:left; width:25%; height:100%; background-color:#fff;
            border-right:1px solid #333; box-sizing:border-box;}
                       
        /* contentBox */
        #contentBox{width:100%; height:auto;}
        #contentSub{float:left;
          width:360px; height:auto; background-color:#fa0;}
          #contentSub>h3{width:100%; height:100px; background-color:#f06;
            color:#fff; text-align:center; }
            #contentSub>dl{width:100%; height:auto; background-color:#ddd;} 
            #contentSub>dl>dt{width:100%; height:25px; background-color:#acf;}
            #contentSub>dl>dd{margin-bottom:10px; margin-left:20%;
              width:80%; height:auto; background-color:#f6f;}
            #contentSub ul{width:100%; height:auto;}
            #contentSub ul>li{width:100%; height:20px; margin-bottom:5px;}

        #contentNarr{float:left;
          width:600px; height:auto; background-color:#afa;}
        .narr{width:100%; height:145px; background-color:#fff; border-bottom:5px solid #333; box-sizing:border-box;}
        .narr_01{background-color:#a1f;}
        .narr_02{background-color:#b2a;}
        .narr_03{background-color:#c37;}
        .narr_04{background-color:#d45;}        

        /* footBox */
        #footBox{padding:20px; box-sizing:border-box;
          width:100%; height:120px; background-color:#06a;}
        #footBox>h2{float:left;
          width:100px; height:60px; background-color:#f06; font-size:1rem;
          color:#fff;}
        #footBox>address{float:right; margin-top:10px;
          width:600px; height:50px; background-color:#ffa;
          font-style:normal;}
        #footBox>address>p{width:100%; height:auto;}
        #footBox>address>p>strong{font-weight:normal;}
          

        /**웹에서 사용하는 단위
          1px => 웹상의 가장 작은 점의 크기
          일반형 : 16px == 12pt == 100% == 1em == 1rem -> 최초의 설정에서 서체크기
          반응형 : 브라우저의 전체 가로기준크기를 VW, 브라우저 세로기준크기 VH (100분율)
          */
    </style>
  </head>
  <body>
    <!-- layout -->
    <div id="wrap">
      <header id="headBox">
        <h1>사이트이름</h1>
        <nav id="gnb">
          <h2 class="hidden">전체 메뉴</h2>
            <ul>
              <li>list_01</li>
              <li>list_02</li>
              <li>list_03</li>
              <li>list_04</li>
            </ul>
          </nav>
      </header> 
      <!-- headBox -->
      
      <section id="contentBox">
        <h2 class="hidden">본문 내용</h2>
        <aside id="contentSub">
          <h3>aside영역의<br />제목</h3>
          <dl>
            <dt>제목_01</dt>
            <dd>
              <ul>
                <li>상품 목록</li>
                <li>상품 목록</li>
                <li>상품 목록</li>
                <li>상품 목록</li>
              </ul>
            </dd>

            <dt>제목_02</dt>
            <dd>
              <ul>
                <li>상품 목록</li>
                <li>상품 목록</li>
              <ul>
            </dd>
            
            <dt>제목_03</dt>
            <dd>
              <ul>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
              </ul>
            </dd>
            
            <dt>제목_04</dt>
            <dd>
              <ul>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
                <li>상품목록</li>
              </ul>
            </dd>
            
            <dt>제목_05</dt>
            <dd>
              <ul>
                <li></li>
              </ul>
            </dd>
          </dl>
        </aside>

        <!-- article -->
        <article id="contentNarr">
          <h3 class="hidden">본문의 내용에 따른 제목</h3>
          <article class="narr narr_01">
            <h4 class="hidden">하위 내용을 정리하는 제목_1</h4>
          </article>
         
          <article class="narr narr_02">
            <h4 class="hidden">하위 내용을 정리하는 제목_2</h4>
          </article>
       
          <article class="narr narr_03">
            <h4 class="hidden">하위 내용을 정리하는 제목_3</h4>
          </article>

          <article class="narr narr_04">
           <h4 class="hidden">하위 내용을 정리하는 제목_4</h4> 
          </article> 
        </article>
        <!-- article -->
        <div class="clearfix"></div>
      </section>
      <!-- contentBox -->

      <footer id="footBox">
        <h2>information<br />제목</h2>
        <address>
          <p><strong>회사 주소 평택시 동동동 몇번지</strong></p>
          <p><strong>회사 연락처 000-0000-000</strong></p>
        </address>
      </footer>
      <!-- footBox -->



    </div>



    <!-- script -->
    <script>

    </script>
  </body>
</html>

```

