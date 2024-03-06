const images = document.querySelectorAll('.slider .slider_line img');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  console.log(width);
}

window.addEventListener('resize', init);
init();

//button prev
document.querySelector('.arrow_prev').addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

//button next
document.querySelector('.arrow_next').addEventListener('click', function() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}