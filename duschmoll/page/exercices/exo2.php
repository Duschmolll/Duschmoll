<?php include_once "../../include/header.php" ?>


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

<?php include_once "../../include/footer.php" ?>