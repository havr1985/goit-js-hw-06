const userInput = document.querySelector('#validation-input');

userInput.addEventListener('blur', chekingInput);

function chekingInput(event) {
    let userInputValue = event.currentTarget.value;
    
    if (userInputValue.length === Number(userInput.dataset['length'])) {
        userInput.classList.add('valid');
        userInput.classList.remove('invalid');
    } else {
        userInput.classList.add('invalid'); 
        userInput.classList.remove('valid');
    }
}