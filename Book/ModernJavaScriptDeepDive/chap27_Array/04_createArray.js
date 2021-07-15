// Array 생성자 함수

const arr21 = () => {
  const arr = new Array(10);

  console.log(arr);
  console.log(arr.length);
  console.log(Object.getOwnPropertyDescriptors(arr))
}

const arr23 = () => {
  // 배열은 요소를 최대 4,294,967,295 개 가질 수 있다.
  //new Array(4294967295); 

  // 전달된 인수가 0 ~ 4,294,967,295를 벗어나면 RangeError가 발생한다.
  //new Array(4294967296);
  
  // 전달된 인수가 음수이면 에러가 발생한다.
  //new Array(-1); //
}

const arr27 = () => {
  // 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
  console.log(Array.of(1));
  console.log(Array.of(1, 2, 3));
  console.log(Array.of('string'));
}

const arr28 = () => {
  // 유사 배열 객체를 변환하여 배열을 생성한다.
  console.log(Array.from({ length: 2, 0: 'a', 1: 'b'})); // ['a', 'b']

  // 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
  console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]
}

const arr29 = () => {
  // Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined 요소로 채운다.
  console.log(Array.from({length: 3})); // [ undefined, undefined, undefined ]
  
  // Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
  console.log(Array.from({length : 3}, (_, i) => i)); // [ 0, 1, 2 ]
}

const arr32 = () => {
  const arr = [1, 2];

  // 인덱스가 2인 요소를 참조. 배열 arr에는 인덱스가 2인 요소가 존재하지 않는다.
  console.log(arr[2]);  // undefined
}

const arr38 = () => {
  const arr =[];

  // 배열 요소의 추가
  arr[0] = 1;
  arr['1'] = 2;

  // 프로퍼티 추라
  arr['foo'] = 3;
  arr.bar = 4;
  arr[1.1] = 5;
  arr[-1] = 6;

  console.log(arr); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

  console.log(arr.length); // 2
}

const arr40 = () => {
  const arr = [1, 2, 3];

  // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
  // arr[1]부터 1개의 요소를 제거
  arr.splice(1, 1);
  console.log(arr); // [ 1, 3 ]

  // length 프로퍼티가 자동 갱신된다.
  console.log(arr.length); // 2
}

const arr41 = () => {
  const arr = [1];
  // push 메서드는 원본 배열(arr)을 직접 변경한다.
  arr.push(2);
  console.log(arr); // [1, 2]

  // concat 메서드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
  const result = arr.concat(3);
  console.log(arr); // [ 1, 2 ]
  console.log(result); // [ 1, 2, 3 ]
}

const arr42 = () => {
  // true
  console.log(Array.isArray([]));
  console.log(Array.isArray([1, 2]));
  console.log(Array.isArray(new Array()));

  // false
  console.log(Array.isArray());
  console.log(Array.isArray({}));
  console.log(Array.isArray(null));
  console.log(Array.isArray(undefined));
  console.log(Array.isArray(1));
  console.log(Array.isArray('Array'));
  console.log(Array.isArray(true));
  console.log(Array.isArray(false));
  console.log(Array.isArray({0: 1, length: 1}));
}

const arr43 = () => {
  const arr = [1, 2, 2, 3];

  // 배열 arr에서 요소 2를 검색해서 첫 번째로 검색된 요소의 인덱스를 반환한다.
  console.log(arr.indexOf(2)); // 1
  // 배열 arr에 요소 4가 없으므로 -1을 반환한다.
  console.log(arr.indexOf(4)) // -1
  // 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
  console.log(arr.indexOf(2,2)) // 2
}

const arr44 = () => {
  const foods = ['apple', 'banana', 'orange'];
  
  // foods 배열에 'orange' 요소가 존재하는지 확인한다.
  if (foods.indexOf('orange') === -1 ){
    //foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
    foods.push('orange');
  }

  console.log(foods); // [ 'apple', 'banana', 'orange' ]
}

// ES7에서 도입된 Array.prototype.includes 메서드
const arr45 = () => {
  const foods = ['apple', 'banana', 'orange'];
  
  // foods 배열에 'orange' 요소가 존재하는지 확인한다.
  if (foods.includes('orange') === false){
    //foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
    foods.push('orange');
  }

  console.log(foods); // [ 'apple', 'banana', 'orange' ]
}

// push 메서드는 성능 면에서 좋지 않다. 마지막 요소로 추가할 요소가 하나라면 push 보다 lengt 프로퍼티를 사용.

const arr47 = () => {
  const arr = [1, 2];

  // arr.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
  arr[arr.length] = 3;
  console.log(arr); // [ 1, 2, 3 ]
}

const arr48 = () => {
  const arr = [1, 2];

  // ES6 스프레드 문법
  const newArr = [...arr, 3];
  console.log(newArr); // [ 1, 2, 3 ]
}

// Array.prototype.unshift
const arr52 = () => {
  const arr = [1, 2];

  // 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
  let result = arr.unshift(3, 4);
  console.log(result); // 4

  // unshift 메서드는 원본 배열을 직접 변경한다.
  console.log(arr); // [ 3, 4, 1, 2 ]
}

// 스프레드 문법 
const arr53 = () => {
  const arr = [1, 2];

  // ES6 스프레드 문법
  const newArr = [3, ...arr];
  console.log(newArr); // [ 3, 1, 2 ]
}

// Array.prototype.shift
const arr54 = () => {
  const arr = [1, 2];

  // 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다. 
  let result = arr.shift();
  console.log(result); // 1

  // shift 메서드는 원본 배열을 직접 변경한다.
  console.log(arr); // [2]
}

// Araay.prototype.concat
const arr57 = () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  // 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다. 
  // 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
  let result = arr1.concat(arr2); 
  console.log(result); // [ 1, 2, 3, 4 ]

  // 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
  result = arr1.concat(3);
  console.log(result); // [ 1, 2, 3 ]

  // 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
  result = arr1.concat(arr2, 5);
  console.log(result); // [ 1, 2, 3, 4, 5 ]

  // 원본 배열은 변경되지 않는다.
  console.log(arr1); // [ 1, 2 ]
}

// ES6 스프레드 문법
const arr60 = () => {
  let result = [1, 2].concat([3, 4]);
  console.log(result); // [ 1, 2, 3, 4 ]

  // concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
  result = [...[1, 2], ...[3, 4]];
  console.log(result); // [ 1, 2, 3, 4 ]
}

// Array.prototype.splice
const arr61 = () => {
  const arr = [1, 2, 3, 4];

  // 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
  const result = arr.splice(1, 2, 20, 30);

  // 제거한 요소가 배열로 반환된다.
  console.log(result); // [ 2, 3 ]
  // splice 메서드는 원본 배열을 직접 변경한다.
  console.log(arr); // [ 1, 20, 30, 4 ]
}

const arr62 = () => {
  const arr = [1, 2, 3, 4];

  // 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입한다.
  const result = arr.splice(1, 0, 100);

  // 원본 배열이 변경된다.
  console.log(arr); // [1, 100, 2, 3, 4]
  // 제거한 요소가 배열로 반환된다.
  console.log(result); // []
}


let arr = [
  arr21, arr23, arr27, arr28, arr29, arr32, arr38, arr40, arr41, arr42,
  arr43, arr44, arr45, arr47, arr48, arr52, arr53, arr54, arr57, arr60,
  arr61, arr62,
];
for( let i = 0 ; i < arr.length ; i++) {
  arr[i]();
  console.log();
}




