# 일반 비동기 프로그래밍 개념

## 비동기?
: 일반적으로 주어진 프로그램의 코드는 한 번에 한 가지만 발생하면서 곧바로 실행된다. 함수가 다른 함수의 결과에 의존하는 경우 다른 함수가 완료되고 반환될 때까지 기다려야하며, 그 때까지 전제 프로그램은 기본적으로 사용자의 관점으로 중지된다.

## 차단 코드
: 비동기 기술은 특히 웹 프로그래밍에서 매우 유용하다. 웹앱이 브라우저에서 실행되고 브라우저에 제어권을 반환하지 않고 실행하면 브라우저가 정지된 것처럼 보일 수 있다. 이를 차단이라고 한다. 브라우저는 웹 앱이 프로세서 제어를 반환할 때까지 사용자 입력을 계속 처리하고 다른 작업을 수행하지 못하도록 차단된다.

``` JS
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);

})

```