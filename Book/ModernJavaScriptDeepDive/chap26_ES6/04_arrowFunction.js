// 화살표 함수 
// - 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다.
// - 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안. 

const mulitply = (x, y) => x * y;
console.log(mulitply(2, 3)); // 6

const power = x => x ** 2;
console.log(power(2));

// 함수 몸체를 감싸는 중괄호를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면 에러가 발생한다.

const arrow = () => { 
  const x = 1;
  return x; 
};
console.log(arrow)

// 동일한 문법
const create = (id, content) => ({ id, content });
console.log(create(1, 'JS')); // { id: 1, content: 'JS' }

const create2 = (id, content) => { return {id, content}; }
console.log(create2(1, 'JS')) // { id: 1, content: 'JS' }

// 잘못된 문법
const create3 = (id, content) => { id, content };
console.log(create3(1, 'JS')) // undefined

// 여러 개의 문으로 구성된 함수 몸체는 중괄호 생략 x, 반환값 필수
const sum = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum(1,2));

// 즉시 실행 함수로 사용
const person = (name => ({
  sayHi() { return `Hi? My name is ${name}.`; }
}))('Lee');

console.log(person.sayHi()); // Hi? My name is Lee.

// 화살표 함수도 일급 객체이므로 고차 함수(HOF)에 인수로 전달할 수 있다. 

// 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다.
const Foo = () => {};
// 화살표 혐수는 생성자 함수로서 호출할 수 없다.
// new Foo(); // TypeError: Foo is not a constructor

// 화살표 함수는 prototype 프로퍼티가 없다.
console.log(Foo.hasOwnProperty('prototype')); // false

// 중복된 매개변수 이름을 선언할 수 없다.
// SyntaxError: Duplicate parameter name not allowed in this context
// const normal = (a, a) => a + a;

// 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// this

class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  /* 일반 함수 
  add(arr) {
    // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
    // const that = this;
    return arr.map(function (item) {
      return this.prefix + ' '+ item // TypeError: Cannot read property 'prefix' of undefined
    //}, this); // this에 바인딩 된 값이 콜백 함수 내부의 this에 바인딩 된다.
    }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
  }
  */

  // 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
  // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
  // 이를 lexical this 라 한다.
  // this는 함수가 정의된 위치에 의해 결정된다.
  add(arr) {
    return arr.map(item => this.prefix + item);
  }

}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

// this는 메서드를 호출한 객체를 가리킨다.
// Array.prototype.map의 인수로 전달한 콜백 함수의 내부인 this는 undefined를 가리킨다.
// 이는 Array.prototype.amp 메서드가 콜백 함수를 일반함수로 호출했기 때문이다.

// this는 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.
(function () {
  const foo = () => console.log(this);
  foo();
}).call({a : 1}); // { a : 1}

(function () {
  const bar = () => () => console.log(this);
  bar()();
}).call({a : 1}); // { a : 1}

// 먄약 화살표 함수가 전역 함수라면 화살표 함수의 this는 전역 객체를 가리킨다.
const foo = () => console.log(this);
foo();

// 프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.

// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.

const counter = {
  num: 1,
  increase: () => ++this.num
};

console.log(counter.increase()); // NaN

// ES6 메서드를 동적 추가하고 싶다면 다음과 같이 객체 리터럴 바인딩하고 프로토타입의 constructor 프로퍼티와 생성자 함수 간의 연결을 재설정한다.

function Person (name) {
  this.name = name;
}

Person.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Person,
  sayHi() { console.log(`Hi ${this.name}`); }
};

const person2 = new Person('Lee');
person2.sayHi(); // Hi Lee

class Person3 {
  name = 'Lee';
  sayHi() { console.log(`Hi ${this.name}`); } 
}

const person3 = new Person3();
person3.sayHi(); // Hi Lee

// 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다. 참조하려면 this와 마찬가지로 상위 스코프의 super를 참조한다.

class Base {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  sayHi = () => `${super.sayHi()} how are you doing?`; 
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee how are you doing?

// 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로 상위 스코프의 arguments를 참조한다.

(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
  const foo2 = () => console.log(arguments);
  foo2(3, 4);
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
const foo2 = () => console.log(arguments);
foo2(1, 2); // ReferenceError: arguments is no defined