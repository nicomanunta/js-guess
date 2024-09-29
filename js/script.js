let easyButton = document.getElementById('easyButton');
let mediumButton = document.getElementById('mediumButton');
let hardButton = document.getElementById('hardButton');
let randomNumberDisplay = document.getElementById('randomNumber');
let difficultyButton = document.getElementById('difficultyButton');
let inputNumber = document.getElementById('inputNumber');
let messageResult = document.getElementById('result');
let randomNumber;

easyButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random () * 10) + 1;
    randomNumberDisplay.innerText = randomNumber;
    difficultyButton.style.display = 'none';
    inputNumber.style.display = 'inline-block';
});
mediumButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random () * 100) + 1;
    randomNumberDisplay.innerText = randomNumber;
    difficultyButton.style.display = 'none';
    inputNumber.style.display = 'inline-block';
});
hardButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random () * 1000) + 1;
    randomNumberDisplay.innerText = randomNumber; 
    difficultyButton.style.display = 'none';
    inputNumber.style.display = 'inline-block';
});

inputNumber.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {

        let userNumber = parseInt(inputNumber.value);

        if (userNumber === randomNumber) {
            messageResult.innerText = 'Hai indovinato il numero!';
        } else if (userNumber > randomNumber){
            if (userNumber > randomNumber + 100) {
                messageResult.innerText = "Sei lontano, più piccolo!";
            } else if (userNumber > randomNumber + 20) {
                messageResult.innerText = "Più piccolo!";
            } else {
                messageResult.innerText = "Ci sei quasi, un po' più piccolo!";
            }
        } else if (userNumber < randomNumber){
            if (userNumber < randomNumber - 100) {
                messageResult.innerText = "Sei lontano, più grande!";
            } else if (userNumber < randomNumber - 20) {
                messageResult.innerText = "Più grande!";
            } else {
                messageResult.innerText = "Ci sei quasi, un po' più grande!";
            }
        }
    }
})
