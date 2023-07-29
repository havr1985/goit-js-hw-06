function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const bodyElement = document.querySelector('body');

button.addEventListener('click', onClickBtn);

function onClickBtn() {
  let hexColor = getRandomHexColor();
  bodyElement.style.backgroundColor = hexColor;
  textColor.textContent = hexColor;
}