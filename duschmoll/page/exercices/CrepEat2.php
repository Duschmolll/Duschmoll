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
            'viandehachee' => array('Viande hachée - Boeuf' => 'https://img.icons8.com/plasticine/100/000000/ground-beef.png'),
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
            'huiledolive' => array('Huile dOlive' => 'https://img.icons8.com/color/48/000000/olive-oil.png'), //ERROR with the \'
            'cremefraiche' => array('Crême Fraiche' => 'https://img.icons8.com/ultraviolet/48/000000/honey.png'),
            'sauceburger' => array('Sauce Burger' => 'https://img.icons8.com/color/48/000000/sauce-bottle.png')
        ),
        'Misc' => array(
            'noix' => array('Noix' => 'https://img.icons8.com/color/50/000000/pecan.png'),
            'citron' => array('Citron' => 'https://img.icons8.com/color/50/000000/citrus.png'),
            'miel' => array('Miel' => 'https://img.icons8.com/color/48/000000/honey-spoon.png')
        )
    );

    foreach ($categories as $cagName => $propreties)
        foreach ($propreties as $id => $subPropreties)
            array_push($idarray, $id); // Getting their ID.

    function myShuffle($arrayToShuffle){
        $shuffledArray = array(); 
        $keyArray = array_keys($arrayToShuffle);
        shuffle($keyArray);
        foreach ($keyArray as $k){
            $shuffledArray[$k] = $arrayToShuffle[$k];
        };
        return($shuffledArray);
    };

    foreach ($categories as $cagName => $properties){
        $categories[$cagName] = myShuffle($categories[$cagName]); //Shuffle the order of the buttons
    }

    ?>

    const inputID = <?php echo json_encode($idarray); ?>;
    inputID.push("answer") //adding the button for the answers.


    // Map & Array of galettes.
    const galettes = new Map()
    galettes.set('La Double', new Array('jambon', 'emmental'))
    galettes.set('La Complète', new Array('oeuf', 'emmental', 'jambon'))
    galettes.set('La Fermière', new Array('emmental', 'pouletfume', 'oeuf'))
    //galettes.set('La Végetariene', new Array('chevre', 'tomate', 'salade', 'huiledolive'))
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

    var galettesToFind = 0 //initiate the order of galette to find.
    var galettesFound = 0 //count the number of good answer.

    function startTheGame() { //Launch the first galettes to find.
        document.getElementById("findName").value = galettesKey[galettesToFind] // Input with the Name of the galette
    }

    function galettesToFindSelector() { //Pass to the next galettes when the answer is found.
        galettesFound++
        resetButtons()
        if (galettesFound < galettesKey.length) {
            galettesToFind++
        }

        document.getElementById("findName").value = galettesKey[galettesToFind] // Input with the Name of the galette.
        document.getElementById("answerFound").value = galettesFound + " / " + galettesKey.length; // Number of galettes found.
        document.getElementById("answer").value = "Show Answer" // Input with the ingredient of the galette    
    }

    const userAnswer = new Array() //initiate his input. 
    //    const inputID = new Array('jambon', 'pouletfume', 'oeuf', 'thon', 'saumonfume', 'viandehachee', 'lardons', 'brie', 'emmental', 'chevre', 'raclette', 'tomate', 'epinard', 'salade', 'aneth', 'oignons', 'patate', 'huiledolive', 'cremefraiche', 'sauceburger', 'noix', 'citron', 'miel', 'answer')

    function resetButtons() { //Reset buttons to the unselected state.
        for (var k = 0; k < inputID.length; k++) {
            document.getElementById(inputID[k]).setAttribute("class", "foodTypeUnselected");
        }


        userAnswer.splice(0, userAnswer.length)
        document.getElementById("userAnswer").value = userAnswer;

    }

    function btnclick(btn) { //Function on click of the button.

        btn.class = btn.className

        if (btn.class == "foodTypeUnselected") { //if the button is unselected before he click.
            btn.setAttribute("class", "foodTypeSelected");
            addChoice(document.getElementById('foodTypeSelected'), btn.value);
            showUserAnswer();
            compareUserToGalettes();
            return false;
        }
        if (btn.class == "foodTypeAnswer") { //if the button is a clue before he click.
            btn.setAttribute("class", "foodTypeSelectedAnswer");
            addChoice(document.getElementById('foodTypeSelectedAnswer'), btn.value);
            showUserAnswer();
            compareUserToGalettes();
            return false;

        }
        if (btn.class == "foodTypeSelected") { //if the button is selected before he click.
            btn.setAttribute("class", "foodTypeUnselected");
            removeChoice(document.getElementById('foodTypeSelected'), btn.value);
            showUserAnswer();
            compareUserToGalettes();
            return false;

        }
        if (document.getElementById('answer').value == 'Hide Answer' || btn.class == "foodTypeSelectedAnswer") { //if the answers are shown and the button is selected before he click.
            btn.setAttribute("class", "foodTypeAnswer");
            removeChoice(document.getElementById('foodTypeSelected'), btn.value);
            showUserAnswer();
            compareUserToGalettes();
            return false;

        }
    }

    function answerclick(btn) { // Show the solution to the galette.

        btn.class = btn.className
        if (btn.class == "foodTypeUnselected") { //if the button is unselected before he click.
            btn.setAttribute("class", "foodTypeSelected");

            for (k = 0; k < galettes.get(galettesKey[galettesToFind]).length; k++) {
                if (document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).className == 'foodTypeUnselected') {
                    document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeAnswer");
                } else {
                    document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeSelectedAnswer");
                }
            }
            document.getElementById("answer").value = 'Hide Anwser' // Input with the ingredient of the galette    
            return false;
        }

        if (btn.class == "foodTypeSelected") { //if the button is selected before he click.
            btn.setAttribute("class", "foodTypeUnselected");
            for (k = 0; k < galettes.get(galettesKey[galettesToFind]).length; k++) {
                if (document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).className == 'foodTypeSelectedAnswer') {
                    document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeSelected");
                } else {
                    document.getElementById(galettes.get(galettesKey[galettesToFind])[k]).setAttribute("class", "foodTypeUnselected");
                }
            }
            document.getElementById("answer").value = "Show Answer" // Input with the ingredient of the galette    
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

    function showUserAnswer() { //show the selection of ingredient of the User.
        document.getElementById("userAnswer").value = userAnswer;
    }

    function compareUserToGalettes() { //compare the User Input with the Galettes to Find.
        if (userAnswer.toString() == galettes.get(galettesKey[galettesToFind]).toString()) {
            galettesToFindSelector();
        }
    }
</script>

<body class="background-main" onload="startTheGame();">

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
        <section id="post">
            <h2 id="center">Crepeat Galettes Guesser</h2>

            <p id="center">In this small game you need to find the right ingredient for each galette. </p>
            <br><br>

            <section id="game">
                <section id="left-tab">
                    <output id="findName" value="Test"></output>
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
                    <output id="SolutionOfFind" value="Test"></output><br>
                    <output id="userAnswer" value=" "></output><br>
                    <output id="answerFound" value="0 / 11"></output>
                </section>
            </section>

        </section>
    </div>
</body>

</html>