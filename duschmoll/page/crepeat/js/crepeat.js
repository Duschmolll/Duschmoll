//Declaring the var for the inputIDs
let inputID = new Array();
inputID.push("answer") //adding the button for the answers.

//Function to randomize
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//Shuffeling all the ingredients.
for (let k = 0; k < category.length; k++) {
    shuffle(category[k].value);
}

//Shuffeling the order of galette.
shuffle(galettesList.value);

//Ordering by alphabetical order the galette ingredients.
for (let k = 0; k < galettesList.value.length; k++) {
    galettesList.value[k].value.sort();
}

let galettesToFind = 0; //initiate the order of galette to find.
let galettesFound = 0; //count the number of good answer.
let answerWasShowed = 0; //initiate if the answer was showed.
let ingredientMismatch = 0; //initiate if the answer was found with a mistake.
let userAnswer = new Array() //initiate his input.

window.addEventListener("load", loadingGame()); window.addEventListener("load", startTheGame());

function startTheGame() { //Launch the first galettes to find.

    document.getElementById("findLength").value = galettesList.value[galettesToFind].value.length + ' ingredients';

    for (x = 0; x < galettesList.value.length; x++) { // Setting-up the initial position of the galettes to find.

        const elem = document.getElementById(galettesList.value[x].id);
        elem.style.zIndex = (galettesList.value.length + 2) - x; //Their z-index by their order of guess.

    }
}

function galettesToFindSelector() { //Pass to the next galettes when the answer is found.
    galettesFound++
    resetButtons()
    elem = document.getElementById("findLength")
    if (galettesFound < galettesList.value.length) {
        galettesToFind++
        elem.value = galettesList.value[galettesToFind].value.length + ' ingredients' //Showing the number of ingredient needed.
    } else {
        elem.value = 'Well Done' // Saying GJ when all the ingredient are found.
        document.getElementById("answer").value = "Restart" // Setting up the restart button at the end.
    }
}

function resetButtons() { //Reset buttons to the unselected state.
    for (let k = 0; k < inputID.length; k++) {
        document.getElementById(inputID[k]).setAttribute("class", "foodTypeUnselected");
    }

    userAnswer.splice(0, userAnswer.length) //Resetting the Answer of the user
    document.getElementById("answer").value = "Show Answer" // Setting up the restart button at the end.
    answerWasShowed = 0;
    ingredientMismatch = 0;

}

function btnclick(btn) { //Function on click of the button.

    btn.class = btn.className

    if (btn.class == "foodTypeUnselected") { //if the button is unselected before he click.
        btn.setAttribute("class", "foodTypeSelected"); //Showing the button as selected.
        addChoice(btn.id);
        compareUserToGalettes();
        return false;
    }
    if (btn.class == "foodTypeUnselectedMistake") { //if the button is unselected before he click.
        btn.setAttribute("class", "foodTypeSelectedMistake"); //Showing the button as selected.
        addChoice(btn.id);
        compareUserToGalettes();
        return false;
    }
    if (btn.class == "foodTypeAnswer") { //if the button is a clue before he click.
        btn.setAttribute("class", "foodTypeSelectedAnswer"); //Showing the button as selected with an hint.
        addChoice(btn.id);
        compareUserToGalettes();
        return false;

    }
    if (btn.class == "foodTypeSelected") { //if the button is selected before he click.
        btn.setAttribute("class", "foodTypeUnselected"); //Showing the button as unselected.
        removeChoice(btn.id);
        compareUserToGalettes();
        return false;

    }
    if (btn.class == "foodTypeSelectedMistake") { //if the button is selected before he click.
        btn.setAttribute("class", "foodTypeUnselectedMistake"); //Showing the button as unselected.
        removeChoice(btn.id);
        compareUserToGalettes();
        return false;

    }
    if (document.getElementById('answer').value == 'Hide Answer' || btn.class == "foodTypeSelectedAnswer") { //if the answers are shown and the button is selected before he click.
        btn.setAttribute("class", "foodTypeAnswer"); //Showing the button as unselected with an hint.
        removeChoice(btn.id);
        compareUserToGalettes();
        return false;

    }
}

