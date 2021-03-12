const chap1El = document.querySelector("section .inner .dark .hello");
console.log(chap1El);
const chap2El = document.querySelector("section .inner .dark .intro");
console.log(chap1El);
console.log(chap2El);



chap1El.addEventListener('mouseover', function() {
  console.log("chap1El 마우스 올림");
  gsap.to(chap2El, .6, {
    opacity: 1,
    display: 'block'
  });
});
