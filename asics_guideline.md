# ASICS guideline

---

##  color 
### 기본 색상

mainColor   : #00C3E6
subColor1   : #ffffff
subColor1   : #001E62
textColor1   : #7A7A7B
textColor1  : #001E62
textColor2  : #ffffff
textColor2  : #000000
background1 : #ffffff



### 명도대비

#001E62 : #00C3E6 (7.3:1)  Logo의 글씨색상 사용가능

#FFFFFF : #7A7A7B (4.3:1) (가격)지정 텍스트 명도대비 부족으로 18PT사용 혹은 색상 변경요망



fontFamily : 

- 웹폰트 : Malgun Gothic , Arial

- 영문 : Arial

- 한글 : Malgun Gothic

  fontSize(h1)    :  30pt
  fontSize(h2)    : 25pt
  fontSize(h3)    : 
  fontSize(p)     : 15pt
  fontSize(point) : 12pt/bold
  단, 일부 디자인내용을 따를 수 있다.

- 서체의 크기는 최소 6pt이하로 제작할 수는 없다. 



image 출처 : 

이성경모델1 https://wasabcon.tistory.com/m/5217?category=673421

이성경모델2 http://sports.chosun.com/news/utype.htm?id=201708170100145960010596&ServiceDate=20170816

이성경,남자모델 http://dailytoday.co.kr/news/view.php?idx=13352

하지원모델 http://news.jkn.co.kr/articles/775616/20150413/%ED%91%B8%EB%A7%88-%EB%94%B0%EB%9D%BC%EC%9E%A1%EC%9D%80-%EC%95%84%EC%8B%9D%EC%8A%A4-%EB%82%98%EC%9D%B4%ED%82%A4%EC%99%80-%EC%95%84%EB%94%94%EB%8B%A4%EC%8A%A4-%EA%B9%8C%EC%A7%80-%EC%B6%94%EC%9B%94%ED%95%A0-%EA%B8%B0%EC%84%B8.htm

이종석모델1 http://kjtimes.com/news/article.html?no=22890

이종석모델2 http://m.fnnews.com/news/201310241007025351

이종석,하지원 모델 http://sports.chosun.com/news/news.htm?id=201305070100047940003569&ServiceDate=20130506

이종석,하지원모델 https://www.pinterest.co.kr/pin/436989970065126650/

이파니 모델 http://www.newspic.kr/view.html?nid=2018010605200281435&cp=t7sGt66U&pn=19&utm_medium=affiliate&utm_campaign=2018010605200281435&utm_source=cashslide

아식스t https://global.rakuten.com/ko/store/apworld/item/ezt714-/

아식스t 	https://www.asics.com/kr/ko-kr/mens-running-long-sleeve/p/0010302431.42

아식스p https://www.roadrunnersports.com/rrs/products/ASW4035/mens-asics-aptitude-2-run-pant/

리뷰 http://epic-run.com/mens-asics-gt-1000-3-running-shoes-review/

리뷰 http://www.irunforwine.net/2015/03/asics-gel-nimbus-17-review.html

리뷰 https://www.daangn.com/articles/2824312

리뷰 http://www.singinginthesilo.ca/asics-print-tshirt-performance-black-men-shirts-topsasics-usa-wrestling-singletofficial-p-485.html

외국키즈모델 https://www.sneakerstoyou.com/product_info.php?c=asics%20kids

리뷰 https://www.pikbee.me/media/BnBSNOHlVX_

런닝화 모음 https://www.dhgate.com/product/asics-gel-nimbus-17-xvii-men-running-shoes/386477174.html

야구화1https://tongya.co.kr/mall/view/goodsNo/86768/categoryNo/14729

롱패딩 모델들 http://www.beautyhankook.com/news/articleView.html?idxno=53576



영문 글꼴(Graphik) : https://fonts.asics.digital/graphik/Graphik-Regular-Web.woff2 asics

---

## naming guide 

id: carmelCase
class: snake_case
level 1: id 로사용, '영역이름' + 'Box'를 사용
level 2: class로 사용, '기능이름' + '_area'를 사용
level 3: class로 사용, level2의 이름 + '_상세기능이름'을 사용
level 4: '상단 상세기능이름' + '_' + '번호2자리' 사용

단, 
1. 꼭 필요한 경우의 상황에서는 id를 이용하여 이름을 부여할 수 있다. 
2. level 1의 영역을 fullpage 기능으로 사용할경우, 일부 영역을 감싸 960영역설정시에는 '영역이름'+'_outer'이름으로 사용할 수 있다.  

---


## margin 

1. margin을 사용시 상단과, 하단 둘중 하나를 사용해야 하는경우라면, 상단의 영역에서 margin-bottom 기능을 사용한다.
2. 가로로 정렬(float:left)하여, 한쪽의 공간을 비워야한다면, 'margin-right' 기능 사용하자.

---

## 속성 작성순서 

1. display
2. float
3. position/z-index/top/right/bottom/left
4. margin
5. padding
6. box-sizing
7. border
8. width/min-width/max-width/height/min-height/max-height
9. background-color/image/repeat/position ...
10. font
11. etc

- 단위값 vw/vh 사용시 각영역을 처리하는 @media query문 내부 첫줄에 기준 크기값 미리 공지
- 단위값 vw/vh 사용시 해당수치 뒤에(;뒤에) 주석을 달고 공식을 작성

---

## z-index 

각 영역별 큰 설정에서는 위치단위를 100씩 사용
:focus 기능처리되는 영역 :500
header영역이 고정처리되는 상황에서는 : 1000
이외에 position/z-index 사용시 별도의 명세서에 표기
