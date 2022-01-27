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

    <?php
    function fix_names()
    {
        global $fullname;
        $fullname[0] = ucfirst(strtolower($fullname[0]));
        $fullname[1] = ucfirst(strtolower($fullname[1]));
    }
    ?>

    <div class="main-post">
        <section id="post">
            <h2>PHP Form with array and function</h2></br>

            <form action="exo2.php" method="post">
                Name: <input type="text" name="name"><br>
                Surname: <input type="text" name="surname"><br>
                <input type="submit">
            </form>

            <?php $fullname = array(($_POST["name"]), ($_POST["surname"]));
            fix_names(); ?>

            </br>
            <p> Your name is : <?php echo $fullname[0]; ?></p>
            <p> Your surname is : <?php echo $fullname[1]; ?></p>
        </section>
    </div>
</body>

</html>