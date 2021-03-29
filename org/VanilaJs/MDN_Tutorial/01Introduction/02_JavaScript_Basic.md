# 자바스크립트 기초

## 예제 - 숫자 맞추기

### 데이터 저장을 위한 변수 추가.

``` JS
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastReuslt = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('guessField');

let guessCount = 1;
let resetButton;

```

``` HTML
<p class="guess"></p>
<p class="lastResult"></p>
<p class="lowOrHi"></p>

<label for="guessField">Enter a guess: </label>
<input type="text" id="guessField" class="guessField" />
<input type="submit" value="Submit guess" class="guessSubmit" />
```

### 함수
``` JS
function checkGuess() {
  alert('I am a placeholder');
}
```

함수는 재사용이 가능한 코드의 묶음으로 한 번만 명시하면 몇번이고 실행이 가능하여 전체적인 코드에서 반복을 줄일 수 있다.


### 이벤트
이벤트란 버튼을 클릭하고, 페이지가 로딩되고, 비디오가 실행되는 등 코드가 실행되기 위한 응답으로 브라우저 상에서 일어나는 액션이다. 이벤트가 발생하여 발생된 이벤트를 처리하는 것을 이벤트 리스터라 하고, 이벤트가 발생했을 때 실행되는 코드 블록을 이벤트 핸들러라고 한다.

``` JS
guessSubmit.addEventListener('click', checkGuess);
```

