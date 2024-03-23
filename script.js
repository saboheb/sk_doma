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

/* const agreeBlock = document.querySelector('.text_agree');
const agreeText = document.querySelector('.agree');
const crossAgree = document.querySelector('.cross');

function appearanceOfAgreeBlock() {
  agreeBlock.style.display = 'block';
}

agreeText.addEventListener('click', appearanceOfAgreeBlock);

function closeAgreeText() {
  agreeBlock.style.display = 'none';
}

crossAgree.addEventListener('click', closeAgreeText); */


//form

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  console.log(form);
  form.addEventListener('submit', formSend); //при отправке форму переходим в функцию formSend

  async function formSend(e) {
    e.preventDefault(); //выключили кнопку "отправить"

    let formData = new FormData(form); //вытягивает данные полей
    console.log(formData);

    form.classList.add('_sending');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Ошибка");
    }
  } //formSend
});//DOMContentLoaded