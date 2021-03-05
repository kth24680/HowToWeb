# CSS 속성


### width, height 
- auto : 브라우저가 너비를 계산 //기본값
- 단위 : px, em, vw 등 단위로 지정


- 박스 모델
- 글꼴, 문자
- 배경
- 배치
- 플랙스(정렬)
- 전환
- 변환
- 띄움
- 애니메이션
- 그리드
- 다단
- 필터

<span> : 글자의 크기만큼 늘릴려고 함.
<div> : 최고의 크기만큼 늘릴려고 함.
max-width, max-height : 최대 너비 제한 없음.
min-width, min-height : 최소 너비 제한 없음.

width : 요소의 가로 너비
height : 요소의 세로 너비
각 속성의 기본 값 : auto
max의 기본 값 : none
min의 기본 값 : 0

------------------

# 단위
px : 픽셀 
% : 상대적 백분율
em : 요소의 글꼴 크기
rem : 루트(최상위) 요소의 글꼴 크기
vw : 뷰포트 가로 너비의 백분율
vh : 뷰포트 세로 너비의 백분율

em 단위의 기준 : 요소의 글꼴 크기
0px 과 0vw는 모두 같은 값.


--------------------------

# margin
: 외부 여백

margin: all
margin: top/bottom left/right
margin: top left/right bottom
margin: top right bottom left

---------------------------

# padding
: 내부 여백

padding: all
padding: top/bottom left/right
padding: top left/right bottom
padding: top right bottom left


----------------------------

# border
- 선-두께(border-width) : 요소 테두리 선의 두께
- 선-종류(border-style) : 요소 테두리 선의 종류
- 선-색상(border-color) : 요소 테두리 선의 색상을 지정하는 단축 속성

border-width: all
border-width: top/bottom left/right
border-width: top left/right bottom
border-width: top right bottom left

border-style: none // 선 없음
border-style: solid // 실선
border-style: dashed // 파선
border-style: datted // 점선
border-style: double // 두 줄 선

## border-방향-속성
border-top
border-top-width
border-top-style
border-top-color


## 색상 표현
- 색상 이름(브라우저에서 제공하는 색상 이름) : red, tomato, royalblue
- Hex색상코드(16진수 색상) #000,#FFFF00
- RGB(빛의 삼원색) rgb(255,255,255)
- RGBA(빛의 삼원색+투명도) rgba(0,255,255,0.5)

----------------------------------

# border-radius
: 요소의 모서리를 둥글게 깎음.

# box-sizing
: 요소의 크기 계산 기준을 지정
- content-box : 요소의 내용(content)의 크기 계산
- border-box : 요소의 내용 + padding + border로 크기 계산

# overflow
: 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성

- hidden
- visible
- auto

# display
: 요소의 화면 출력(보여짐) 특성
- block
- inline
- inline-block : 글자 + 상자 요소
- flex : 1차원 레이아웃
- grid : 2차원 레이아웃
- none : 보여짐 특성 없음.
- 기타