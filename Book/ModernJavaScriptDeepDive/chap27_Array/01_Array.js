const arr = ['apple', 'banana', 'orange'];

console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[2]); // orange
console.log(arr.length); // 3
console.log(typeof arr); // object

const arr2 = [1, 2, 3];

arr.constructor === Array // true;
console.log(Object.getPrototypeOf(arr) === Array.prototype) // true

// 자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 구조를 말한다.
// 정렬되지 않은 배열에서 특정한 요소를 검색하는 경우 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지 차례대로 검색(선형 검색(linear search), 시간복잡도O(n))해야 한다.

// 선형 검색을 통해 배열(array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.

console.log()
console.log("#linearSearch")

function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0 ; i < length ; i++) {
    if(array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1

