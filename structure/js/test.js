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

    }
}
