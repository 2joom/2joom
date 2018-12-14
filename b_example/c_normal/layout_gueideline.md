#guideline

/* 작업시 고려할 사항 가이드라인 제작하기
--------- color ------
  mainColor: #fff30d
  subColor1: #777777
  subColor2: #888888
  subColor3: #575757
  textColor1: #171717
  textColor2: #ffffff
  background1: #adadad
  
-------- font -----
  fontSize(h1):
  fontSize(h2):
  fontSize(h3): 12pt
  fontSize(p): 16pt(14px)
  fontSize(strong):
  
------- naming guide -----
  id: carmelCase
  class: snake_case
  level 1:-id로 사용, '영역이름' + 'Box'를 사용;
  lever 2: class 사용, '기능이름' + '_area'를 사용;
  lever 3: class로 사용, level2의 이름 + '_상세기능이름'을 사용
  lever 4: '상단 상세기능이름' + '_번호2자리' 사용;
.  
  단, 
    1.꼭 필요한 경우의 상황에서는 id를 이용하여 이름을 부여할 수 있다.
    2.lever 1의 영역을 fullpage 기능으로 사용할경우, 일부 영역을 감싸서 
      960영역설정시에는 '영역이름' + '_outer'이름으로 사용할 수 있다.
.
-------- margin -------------
  1. marging을 사용시 상단과, 하단 둘중 하나를 사용해야 하는경우라면, 상단의 영역에서  margin-bottom 기능을 사용하자.
  2. 가로로 정렬(float:left)하여, 한쪽의 공간을 비워야한다면, 'margin-right' 기능 사용하자.

-------- 속성 작성순서 --------
  01. display
  02. float
  03. position / z-index / top/ right / bottom / left
  04. margin
  05. padding
  06. box-sizing
  07. border
  08. width/ min-width / height / min-height / max-height
  09. background-color / image / repeat / position ...
  10. font
  11. etc

- 단위값 vw/vh사용시 해당수치 뒤에 (;뒤에) 주석을 달고 공식을 작성
- 단위값 vw/vh사용시 각영역을 처리하는 @media query문 내부 첫줄에 기준 크기값을 미리 공지

-------- z-index ----------
  1. 각 영역별 큰 설정에서는 위치단위를 100씩 사용
  2. :focus 기능처리되는 영역 : 500;
  3. header영역이 고정처리되는 상황에서는 : 1000;
  4. 이외에 position / z-indxe 사용시 별도의 명세서에 표기

    
*/
