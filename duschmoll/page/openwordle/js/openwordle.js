const keyboardKeyPos = new Array('rowOneLetterOne', 'rowOneLetterTwo', 'rowOneLetterThree', 'rowOneLetterFour', 'rowOneLetterFive');
let keyPos = 0;
let answer = 'WORDS';

//Listening to the keyboard input
document.addEventListener('keydown', function (event) {

    if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos < 5) { //Checking the input is key a of the alphabet.
        document.getElementById(keyboardKeyPos[keyPos]).innerHTML = event.key.toUpperCase(); //Putting the user letter into his box pos.
        keyPos++; //Passing to the next box pos.
    } else if (event.key.match('Backspace') && keyPos > 0) { //Checking the input is Backspace.
        document.getElementById(keyboardKeyPos[keyPos - 1]).innerHTML = ''; // Removing a user letter.
        keyPos--; //Getting to the previous box pos.
    } else if (event.key.match('Enter')) { //Checking the input is Enter.

        compareAnswer();
    }
});

//Function to compare the User input with the answer.
function compareAnswer() {
    console.log(answer.includes(document.getElementById(keyboardKeyPos[1]).innerHTML) === true);
    let userAnswer = ''
    for (let k = 0; k < keyboardKeyPos.length; k++) { //Loop to check all the letters to the answer letters.
        elem = document.getElementById(keyboardKeyPos[k]);
        userAnswer += elem.innerHTML;
        if (elem.innerHTML === answer[k]) { //Checking if the userAnswer[x] is equal the answer[x]. 
            elem.setAttribute('Class', 'letterRight');
        } else if (answer.includes(elem.innerHTML) === true) { //Checking if the userAnswer[x] is somewhere in the answer[x].
            elem.setAttribute('Class', 'letterWrongPlace');
        }
        if (userAnswer === answer) {

        }
    }
}