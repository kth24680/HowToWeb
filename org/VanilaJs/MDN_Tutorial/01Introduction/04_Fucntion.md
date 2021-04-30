# 함수 - 재사용 가능한 코드 블록


## 브라우저 내장 함수

- .replace
``` JS
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
```

- .join()
``` JS
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
```

- Math.random()
```JS
let myNumber = Math.random();
```

## 함수 대 메소드
Built-in-browser functions은 methods이다. 
methods는 objects안에 정의된 function이다.

## 함수 호출
``` JS
function myFunction() {
  alert('Hello');
}

myFunction(); // calls the function once.
```

## 익명 함수
``` JS
let myGreeting = function () {
  alert('hello');
}
```

## 함수 스코프와 충돌
'스코프'는 함수와 관련된 매우 중요한 개념.
함수를 생성할 대, 변수 및 함수 내 정의된 코드들은 그들만의 '스코프'안에 자리하게 된다. 
그 말인 즉슨, 다른 함수의 내부나 외부 함수의 코드가 접근할 수 없는 그들만의 구획에 갇혀 있다는 것.

함수 바깥에 선언된 가장 상위 레벨의 스코프를 '전역 스코프(global scope)'라고 부른다. 전역 스코프 내에 정의된 값들은 어느 코드든 접근이 가능하다.

