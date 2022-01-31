<?php include_once "../../include/header.php" ?>

<div class="main-post">
    <section id="post">
        <h2>Random PHP</h2></br>

        <p>
            <?php

            echo "a: [" . (20 > 9) . "]<br>";
            echo "You are loading this post on a " . date("l");

            $username = "Duschmoll: ";
            $currentuser = $username;
            ?><br><?php
                    $x = 1;
                    if ($x++ == 0) echo $x;
                    $numberOfMessage = "You have $x message(s).";
                    $username .= $numberOfMessage;
                    echo $username;
                    echo "<br>";
                    echo "This is line " . __LINE__ . " of file " . __FILE__;

                    ?></p>
    </section>
</div>

<?php include_once "../../include/footer.php" ?>