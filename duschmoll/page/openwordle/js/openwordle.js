let keyPos = 1;
let rowPos = 0;

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let wordTodayNumber = Math.round((cDay * cMonth * cYear) / 1000);

let wordNumber = 0;
let n = 0;
let wordList = null;
let answer = null;
//Fecthing the wordlist.
fetch("js/wordList.json")
    .then(response => response.json())
    .then(data => {
        wordList = data;
        startGame();
    });
;

//Function to start the game, called after the words are loaded.
function startGame() {
    while (n < wordTodayNumber) {
        n++;
        wordNumber++;
        if (wordNumber > wordList.length) {
            wordNumber = 0;
        };
        console.log(wordNumber);
    };
    console.log(wordList);
    // let wordNumber = Math.floor(Math.random() * 10);
    answer = wordList[wordNumber];

    //Creating the letter of the word.
    const parentOfLetters = document.getElementById('letterGrid');
    for (let x = 0; x < 6; x++) {
        let sectionOfRow = document.createElement('section');
        sectionOfRow.id = 'userInput';
        parentOfLetters.appendChild(sectionOfRow);
        for (let k = 0; k < answer.length; k++) {
            let divOfLetter = document.createElement('div');
            divOfLetter.id = 'row' + x + 'Letter' + k;
            divOfLetter.classList.add('letterClear');
            sectionOfRow.appendChild(divOfLetter);
        };
    };

    //Loop to launch put the first letter of the word to find at each row.
    for (let k = 0; k < 6; k++) {
        document.getElementById('row' + k + 'Letter0').innerHTML = answer[0].toUpperCase(); //Putting the user letter into his box pos.
    }
};

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

    if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos < 5) { //Checking the input is key a of the alphabet.
        document.getElementById('row' + rowPos + 'Letter' + keyPos).innerHTML = event.key.toUpperCase(); //Putting the user letter into his box pos.
        keyPos++; //Passing to the next box pos.
    } else if (event.key.match('Backspace') && keyPos > 1) { //Checking the input is Backspace.
        document.getElementById('row' + rowPos + 'Letter' + (keyPos - 1)).innerHTML = ''; // Removing a user letter.
        keyPos--; //Getting to the previous box pos.
    } else if (event.key.match('Enter') && keyPos == answer.length) { //Checking the input is Enter and that the user as entered a long enough word.
        compareAnswer();
        keyPos = 1;
        rowPos++;
    }
}

//Function to compare the User input with the answer.
function compareAnswer() {
    let userAnswer = ''
    for (let k = 0; k < answer.length; k++) { //Loop to check all the letters to the answer letters.
        elem = document.getElementById('row' + rowPos + 'Letter' + k);
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

