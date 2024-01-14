/* 'use strict'; */

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

menuLines.addEventListener('click', menuAppearance)

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

crossAgree.addEventListener('click', closeAgreeText)



// carusel 84

const small84 = document.querySelector('.dom84');
const big84 = document.querySelector('.container_84');
const cross84 = document.querySelector('.cross84');

function big84Appearance () {
  big84.style.display = 'flex';
  document.body.style.backgroundColor = '#C0C0C0';
  document.body.style.overflow = "hidden";
}

small84.addEventListener('click', big84Appearance);

function big84Dis () {
  big84.style.display = 'none';
  document.body.style.backgroundColor = '#fff';
  document.body.style.overflow = "scroll";
}

cross84.addEventListener('click', big84Dis);


const arrowRight84 = document.querySelector('.arrow_right_84');
const arrowLeft84 = document.querySelector('.arrow_left_84');
const slide = document.querySelector('.slider_84');
let position84 = 0;

function slideLeft84 () {
  if (position84 < 4900) {
      position84 += 700;

  } else {
    position84 = 0;
  }
  slide.style.left = -position84 + 'px';
}

function sliderRight84 () {
  if (position84 > 0) {
    position84 -= 700;

  } else {
    position84 = 4900;
  }
  slide.style.left = -position84 + 'px';
}

arrowRight84.addEventListener('click', slideLeft84);
arrowLeft84.addEventListener('click', sliderRight84);

// carusel chekeril

const smallChekeril = document.querySelector('.chekeril')
const bigChekeril = document.querySelector('.container_chekeril');
const crossChekeril = document.querySelector('.cross_chekeril');

function chekerilAppearance () {
  bigChekeril.style.display = 'flex';
  document.body.style.backgroundColor = '#C0C0C0';
  document.body.style.overflow = "hidden";
}

smallChekeril.addEventListener('click', chekerilAppearance);

function bigChekerilDis () {
  bigChekeril.style.display = 'none';
  document.body.style.backgroundColor = '#fff';
  document.body.style.overflow = "scroll";
}

crossChekeril.addEventListener('click', bigChekerilDis);

const arrowRightChekeril = document.querySelector('.arrow_right_chekeril');
const arrowLeftChekeril = document.querySelector('.arrow_left_chekeril');
const slideChekeril = document.querySelector('.slider_chekeril');
let positionChe = 0;

function sliderLeftChe () {
  if (positionChe < 4900) {
    positionChe += 700;
  } else {
    positionChe = 0;
  }
  slideChekeril.style.left = -positionChe + 'px';
}

function sliderRightChe () {
  if (positionChe > 0) {
    positionChe -=700;
  } else {
    positionChe = 4900;
  }
  slideChekeril.style.left = -positionChe + 'px';
} 



arrowRightChekeril.addEventListener('click', sliderLeftChe);
arrowLeftChekeril.addEventListener('click', sliderRightChe);