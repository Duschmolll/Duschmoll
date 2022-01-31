<?php include_once "../../include/header.php" ?>
<style>
    <?php include_once "res/css/crepeat.css"; ?>
</style>

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

                <output id="answer" class="foodTypeUnselected" onclick='answerclick(this);'>Show Answer</output>

            </section>
            <section id="right-tab">

            </section>
        </section>

        <section>
            <div onclick='credit()' id='credit'>
                <div>Credits</div>
                <div id='creditContent'>
                    <div id='centerCredit'>
                    </div>
                </div>
            </div>
        </section>
    </section>
</div>

<div class="categories-block"></div>

<script src="js/object.js"></script>
<script src="js/crepeat.js"></script>

<?php include_once "../../include/footer.php" ?>