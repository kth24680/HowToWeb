

const searchEl = document.querySelector('.search'); // document은 HTML을 의미.
const searchInputEl = searchEl.querySelector('input');  // searchEl요소의 input을 가리키다.

searchEl.addEventListener('click', function() {
  searchInputEl.focus(); // 돋보기 선택 시, text 창 Focus 되게 하기.
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
// 화면 스크롤 시, 0.3 초마다 실행되도록 함. 호출되는 반복되는 이벤트의 횟수를 줄일 수 있음.
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  }); // 애니메이션 처리해주는 라이브러리
});
