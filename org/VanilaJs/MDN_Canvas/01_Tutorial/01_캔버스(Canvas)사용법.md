# 캔버스(Canvas) 기본 사용법

## <canvas> 요소

``` HTML
<canvas id="tutorial" width="150" height="150"></canvas>
```
- <canvas>는 처음에는 src 및 alt 속성이 없다는 점만 제외하면 <img> 요소처럼 보인다. 실제로 width와 height의 두 속성만 있다.
- <canvas> 요소는 닫는 태그(</canvas>)가 필수이다.
- 기본적으로 그리드의 1단위는 캔버스의 1픽셀과 같다. 원점은 좌측상단의(0,0)

``` js
var canvas = document.getElementById('tutorial');
if(canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

