// shif 메서드와 push 메서드를 사용하면 큐를 쉽게 구현할 수 있다.
const Queue = (function () {
  function Queue(array = []) {
    if(Array.isArray(array) === false) {
      throw new TypeError(`${array} is not an array`);
    }
    this.array = array;
  }

  Queue.prototype = {
    constructor: Queue,
    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enqueue(value) {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다.
    dequeue() {
      return this.array.shift();
    },
    // 큐의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    }
  };

  return Queue;
}());

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [ 1, 2 ]

queue.enqueue(3);
console.log(queue.entries()); // [ 1, 2, 3 ]

queue.dequeue();
console.log(queue.entries()); // [ 2, 3 ]