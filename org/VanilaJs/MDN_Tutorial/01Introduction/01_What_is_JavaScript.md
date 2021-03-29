# JavaScript가 뭔가요?
: 복잡한 무언가(주기적으로 내용이 갱신되는 기능이나 능동적인 지도, 변화하는 2D/3D 그래픽, 동영상 등)를 웹페이지에 적용할 수 있게 하는 스크립트 혹은 프로그래밍 언어이다. 자바스크립트는 표준 웹 기술이라는 레이어 케이크에서 세번째 층이라고 볼 수 있다.

- HTML은 제공할 웹 컨텐츠의 구조와 의미를 문단, 제목, 표, 삽입 이미지, 동영상 등으로 정희하고 부여하는 마크업 언어.
- CSS는 배경색, 폰트 등의 레이아웃 등을 지정하여 HTML 컨텐츠를 꾸며주는 스타일 규칙 언어
- JavaScript는 동적으로 컨텐츠를 바꾸고, 멀티미디어를 다루고, 움직이는 이미지 그리고 꽤나 많은 다른 일들을 할 수 있는 스크립트 언어

ex)
``` HTML
<p>Player 1: Chris</p>
```
``` CSS
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
```
``` JS
const para = document.querySelector('p');

para.addEventListener('click',updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

## 그래서, 진짜 어떤 일을 할 수 있나요?
자바스크립트 언어의 핵심은 다음과 같은 일들을 할 수 있게 하는 프로그래밍 기능들로 구성되어 있다.
- 변수안에 값을 저장할 수 있다.
- 프로그래밍에서 '문자열(strings)'이라고 불리는 문자들도 조작 가능하다.
- 웹 페이지 상의 이벤트에 응답하는 코드를 작성할 수 있다.
- etc...

더욱 흥미진진한 것은 코어 자바스크립트 언어(core JavaScript Language)기반의 기능성이다. 소위 Application Programming Interfaces(APIs)라는 것은 JS코드에 사용할 수 있는 강력한 기능을 제공한다.

API는 이미 만들어진 코드의 집합체라고 볼 수 있고, 힘든 부분을 쉽게 구현하도록 하는 프로그램이라고 볼 수 있다.

### Browser API
: 웹 브라우저에 설치된 API들로, 컴퓨터 환경구성으로부터 데이터를 보이게 하고 복잡한 일들을 하게 한다.
- DOM(Document Object Model) API : 동적으로 페이지의 스타일을 정하는 등 HTML과 CSS를 알맞게 조정하는 역할을 한다. (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- Geolocation API : 지리적인 정보를 검색하게 해준다. (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
- Canvas와 WebGL API는 2D와 3D 그래픽을 만들 수 있다. [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API),[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API),[Chrome Experiments](https://experiments.withgoogle.com/search?q=WebGL),[webglsamples](http://webglsamples.org/)
- HTMLMediaElement와 [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) 같은 [Audio and Video](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery)는 음악과 비디오를 웹페이지 상에서 재생하고, 웹캠으로 캡처하고 다른 컴퓨터에 표시하는 등의 멀티미디어를 활용할 수 있는 기술을 지원한다.([Snapshot demo](http://chrisdavidmills.github.io/snapshot/))

## 웹페이지에서 JavaScript는 어떤 일을 하나요?
: 브라우저에서 웹페이지를 불러올 때, 실행 환경(브라우저 탭)안에서 HTML, CSS, Js코드가 실행된다. 
JS는 HTML과 CSS가 결합되고 웹페이지 상에서 올려진 후, 브라우저의 자바스크립트 엔진에 의해 실행된다.
이는 페이지의 구조와 스타일 등을 정해놓고, 자바스크립트가 실행된다는 것과 같은 의미이다.

동적으로 사용자 인터페이스를 업데이트하는 자바스크립트의 사용은 DOM API를 통해 HTML과 CSS를 수정하는 것으로 좋은 현상이다.

### 브라우저 보안성
: 각각의 브라우저 탭들은 코드가 실행되는 개별적인 구성("실행환경")이다. 이 탭의 대부분의 경우는 완전히 독립적이고, 하나의 탭의 코드는 다른 탭이나 웹사이트에 직접적으로 영향을 줄 수 없다는 의미이다.

### 자바스크립트 실행 순서
: 브라우저에서 자바스크립트를 만났을 때, 일반적으로 위에서 아래로 순서대로 실행된다. 

### 해석형 언어와 컴파일러형 언어
자바스크립트는 **해석형 언어**입니다. 따라서 순차적으로 실행되고 즉시 결과가 반환된다. 브라우저 동작하기 전에 다른 방식으로 코드를 변환할 필요가 없다.

반면 컴파일러형 언어는 컴퓨터에 의해 동작되기 전 다른 형식으로 변환하는 언어이다.

### 서버측 코드와 클라이언트측 코드 
클라이언트측 코드 : 사용자의 컴퓨터에서 작동하는 코드 (자바스크립트 모듈을 정확히는 클라이언트측 자바스크립트라고 한다.)

서버측 코드 : 서버에서 작동되고, 그 결과가 사용자의 브라우저에 넘어가 표시된다. PHP, Python, Ruby, ASP.NET 등이 서버측 웹 언어의 대표적인 예이다. Node.js란 환경을 통해 서버측에서도 자바스크립트가 사용 가능하다.
(https://developer.mozilla.org/en-US/docs/Learn/Server-side)

### 동적 VS 정적 코드
동적은 각기 다른 상황에서 적절한 정보가 보이고, 컨텐츠를 웹페이지나 앱 상에 계속적으로 노출시키는 역할이다.

서버측 코드는 데이터베이스로부터 데이터를 던지는 등 동적으로 새로운 컨텐츠를 만든다.
클라이언트측 코드는 자바스크립트는 새로운 HTML 표를 만들어 서버에서 요청한 데이터를 뿌려 사용자에게 보이는 등 동적으로 브라우저 안에서 작동된다.

동적으로 바뀌지 않는 페이지를 정적 페이지라고 한다.

## 웹 페이지에서 JavaScript를 어떻게 넣나요?
자바스크립트는 HTML 상에서 오직 Script 태그만으로 사용이 가능하다.
``` HTML
<script>
  // JavaScript goes here
