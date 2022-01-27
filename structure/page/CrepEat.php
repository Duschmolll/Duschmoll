<?php
include_once "../header.php";
?>

<div class="main-post">
    <section id="post" style="width: 1600px;">
        <br>
        <h2 id="center">Crepeat Galettes Guesser</h2>

        <p id="center">In this small game you need to find the right ingredient for each galette. </p>
        <br>

        <section id="game">
            <section id="left-tab">
                <section id="center" style="flex-direction: column;">
                    <div id="won" class="findGalette">Finished
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
                    </div>
                    <output id="findLength" class="ingredientHint" value="Test"></output>
                </section>

                <input type="button" id="answer" class="foodTypeUnselected" value="Show Anwser" onclick='answerclick(this);'>

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

<div class="categories-block"></div>

<script src="../js/crepeat.js"></script>

<?php include_once "../footer.php" ?>