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
  });
  console.log(width);
}

window.addEventListener('resize', init);
init();