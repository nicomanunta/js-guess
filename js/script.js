let easyButton = document.getElementById('easyButton');
let mediumButton = document.getElementById('mediumButton');
let hardButton = document.getElementById('hardButton');
let randomNumberDisplay = document.getElementById('randomNumber');
let difficultyButton = document.getElementById('difficultyButton');
let inputNumber = document.getElementById('inputNumber');
let messageResult = document.getElementById('result');
let attempts = document.getElementById('attempts');
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
            messageResult.innerText = 'Indovinato!';
            messageResult.style.color = '#7ED321'
            randomNumberDisplay.style.filter = 'blur(0px)';
            messageResult.style.animation = 'bounce 2s infinite';
        } else if (userNumber > randomNumber){
            if (userNumber > randomNumber + 100) {
                messageResult.innerText = "Sei lontano, più piccolo!";
                messageResult.style.color = '#D0021B'
            } else if (userNumber > randomNumber + 20) {
                messageResult.innerText = "Più piccolo!";
                messageResult.style.color = '#f8831c'
            } else {
                messageResult.innerText = "Ci sei quasi, un po' più piccolo!";
                messageResult.style.color = '#F8D31C'
            }
        } else if (userNumber < randomNumber){
            if (userNumber < randomNumber - 100) {
                messageResult.innerText = "Sei lontano, più grande!";
                messageResult.style.color = '#D0021B'
            } else if (userNumber < randomNumber - 20) {
                messageResult.innerText = "Più grande!";
                messageResult.style.color = '#f8831c'
            } else {
                messageResult.innerText = "Ci sei quasi, un po' più grande!";
                messageResult.style.color = '#F8D31C'
            }
        }
    }
});

// aggiungo bottone reset
resetButton.addEventListener('click', () => {
    randomNumberDisplay.innerText = ' ';
    difficultyButton.style.display = 'inline-block';
    inputNumber.style.display = 'none';
    messageResult.innerText = '';
    randomNumberDisplay.style.filter = 'blur(20px)';
    messageResult.style.animation = 'none';
    
    
});
