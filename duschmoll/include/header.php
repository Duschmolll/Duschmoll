<?php
$path = "http://" . $_SERVER['SERVER_NAME'];

?>


<!DOCTYPE html>
<html>

<head>
    <title>Title of the document</title>
    <script src="<?php echo $path; ?>/duschmoll/lib/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php echo $path; ?>/duschmoll/res/css/main.css">
    <link rel="icon" type="image/x-icon" href="<?php echo $path; ?>/duschmoll/res/img/favicon.ico" />
</head>

<body class="background-main">

    <header id="header">
        <div class="site-title-nav">
            <h1 class="site-title">
                <a href="index.php">duschmoll<span>.org</span></a>
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