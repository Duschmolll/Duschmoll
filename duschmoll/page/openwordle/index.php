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
                <div class='letterClear' id='rowTwoLetterOne'></div>
                <div class='letterClear' id='rowTwoLetterTwo'></div>
                <div class='letterClear' id='rowTwoLetterThree'></div>
                <div class='letterClear' id='rowTwoLetterFour'></div>
                <div class='letterClear' id='rowTwoLetterFive'></div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowThreeLetterOne'></div>
                <div class='letterClear' id='rowThreeLetterTwo'></div>
                <div class='letterClear' id='rowThreeLetterThree'></div>
                <div class='letterClear' id='rowThreeLetterFour'></div>
                <div class='letterClear' id='rowThreeLetterFive'></div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowFourLetterOne'></div>
                <div class='letterClear' id='rowFourLetterTwo'></div>
                <div class='letterClear' id='rowFourLetterThree'></div>
                <div class='letterClear' id='rowFourLetterFour'></div>
                <div class='letterClear' id='rowFourLetterFive'></div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowFiveLetterOne'></div>
                <div class='letterClear' id='rowFiveLetterTwo'></div>
                <div class='letterClear' id='rowFiveLetterThree'></div>
                <div class='letterClear' id='rowFiveLetterFour'></div>
                <div class='letterClear' id='rowFiveLetterFive'></div>
            </section>
            <section id='userInput'>
                <div class='letterClear' id='rowSixLetterOne'></div>
                <div class='letterClear' id='rowSixLetterTwo'></div>
                <div class='letterClear' id='rowSixLetterThree'></div>
                <div class='letterClear' id='rowSixLetterFour'></div>
                <div class='letterClear' id='rowSixLetterFive'></div>
            </section>
            <section id='keyboard'>
                <section id='rowOne'>
                    <div class='keyboardLetter' id='a' onclick='virtualKeybord(this)'>a</div>
                    <div class='keyboardLetter' id='z' onclick='virtualKeybord(this)'>z</div>
                    <div class='keyboardLetter' id='e' onclick='virtualKeybord(this)'>e</div>
                    <div class='keyboardLetter' id='r'>r</div>
                    <div class='keyboardLetter' id='t'>t</div>
                    <div class='keyboardLetter' id='y'>y</div>
                    <div class='keyboardLetter' id='a'>u</div>
                    <div class='keyboardLetter' id='a'>i</div>
                    <div class='keyboardLetter' id='a'>o</div>
                    <div class='keyboardLetter' id='a'>p</div>
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