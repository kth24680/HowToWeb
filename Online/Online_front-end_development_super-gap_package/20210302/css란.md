# CSS 개요

## 선택자 { 속성: 값; 속성: 값; ... }
- 선택자 : 스타일(CSS)을 적용할 대상(Selecter)
- 속성 : 스타일(CSS))의 종류
- 값 : 스타일(CSS)의 값(Value)

ex) div { color : red; } 
: div안에 있는 글자들은 red 색을 갖는다.

코드를 작성할 때는, 처음부터 예쁘게 작성하도록 한다.

/* 설명 작성 */
div {
  color: red;
  margin: 20px;
}


# CSS 선언 방식 

## 1. 내장 방식
: <style></style>의 내용(Contents)으로 스타일을 작성하는 방식
// 권장하지 않음.

## 2. 인라인 방식
: 요소의 style 속성에 직접 스타일을 작성하는 방식 (선택자 없음)

## 3. 링크 방식 [병렬]
: <link />로 외부 CSS 문서를 가져와서 연결하는 방식

## @import방식 [직렬]
: CSS의 @import규칙으로 CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식.
@import url("./box.css");
// 링크로 연결된 main.css 안에 @import를 이용하여 가져옴.

# CSS 선택자

## 1. 기본
- \* (전체 선택자) : 모든 요소를 선택 ex) \*{}
- 태그 선택자(Type Selector) : 태그 이름으로 요소 선택 ex) ABC{}
- 클래스 선택자(Class Selector) : HTML class 속성의 값으로 요소 선택 ex).ABC{}
- 아이디 선택자(ID Selector) : HTML id 속성의 값이 ABC인 요소 선택 ex) #ABC{}

## 2. 복합
- 일치 선택자(Basic Combinator) : 선택자 A와 B를 동시에 만족하는 요소 선택 
ex) span.orange {}
- 자식 선택자(Child Combinator) : 선택자 A의 자식 요소 B를 선택
ex) ul > .orange{}
- 하위 선택자(Descendant Combinator) : 선택자 A의 하위 요소 B선택. '띄어쓰기'가 선택자의 기호!
ex) div .orange {}
- 인접 형제 선택자(Adjacent Sibling Combinator) : 선택자 A의 다음 형제 요소 B 하나를 선택
ex) .orange + li{}
- 일반 형제 선택자(General Sibling Combinator) : 선택자 A의 다음 형제 요소 B 모두를 선택.
ex) .orange ~ li {}

# 가상 클래스 선택자(Pseudo-Classes)
- HOVER : 선택자 A 요소에 마우스 커서가 올라가 있는 동안 선택.
ex) a:hover {}
- active : 선택자 A 요소에 마우스를 클릭하고 있는 동안 선택
ex) a:active {}
- focus : 선택자 A 요소가 포커스 되면 선택.
ex) input:focus {}
- first-child : 선택자 A가 형제 요소 중 첫째라면 선택.
ex) .fruits span:first-child {}
- last-child : 선택자 A가 형제 요소 중 막내라면 선택
ex) .fruits h3:last-child {}
- nth-child(n) : 선택자 A가 형제 요소 중 (n)째라면 선택.
ex) .fruits *:nth-child(2n) {} // n은 Zero-Based Numbering(? * n 번째 선택)
- not : 선택자 X가 아닌 A 요소 선택
ex) .fruits *:not (span) {} 

# 가상 요소 선택자 
- before : 선택자 A 요소의 내부 앞에 (인라인 요소) 내용 (Content)을 삽입
ex) .box::before { content:???} // 자주 사용됨. 
- after : 선택자 A 요소의 내부 뒤에 (인라인 요소) 내용 (Content)을 삽입.
ex) .box::after { content:??}

# 속성 선택자
- [disabled] {}
- [type] {}
- [type="password"] {}


------------------------------------

# 상속 
.animal {} // 스타일 상속
상속되는 CSS 속성들 
- font-style, font-weight, font-size, line-height, font-family, color, text-align ...

## 강제 상속

------------------------------------

# 선택자 우선 순위
우선순위란, 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법
1. 점수가 높은 선언이 우선함.
2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선함.

명시도.
1. div {!important} // 중요도
2. style = "color:orange"  
3. #color_yellow {}
4. .color_green {}
5. div {}
6. * {}
7. body {} 

