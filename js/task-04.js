const container = document.querySelector('#counter');
const decrementBtn = container.firstElementChild;
const incrementBtn = container.lastElementChild;
const resultValue = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onClickDecrement);
incrementBtn.addEventListener('click', onclickIncrement);

function onClickDecrement(event) {
    counterValue -= 1;
    valueOutput();
};

function onclickIncrement(event) {
    counterValue += 1;
    valueOutput();
}

function valueOutput() {
    resultValue.textContent = counterValue;
};

console.log(counterValue);