function answerclick(btn) { // Show the solution to the galette.

    btn.class = btn.className
    answerWasShowed = 1

    if (btn.class == "foodTypeUnselected" && galettesFound < galettesList.value.length) { //if the button is unselected before he click.
        btn.setAttribute("class", "foodTypeSelected"); //Showing the answer button as selected.

        for (k = 0; k < galettesList.value[galettesToFind].value.length; k++) {

            elem = document.getElementById(galettesList.value[galettesToFind].value[k])

            if (elem.className == 'foodTypeUnselected') {
                elem.setAttribute("class", "foodTypeAnswer"); //Showing the ingredient button as hinted and unselected.
            } else {
                elem.setAttribute("class", "foodTypeSelectedAnswer"); //Showing the ingredient button as hinted and selected.
            }
        }
        document.getElementById("answer").value = 'Hide Anwser' //Changing the value of the answer button.
        return false;
    }

    if (btn.class == "foodTypeSelected" && galettesFound < galettesList.value.length) { //if the button is selected before he click.
        btn.setAttribute("class", "foodTypeUnselected"); //Showing the answer button as unselected.

        for (k = 0; k < galettesList.value[galettesToFind].value.length; k++) {

            elem = document.getElementById(galettesList.value[galettesToFind].value[k]);

            if (elem.className == 'foodTypeSelectedAnswer') {
                elem.setAttribute("class", "foodTypeSelected"); //Showing the ingredient button as selected.
            } else {
                elem.setAttribute("class", "foodTypeUnselected"); //Showing the ingredient button as unselected.
            }
        }
        document.getElementById("answer").value = "Show Answer" //Changing the value of the answer button.
        return false;

    }

    if (galettesFound >= galettesList.value.length) {
        restartGame();
        return false;
    }
}

function addChoice(buttonValue) { // Add a user choice to his UserAnswer.
    userAnswer.push(buttonValue);
    userAnswer.sort();
}

function removeChoice(buttonValue) { // Remove a user choice to his UserAnswer.

    userAnswer.forEach(removeAnswer); //Calling all index & items to remove the ingredient he unselected.

    function removeAnswer(item, index) { //Removing the item he unselected.
        if (item == buttonValue) {
            userAnswer.splice(index, 1);
        }
    }
}

function compareUserToGalettes() { //Compare the User Input with the Galettes to Find.
    if (answerWasShowed == 0 || ingredientMismatch == 1) {
        for (k = 0; k < userAnswer.length; k++) {
            if (galettesList.value[galettesToFind].value.toString().search(userAnswer[k]) === -1) {
                ingredientMismatch = 1;
            }
        }
    }
    if (userAnswer.toString() == galettesList.value[galettesToFind].value.toString()) {

        elem = document.getElementById(galettesList.value[galettesToFind].id)

        if (answerWasShowed == 1) {
            elem.setAttribute("class", "galettesAnswerShowed"); //Showing the galettes with the use of the answer.
        } else if (ingredientMismatch == 1) {
            elem.setAttribute("class", "galettesMistake"); //Showing the galettes with a mistake.
        } else {
            elem.setAttribute("class", "galettesFound"); //Showing the galettes as found.
        }
        moveAnswer(galettesList.value[galettesToFind].id);
        galettesToFindSelector();
    } else if (userAnswer.length >= galettesList.value[galettesToFind].value.length) {
        //Showing the wrong ingredients selected if all the number of ingr selected = the number of ing needed for the galette.
        for (k = 0; k < userAnswer.length; k++) {
            if (galettesList.value[galettesToFind].value.toString().search(userAnswer[k]) === -1) {
                document.getElementById(userAnswer[k]).setAttribute("class", "foodTypeSelectedMistake")
            }
        }

    } else { }
}


//Creating the buttons for each ingredients and their sections.

function loadingGame() {
    const locationOfTheButtons = document.getElementById('left-tab'); //Getting where to put the whole section.

    for (k = 0; k < category.length; k++) { //Loop for all the category name.

        //Creating the section for the category name.
        let sectionOfCategory = document.createElement('section');
        sectionOfCategory.classList.add('centertest');
        sectionOfCategory.id = category[k].id;
        locationOfTheButtons.appendChild(sectionOfCategory);

        //Creating the Title of the category.
        let hfour = document.createElement('h4');
        hfour.classList.add('categorieTitle');
        hfour.id = 'center';
        hfour.innerHTML = category[k].name;
        sectionOfCategory.appendChild(hfour);

        //Creating the section for the ingredients buttons.
        let sectionOfIngredient = document.createElement('section');
        sectionOfIngredient.id = 'center-button';
        sectionOfCategory.appendChild(sectionOfIngredient);

        for (x = 0; x < (category[k].value).length; x++) { //Loops for all the buttons.

            //Creating the button element of the ingredient.
            let buttonOfIngredient = document.createElement('button');
            buttonOfIngredient.classList.add('foodTypeUnselected');
            buttonOfIngredient.value = (category[k].value)[x].value;
            buttonOfIngredient.setAttribute('onclick', 'btnclick(this)');
            buttonOfIngredient.id = (category[k].value)[x].id;
            sectionOfIngredient.appendChild(buttonOfIngredient);

            //Adding the name to the button.
            let divOfIngredientName = document.createElement('div')
            divOfIngredientName.id = 'button-desc';
            divOfIngredientName.innerHTML = (category[k].value)[x].name;
            buttonOfIngredient.appendChild(divOfIngredientName);

            //Adding the icon to the button.
            let imgOfIngredient = document.createElement('img');
            imgOfIngredient.id = 'button-icon';
            imgOfIngredient.src = (category[k].value)[x].icon;
            buttonOfIngredient.appendChild(imgOfIngredient);

            //Getting all the id for each buttons.
            inputID.push((category[k].value)[x].id);
        }
    }

    let AnswerLocation = document.getElementById('answer');
    locationOfTheButtons.appendChild(AnswerLocation);

    //Creating the finding names divs.
    divOfFindingParent = document.getElementById('won');

    for (k = 0; k < galettesList.value.length; k++) {
        divOfFinding = document.createElement('div')
        divOfFinding.classList.add('galettesToFind');
        divOfFinding.id = galettesList.value[k].id;
        divOfFinding.innerHTML = galettesList.value[k].name;
        divOfFindingParent.appendChild(divOfFinding);
    }

    //Creating the found divs.
    divOfFoundParent = document.getElementById('right-tab');

    for (k = (galettesList.value.length - 1); k >= 0; k--) {
        divOfFound = document.createElement('div')
        divOfFound.classList.add('galettesToFindGrey');
        divOfFound.id = (galettesList.value[(k)].id) + "S";
        if (k < 9) {
            divOfFound.innerHTML = " -- 0" + (k + 1) + " -- ";
        }
        else {
            divOfFound.innerHTML = " -- " + (k + 1) + " -- ";
        }
        divOfFoundParent.appendChild(divOfFound);
    }
}