</script>
```

### 외부의 자바스크립트.

``` HTML
<script src="srcipt.js"></script>
```

### 인라인 JavaScript 처리기

실제 HTML 속에 포함된 자바스크립트 코드를 함께 쓸 수 있다. 하지만 이는 소스를 복잡하게 할 수 있다.


### 스크립트의 로딩 방법
모든 HTML 요소는 순서대로 페이지에 로드된다는 것이다. 자바스크립트를 이용해 DOM을 조작할 경우, 자바스크립트 코드가 조작 대상인 HTML 요소보다 먼저 실행된다는 조작할 요소가 존재하지 않기에 제대로 동작하지 않는다.

``` JS
document.addEventListener("DOMContentLoaded", function() {
  ...
})
```

이 이벤트리스너는 "DOMContentLoad"이벤트가 발생했을 때 function()을 실행한다는 의미이다. 해당 이벤트는 브라우저가 완전히 로드되고 해석될 때 발생한다. 내부 JS구문은 이벤트가 발생되기 전까지는 실행되지 않는다. 따라서 모든 body 태그의 요소가 로드된 이후 자바스크립트 코드가 실행되도록 만들어 에러를 피할 수 있다.

외부 자바스크립트 예제에서는 좀 더 최신의 자바스크립트 문법인 async 속성을 사용하게 된다. 일반적으로 HTML 요소를 로딩하는 중 /<script/>태그를 만나면 JavaScript 내용이 모두 다운될 때까지 HTML 로딩은 멈추게 되는데, async요소는 비동기방식으로 <sc/>태그에 도달했을 때 브라우저에게 HTML요소를 멈추지 않고 다운 받도록 유지시킨다.

``` HTML
<script src="main.js" async></script>
```
이 경우 script와 HTML은 모두 동시에 로드되고 동작할 것이다.

### async & defer
코드 문제를 해결하기 위한 방법은 실제로 두가지가 있다.
- async
- defer

async 스크립트는 페이지 렌더링의 중단 없이 스크립트를 다운로드 하고, 또한 스크립트의 다운로드가 끝나자마자 이를 실행시킨다. async는 외부 스크립트끼리 구체적인 실행 순서는 보장하지 않고, 단지 나머지 페이지가 나타나는 동안 스크립트가 비동기방식으로 다운로드 되어 중단되지 않는다는 것만 보장한다.

``` JS
<script async src="main01.js"></script>
<script async src="main02.js"></script>
<script async src="main03.js"></script>
```
3개의 스크립트를 로딩하지만 이들의 순서는 보장할 수 없다.


defer는 순서대로 다운로드 한 후 모든 스크립트와 내용이 다운로드 되었을 때 실행한다.
``` JS
<script defer src="main01.js"></script>
<script defer src="main02.js"></script>
<script defer src="main03.js"></script>
```
위의 예제의 경우 main01.js -> main02.js -> main03.js 순서가 보장된다.