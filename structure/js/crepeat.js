//Declaring the var for the inputIDs
let inputID = new Array();
inputID.push("answer") //adding the button for the answers.

//Setting up the object for the buttons.

//Objets for each ingredient in the categories of Viandes.
const iJambon = { id: 'iJambon', name: 'Jambon', icon: 'https://img.icons8.com/color/48/000000/jamon.png' };
const iPouletFume = { id: 'iPouletFume', name: 'Poulet Fumé', icon: 'https://img.icons8.com/color/48/000000/thanksgiving.png' };
const iOeuf = { id: 'iOeuf', name: 'Oeuf', icon: 'https://img.icons8.com/color/48/000000/egg-carton.png' };
const iThon = { id: 'iThon', name: 'Thon', icon: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/fa314a/external-salmon-alaska-icongeek26-flat-icongeek26.png' };
const iSaumonFume = { id: 'iSaumonFume', name: 'Saumon Fumé', icon: 'https://img.icons8.com/color/48/fa314a/sashimi.png' };
const iViandeHachee = { id: 'iViandeHachee', name: 'Viande hachée', icon: 'https://img.icons8.com/plasticine/100/000000/ground-beef.png' };
const iLardons = { id: 'iLardons', name: 'Lardons', icon: 'https://img.icons8.com/color/48/000000/bacon.png' };

//Objets for each ingredient in the categories of Fromages.
const iBrie = { id: 'iBrie', name: 'Brie', icon: 'https://img.icons8.com/officel/50/000000/mozzarella.png' };
const iEmmental = { id: 'iEmmental', name: 'Emmental', icon: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-cheese-diet-and-nutrition-icongeek26-linear-colour-icongeek26.png' };
const iChevre = { id: 'iChevre', name: 'Chèvre', icon: 'https://img.icons8.com/plasticine/50/000000/mozzarella.png' };
const iRaclette = { id: 'iRaclette', name: 'Raclette', icon: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cheese-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' };

//Objets for each ingredient in the categories of Condiments.
const iTomate = { id: 'iTomate', name: 'Tomate', icon: 'https://img.icons8.com/color/48/000000/tomatoes.png' };
const iEpinard = { id: 'iEpinard', name: 'Épinard', icon: 'https://img.icons8.com/color/48/000000/spinach.png' };
const iSalade = { id: 'iSalade', name: 'Salade', icon: 'https://img.icons8.com/color/48/000000/cabbage.png' };
const iAneth = { id: 'iAneth', name: 'Aneth', icon: 'https://img.icons8.com/color/48/000000/gailan.png' };
const iPatate = { id: 'iPatate', name: 'Pomme de Terre', icon: 'https://img.icons8.com/color/48/000000/vegetables-bag.png' };

//Objets for each ingredient in the categories of Sauces.
const iHuiledOlive = { id: 'iHuiledOlive', name: 'Huile d\'Olive', icon: 'https://img.icons8.com/color/48/000000/olive-oil.png' };
const iCremeFraiche = { id: 'iCremeFraiche', name: 'Crême Fraiche', icon: 'https://img.icons8.com/ultraviolet/48/000000/honey.png' };
const iSauceBurger = { id: 'iSauceBurger', name: 'Sauce Burger', icon: 'https://img.icons8.com/color/48/000000/sauce-bottle.png' };

//Objets for each ingredient in the categories of Misc.
const iNoix = { id: 'iNoix', name: 'Noix', icon: 'https://img.icons8.com/color/50/000000/pecan.png' };
const iCitron = { id: 'iCitron', name: 'Citron', icon: 'https://img.icons8.com/color/50/000000/citrus.png' };
const iMiel = { id: 'iMiel', name: 'Miel', icon: 'https://img.icons8.com/color/48/000000/honey-spoon.png' };


//Object for the each category.
const cViande = { id: 'cViande', name: 'Viandes', value: new Array(iJambon, iPouletFume, iOeuf, iThon, iSaumonFume, iViandeHachee, iLardons) };
const cFromage = { id: 'cFromage', name: 'Fromages', value: new Array(iBrie, iEmmental, iChevre, iRaclette) };
const cCondiment = { id: 'cCondiment', name: 'Condiments', value: new Array(iTomate, iEpinard, iSalade, iAneth, iPatate) };
const cSauce = { id: 'cSauce', name: 'Sauces', value: new Array(iHuiledOlive, iCremeFraiche, iSauceBurger) };
const cMisc = { id: 'cMisc', name: 'Misc', value: new Array(iNoix, iCitron, iMiel) };

//Setting up the array for all the different ingredients and categories.
const category = new Array(cViande, cFromage, cCondiment, cSauce, cMisc);

//Shuffeling all the categories ingredients.
for (let k = 0; k < category.length; k++) {
    shuffle(category[k].value);
}

// Map & Array of galettes.

const gDouble = { id: 'gDouble', name: 'La Double', value: new Array(iJambon.id, iEmmental.id) };
const gComplete = { id: 'gComplete', name: 'La Complète', value: new Array(iOeuf.id, iEmmental.id, iJambon.id) };
const gFermiere = { id: 'gFermiere', name: 'La Fermière', value: new Array(iPouletFume.id, iEmmental.id, iOeuf.id) };
const gVegetarienne = { id: 'gVegetarienne', name: 'La Végetarienne', value: new Array(iChevre.id, iSalade.id, iHuiledOlive.id, iTomate.id) };
const gTroisFromage = { id: 'gTroisFromage', name: 'La Trois Fromages', value: new Array(iBrie.id, iChevre.id, iEmmental.id) };
const gPopeye = { id: 'gPopeye', name: 'La Popeye', value: new Array(iOeuf.id, iEpinard.id, iChevre.id) };
const gThonthon = { id: 'gThonthon', name: 'La Thonthon', value: new Array(iOeuf.id, iThon.id, iEmmental.id, iCitron.id, iTomate.id) };
const gBiquette = { id: 'gBiquette', name: 'La Biquette', value: new Array(iChevre.id, iSalade.id, iNoix.id, iMiel.id) };
const gNordique = { id: 'gNordique', name: 'La Nordique', value: new Array(iSaumonFume.id, iCremeFraiche.id, iAneth.id, iCitron.id) };
const gBurger = { id: 'gBurger', name: 'La Burger', value: new Array(iViandeHachee.id, iEmmental.id, iTomate.id, iSauceBurger.id) };
const gRaclette = { id: 'gRaclette', name: 'La Raclette', value: new Array(iRaclette.id, iPatate.id, iLardons.id, iCremeFraiche.id) };

const galettesKey = { id: 'galettes', value: new Array(gDouble, gComplete, gFermiere, gVegetarienne, gTroisFromage, gPopeye, gThonthon, gBiquette, gNordique, gBurger, gRaclette) }

for (let k = 0; k < galettesKey.value.length; k++) {
    galettesKey.value[k].value.sort();
}

function shuffle(array) { //randomise the order of the galettes.
    array.sort(() => Math.random() - 0.5);
}

shuffle(galettesKey.value);

let galettesToFind = 0; //initiate the order of galette to find.
let galettesFound = 0; //count the number of good answer.
let answerWasShowed = 0; //initiate if the answer was showed.
let ingredientMismatch = 0; //initiate if the answer was found with a mistake.

document.body.setAttribute('onload', 'startTheGame()') //Setting the trigger of the function to start the game.

function startTheGame() { //Launch the first galettes to find.

    document.getElementById("findLength").value = galettesKey.value[galettesToFind].value.length + ' ingredients';

    for (x = 0; x < galettesKey.value.length; x++) { // Setting-up the initial position of the galettes to find.

        const elem = document.getElementById(galettesKey.value[x].id);
        elem.style.zIndex = (galettesKey.value.length + 2) - x; //Their z-index by their order of guess.
        elem.style.left = document.getElementById('won').offsetLeft + "px"; //Their X
        elem.style.top = document.getElementById('won').offsetTop + "px"; //Their Y
    }

}

function galettesToFindSelector() { //Pass to the next galettes when the answer is found.
    galettesFound++
    resetButtons()
    elem = document.getElementById("findLength")
    if (galettesFound < galettesKey.value.length) {
        galettesToFind++
        elem.value = galettesKey.value[galettesToFind].value.length + ' ingredients' //Showing the number of ingredient needed.
    } else {
        elem.value = 'Well Done' // Saying GJ when all the ingredient are found.
        document.getElementById("answer").value = "Restart" // Setting up the restart button at the end.
    }
}

let userAnswer = new Array() //initiate his input.

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

    if (btn.class == "foodTypeUnselected" && galettesFound < galettesKey.value.length) { //if the button is unselected before he click.
        btn.setAttribute("class", "foodTypeSelected"); //Showing the answer button as selected.

        for (k = 0; k < galettesKey.value[galettesToFind].value.length; k++) {

            elem = document.getElementById(galettesKey.value[galettesToFind].value[k])

            if (elem.className == 'foodTypeUnselected') {
                elem.setAttribute("class", "foodTypeAnswer"); //Showing the ingredient button as hinted and unselected.
            } else {
                elem.setAttribute("class", "foodTypeSelectedAnswer"); //Showing the ingredient button as hinted and selected.
            }
        }
        document.getElementById("answer").value = 'Hide Anwser' //Changing the value of the answer button.
        return false;
    }

    if (btn.class == "foodTypeSelected" && galettesFound < galettesKey.value.length) { //if the button is selected before he click.
        btn.setAttribute("class", "foodTypeUnselected"); //Showing the answer button as unselected.

        for (k = 0; k < galettesKey.value[galettesToFind].value.length; k++) {

            elem = document.getElementById(galettesKey.value[galettesToFind].value[k]);

            if (elem.className == 'foodTypeSelectedAnswer') {
                elem.setAttribute("class", "foodTypeSelected"); //Showing the ingredient button as selected.
            } else {
                elem.setAttribute("class", "foodTypeUnselected"); //Showing the ingredient button as unselected.
            }
        }
        document.getElementById("answer").value = "Show Answer" //Changing the value of the answer button.
        return false;

    }

    if (galettesFound >= galettesKey.value.length) {
        window.location.reload(true);
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
            if (galettesKey.value[galettesToFind].value.toString().search(userAnswer[k]) === -1) {
                ingredientMismatch = 1;
            }
        }
    }
    if (userAnswer.toString() == galettesKey.value[galettesToFind].value.toString()) {

        elem = document.getElementById(galettesKey.value[galettesToFind].id)

        if (answerWasShowed == 1) {
            elem.setAttribute("class", "galettesAnswerShowed"); //Showing the galettes with the use of the answer.
        } else if (ingredientMismatch == 1) {
            elem.setAttribute("class", "galettesMistake"); //Showing the galettes with a mistake.
        } else {
            elem.setAttribute("class", "galettesFound"); //Showing the galettes as found.
        }
        moveAnswer(galettesKey.value[galettesToFind].id)
        galettesToFindSelector();
    } else if (userAnswer.length >= galettesKey.value[galettesToFind].value.length) {
        //Showing the wrong ingredients selected if all the number of ingr selected = the number of ing needed for the galette.
        for (k = 0; k < userAnswer.length; k++) {
            if (galettesKey.value[galettesToFind].value.toString().search(userAnswer[k]) === -1) {
                document.getElementById(userAnswer[k]).setAttribute("class", "foodTypeSelectedMistake")
            }
        }

    } else { }
}


//Creating the buttons for each ingredients and their sections.
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

for (k = 0; k < galettesKey.value.length; k++) {
    divOfFinding = document.createElement('div')
    divOfFinding.classList.add('galettesToFind');
    divOfFinding.id = galettesKey.value[k].id;
    divOfFinding.innerHTML = galettesKey.value[k].name;
    divOfFindingParent.appendChild(divOfFinding);
}

//Creating the found divs.
divOfFoundParent = document.getElementById('right-tab');

for (k = (galettesKey.value.length - 1); k >= 0; k--) {
    divOfFound = document.createElement('div')
    divOfFound.classList.add('galettesToFindGrey');
    divOfFound.id = (galettesKey.value[(k)].id) + "S";
    if (k < 9) {
        divOfFound.innerHTML = " -- 0" + (k + 1) + " -- ";
    }
    else {
        divOfFound.innerHTML = " -- " + (k + 1) + " -- ";
    }
    divOfFoundParent.appendChild(divOfFound);
}


function moveAnswer(idAnswer) { //Function to move the galette found to the right.

    let elem = $('#' + idAnswer + 'S').position();
    let x = elem.left; //getting the x of the galette found.
    let y = elem.top; //getting the y of the galette found.

    $('#' + idAnswer).animate({ left: x }, { duration: 2500 }); //Moving the answer to the position in a x axe.
    $('#' + idAnswer).animate({ top: y }, { //Moving the answer to the position in a y axe.
        duration: 2500, complete: function () { //Locking the galette into the div.
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

window.addEventListener('resize', function () {

    for (k = (galettesKey.value.length - 1); k >= galettesFound; k--) {
        const elem = document.getElementById(galettesKey.value[k].id);
        elem.style.left = document.getElementById('won').offsetLeft + "px"; //Their X
        elem.style.top = document.getElementById('won').offsetTop + "px"; //Their Y
    }

}, true);

// elem = document.getElementById('gDouble');
// target = document.getElementById('gDoubleS');
// elem.style.left = 'auto';
// elem.style.top = 'auto';
// elem.style.position = 'static';
// target.innerHTML = '';
// target.appendChild(elem);





