const userInput = document.querySelector('#validation-input');

userInput.addEventListener('blur', chekingInput);

function chekingInput(event) {
    let userInputValue = event.currentTarget.value;
    console.log(userInputValue.length);
    console.log(Number(userInput.dataset['length']));
    
    if (userInputValue.length === Number(userInput.dataset['length'])) {
        userInput.classList.add('valid');
    } else {
       userInput.classList.add('invalid'); 
    }
    if (!(userInputValue.length)) {
        userInput.classList.remove('valid', 'invalid');
    }
}