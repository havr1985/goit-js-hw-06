function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onClickCreateBtn);
controls.firstElementChild.addEventListener('input', userInput);
destroyBtn.addEventListener('click', destroyBoxes);

function userInput() {
  let amount = controls.firstElementChild.value;
  return amount;
};

function onClickCreateBtn() {
  boxes.innerHTML = '';
  createBoxes(userInput());
};

function createBoxes(amount) {
  let elements = [];
  let widthHeight = 30;
  for (let i = 0; i < amount; i += 1) {
    let element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.height = `${widthHeight}px`;
    element.style.width = `${widthHeight}px`;
    elements.push(element);
    widthHeight += 10;
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
