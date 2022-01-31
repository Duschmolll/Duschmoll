<?php include_once "../../include/header.php" ?>
<style>
    <?php include_once "res/css/openwordle.css"; ?>
</style>

<div class="main-post">
    <section id="post" style="width: 1600px;">
        <br>
        <h2 id="center">Open Wordle</h2>

        <p id="center">In this game you need to guess the word of the day.</p>
        <br>

        <section id="game">
            <section id='userInput'>
                <div class='letterClear' id='rowOneLetterOne'></div>
                <div class='letterClear' id='rowOneLetterTwo'></div>
                <div class='letterClear' id='rowOneLetterThree'></div>
                <div class='letterClear' id='rowOneLetterFour'></div>
                <div class='letterClear' id='rowOneLetterFive'></div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowTwoLetterOne'>W</div>
                <div class='letterClear' id='rowTwoLetterTwo'>O</div>
                <div class='letterClear' id='rowTwoLetterThree'>R</div>
                <div class='letterClear' id='rowTwoLetterFour'>D</div>
                <div class='letterClear' id='rowTwoLetterFive'>S</div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowThreeLetterOne'>W</div>
                <div class='letterClear' id='rowThreeLetterTwo'>O</div>
                <div class='letterClear' id='rowThreeLetterThree'>R</div>
                <div class='letterClear' id='rowThreeLetterFour'>D</div>
                <div class='letterClear' id='rowThreeLetterFive'>S</div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowFourLetterOne'>W</div>
                <div class='letterClear' id='rowFourLetterTwo'>O</div>
                <div class='letterClear' id='rowFourLetterThree'>R</div>
                <div class='letterClear' id='rowFourLetterFour'>D</div>
                <div class='letterClear' id='rowFourLetterFive'>S</div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowFiveLetterOne'>W</div>
                <div class='letterClear' id='rowFiveLetterTwo'>O</div>
                <div class='letterClear' id='rowFiveLetterThree'>R</div>
                <div class='letterClear' id='rowFiveLetterFour'>D</div>
                <div class='letterClear' id='rowFiveLetterFive'>S</div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowSixLetterOne'>W</div>
                <div class='letterClear' id='rowSixLetterTwo'>O</div>
                <div class='letterClear' id='rowSixLetterThree'>R</div>
                <div class='letterClear' id='rowSixLetterFour'>D</div>
                <div class='letterClear' id='rowSixLetterFive'>S</div>
            </section>
            <section id='keyboard'>
                <section id='rowOne'>
                    <div class='keyboardLetter'>a</div>
                    <div class='keyboardLetter'>z</div>
                    <div class='keyboardLetter'>e</div>
                    <div class='keyboardLetter'>r</div>
                    <div class='keyboardLetter'>t</div>
                    <div class='keyboardLetter'>y</div>
                    <div class='keyboardLetter'>u</div>
                    <div class='keyboardLetter'>i</div>
                    <div class='keyboardLetter'>o</div>
                    <div class='keyboardLetter'>p</div>
                </section>
                <section id='rowTwo'>
                    <div class='keyboardLetter'>q</div>
                    <div class='keyboardLetter'>s</div>
                    <div class='keyboardLetter'>d</div>
                    <div class='keyboardLetter'>f</div>
                    <div class='keyboardLetter'>g</div>
                    <div class='keyboardLetter'>h</div>
                    <div class='keyboardLetter'>j</div>
                    <div class='keyboardLetter'>k</div>
                    <div class='keyboardLetter'>l</div>
                    <div class='keyboardLetter'>m</div>
                </section>
                <section id='rowThree'>
                    <div class='keyboardSpecialKey'>ENTER</div>
                    <div class='keyboardLetter'>w</div>
                    <div class='keyboardLetter'>x</div>
                    <div class='keyboardLetter'>c</div>
                    <div class='keyboardLetter'>v</div>
                    <div class='keyboardLetter'>b</div>
                    <div class='keyboardLetter'>n</div>
                    <div class='keyboardSpecialKey'>DEL</div>
                </section>
            </section>
        </section>

    </section>
</div>

<script src="js/openwordle.js"></script>

<?php include_once "../../include/footer.php" ?>