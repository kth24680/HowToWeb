// ES6이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 몰론 생성자로서 호출할 수 있다.
// callable 이면서 contructor

var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
foo(); // 1

// 생성자 함수로서 호출
new foo(); // foo {}

// 메서드로서 호출
var obj = { foo: foo };
obj.foo(); // 1