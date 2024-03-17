"use stirct"

const images = document.querySelectorAll('.slider .slider_line img');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
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

//touch
sliderLine.addEventListener('touchstart', handleTouchStart, false);
sliderLine.addEventListener('touchmove', handleTouchMove, false);

let posX1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  posX1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!posX1) {
    return false;
  }
  let posX2 = event.touches[0].clientX;
  let xDiff = posX2 - posX1;

  if (xDiff < 0) {
    count++;
    if (count >= images.length) {
      count = images.length - 1;
    }
    rollSlider();

  } else if (xDiff > 0) {
    count--;
    if (count < 0) {
    count = 0;
  }
  rollSlider();
  }
  posX1 = null;
}