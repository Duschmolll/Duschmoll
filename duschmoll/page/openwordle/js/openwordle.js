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
let wordListRefined = null;
let wordToFind = null;
let wordToFindObject = {};
let wordUserGuessed = '';
let wordUserGuessedObject = {};
let keyPressedTwice = false;

//Fecthing the wordlist.
fetch("js/index.json")
    .then(response => response.json())
    .then(data => {
        wordList = data;
        refiningWordList();
    });
;

//Function to refine the wordlist.
function refiningWordList() {
    //Settings for refining the word list.
    wordListRefined = wordList.filter(el => {
        return (
            el != null
            && el != ''
            && el.startsWith("w") === false
            && el.length >= 6 && el.length < 9
            && el.includes('-') === false
        );
    });

    //Replacing the special character by some normal letters.
    for (let k = 0; k < wordListRefined.length; k++) {
        wordListRefined[k] = wordListRefined[k].replace(/['é','è','ê','ë']/g, 'e');
        wordListRefined[k] = wordListRefined[k].replace(/['à','â']/g, 'a');
        wordListRefined[k] = wordListRefined[k].replace(/['ô','ö']/g, 'o');
        wordListRefined[k] = wordListRefined[k].replace(/['î','ï']/g, 'i');
        wordListRefined[k] = wordListRefined[k].replace(/['ÿ']/g, 'y');
        wordListRefined[k] = wordListRefined[k].replace(/['ç']/g, 'c');
        wordListRefined[k] = wordListRefined[k].replace(/['ü','ù','û']/g, 'u');
    }

    startGame();
}

//Function to start the game, called after the words are loaded.
function startGame() {

    while (n < wordTodayNumber) {
        n++;
        wordNumber++;
        if (wordNumber > wordListRefined.length) {
            wordNumber = 0;
        };
    };

    //Picking the word to find.
    wordNumber = Math.floor(Math.random() * wordListRefined.length);
    wordToFind = wordListRefined[wordNumber].toLowerCase();

    //Creating the letter of the word.
    const parentOfLetters = document.getElementById('letterGrid');
    for (let x = 0; x < 6; x++) {
        let sectionOfRow = document.createElement('section');
        sectionOfRow.id = 'wordRow';
        parentOfLetters.appendChild(sectionOfRow);
        for (let k = 0; k < wordToFind.length; k++) {
            let divOfLetter = document.createElement('div');
            divOfLetter.id = 'row' + x + 'Letter' + k;
            divOfLetter.classList.add('letterClear');
            sectionOfRow.appendChild(divOfLetter);
        };
    };

    virtualKeyboardCreation();

    //Loop to launch put the first letter of the word to find at each row.
    for (let k = 0; k < 6; k++) {
        document.getElementById('row' + k + 'Letter0').innerHTML = wordToFind[0].toUpperCase(); //Putting the user letter into his box pos.
        document.getElementById('row' + k + 'Letter0').className = "letterPending"; //Changing the class to pending.
    }

    //Setting up the first letter into the user guessed input.
    wordUserGuessed = wordToFind[0];

    //Changing the keyboard letter of the first later being already found.
    document.getElementById(wordToFind[0]).setAttribute('Class', 'keyboardLetterRight');//Changing the color of the keyboard letter.

};

//Listening to the keyboard input & calling the function to check the input.
const keyCheckConst = (event) => { keyCheck(event) };
document.addEventListener('keydown', keyCheckConst);

