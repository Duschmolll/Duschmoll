<!DOCTYPE html>
<html>

<head>
    <title>duschmoll.org</title>
    <meta charset="utf-8" : />
    <link rel="stylesheet" type="text/css" href="CrepEat.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@300;400&display=swap">
    <link rel="shortcut icon" type="image/jpg" href="../favicon.ico" />
</head>

<script>
    <?php
    $idarray = array(); //Initiating the array of IDs.

    //Setting up the info of the ingredients buttons
    //CATEGORY_OF_INGREDIENT => ID => VALUE => IMAGE
    $categories = array(
        'Viandes' => array(
            'jambon' => array('Jambon' => 'https://img.icons8.com/color/48/000000/jamon.png'),
            'pouletfume' => array('Poulet Fumé' => 'https://img.icons8.com/color/48/000000/thanksgiving.png'),
            'oeuf' => array('Oeuf' => 'https://img.icons8.com/color/48/000000/egg-carton.png'),
            'thon' => array('Thon' => 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/fa314a/external-salmon-alaska-icongeek26-flat-icongeek26.png'),
            'saumonfume' => array('Saumon Fumé' => 'https://img.icons8.com/color/48/fa314a/sashimi.png'),
            'viandehachee' => array('Viande hachée' => 'https://img.icons8.com/plasticine/100/000000/ground-beef.png'),
            'lardons' => array('Lardons' => 'https://img.icons8.com/color/48/000000/bacon.png')
        ),
        'Fromages' => array(
            'brie' => array('Brie' => 'https://img.icons8.com/officel/50/000000/mozzarella.png'),
            'emmental' => array('Emmental' => 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-cheese-diet-and-nutrition-icongeek26-linear-colour-icongeek26.png'),
            'chevre' => array('Chèvre' => 'https://img.icons8.com/plasticine/50/000000/mozzarella.png'),
            'raclette' => array('Raclette' => 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cheese-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png')
        ),
        'Condiments' => array(
            'tomate' => array('Tomate' => 'https://img.icons8.com/color/48/000000/tomatoes.png'),
            'epinard' => array('Épinard' => 'https://img.icons8.com/color/48/000000/spinach.png'),
            'salade' => array('Salade' => 'https://img.icons8.com/color/48/000000/cabbage.png'),
            'aneth' => array('Aneth' => 'https://img.icons8.com/color/48/000000/gailan.png'),
            //'oignons' => array('Oignons' => 'https://img.icons8.com/color/48/000000/onion.png'),
            'patate' => array('Pomme de Terre' => 'https://img.icons8.com/color/48/000000/vegetables-bag.png')
        ),
        'Sauces' => array(
            'huiledolive' => array('Huile d\'Olive' => 'https://img.icons8.com/color/48/000000/olive-oil.png'),
            'cremefraiche' => array('Crême Fraiche' => 'https://img.icons8.com/ultraviolet/48/000000/honey.png'),
            'sauceburger' => array('Sauce Burger' => 'https://img.icons8.com/color/48/000000/sauce-bottle.png')
        ),
        'Misc' => array(
            'noix' => array('Noix' => 'https://img.icons8.com/color/50/000000/pecan.png'),
            'citron' => array('Citron' => 'https://img.icons8.com/color/50/000000/citrus.png'),
            'miel' => array('Miel' => 'https://img.icons8.com/color/48/000000/honey-spoon.png')
        )
    );

    function myShuffle($arrayToShuffle)
    {
        $shuffledArray = array();
        $keyArray = array_keys($arrayToShuffle);
        shuffle($keyArray);
        foreach ($keyArray as $k) {
            $shuffledArray[$k] = $arrayToShuffle[$k];
        }
        return ($shuffledArray);
    }

    foreach ($categories as $cagName => $propreties) {
        $categories[$cagName] = myShuffle($categories[$cagName]); //Shuffle the order of the buttons
        foreach ($propreties as $id => $subPropreties)
            array_push($idarray, $id); // Getting their ID.
    }

    ?>

    const inputID = <?php echo json_encode($idarray); ?>;
    inputID.push("answer") //adding the button for the answers.


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

    for (var k = 0; k < galettesKey.length; k++) { //Sort the aliments of all the galettes by alphabetical order.
        galettes.get(galettesKey[k]).sort();
    }

    function shuffle(array) { //randomise the order of the galettes.
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(galettesKey);

    var galettesToFind = 0; //initiate the order of galette to find.
    var galettesFound = 0; //count the number of good answer.
    var answerWasShowed = 0; //initiate if the answer was showed.
    var ingredientMismatch = 0; //initiate if the answer was found with a mistake.

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
        console.log('Destination x = ' + window.posLeft)

    }

    function galettesToFindSelector() { //Pass to the next galettes when the answer is found.
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
            addChoice(document.getElementById('foodTypeSelected'), btn.value);
            compareUserToGalettes();
            return false;
        }
        if (btn.class == "foodTypeUnselectedMistake") { //if the button is unselected before he click.
            btn.setAttribute("class", "foodTypeSelectedMistake"); //Showing the button as selected.
            addChoice(document.getElementById('foodTypeSelected'), btn.value);
            compareUserToGalettes();
            return false;
        }
        if (btn.class == "foodTypeAnswer") { //if the button is a clue before he click.
            btn.setAttribute("class", "foodTypeSelectedAnswer"); //Showing the button as selected with an hint.
            addChoice(document.getElementById('foodTypeSelectedAnswer'), btn.value);
            compareUserToGalettes();
            return false;

        }
        if (btn.class == "foodTypeSelected") { //if the button is selected before he click.
            btn.setAttribute("class", "foodTypeUnselected"); //Showing the button as unselected.
            removeChoice(document.getElementById('foodTypeSelected'), btn.value);
            compareUserToGalettes();
            return false;

        }
        if (btn.class == "foodTypeSelectedMistake") { //if the button is selected before he click.
            btn.setAttribute("class", "foodTypeUnselectedMistake"); //Showing the button as unselected.
            removeChoice(document.getElementById('foodTypeSelected'), btn.value);
            compareUserToGalettes();
            return false;

        }
        if (document.getElementById('answer').value == 'Hide Answer' || btn.class == "foodTypeSelectedAnswer") { //if the answers are shown and the button is selected before he click.
            btn.setAttribute("class", "foodTypeAnswer"); //Showing the button as unselected with an hint.
            removeChoice(document.getElementById('foodTypeSelected'), btn.value);
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

    function addChoice(seatListElm, buttonValue) { // Add a user choice to his UserAnswer.
        userAnswer.push(buttonValue);
        userAnswer.sort();
    }

    function removeChoice(seatListElm, buttonValue) { // Remove a user choice to his UserAnswer.

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
                    document.getElementById(userAnswer[k]).setAttribute("class", "foodTypeSelectedMistake")
                }
            }

        } else {}
    }

    function moveAnswer(idAnswer) { //Function to move the galette found to the right.

        var interval = null;
        var elem = document.getElementById(idAnswer);
        var x = elem.offsetLeft; //getting the x of the galette found.
        var y = elem.offsetTop; //getting the y of the galette found.
        console.log(x, y)

        clearInterval(interval);
        interval = setInterval(frame, 1); //setting the interval to move the galette.

        function frame() {
            if (x == window.posLeft && y == window.posTop) { //Stopping the interval when the galette is arrived at the destination.
                clearInterval(interval);
                window.posTop = window.posTop - 55 //Changing the distanation to the next one.
            } else if (x < window.posLeft) { //moving to the right.
                x++;
                elem.style.left = x + 'px';
                console.log('Element Moving x = ' + x)
            } else { //moving to the bottom.
                y++;
                elem.style.top = y + 'px';

            }
        }
    }
</script>

<body class="background-main" onload='startTheGame();'>

    <header id="header">
        <div class="site-title-nav">
            <h1 class="site-title">
                <a href="../index.php">duschmoll<span>.org</span></a>
            </h1>
            <nav id="topnav" class="hover-nav">
                <section class="nav">
                    <a class="navbtn" href="projet.html">Projets</a>
                    <div class="nav-content">
                        <a href="binding.html">CS:GO Binding</a>
                        <a href="plant-rehab.html">Plant Rehab</a>
                    </div>
                </section>
                <section class="nav">
                    <a class="navbtn" href="faq.html">FAQ</a>
                    <div class="nav-content">
                        <a href="about-me.html">About Me</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </section>
                <section class="nav">
                    <a class="navbtn" href="other.html">Others</a>
                    <div class="nav-content">
                        <a href="Other1.html">Other1</a>
                        <a href="Ohter2.html">Other2</a>
                    </div>
                </section>
            </nav>
        </div>

        <div class="log-set">
            <h1>Sign-In</h1>
        </div>
    </header>

    <div class="main-post">
        <section id="post" style="width: 1600px;">
            <br>
            <h2 id="center">Crepeat Galettes Guesser</h2>

            <p id="center">In this small game you need to find the right ingredient for each galette. </p>
            <br>

            <section id="game">
                <section id="left-tab">
                    <section id="center" style="flex-direction: column;">
                        <div id="won" class="findGalette">Finished</div>

                        <output id="findLength" class="ingredientHint" value="Test"></output>
                    </section>
                    <div id="La Double" class="galettesToFind"> La Double </div>
                    <div id="La Complète" class="galettesToFind"> La Complète </div>
                    <div id="La Fermière" class="galettesToFind"> La Fermière </div>
                    <div id="La Végetariene" class="galettesToFind"> La Végetariene </div>
                    <div id="La Trois Fromages" class="galettesToFind"> La Trois Fromages </div>
                    <div id="La Popeye" class="galettesToFind"> La Popeye </div>
                    <div id="La Thonthon" class="galettesToFind"> La Thonthon </div>
                    <div id="La Biquette" class="galettesToFind"> La Biquette </div>
                    <div id="La Nordique" class="galettesToFind"> La Nordique </div>
                    <div id="La Burger" class="galettesToFind"> La Burger </div>
                    <div id="La Raclette" class="galettesToFind"> La Raclette </div>
                    <?php

                    //Setting up the buttons.
                    foreach ($categories as $cagName => $propreties) {
                        echo "<section class='centertest' id='$cagName'>";
                        echo "<h4 class='categorieTitle' id='center'>$cagName</h4>";
                        echo "<section id='center-button'>";
                        foreach ($propreties as $id => $subPropreties)
                            foreach ($subPropreties as $value => $link) //Creating the buttons.
                                echo "<button id='$id' class='foodTypeUnselected' value='$id' onclick='btnclick(this);'><div id='button-desc' >$value</div> <img id='button-icon' src='$link' /></button>";

                        echo "</section>";
                        echo "</section>";
                    }
                    ?>

                    <input type="button" id="answer" class="foodTypeUnselected" value="Show Anwser" onclick='answerclick(this);'>
                    <?php
                    ?>
                </section>
                <section id="right-tab">

                    <div id="La_Double1" class="galettesToFindGrey"> -- 01 -- </div>
                    <div id="La_Complète" class="galettesToFindGrey"> -- 02 -- </div>
                    <div id="La_Fermière" class="galettesToFindGrey"> -- 03 -- </div>
                    <div id="La_Végetariene" class="galettesToFindGrey"> -- 04 -- </div>
                    <div id="La_Trois_Fromages" class="galettesToFindGrey"> -- 05 -- </div>
                    <div id="La_Popeye" class="galettesToFindGrey"> -- 06 -- </div>
                    <div id="La_Thonthon" class="galettesToFindGrey"> -- 07 -- </div>
                    <div id="La_Biquette" class="galettesToFindGrey"> -- 08 -- </div>
                    <div id="La_Nordique" class="galettesToFindGrey"> -- 09 -- </div>
                    <div id="La_Burger" class="galettesToFindGrey"> -- 10 -- </div>
                    <div id="La_Raclette" class="galettesToFindGrey"> -- 11 -- </div>


                </section>
            </section>

        </section>
    </div>
</body>

</html>