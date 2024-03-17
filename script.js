'use strict'

//menu

const menuLines = document.querySelector('.three_lines');
const menu = document.querySelector('.menu');
const firstLine = document.querySelector('.line1');
const secondLine = document.querySelector('.line2');
const thirdLine = document.querySelector('.line3');

function menuAppearance() {
  menu.classList.toggle('active_menu');
  firstLine.classList.toggle('active_line1');
  secondLine.classList.toggle('active_line2');
  thirdLine.classList.toggle('active_line3');
}

menuLines.addEventListener('click', menuAppearance);

//agree

const agreeBlock = document.querySelector('.text_agree');
const agreeText = document.querySelector('.agree');
const crossAgree = document.querySelector('.cross');

function appearanceOfAgreeBlock() {
  agreeBlock.style.display = 'block';
}

agreeText.addEventListener('click', appearanceOfAgreeBlock);

function closeAgreeText() {
  agreeBlock.style.display = 'none';
}

crossAgree.addEventListener('click', closeAgreeText);

//slider

"use stick"

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