<?php include_once "../../include/header.php" ?>

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

<?php include_once "../../include/footer.php" ?>