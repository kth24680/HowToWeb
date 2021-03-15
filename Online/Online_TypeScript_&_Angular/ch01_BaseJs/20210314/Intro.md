Electron을 통해 데스크탑 어플을 만들 수 있다.
React와 NativeScript을 통해 모바일 어플을 만들 수 있다.
Node.js를 통해 IOT까지 만들 수 있다.


// // 변수
// let value = 1;
// console.log(value);
// value = 2;
// console.log(value);

// // 상수
// const a = 1;

// // 사용하지 않는 변수
// var b = 2; // var은 동시 변수 선언이 가능.

// let text = "안녕";
// let text2 = "안녕";

// undefined; // 값이 지정되지 않은 것.
// null ; // 값이 없는 것 .

// 연산자
// let a = 1 + 2 - (3 * 4) / 4;

// const a = 1;
// const b = 2;
// const equals = a == b; //타입을 검사하지 않음.
// console.log(equals);
// const equals2 = a === b; //타입까지 검사함.

// // 함수

// // function hello(name) {
// //   console.log("Hello, ", name + "!");
// // }

// function hello(name) {
//   return `Hello,  ${name}!`;
// }

// const result = hello("tommy");
// console.log(result);

// function getGrade(score) {
//   if (score === 100) {
//     return "A+";
//   } else if (score >= 90) {
//     return "A";
//   } else if (score === 89) {
//     return "B+";
//   } else if (score >= 80) {
//     return "B";
//   } else {
//     return "F";
//   }
// }

// const grade = getGrade(100);
// console.log(grade);

// // 화살표 함수. ES6
// const add = (a, b) => a + b;
// const sum = add(1, 2);
// console.log(sum);

// // 객체
// const dog = {
//   name: "멍멍이",
//   age: 2
// };
// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);

// const ironMan = {
//   name: "토니 스타크",
//   actor: "로버트 다우니 주니어",
//   alias: "아이언맨"
// };

// const catainAmerica = {
//   name: "스티븐 로져스",
//   actor: "크시르 에반스",
//   alias: "캡틴 아메리카"
// };

// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다. `;
//   console.log(text);
// }

// print(catainAmerica);
// print(ironMan);

// const dog = {
//   name: "멍멍이",
//   sound: "멍멍!",
//   say: function say() {
//     console.log(this.sound);
//   }
// };

// const cat = {
//   name: "야옹이",
//   sound: "야옹~"
// };

// cat.say = dog.say;
// dog.say();
// cat.say();

// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log("sum 함수가 실행됩니다.");
//     return this.a + this.b;
//   }
// };

// numbers.a = 5;
// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

// const dog = {
//   _name: "멍멍이",
//   set name(value) {
//     console.log("이름이 바뀝니다.");
//     this._name = value;
//   },
//   get name() {
//     console.log("이름을 조회합니다.");
//     return this._name;
//   }
// };

// console.log(dog._name);

// dog.name = "뭉뭉이";
// console.log(dog._name);

// const numbers = {
//   _a: 1,
//   _b: 2,
//   sum: 3,
//   calculate() {
//     console.log("calculate");
//     this.sum = this._a + this._b;
//   },
//   get a() {
//     return this._a;
//   },
//   get b() {
//     return this._b;
//   },
//   set a(value) {
//     this._a = value;
//     this.calculate();
//   },
//   set b(value) {
//     this._b = value;
//     this.calculate();
//   }
// };

// console.log(numbers.sum);
// numbers.a = 5;
// numbers.b = 7;
// numbers.a = 9;
// console.log(numbers.sum);
// console.log(numbers.sum);
// console.log(numbers.sum);

// 배열

// const array = [1, 2, 3, 4, 5];
//console.log(array[0]);

// const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

// objects.push({
//   name: "멍뭉이"
// });

// console.log(objects);
// console.log(objects.length);

// const array = [1, true, { a: 1 }, [1, 2, 3, 4]];
// console.log(array.length);

// 반복문

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const names = ["멍멍이", "야옹이", "멍뭉이"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let i = 0;
// let isFun = false;

// while (!isFun) {
//   console.log(i);
//   i++;
//   if (i === 30) {
//     isFun = true;
//   }
// }

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  // 배열 이용
  console.log(number);
}

// 객체에서 사용하는 for문
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

for (let key in doggy) {
  console.log(`${key} : ${doggy[key]}`);
}
