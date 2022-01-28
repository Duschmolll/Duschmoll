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
                    <div id="won" class="findGalette">Finished</div>
                    <output id="findLength" class="ingredientHint" value="Test"></output>
                </section>

                <input type="button" id="answer" class="foodTypeUnselected" value="Show Anwser" onclick='answerclick(this);'>

            </section>
            <section id="right-tab">

            </section>
        </section>

    </section>
</div>

<div class="categories-block"></div>

<script src="../js/crepeat.js"></script>

<?php include_once "../footer.php" ?>