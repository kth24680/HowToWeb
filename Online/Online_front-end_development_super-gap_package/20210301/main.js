const els = document.querySelectorAll('div');

els.forEach(el => {
  console.log(el.dataset.fruitName);
})