function moveAnswer(idAnswer) { //Function to move the galette found to the right.

    let elem = $('#' + idAnswer + 'S').position();
    let x = elem.left; //getting the x of the galette found.
    let y = elem.top; //getting the y of the galette found.

    $('#' + idAnswer).animate({ left: x }, { duration: 2500 }); //Moving the answer to the position in a x axe.
    $('#' + idAnswer).animate({ top: y }, { //Moving the answer to the position in a y axe.
        duration: 2500, done: function () { //Locking the galette into the div.
            elem = document.getElementById(idAnswer);
            target = document.getElementById(idAnswer + 'S');
            elem.style.left = 'auto';
            elem.style.top = 'auto';
            elem.style.position = 'static';
            target.innerHTML = '';
            target.appendChild(elem);
        }
    });

}

//Making the credit section:
$("#creditContent").hide(1); //Hidding the content of the credits section.
//Creating the credits divs.
for (let k = 0; k < category.length; k++) {
    let targetOfCredit = document.getElementById('centerCredit');
    let divOfCreditCategory = document.createElement('div');
    divOfCreditCategory.style.paddingLeft = '10px';
    targetOfCredit.appendChild(divOfCreditCategory);

    for (let i = 0; i < category[k].value.length; i++) {
        let divOfCredit = document.createElement('div');
        let imgOfIngredient = document.createElement('img');
        imgOfIngredient.src = category[k].value[i].icon;
        imgOfIngredient.style.width = '20px';
        let descOfIngredient = document.createElement('a');
        descOfIngredient.href = category[k].value[i].source;
        descOfIngredient.innerHTML = category[k].value[i].desc;

        divOfCreditCategory.appendChild(divOfCredit);
        divOfCredit.appendChild(imgOfIngredient);
        divOfCredit.appendChild(descOfIngredient);

    }
}

function credit() {
    if ($("#creditContent").first().is(":hidden")) {
        $("#creditContent").slideDown();
    } else {
        $("#creditContent").slideUp();
    }
}

function restartGame() {
    //Reseting the variables to 0.
    galettesToFind = 0; //initiate the order of galette to find.
    galettesFound = 0; //count the number of good answer.
    answerWasShowed = 0; //initiate if the answer was showed.
    ingredientMismatch = 0; //initiate if the answer was found with a mistake.
    userAnswer = new Array() //initiate his input.

    //Deleting the ingredients.
    for (k = 0; k < category.length; k++) {
        let divToDelete = document.getElementById(category[k].id);
        divToDelete.parentNode.removeChild(divToDelete);
    }

    //Deleting the galettes to find.
    for (k = 0; k < galettesList.value.length; k++) {
        let divToDelete = document.getElementById(galettesList.value[k].id);
        divToDelete.parentNode.removeChild(divToDelete);
        $('#' + galettesList.value[k].id).stop() //Stopping the animation. 
        $('#' + galettesList.value[k].id).stop() //Stopping the animation. 
    }

    //Deleting the galettes found final location.
    for (k = (galettesList.value.length - 1); k >= 0; k--) {
        let divToDelete = document.getElementById((galettesList.value[(k)].id) + "S");
        divToDelete.parentNode.removeChild(divToDelete);
    }

    //Shuffeling all the ingredients.
    for (let k = 0; k < category.length; k++) {
        shuffle(category[k].value);
    }
    //Shuffeling the order of galette.
    shuffle(galettesList.value);

    //Restarting the game.
    loadingGame();
    startTheGame();
}

