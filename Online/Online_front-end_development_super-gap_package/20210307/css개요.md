# position
: 요소의 위치 지정 기준

- static : 기준 없음
- relative : 요소 자신을 기준
- absolute : 위치 상 부모 요소 기준
- fixed : 뷰포트(브라우저) 기준
- sticky : 스크롤 영역 기준

# top, bottom, left, right, z-index

## relative
: 요소 자신을 기준으로 배치

## absolute
: 위치 상 부모 요소를 기준으로 배치

## fixed 
: 뷰포트(브라우저)를 기준으로 배치

# 요소 쌓임 순서(Stack order)
: 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정
1. 요소에 position속성의 값이 있는 경우 위에 쌓임.(기본값 static 제외)
2. 1번 조건이 같은 경우, z-index 속성의 값이 높을수록 위에 쌓임
3. 1번과 2번 조건까지 같은 경우 HTML의 다음 구조일수록 위에 쌓임 

-----------------------------------

# z-index 
: 요소의 쌓임 정도를 지정
- auto = 0
- 숫자 : 높을 수록 위에 쌓임

# 요소의 display가 변경됨
: position 속성의 값으로 absolute, fixed가 지정된 요소는, display 속성이 block으로 변경됨. 
