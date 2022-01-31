<?php include_once "../../include/header.php" ?>

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

<?php include_once "../../include/footer.php" ?>