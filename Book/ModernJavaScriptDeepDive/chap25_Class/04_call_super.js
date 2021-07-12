// 수퍼 클래스

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브 클래스
class Derived extends Base {
  constructor(a, b, c,) {
    super(a, b);
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // Derived {a: 1, b: 2, c: 3}

console.log("01 서브클래스에서 constructor를 생략하지 않는 경우 서브 클래스의 contructor에서는 반드시 super를 호출해야 한다.");
console.log("02 서브 클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.")
console.log("03 super는 반드시 서브클래스의 constructor에서만 호출한다.")