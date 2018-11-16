# 2018.10.31 수요일 수업일지



### html 구조

```html구조
<!doctype html>
<html lang="ko-KR" /> ->대한민국 언어
  <head>
  	<meta charset="utf-8"/>
	<title>이름</title>
  </head>
  <body> : 구조
	<h1></h1>
	내용작성 <혼자_/> : <br />
    				  <hr />
    				  <img src="image/image.jpg" alt="이미지" />
  </body>
</html>    
```

### html 코드

**※주의**

- **<**시작**>** **</**끝**>** : 반듯이 먼저 열고,닫기

- **점** 하나에도 반응하지않습니다.

- 웹접근성을 고려합니다.

- 의미파악을 위해 그려(손)봅니다.

- \<p>와\<br />의 차이점   \<p> : 문단과 문단을 구분짓는 개념

     				\<br /> : 단순한 줄바꿈

- inline / block 의 두가지 형태로 구분된다

    -> [코드의 형태를 구분해놓은 사이트](https://htmlreference.io/)

    ex) inline : ㅡ ㅡ ㅡ ㅡ ...

          block : Enter기능을 가지고있는 형태

- 저장 [**인코딩** 언어별 지정해주어야함ex) utf-8/euc-kr]
     : 메모장.txt -> firstTest.html = 브라우저

```html 코드
- 제목설정 : <h1>텍스트</h1>...<h6></h6>
- *{} : 모든것에 속성을준다
- 줄바꿈 : 내용<br />
- ct+방향키 : 낱말간격 이동
- ct+k_b : 사이드바
- ct+sh+d : 복제
- ct+al+방향키(↑,↓) : 한문구를 한번에 여러개 작성가능
- ct+위치선택 : 원하는 곳 부분적으로 선택가능(입력됨)
- ct+d : 같은글자 선택됨
- 구분짓는 선 : <hr />
- 지정(무의미) : <span>내용</span>
- 묶어주기 : <div></div>
- 문단(내용을적는곳) : <p>내용</p>(Enter 자동입력)
- 주석(보이지않는 메모기능) : <!--내용-->
- 페이지 명 : <title>이름</title>
- 버전 : <!DOCTYPE html> -> 최신html버전
- 언어설정 : <meta charset="<meta charset="UTF-8" />" />
- 페이지링크 : <a href="경로">페이지</a> = [페이지](https://주소)
		<a style="color:#f00" href="https://주소">페이지</a>
- 이미지링크 : 설명<img src="경로" />
- 순서가있는 목록 지정 : <ol></ol>
- 순서가없는 목록 지정 : <ul></ul>
- 제목이 있는 목록 지정 : <dl></dl>

	<dl>
	  <dt>제목</dt>
	  <dd>목록</dd>
	  <dd>목록</dd>
	  <dd>목록</dd>
	  <dt>제목</dt>
	  <dd>목록</dd>
	  <dd>목록</dd>
	</dl>


꾸미기기능[안에서만 폰트의 색상,크기 변경가능!!]
 : <style></style>
	= 스타일 안에 폰트
	  스타일 안에 색상(배경,글자)
      스타일 안에 묶음

강조방법 [->목소리로 구분지을수 있다.각각의]
* 굵게 : <strong>강조내용</strong>
* 기울기 : <em>강조내용</em>
* 밑줄 : <ins>강조내용</ins>
* 취소선 : <del>강조내용</del>

```

- 저장 : txt -> firstTest.html = 브라우저
- 제목설정 : <h1>텍스트</h1>
- 줄바꿈 : 내용<br />
- 구분짓는 선 : <hr />
- 링크 : <a href="https://www.naver.com">네이버</a> = [네이버](https://www.naver.com)
   <a style="color:#f00" href="https://www.naver.com">네이버</a>
#### - CSS(꾸며주는기능)

```
    여백(space) : span{ margin:50px; } ->span(지정된 내용)
    배경색지정 : div{ background-color:salmon; }
    글자색 : div{ color:#37f; }
```

### JS

숨기기 : sh+ct+] 숨기기 / [ 열기

```float/margin/padding/border/outline
float : 나열한다 (left/right)
	- 추가로 들오은 ㄴ프레임은 앞서 배치된 프레임들의 크기에 따라 영향을 미침
	- flat기능 사용시 형제요소들 모두 사용
	- 순서대로 큰 틀 먼저 만들기
	- 범위를 정확하게 인지하여 사용
	
	
	
	
margin : 10px 20px 30px 40px;
	->시계방향!!!위 오른 아래 왼
	auto기능 지원
    
padding : 10px 20px 30px 40px;
	->시계방향!!!위 오른 아래 왼
	auto기능 지원하지않음
	사용시 padding의 여백까지 고려하여 크기값을 결정.
	
border : 박스의 외곽선
	border-width:2px;
	border-color:#ooo;			=>		border:두계 모양 색;
	border-style:solid;
	
	
	
outline:선(부피X -> ex 레이저,안개)
	outline-width			\
	outline-color			\		outline-offset 쟤들과 별개
	outline-style			\
	-> 단,일부 브라우저 지원X(익스플로러)
	-> 다른 프레임들에게 아무런 영향을 끼치지 않는다.(why?레이저라고 생각하기)
	-> 인식의용이성 역할을 하는 대표적 코드
	
list-style:none = ./1. 등 목차를 꾸며주는 기호를 지운다.
/* reset.css*/ :모든 웹 페이지에서 보여주는 기능을 통일처리
font-size:0 = 글씨 크기가 0 즉, 글자 사라짐
margin / margin-top 같은경우 마진이 먼저오고 탑이 뒤에와야한다
margin 여백은 text에 영향을 미친다.
```

​                               