// 자바스크립트 엔진은 매개변수의 개수와 인수의 개수를 체크하지 않는다.

 // 인수가 전달되지 않아 매개변수의 값이 undefiend인 경우 기본 값을 할당한다.
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1));

function logName(name = 'Lee') {
  console.log(name);
}

logName(); // Lee
logName(undefined); // Lee
logName(null); // null

// rest파라미터에는 기본값을 설정할 수 없다.