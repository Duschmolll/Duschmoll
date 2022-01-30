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
            <h2>PHP Array</h2></br>
            <h4>Foreach</h4>
            <?php
            $paper = array(
                'copier' => "Copier & Multipurpose",
                'inkjet' => "Inketjet Printer",
                'laser' => "Laser Printer",
                'photo' => "Photographic Paper"
            );

            foreach ($paper as $item => $description)
                echo "$item: $description <br>";
            ?>
            <br>
            <h4>While</h4>
            <?php
            $paper2 = array(
                'Copier' => "Copier & Multipurpose",
                'Inkjet' => "Inketjet Printer",
                'Laser' => "Laser Printer",
                'Photo' => "Photographic Paper"
            );
            while (list($item, $description) = myEach($paper2))
                echo "$item: $description <br>";

            function myEach(&$array) // Replacement for the depreacated each function
            {
                $key = key($array);
                $result = ($key === null) ? false :
                    [$key, current($array), 'key', 'value' => current($array)];
                next($array);
                return $result;
            }
            ?>
            <br>
            <h4>List</h4>
            <?php
            list($a, $b) = array('Alice', 'Bob');
            echo "a=$a b=$b <br>";
            ?>
            <br>
            <h4>Multidimensional Arrays</h4>
            <?php
            $products = array(
                'paper' => array(
                    'copier' => "Copier & Multipurpose",
                    'inkjet' => "Inketjet Printer",
                    'laser' => "Laser Printer",
                    'photo' => "Photographic Paper"
                ),
                'pens' => array(
                    'ball' => "Ball Point",
                    'hilite' => "Highlighters",
                    'marker' => "Markers"
                ),
                'misc' => array(
                    'tape' => "Sticky Tape",
                    'glue' => "Adhesive",
                    'clips' => "Paperclips"
                )
            );
            echo "<pre>";
            foreach ($products as $section => $items)
                foreach ($items as $key => $value)
                    echo "$section:\t$key\t($value)<br>";
            echo "<pre>";
            ?>
            <h4>Chess</h4>
            <?php
            $chessboard = array(
                array('r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'),
                array('p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'),
                array('_', '_', '_', '_', '_', '_', '_', '_'),
                array('_', '_', '_', '_', '_', '_', '_', '_'),
                array('_', '_', '_', '_', '_', '_', '_', '_'),
                array('_', '_', '_', '_', '_', '_', '_', '_'),
                array('P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'),
                array('R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R'),
            );

            echo "<pre>";
            foreach ($chessboard as $row) {
                foreach ($row as $piece)
                    echo "$piece";
                echo "<br>";
            }

            echo "<\pre>";
            ?>

        </section>
    </div>
</body>

</html>