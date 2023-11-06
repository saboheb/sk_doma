const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const sliderLine = document.querySelector('.slider_line');

let position = 0;

function sliderToLeft() {
    if (position < 1000) {
        position += 500;
    } else {
        position = 0;
    }
       sliderLine.style.left = -position + 'px';
}

arrowRight.addEventListener('click', sliderToLeft);

function sliderToRight() {
    if (position > 0) {
        position -= 500;
    } else {
        position = 1000;
    }
       sliderLine.style.left = -position + 'px';
}

arrowLeft.addEventListener('click', sliderToRight);