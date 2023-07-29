const userInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

userInput.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    let range = event.currentTarget.value + "px";
    textOutput.style.fontSize = range;
}

