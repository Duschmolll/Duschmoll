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
            <h2>PHP Objects</h2></br>
            <?php
            $object1 = new User;
            $object2 = clone $object1;
            print_r($object1);
            echo "<br>";

            $object1->name = "Joe";
            $object1->password = "Joepass";
            $object2->name = "Marie";
            $object2->password = "Mariepass";
            print_r($object1);
            echo "<br>";
            print_r($object2);
            echo "<br>";

            $object1->save_user();
            echo "<br>";
            $object2->save_user();
            echo "<br>";

            class User
            {
                public $name, $password;

                function save_user()
                {
                    echo "Save User Code goes here";
                }
                function get_name()
                {
                    return $this->name;
                }
                function get_password()
                {
                    return $this->password;
                }
            }
            echo "The password of " . $object1->get_name() . " is : " . $object1->get_password();
            echo "<br>";
            echo "The password of " . $object2->get_name() . " is : " . $object2->get_password();

            ?>
        </section>
    </div>
</body>

</html>