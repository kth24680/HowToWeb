// ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만 의미한다.

const obj = {
  x: 1,
  // foo는 메서드다.
  foo() { return this.x },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () {return this.x; }
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// ES6 사양에서 정의한 메서드는 인스턴스를 정의할 수 없는 non-constructor다.
// 따라서 ES6 메서드는 생성자 함수로서 호출할 수 없다.

// new obj.foo(); TypeError: obj.foo is not a constructor
console.log(new obj.bar()); // bar {}

// ES6메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다. 
// obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
console.log(obj.foo.hasOwnProperty('prototype')); // false
// obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
console.log(obj.bar.hasOwnProperty('prototype')); // true

// 표준 빌트인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor이다.

console.log(String.prototype.toUpperCase.prototype);
console.log(String.fromCharCode.prototype);

console.log(Number.prototype.toFixed.prototype);
console.log(Number.isFinite.prototype);

console.log(Array.prototype.map.prototype);
console.log(Array.from.prototype);

// ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다. super 참조는 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로 내부 슬롯 [[HomeObject]]를 갖는 ES6 메서드는 super 키워드를 사용할 수 있다.