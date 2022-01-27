//Declaring the var for the inputIDs
var inputID = new Array();
inputID.push("answer") //adding the button for the answers.

//Setting up the object for the buttons.

//Objets for each ingredient in the categories of Viandes.
jambon = { id: 'jambon', name: 'Jambon', icon: 'https://img.icons8.com/color/48/000000/jamon.png' };
pouletfume = { id: 'pouletfume', name: 'Poulet Fumé', icon: 'https://img.icons8.com/color/48/000000/thanksgiving.png' };
oeuf = { id: 'oeuf', name: 'Oeuf', icon: 'https://img.icons8.com/color/48/000000/egg-carton.png' };
thon = { id: 'thon', name: 'Thon', icon: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/fa314a/external-salmon-alaska-icongeek26-flat-icongeek26.png' };
saumonfume = { id: 'saumonfume', name: 'Saumon Fumé', icon: 'https://img.icons8.com/color/48/fa314a/sashimi.png' };
viandehachee = { id: 'viandehachee', name: 'Viande hachée', icon: 'https://img.icons8.com/plasticine/100/000000/ground-beef.png' };
lardons = { id: 'lardons', name: 'Lardons', icon: 'https://img.icons8.com/color/48/000000/bacon.png' };

//Object for the Viandes category.
viandes = { id: 'viandes', name: 'Viandes', value: new Array(jambon, pouletfume, oeuf, thon, saumonfume, viandehachee, lardons) };

//Objets for each ingredient in the categories of Fromages.
brie = { id: 'brie', name: 'Brie', icon: 'https://img.icons8.com/officel/50/000000/mozzarella.png' };
emmental = { id: 'emmental', name: 'Emmental', icon: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-cheese-diet-and-nutrition-icongeek26-linear-colour-icongeek26.png' };
chevre = { id: 'chevre', name: 'Chèvre', icon: 'https://img.icons8.com/plasticine/50/000000/mozzarella.png' };
raclette = { id: 'raclette', name: 'Raclette', icon: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cheese-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' };

//Object for the Fromages category.
fromages = { id: 'fromages', name: 'Fromage', value: new Array(brie, emmental, chevre, raclette) };

//Objets for each ingredient in the categories of Condiments.
tomate = { id: 'tomate', name: 'Tomate', icon: 'https://img.icons8.com/color/48/000000/tomatoes.png' };
epinard = { id: 'epinard', name: 'Épinard', icon: 'https://img.icons8.com/color/48/000000/spinach.png' };
salade = { id: 'salade', name: 'Salade', icon: 'https://img.icons8.com/color/48/000000/cabbage.png' };
aneth = { id: 'aneth', name: 'Aneth', icon: 'https://img.icons8.com/color/48/000000/gailan.png' };
patate = { id: 'patate', name: 'Pomme de Terre', icon: 'https://img.icons8.com/color/48/000000/vegetables-bag.png' };

//Object for the Condiments category.
condiments = { id: 'condiments', name: 'Condiments', value: new Array(tomate, epinard, salade, aneth, patate) };

//Objets for each ingredient in the categories of Sauces.
huiledolive = { id: 'huiledolive', name: 'Huile d\'Olive', icon: 'https://img.icons8.com/color/48/000000/olive-oil.png' };
cremefraiche = { id: 'cremefraiche', name: 'Crême Fraiche', icon: 'https://img.icons8.com/ultraviolet/48/000000/honey.png' };
sauceburger = { id: 'sauceburger', name: 'Sauce Burger', icon: 'https://img.icons8.com/color/48/000000/sauce-bottle.png' };

//Object for the Sauces category.
sauces = { id: 'sauces', name: 'Sauces', value: new Array(huiledolive, cremefraiche, sauceburger) };

//Objets for each ingredient in the categories of Misc.
noix = { id: 'noix', name: 'Noix', icon: 'https://img.icons8.com/color/50/000000/pecan.png' };
citron = { id: 'citron', name: 'Citron', icon: 'https://img.icons8.com/color/50/000000/citrus.png' };
miel = { id: 'miel', name: 'Miel', icon: 'https://img.icons8.com/color/48/000000/honey-spoon.png' };

//Object for the Misc category.
misc = { id: 'misc', name: 'Misc', value: new Array(noix, citron, miel) };

//Setting up the array for all the different ingredients and categories.
categories = new Array(viandes, fromages, condiments, sauces, misc);

//Shuffeling all the categories ingredients.
for (k = 0; k < categories.length; k++) {
    shuffle(categories[k].value);
}

//Creating the buttons for each ingredients and their sections.
var locationOfTheButtons = document.getElementById('left-tab'); //Getting where to put the whole section.

for (k = 0; k < categories.length; k++) { //Loop for all the category name.

    //Creating the section for the category name.
    var sectionOfCategory = document.createElement('section');
    sectionOfCategory.classList.add('centertest');
    sectionOfCategory.id = categories[k].id;
    locationOfTheButtons.appendChild(sectionOfCategory);

    //Creating the Title of the category.
    var hfour = document.createElement('h4');
    hfour.classList.add('categorieTitle');
    hfour.id = 'center';
    hfour.innerHTML = categories[k].name;
    sectionOfCategory.appendChild(hfour);

    //Creating the section for the ingredients buttons.
    var sectionOfIngredient = document.createElement('section');
    sectionOfIngredient.id = 'center-button';
    sectionOfCategory.appendChild(sectionOfIngredient);

    for (x = 0; x < (categories[k].value).length; x++) { //Loops for all the buttons.

        //Creating the button element of the ingredient.
        var buttonOfIngredient = document.createElement('button');
        buttonOfIngredient.classList.add('foodTypeUnselected');
        buttonOfIngredient.value = (categories[k].value)[x].value;
        buttonOfIngredient.setAttribute('onclick', 'btnclick(this)');
        buttonOfIngredient.id = (categories[k].value)[x].id;
        sectionOfIngredient.appendChild(buttonOfIngredient);

        //Adding the name to the button.
        var divOfIngredientName = document.createElement('div')
        divOfIngredientName.id = 'button-desc';
        divOfIngredientName.innerHTML = (categories[k].value)[x].name;
        buttonOfIngredient.appendChild(divOfIngredientName);

        //Adding the icon to the button.
        var imgOfIngredient = document.createElement('img');
        imgOfIngredient.id = 'button-icon';
        imgOfIngredient.src = (categories[k].value)[x].icon;
        buttonOfIngredient.appendChild(imgOfIngredient);

        //Getting all the id for each buttons.
        inputID.push((categories[k].value)[x].id);
    }
}

var AnswerLocation = document.getElementById('answer');
locationOfTheButtons.appendChild(AnswerLocation);


// Map & Array of galettes.
const galettes = new Map()
galettes.set('La Double', new Array('jambon', 'emmental'))
galettes.set('La Complète', new Array('oeuf', 'emmental', 'jambon'))
galettes.set('La Fermière', new Array('emmental', 'pouletfume', 'oeuf'))
galettes.set('La Végetariene', new Array('chevre', 'tomate', 'salade', 'huiledolive'))
galettes.set('La Trois Fromages', new Array('emmental', 'brie', 'chevre'))
galettes.set('La Popeye', new Array('oeuf', 'epinard', 'chevre'))
galettes.set('La Thonthon', new Array('oeuf', 'thon', 'emmental', 'citron', 'tomate'))
galettes.set('La Biquette', new Array('chevre', 'salade', 'noix', 'miel'))
galettes.set('La Nordique', new Array('saumonfume', 'cremefraiche', 'aneth', 'citron'))
galettes.set('La Burger', new Array('viandehachee', 'emmental', 'tomate', 'sauceburger'))
galettes.set('La Raclette', new Array('raclette', 'patate', 'lardons', 'cremefraiche'))

const galettesKey = [...galettes.keys()]

double = { id: 'double', name: 'La Double', value: new Array(jambon.id, emmental.id) };
complete = { id: 'complete', name: 'La Complète', value: new Array(oeuf.id, emmental.id, jambon.id) };
fermiere = { id: 'fermiere', name: 'La Fermière', value: new Array(pouletfume.id, emmental.id, oeuf.id) };
vegetarienne = { id: 'vegetarienne', name: 'La Végetarienne', value: new Array(chevre.id, salade.id, huiledolive.id, tomate.id) };
troisfromage = { id: 'troisfromage', name: 'La Trois Fromages', value: new Array(brie.id, chevre.id, emmental.id) };
popeye = { id: 'popeye', name: 'La Popeye', value: new Array(oeuf.id, epinard.id, chevre.id) };
thonthon = { id: 'thonthon', name: 'La Thonthon', value: new Array(oeuf.id, thon.id, emmental.id, citron.id, tomate.id) };
biquette = { id: 'biquette', name: 'La Biquette', value: new Array(chevre.id, salade.id, noix.id, miel.id) };
nordique = { id: 'nordique', name: 'La Nordique', value: new Array(saumonfume.id, cremefraiche.id, aneth.id, citron.id) };
burger = { id: 'burger', name: 'La Burger', value: new Array(viandehachee.id, emmental.id, tomate.id, sauceburger.id) };
raclette = { id: 'raclette', name: 'La Raclette', value: new Array(raclette.id, patate.id, lardons.id, cremefraiche.id) };

const galettesKey2 = { id: 'galettes', value: new Array(double, complete, fermiere, vegetarienne, troisfromage, popeye, thonthon, biquette, nordique, burger, raclette) }

for (var k = 0; k < galettesKey.length; k++) { //Sort the aliments of all the galettes by alphabetical order.
    galettes.get(galettesKey[k]).sort();
}

for (var k = 0; k < galettesKey2.value.length; k++) {
    galettesKey2.value[k].value.sort();
}

function shuffle(array) { //randomise the order of the galettes.
    array.sort(() => Math.random() - 0.5);
    console.log('Shuffle Done')
}
console.log(galettesKey2.value);
shuffle(galettesKey);

console.log(galettesKey2.value);
shuffle(galettesKey2.value);

var galettesToFind = 0; //initiate the order of galette to find.
var galettesFound = 0; //count the number of good answer.
var answerWasShowed = 0; //initiate if the answer was showed.
var ingredientMismatch = 0; //initiate if the answer was found with a mistake.

document.body.setAttribute('onload', 'startTheGame()') //Setting the trigger of the function to start the game.

function startTheGame() { //Launch the first galettes to find.

    document.getElementById("findLength").value = galettes.get(galettesKey[galettesToFind]).length + ' ingredients';
    for (x = 0; x < galettesKey.length; x++) { // Setting-up the initial position of the galettes to find.

        var elem = document.getElementById(galettesKey[x]);
        elem.style.zIndex = (galettesKey.length + 2) - x; //Their z-index by their order of guess.
        elem.style.left = document.getElementById('won').offsetLeft + "px"; //Their X
        elem.style.top = document.getElementById('won').offsetTop + "px"; //Their Y
    }

    window.posLeft = document.getElementById('La_Raclette').offsetLeft //Getting the x destination for the movement of the galettes founds.
    window.posTop = document.getElementById('La_Raclette').offsetTop //Getting the y destination for the movement of the galettes founds.

}

function galettesToFindSelector() { //Pass to the next galettes when the answer is found.
    console.log('Fuction galettesToFindSelector triggered')
    galettesFound++
    resetButtons()
    if (galettesFound < galettesKey.length) {
        galettesToFind++
        document.getElementById("findLength").value = galettes.get(galettesKey[galettesToFind]).length + ' ingredients' //Showing the number of ingredient needed.
    } else {
        document.getElementById("findLength").value = 'Well Done' // Saying GJ when all the ingredient are found.
        document.getElementById("answer").value = "Restart" // Setting up the restart button at the end.
    }
}

const userAnswer = new Array() //initiate his input.

function resetButtons() { //Reset buttons to the unselected state.
    for (var k = 0; k < inputID.length; k++) {
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
    answerWasShowed = 1
    btn.class = btn.className
    if (btn.class == "foodTypeUnselected" && galettesFound < galettesKey.length) { //if the button is unselected before he click.
        btn.setAttribute("class", "foodTypeSelected"); //Showing the answer button as selected.

        for (k = 0; k < galettes.get(galettesKey[galettesToFind]).length; k++) {
            if (document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).className == 'foodTypeUnselected') {
                document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeAnswer"); //Showing the ingredient button as hinted and unselected.
            } else {
                document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeSelectedAnswer"); //Showing the ingredient button as hinted and selected.
            }
        }
        document.getElementById("answer").value = 'Hide Anwser' //Changing the value of the answer button.
        return false;
    }

    if (btn.class == "foodTypeSelected" && galettesFound < galettesKey.length) { //if the button is selected before he click.
        btn.setAttribute("class", "foodTypeUnselected"); //Showing the answer button as unselected.
        for (k = 0; k < galettes.get(galettesKey[galettesToFind]).length; k++) {

            element = document.getElementById(galettes.get(galettesKey[galettesToFind])[k]);

            if (element.className == 'foodTypeSelectedAnswer') {
                element.setAttribute("class", "foodTypeSelected"); //Showing the ingredient button as selected.
            } else {
                element.setAttribute("class", "foodTypeUnselected"); //Showing the ingredient button as unselected.
            }
        }
        document.getElementById("answer").value = "Show Answer" //Changing the value of the answer button.
        return false;

    }

    if (galettesFound >= galettesKey.length) {
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
            if (galettes.get(galettesKey[galettesToFind]).toString().search(userAnswer[k]) === -1) {
                ingredientMismatch = 1;
            }
        }
    }
    if (userAnswer.toString() == galettes.get(galettesKey[galettesToFind]).toString()) {
        if (answerWasShowed == 1) {
            document.getElementById(galettesKey[galettesToFind]).setAttribute("class", "galettesAnswerShowed"); //Showing the galettes with the use of the answer.
        } else if (ingredientMismatch == 1) {
            document.getElementById(galettesKey[galettesToFind]).setAttribute("class", "galettesMistake"); //Showing the galettes with a mistake.
        } else {
            document.getElementById(galettesKey[galettesToFind]).setAttribute("class", "galettesFound"); //Showing the galettes as found.
        }
        moveAnswer(galettesKey[galettesToFind])
        galettesToFindSelector();
    } else if (userAnswer.length >= galettes.get(galettesKey[galettesToFind]).length) {
        //Showing the wrong ingredients selected if all the number of ingr selected = the number of ing needed for the galette.
        for (k = 0; k < userAnswer.length; k++) {
            if (galettes.get(galettesKey[galettesToFind]).toString().search(userAnswer[k]) === -1) {
                // document.getElementById(userAnswer[k]).setAttribute("class", "foodTypeSelectedMistake")
            }
        }

    } else { }
}

function moveAnswer(idAnswer) { //Function to move the galette found to the right.

    var interval = null;
    var elem = document.getElementById(idAnswer);
    var x = elem.offsetLeft; //getting the x of the galette found.
    var y = elem.offsetTop; //getting the y of the galette found.

    clearInterval(interval);
    interval = setInterval(frame, 1); //setting the interval to move the galette.

    function frame() {
        if (x == window.posLeft && y == window.posTop) { //Stopping the interval when the galette is arrived at the destination.
            clearInterval(interval);
            window.posTop = window.posTop - 55 //Changing the distanation to the next one.
        } else if (x < window.posLeft) { //moving to the right.
            x++;
            elem.style.left = x + 'px';

        } else { //moving to the bottom.
            y++;
            elem.style.top = y + 'px';

        }
    }
}