//Creating the virtual keyboard.
function virtualKeyboardCreation() {
    const parentOfKeyboard = document.getElementById('keyboard');
    const azerty = "azertyuiopqsdfghjklmwxcvbn"
    const qwerty = "qwertyuiopasdfghjklzxcvbnm"
    for (let x = 0; x < 3; x++) {
        switch (x) {
            case 0:
                let sectionOfRow0 = document.createElement('section');
                sectionOfRow0.id = 'row' + x;
                parentOfKeyboard.appendChild(sectionOfRow0);
                for (let k = 0; k < 10; k++) {
                    let divOfKey = document.createElement('div');
                    divOfKey.id = azerty[k];
                    divOfKey.classList.add('keyboardLetter');
                    divOfKey.innerHTML = azerty[k].toUpperCase()
                    divOfKey.setAttribute('onclick', 'virtualKeyboard(this)');
                    sectionOfRow0.appendChild(divOfKey);
                };
                break;
            case 1:
                let sectionOfRow1 = document.createElement('section');
                sectionOfRow1.id = 'row' + x;
                parentOfKeyboard.appendChild(sectionOfRow1);
                for (let k = 10; k < 20; k++) {
                    let divOfKey = document.createElement('div');
                    divOfKey.id = azerty[k];
                    divOfKey.classList.add('keyboardLetter');
                    divOfKey.innerHTML = azerty[k].toUpperCase()
                    divOfKey.setAttribute('onclick', 'virtualKeyboard(this)');
                    sectionOfRow1.appendChild(divOfKey);
                };
                break;
            case 2:
                let sectionOfRow2 = document.createElement('section');
                sectionOfRow2.id = 'row' + x;
                parentOfKeyboard.appendChild(sectionOfRow2);

                for (let k = 20; k < azerty.length; k++) {
                    let divOfKey = document.createElement('div');
                    divOfKey.id = azerty[k];
                    divOfKey.classList.add('keyboardLetter');
                    divOfKey.innerHTML = azerty[k].toUpperCase()
                    divOfKey.setAttribute('onclick', 'virtualKeyboard(this)');
                    sectionOfRow2.appendChild(divOfKey);
                };
                let divOfKeySpecial1 = document.createElement('div');
                divOfKeySpecial1.id = 'Backspace';
                divOfKeySpecial1.classList.add('keyboardSpecialKeyBackspace');
                divOfKeySpecial1.innerHTML = 'DEL'
                divOfKeySpecial1.setAttribute('onclick', 'virtualKeyboard(this)');
                sectionOfRow2.appendChild(divOfKeySpecial1);
                let divOfKeySpecial0 = document.createElement('div');
                divOfKeySpecial0.id = 'Enter';
                divOfKeySpecial0.classList.add('keyboardSpecialKeyEnter');
                divOfKeySpecial0.innerHTML = 'ENTER'
                divOfKeySpecial0.setAttribute('onclick', 'virtualKeyboard(this)');
                sectionOfRow2.appendChild(divOfKeySpecial0);
                break;
        };
    };
};

//Listening to the virtual keyboard input & calling the function to check the input.
function virtualKeyboard(event) {
    event.key = event.id;
    keyCheck(event);
};

//Function to check the user key pressed.
function keyCheck(event) {
    console.log(event.key)
    //Checking the input is key a of the alphabet.
    if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos === 1 && wordToFind[0].includes(event.key) === true && keyPressedTwice == false) { //Skipping the first letter is identical.
        keyPressedTwice = true; //Setting up the skip of the if the letter start with a double letter.
    }
    else if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos < wordToFind.length) {
        document.getElementById('row' + rowPos + 'Letter' + keyPos).innerHTML = event.key.toUpperCase(); //Putting the user letter into his box pos.
        document.getElementById('row' + rowPos + 'Letter' + keyPos).className = "letterPending"; //Changing the class to pending.
        keyPressedTwice = false; //Resetting the skip of the double letter
        wordUserGuessed += event.key; //Adding the input into the User Guess.
        keyPos++; //Passing to the next box pos.
    } else if (event.key.match('Backspace') && keyPos > 1) { //Checking the input is Backspace.
        document.getElementById('row' + rowPos + 'Letter' + (keyPos - 1)).innerHTML = ''; // Removing a user letter.
        document.getElementById('row' + rowPos + 'Letter' + (keyPos - 1)).className = "letterClear"; //Changing the class to pending.
        wordUserGuessed = wordUserGuessed.slice(0, wordUserGuessed.length - 1); //Removing the input into the user Guess.

        keyPos--; //Getting to the previous box pos.
    } else if (event.key.match('Enter') && keyPos == wordToFind.length) { //Checking the input is Enter and that the user as entered a long enough word.
        if (wordListRefined.includes(wordUserGuessed) === true) {
            compareAnswerTest();
        } else {
            alert('Ce mot n\'est pas présent dans le dictionnaire.')
        }

    }
}

