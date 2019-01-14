### box-shadow:x축 y축 blur offset color inset; 

 * box-shadow:x축 y축; - 최소수치
 * box-shadow:x축 y축 color;
 * box-shadow:x축 y축 번짐의정도 color;
 * box-shadow:x축 y축 번짐의정도  크기 color;
 * box-shadow:x축 y축 번짐의정도  크기 color 안쪽그림자;

.option_1>ul>li:nth-child(1){box-shadow: 1rem  1rem  0.5rem  #a11;}
/* box-shadow : x축 y축 blur color;*/
/* box-shadow : x축 y축 color; 최소 여기까지는 필수*/

*.option_1>ul>li:nth-child(2){box-shadow: 1rem  1rem  1rem  1rem  #f66;}
/* box-shadow : x축 y축 blur offset color;*/

.option_1>ul>li:nth-child(3){box-shadow: 1rem  1rem  0.2rem  #f66 inset;}
/* box-shadow : x축 y축 blur color inset; : 안쪽으로 그림자 생성 */

### transform 

transform, translate, transition 구분하자

 * transform: translate() | rotate() | skew() | scale() ...

 강제로 위치를 이동시키거나, 회전하거나, 뒤틀거나, 크기를 변경하거나...

 * transform-origin:x y; 축이되는 위치를 지정하는 것

.option_3>ul>li:nth-child(5):hover>div{transform : rotate(45deg);}
-> ratoate는 아무것도 입력하지 않은상태가 scaleX,Y축을 기준으로 한다.
  -x값을 줄경우 뒤집어진다. 작아지다 뒤집어지는 ai를 생각할것 

animation은 말 그대로 하나의 방향성을 가진형태가 아니라, 시간의 흐름에 따라 변화하게 만들 수 있는 기능을 말한다.<br />
// 이때, 시간의 흐름을 처리할 수 있는 기능이 별도로 필요하다.(<em>@keyframes {}</em>)이 별도로 필요하다.

@keyframes {}는 animation 기능을 수행할때, 각 시간의 위치에 따라 작용하는 기능을 제작할 수 있도록 설정하는 기능이다.<br />
// 시간의 시작과 끝을 표현할때에는 0% ~ 100% 까지의 흐름을 표현하기도하며, 처음(0%) 위치를 from으로, 마지막(100%)위치를 to라고 표기할수도 있다. 이외의 시간의 위치는 %로 표기한다.