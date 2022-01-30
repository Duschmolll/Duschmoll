<!DOCTYPE html>
<html>

<head>
    <title>duschmoll.org</title>
    <meta charset="utf-8" : />
    <link rel="stylesheet" type="text/css" href="../main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@300;400&display=swap">
    <link rel="shortcut icon" type="image/jpg" href="../favicon.ico" />
</head>

<body class="background-main">

    <?php include_once "header.php" ?>

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
</body>

</html>