//Function to compare the User guess to the word to find.
function compareAnswerTest() {
    //Making the word to find into a decomposed object.
    for (let k = 0; k < wordToFind.length; k++) {
        wordToFindObject['letter' + k] = {};
        wordToFindObject['letter' + k]['letter'] = wordToFind[k];
        wordToFindObject['letter' + k]['found'] = false;

    }

    //Making the user guess word into a decomposed object.
    for (let k = 0; k < wordUserGuessed.length; k++) {
        wordUserGuessedObject['letter' + k] = {};
        wordUserGuessedObject['letter' + k]['letter'] = wordUserGuessed[k];
        wordUserGuessedObject['letter' + k]['checked'] = false;

    }

    // if the letter is right.
    for (let k = 0; k < wordUserGuessed.length; k++) {
        if (wordToFindObject['letter' + k]['letter'] === wordUserGuessedObject['letter' + k]['letter']
            && wordUserGuessedObject['letter' + k]['checked'] === false) {
            wordToFindObject['letter' + k]['found'] = true; //Making the letter of the word as found.
            wordUserGuessedObject['letter' + k]['checked'] = true; //Making the letter of the user as checked.
            document.getElementById('row' + rowPos + 'Letter' + k).setAttribute('Class', 'letterRight'); //Changing the color of the letter.
            document.getElementById(wordUserGuessedObject['letter' + k]['letter']).setAttribute('Class', 'keyboardLetterRight');//Changing the color of the keyboard letter.
        }
    }

    // if the letter is placed wrongly.
    for (let k = 0; k < wordUserGuessed.length; k++) {
        for (let x = 0; x < wordUserGuessed.length; x++) {
            if (wordToFindObject['letter' + x]['letter'] === wordUserGuessedObject['letter' + k]['letter'] //check if the letter = the letter of the wordToFind.
                && wordToFindObject['letter' + x]['found'] === false //check if the letter is not already found.
                && wordUserGuessedObject['letter' + k]['checked'] === false) { //check if the letter of the user is not already found.
                wordUserGuessedObject['letter' + k]['checked'] = true; //Making the letter of the user as checked.
                wordToFindObject['letter' + x]['found'] = true; //Making the letter of the word as found.
                document.getElementById('row' + rowPos + 'Letter' + k).setAttribute('Class', 'letterWrongPlace');//Changing the color of the letter.
                document.getElementById(wordUserGuessedObject['letter' + k]['letter']).setAttribute('Class', 'keyboardLetterWrongPlace');//Changing the color of the keyboard letter.
            }
        }
    }

    //if the letter is not present.
    for (let k = 0; k < wordUserGuessed.length; k++) {
        if (wordUserGuessedObject['letter' + k]['checked'] === false) {
            wordUserGuessedObject['letter' + k]['checked'] = true;
            document.getElementById('row' + rowPos + 'Letter' + k).setAttribute('Class', 'letterNotPresent');//Changing the color of the letter.
        }
    }
    for (let k = 0; k < wordUserGuessed.length; k++) {
        if (wordToFind.includes(wordUserGuessedObject['letter' + k]['letter']) === false) {
            document.getElementById(wordUserGuessedObject['letter' + k]['letter']).setAttribute('Class', 'keyboardLetterNotPresent');//Changing the color of the keyboard letter.
        }
    }
    keyPos = 1;
    rowPos++;
    //Removing the event to listen to the keys.
    if (wordUserGuessed === wordToFind) {
        document.removeEventListener('keydown', keyCheckConst);
        alert('Bravo !');
    };
    if (wordUserGuessed !== wordToFind && rowPos === 6) {
        document.removeEventListener('keydown', keyCheckConst);
        alert('Le mot à trouver été : ' + wordToFind);
    };
    wordUserGuessed = wordToFind[0];
}


