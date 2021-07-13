// Array 생성자 함수

const arr27_21 = () => {
  const arr = new Array(10);

  console.log(arr);
  console.log(arr.length);
  console.log(Object.getOwnPropertyDescriptors(arr))
}

const arr27_23 = () => {
  // 배열은 요소를 최대 4,294,967,295 개 가질 수 있다.
  //new Array(4294967295); 

  // 전달된 인수가 0 ~ 4,294,967,295를 벗어나면 RangeError가 발생한다.
  //new Array(4294967296);
  
  // 전달된 인수가 음수이면 에러가 발생한다.
  //new Array(-1); //
}

const arr27_27 = () => {
  // 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
  console.log(Array.of(1));
  console.log(Array.of(1, 2, 3));
  console.log(Array.of('string'));
}

const arr27_28 = () => {
  // 유사 배열 객체를 변환하여 배열을 생성한다.
  console.log(Array.from({ length: 2, 0: 'a', 1: 'b'})); // ['a', 'b']

  // 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
  console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]
}


let arr = [arr27_21, arr27_23, arr27_27, arr27_28];
for( let i = 0 ; i < arr.length ; i++) {
  arr[i]();
  console.log();
}