
const arr27_13 = () => {
  const arr = [1, 2, 3];
  console.log(arr.length); // 3

  // 요소 추가
  arr.push(4);
  // 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다.
  console.log(arr.length); // 4

  // 요소 삭제
  arr.pop();
  // 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다.
  console.log(arr.length); // 3
}

const arr27_14 = () => {
  const arr = [1, 2, 3, 4, 5];

  // 현재 length 프로퍼티 값인 5보다 작은 숫자 3을 length 프로퍼티에 할당
  arr.length = 3;

  // 배열의 길이가 5에서 3으로 줄어든다.
  console.log(arr); //[ 1, 2, 3 ]
}

const arr27_15 = () => {
  const arr = [1];

  // 현재 length 프로퍼티 값인 1보다 큰 숫자 3을 length 프로퍼티에 할당 
  arr.length = 3;

  // length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
  console.log(arr.length); // 3
  console.log(arr); // [ 1, <2 empty items> ]
}

const arr27_17 = () => {
  // 희소 배열
  const sparse = [, 2, , 4];

  // 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
  console.log(sparse.length); // 4
  console.log(sparse);

  // 배열 sparse에는 인덱스가 0, 2인 요소가 존재하지 않는다.
  console.log(Object.getOwnPropertyDescriptors(sparse));
}

arr27_13();
console.log();
arr27_14();
console.log();
arr27_15();
console.log();
arr27_17();

// 희소배열은 length와 배열 요소의 개수가 일치하지 않는다. 
// 희소배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다
// 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.