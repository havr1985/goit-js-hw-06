const userInput = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

userInput.addEventListener('input', outputName);

function outputName(event) {
    userName.textContent = event.currentTarget.value;
    if (!(event.currentTarget.value)) {
        userName.textContent = "Anymous";
    }
}