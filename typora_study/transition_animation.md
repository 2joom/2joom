### transition

  * transition이란? css의 변화를 부드럽게 ansimation기능으로 처리되는 형태를 만드는 것을 말한다.

  * transition-duration: ; -> 변화하는 시간 기본은 초단위 , 1초(1s) 1000ms
     js에서는 1초는 무조건 1000ms이기때문에!

  * transition-property: ; -> 어떠한 속성을 변화시킬것인가?
    2가지 일경우는 ,로 구분 2가지 이상은 all사용하면 적용된다.
    기본 적용은 되지만 호환이 되지않는 브라우저를 위해 항상 쓴다.

  * transition-timing-function: ; -> 변화의 흐름에대한 속도를 어떻게 처리할것인가?
    ease(빨라지다 느리게:자연스럽게) | ease-in(점점 빠르게) | ease-out(점점 느리게) 
    | ease-in-out(빨라지다 느리게) | linear(같은속도로) | cubic-bezier()(사용자지정)


  * transition-delay: ; -> 지연시간: 얼마의 시간뒤에 transition기능을 수행할 것인가?;
  * transition:property duration timing-funciton delay ; 
    -transition이 가지는 속성으로 하나로 뭉쳐서 처리하는 기능 
    - 수치는 앞에(property)있는것은 진행시간, 뒤에(delay)있는것은 w지연시간
      ***단, 순서를 지켜야한다.
  * transition 작성시 :hover | :active | :focus 등등
    기존형태에서 변화의 시점을 던져주는 상황(이벤트 발생시점)에 transition을 작성하면,
    원래대로 돌아갈 때는 transition기능이 적용되지 않는다!

<hr />

###	animaiton
*animation이란? transition과 달리 반복성을 가지거나, 단일성이아닌 여러복합성의 기능을 수행할때

*****animation:name duration count diection; 기본 사용 순서

  -animation-name: ; -> animation 기능을 수행할 함수(@keyframes)를 선택
  -animation-duration: ; -> animation 진행할 시간
  -animation-direction: ; -> animation이 종료 후 진행할 방향 설정
​      - normal(기본) | reverse(반대로) | alternate(왔다 갔다) | alternate-reverse(반대로 시작해서 왔다 갔다)

  -animation-fill-mode: ; -> animation 시작하기전/끝이후에 어떻게 적용할것인가
​      - none |backwards(끝나면 처음자리로 돌아가라) | forwards(끝나면 끝난 제자리에 있다.) 
​      | both(둘다: 경우에 맞게 사용해라) 

  -animation-iteration-count: ; -> animation 반복여부, 무한반복( infinite )
  -animation-timing-function: ; -> 속도조절

  -animation-play-state: ; -> 멈춤,재생설정
​      - running(play) | 

-animation-delay: ; -> 지연시간

   *@keyfranmes {}
   *@keyfranmes{}란? animation에서 지정한 이름의 기능을 수행하기 위한 처리내용, 일종의 함수
   *********@keyfranmes는 선택자 내부에 작성하는 것이 아니다~~!!!

@media screen () {}
@charset "";
@import url();
@keyframes {}

div{}

var Fbox = function(){};
Fbox();

@keyframes aniName {}
div{animation-name:aniName;}
별도로 따로 만들데 호출해서 사용할수있다
오로지 @keyframes은 animation에만 사용할수있는 기능이다.