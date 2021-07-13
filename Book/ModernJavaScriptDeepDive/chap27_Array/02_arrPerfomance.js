// 자바스크립트의 배열은 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다. 
// 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열(sparse array)이라 한다.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.

const arrPT = [];

console.time('Array Performance Test');

for (let i = 0 ; i < 10000000 ; i++) {
  arrPT[i] = i;
}

console.timeEnd('Array Performance Test');

const objPT = {};

console.time('Object Perfomance Test');

for (let i = 0 ; i < 10000000 ; i++ ) {
  objPT[i] = i;
}

console.timeEnd('Object Perfomance Test');
