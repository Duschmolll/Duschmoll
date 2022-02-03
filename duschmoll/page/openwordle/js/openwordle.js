const keyboardKeyPos = new Array(
    new Array('rowOneLetterOne', 'rowOneLetterTwo', 'rowOneLetterThree', 'rowOneLetterFour', 'rowOneLetterFive'),
    new Array('rowTwoLetterOne', 'rowTwoLetterTwo', 'rowTwoLetterThree', 'rowTwoLetterFour', 'rowTwoLetterFive'),
    new Array('rowThreeLetterOne', 'rowThreeLetterTwo', 'rowThreeLetterThree', 'rowThreeLetterFour', 'rowThreeLetterFive'),
    new Array('rowFourLetterOne', 'rowFourLetterTwo', 'rowFourLetterThree', 'rowFourLetterFour', 'rowFourLetterFive'),
    new Array('rowFiveLetterOne', 'rowFiveLetterTwo', 'rowFiveLetterThree', 'rowFiveLetterFour', 'rowFiveLetterFive'),
    new Array('rowSixLetterOne', 'rowSixLetterTwo', 'rowSixLetterThree', 'rowSixLetterFour', 'rowSixLetterFive')
);
let keyPos = 1;
let rowPos = 0;
let answer = 'WORDS';
//Loop to launch put the first letter of the word to find at each row.
for (let k = 0; k < keyboardKeyPos.length; k++) {
    document.getElementById(keyboardKeyPos[k][0]).innerHTML = answer[0].toUpperCase(); //Putting the user letter into his box pos.
}

//Listening to the keyboard input & calling the function to check the input.
const keyCheckConst = (event) => { keyCheck(event) };
document.addEventListener('keydown', keyCheckConst);

//Listening to the virtual keyboard input & calling the function to check the input.
function virtualKeybord(event) {
    event.key = event.id;
    keyCheck(event);
};

//Function to check the user key pressed.
function keyCheck(event) {
    console.log(event.key);
    if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos < 5) { //Checking the input is key a of the alphabet.
        document.getElementById(keyboardKeyPos[rowPos][keyPos]).innerHTML = event.key.toUpperCase(); //Putting the user letter into his box pos.
        keyPos++; //Passing to the next box pos.
    } else if (event.key.match('Backspace') && keyPos > 1) { //Checking the input is Backspace.
        document.getElementById(keyboardKeyPos[rowPos][keyPos - 1]).innerHTML = ''; // Removing a user letter.
        keyPos--; //Getting to the previous box pos.
    } else if (event.key.match('Enter') && keyPos == keyboardKeyPos[rowPos].length) { //Checking the input is Enter and that the user as entered a long enough word.
        compareAnswer();
        keyPos = 1;
        rowPos++;
    }
}

//Function to compare the User input with the answer.
function compareAnswer() {
    console.log(answer.includes(document.getElementById(keyboardKeyPos[rowPos][1]).innerHTML) === true);
    let userAnswer = ''
    for (let k = 0; k < keyboardKeyPos[rowPos].length; k++) { //Loop to check all the letters to the answer letters.
        elem = document.getElementById(keyboardKeyPos[rowPos][k]);
        userAnswer += elem.innerHTML;
        if (elem.innerHTML === answer[k]) { //Checking if the userAnswer[x] is equal the answer[x]. 
            elem.setAttribute('Class', 'letterRight');
        } else if (answer.includes(elem.innerHTML) === true) { //Checking if the userAnswer[x] is somewhere in the answer[x].
            elem.setAttribute('Class', 'letterWrongPlace');
        };
        if (userAnswer === answer) { //Removing the event to listen to the keys
            document.removeEventListener('keydown', keyCheckConst);
        };
    };
};

