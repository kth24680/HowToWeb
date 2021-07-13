// ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다. super 참조는 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로 내부 슬롯 [[HomeObject]]를 갖는 ES6 메서드는 super 키워드를 사용할 수 있다.

const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
  // sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
  // super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
  sayHi2: function () {
    return `${super.sayHi()}. how are you doing2?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?

// SyntaxError: 'super' keyword unexpected here
// console.log(derived.sayHi2());