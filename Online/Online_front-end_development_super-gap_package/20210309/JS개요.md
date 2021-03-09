# 표기법

## dash-case(kebab-case) / HTML, CSS
ex) the-quick-brown-fox-jumps-over-the-lazy-dog

## snake_case / HTML, CSS
ex) the_quick_brown_fox_jumps_over_the_lazy_dog

## camelCase / Js
ex) theQuickBrownFoxJumpsOverTheLazyDog

## PascalCase / Js 
ex) TheQuickBrownFoxJumpsOverTheLazyDog


## Zero-based Numbering
: 0 기반 번호 매기기! // 특수한 경우를 제외하고 0부터 숫자를 시작합니다.



let fruits = ['Apple', 'Banana',  'Cherry'];

``` js
console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'

console.log(new Date('2021-01-30').getDay()); // 6, 토요일
console.log(new Date('2021-01-31').getDay()); // 0, 일요일
console.log(new Date('2021-02-01').getDay()); // 1, 월요일
```


## 주석

// 한 줄 메모 
/* 한 줄 메모 */

/**
 \* 여러줄
 \* 메모1
 \* 메모2
 */


``` js
console.log('Hello');

// String (문자 데이터)
// 따옴표를 사용합니다.
let myName = "Tommy"
let email = 'kthrkdals@gmail.com'
let hello = `Hello ${myname}?!`

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.

let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);


// Boolean(불린 데이터)
// true, false 두 가지 값 밖에 없는 논리 데이터입니다.
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow)

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = { abc : 123};

console.log(undef); // undefinded
console.log(obj.abc); // 123
console.log(obj.xyz) // undefinded

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty); // null

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다 { }
let user = {
  // Key: Value.
  name: 'MinSeok',
  age: 27,
  isValid: true
};

console.log(user.name); // MinSeok
console.log(user.age); // 27
console.log(user.isValid); // true

// Array (배열 데이터)
// 여러 데이터를 순차적으로 저장합니다 [ ]
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'

```

#  변수
: 데이터를 저장하고 참조(사용)하는 데이터의 이름
- var
- let
- const

``` js
// 재사용이 가능
// 변수 선언
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

## 재할당
``` js
// 값(데이터)의 재할당
let a = 12;
console.log(a);

let a = 999;
console.log(a);
```
## const
``` js
// 값(데이터)의 재할당
const a = 12;
console.log(a);

const a = 999;
console.log(a);
```

## 예약어
: 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어 (Reserved Word)

```js
let this = 'Hello'; // Syntax Error
let if = 123; // Syntax Error
let break = true; // Syntax Error
```

## 함수
: 특정 동작(기능)을 수행하는 일부 코드의 집합(부분) function
``` js
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); //1234
```

### return
``` js
function returnFunc() {
  return 123;
}

let a = returnFunc();
console.log(a);
```

```js
// 함수 선언!
function sum(a, b) { //a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용!
let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); // 3, 19, 6
```

```js
// 기명(이름이 있는) 함수
// 함수 선언!
function hello() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function () {
  console.log('World');
}

// 함수 호출!
hello(); // Hello~
world(); // World~
```


```js
const tommy = {
  name: 'Tommy',
  age: 27,
  //메소드(Method)
  getName: function () {
    return this.name;
  }
}

const hisName = tommy.getName();
console.log(hisName);
// 혹은 
console.log(tommy.getName()); 
```

## 조건문
: 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문 if, else

``` js
let isShow = true;
let checked = false;

if (isShow) {
  console.log('Show!'); // Show!
}

if (checked) {
  console.log('Checked!');
}
```

``` js
let isShow = true;

if (isShow) {
  console.log('Show!'); // Show!
} else {
  console.log('Hide?');
}
```

# DOM API
: Document Object Model, Application Programming Interfase
자바스크립트로 HTML을 사용하는 것을 의미

```js
// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true;

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false
```

```js
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box'); 
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl) : 반복 중인 요소.
// 두 번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
});

```

``` js
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Tommy';
console.log(boxEl.textContent); // Tommy

```

# Method Chaining

``` js
const a = 'Hello~';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환;
const b = a.split('').reverse().join(''); // 메소드 체이닝...

console.log(a);
console.log(b);

```