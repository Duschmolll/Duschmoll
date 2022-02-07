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
let answer = null;
let word = {};
let test = "blere";
let userAnswer = '';
let wordUser = {};
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
    wordListRefined = wordList.filter(el => {
        return (
            el != null
            && el != ''
            && el.startsWith("w") === false
            && el.length >= 6 && el.length < 7
            && el.includes('-') === false
        );
    });
    for (let k = 0; k < wordListRefined.length; k++) {
        wordListRefined[k] = wordListRefined[k].replace(/['é','è','ê','ë']/g, 'e');
        wordListRefined[k] = wordListRefined[k].replace(/['à','â']/g, 'a');
        wordListRefined[k] = wordListRefined[k].replace(/['ô','ö']/g, 'o');
        wordListRefined[k] = wordListRefined[k].replace(/['î','ï']/g, 'i');
        wordListRefined[k] = wordListRefined[k].replace(/['ÿ']/g, 'y');
        wordListRefined[k] = wordListRefined[k].replace(/['ç']/g, 'c');
        wordListRefined[k] = wordListRefined[k].replace(/['ü','ù','û']/g, 'u');
    }
    console.log('Wordlist :')
    console.log(wordList);
    console.log('Wordlist Refined:')
    console.log(wordListRefined);
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

    wordNumber = Math.floor(Math.random() * wordListRefined.length);
    answer = wordListRefined[wordNumber].toLowerCase();

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
    userAnswer = answer[0];


    for (let k = 0; k < answer.length; k++) {
        word['letter' + k] = {};
        word['letter' + k]['letter'] = answer[k];
        word['letter' + k]['number'] = 0;
        word['letter' + k]['found'] = false;

    }
    for (let k = 0; k < answer.length; k++) {
        for (let x = 0; x < answer.length; x++) {
            if (word['letter' + k]['letter'] === word['letter' + x]['letter']) {
                word['letter' + k]['number'] = (word['letter' + k]['number'] + 1);
            }
        }
    }
};



function compareAnswerTest() {
    for (let k = 0; k < userAnswer.length; k++) {
        wordUser['letter' + k] = {};
        wordUser['letter' + k]['letter'] = userAnswer[k];
        wordUser['letter' + k]['number'] = 0;
        wordUser['letter' + k]['checked'] = false;

    }
    for (let k = 0; k < userAnswer.length; k++) {
        for (let x = 0; x < userAnswer.length; x++) {
            if (wordUser['letter' + k]['letter'] === wordUser['letter' + x]['letter']) {
                wordUser['letter' + k]['number'] = (wordUser['letter' + k]['number'] + 1);
            }
        }
    }

    console.log('Compare is lauched.')
    // The letter is right.
    for (let k = 0; k < userAnswer.length; k++) {
        if (word['letter' + k]['letter'] === wordUser['letter' + k]['letter'] && wordUser['letter' + k]['checked'] === false) {
            console.log('Letter n°' + k + ' is at the right place.')
            word['letter' + k]['found'] = true;
            wordUser['letter' + k]['checked'] = true;
            document.getElementById('row' + rowPos + 'Letter' + k).setAttribute('Class', 'letterRight');
        }
    }
    // The letter is placed wrongly.
    for (let k = 0; k < userAnswer.length; k++) {
        for (let x = 0; x < userAnswer.length; x++) {
            if (word['letter' + x]['letter'] === wordUser['letter' + k]['letter'] //check if the letter = the letter of the answer.
                // && word['letter' + x]['number'] > 1 //chekc if it's a double letter
                && word['letter' + x]['found'] === false //check if the letter is not already found.
                && wordUser['letter' + k]['checked'] === false) { //check if the letter of the user is not already found.
                console.log('Letter n°' + k + ' is at the wrong place and is the second or more letter of the same type.')
                wordUser['letter' + k]['checked'] = true;
                document.getElementById('row' + rowPos + 'Letter' + k).setAttribute('Class', 'letterWrongPlace');

            }
        }
    }
    //The letter is not present.
    for (let k = 0; k < userAnswer.length; k++) {
        if (wordUser['letter' + k]['checked'] === false) {
            console.log('Letter n°' + k + ' is not present in the word.')
            wordUser['letter' + k]['checked'] = true;
        }
    }
    // let testplusplus = 0
    // for (let k = 0; k < userAnswer.length; k++) {
    //     if (word['letter' + k]['letter'] === 'e') {
    //         testplusplus++;
    //     }
    // }
    // console.log(testplusplus)

    // function count(str, find) {
    //     return (str.split(find)).length - 1;
    // }

    // count(answer, "e"); // 2

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

    if (event.key.match(/[a-z]/) && event.key.length === 1 && keyPos < answer.length) { //Checking the input is key a of the alphabet.
        document.getElementById('row' + rowPos + 'Letter' + keyPos).innerHTML = event.key.toUpperCase(); //Putting the user letter into his box pos.
        userAnswer += event.key;
        keyPos++; //Passing to the next box pos.
        console.log(userAnswer)
    } else if (event.key.match('Backspace') && keyPos > 1) { //Checking the input is Backspace.
        document.getElementById('row' + rowPos + 'Letter' + (keyPos - 1)).innerHTML = ''; // Removing a user letter.
        userAnswer = userAnswer.slice(0, userAnswer.length - 1);
        keyPos--; //Getting to the previous box pos.
        console.log(userAnswer)
    } else if (event.key.match('Enter') && keyPos == answer.length) { //Checking the input is Enter and that the user as entered a long enough word.
        if (wordListRefined.includes(userAnswer) === true) {
            compareAnswerTest();
            keyPos = 1;
            rowPos++;
            userAnswer = answer[0];
        } else {
            alert('Ce mot n\'est pas présent dans le dictionnaire.')
        }

    }
}

// //Function to compare the User input with the answer.
// function compareAnswer() {
//     for (let k = 0; k < answer.length; k++) { //Loop to check all the letters to the answer letters.

//         elem = document.getElementById('row' + rowPos + 'Letter' + k);
//         // userAnswer += elem.innerHTML;
//         if (elem.innerHTML.toLowerCase() === answer[k]) { //Checking if the userAnswer[x] is equal the answer[x].
//             console.log('Letter is right place')
//             elem.setAttribute('Class', 'letterRight');
//         } else if (answer.includes(elem.innerHTML.toLowerCase()) === true) { //Checking if the userAnswer[x] is somewhere in the answer[x].
//             console.log('Letter is there but not place')
//             elem.setAttribute('Class', 'letterWrongPlace');
//         };
//         if (userAnswer.toLowerCase() === answer || rowPos === 6) { //Removing the event to listen to the keys
//             document.removeEventListener('keydown', keyCheckConst);
//         };
//     };
// };


