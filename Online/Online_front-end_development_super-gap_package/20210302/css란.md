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