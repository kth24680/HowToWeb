# 플렉스

## Flex Container
: 플랙스를 선언한 태그.
- display
- flex-flow
- flex-direction
- flex-wrap
- justify-content
- align-content
- align-items

## Flex Item
: 플랙스 컨테이너의 자식 요소
- order
- flex
- flex-grow
- flex-shrink
- flex-basis
- aling-self

## display
: Flex Container의 화면 출력(보여짐) 특성
- flex : 블록 요소와 같이 flex Container 정의
- inline-flex : 인라인 요소와 같이 Flex Conatiner 정의

## flex-direction
- row : 행 축( 좌 => 우 )
- row-reverse : 행 축 ( 우 => 좌 )
- column : 열 축 ( 위 => 아래 )
- column-reverse : 열 축 ( 아래 => 위 )

## flex-wrap
: flex Items 묶음(줄 바꿈) 여부
- nowarp : 묶음 (줄 바꿈) 없음
- wrap : 여러 줄로 묶음

## justify-content (수평 정렬)
: 주 축의 정렬 방법
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- center : Flex Items를 가운데 정렬
- space-between : 각 Flex Item 사이를 균등하게 정렬
- space-around : 각 Flex Item의 외부 여백을 균등하게 정렬

## align-content (수직 여러 줄 정렬)
: 교차 축의 여러 줄 정렬 방법
- stretch : Flex Items를 시작점으로 정렬
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- center : Flex Items를 가운데 정렬
- space-between : 각 Flex Item 사이를 균등하게 정렬
- space-around : 각 Flex Item의 외부 여백을 균등하게 정렬

## align-items (수직 한 줄 정렬)
: 교차 축의 한 줄 정렬 방법
- stretch : Flex Items를 교차 축으로 늘림
- flex-start : Flex Items를 각 줄의 시작점으로 정렬
- flex-end : Flex Items를 각 줄의 끝 점으로 정렬
- center : Flex Items를 각 줄의 가운데 정렬
- baseline : Flex Items를 각 줄의 문자 기준선에 정렬


## order
: Flex Item의 순서
- 0
- 숫자

## flex-grow
: Flex Item의 증거 너비 비율
- 0
- 숫자

## flex-shrink
- 1
- 숫자

## flex-basis
- auto : 요소의 Content 너비
- 단위 : px, em, rem 등 단위로 지정

--------------------------------------------------------

# 전환

## transition: 속성명 지속시간 타이밍함수 대기시간;
:요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
- transition-property
- transition-duration
- transition-timing-function
- transition-delay


## transition-property
: 전환 효과를 사용할 속성 이름을 지정
- all : 모든 속성에 적용
- 속성이름 : 전환 효과를 사용할 속성 이름 명시

## transition-duration
: 전환 효과의 지속 시간을 지정
- 0s : 전환 효과 없음
- 시간 : 지속시간(s)을 지정

## transition-timing-function
: 전환 효과의 타이밍(Easing) 함수를 지정
- ease : 느리게 - 빠르게 - 느리게
- linear : 일정하게
- ease-in : 느리게 - 빠르게
- ease-out : 빠르게 - 느리게
- ease-in-out : 느리게 - 빠르게 - 느리게
- cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
- steps(n) : n번 분할된 애니메이션

### easing functions mdn
: 구글에 검색 시 사용할 수 있는 easing 함수.

### tweenmax easing

## transition-delay
: 전환 효과가 몇 초 뒤에 시작할 지 대기시간을 지정
- 0s : 대기 시간 없음
- 시간 : 대기 시간(s)을 지정

---------------------------------------------------------

# 변환

## transform

### 2D 변환 함수
- translate(x, y) 이동
- translateX(x)
- translateY(y)
- scale(x, y) 크기
- scaleX(x)
- scaleY(y)
- rotate 회전(각도)
- skew(x,y) 기울임
- skewX(x)
- skewY(y) 
- matrix(n,n,n,n,n,n) 2차원 변환 효과

### 3D 변환 함수
- translateZ(z)
- translate3d(x, y, z)
- scaleZ(z)
- sclae3d(x, y, z)
- rotateX(x)
- rotateY(y)
- rotateZ(z)
- rotate3d(z,y,z,a)
- perspective(n) 원근법(거리)
- matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) 

## perspective (속성)
: 하위 요소를 관찰하는 원근 거리를 지정
- 단위 : px 등 단위로 지정

## backface-visibility
: 3D 변환으로 회전된 요소의 뒷면 숨김 여부
- visible
- hidden
