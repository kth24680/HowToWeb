// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function foo(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
}

bar(1, 2, 3, 4, 5);

// Rest는 마지막 파라미터여야 한다.
// Rest는 단 하나만 선언 가능하다.
// 함수객체의 length 프로퍼티에 영향을 주지 않는다.

console.log(foo.length);
console.log(bar.length);

// ES6에서는 rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다. 이를 통해 유사 배열 객체인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

function sum(...args) {
  // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15