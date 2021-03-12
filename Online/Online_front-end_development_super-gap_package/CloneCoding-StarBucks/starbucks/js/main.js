

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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', { // 생성자(클래스)
  direction: 'vertical', // 수직 방향
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
}); 

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 기본값.
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 기본값은 3000.
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리 !!
    promotionEl.classList.add('hide');
  } else { 
    // 보임 처리 !!
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 되감기
    ease: Power1.easeInOut, // 곡선
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);