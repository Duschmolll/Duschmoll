<?php
// header('Content-Type: application/json');

$idarray = array(); //Initiating the array of IDs.

//Setting up the info of the ingredients buttons
//CATEGORY_OF_INGREDIENT => ID => VALUE => IMAGE

$categories = array(
    'Viandes' => array(
        'jambon' => array('Jambon' => 'https://img.icons8.com/color/48/000000/jamon.png'),
        'pouletfume' => array('Poulet Fumé' => 'https://img.icons8.com/color/48/000000/thanksgiving.png'),
        'oeuf' => array('Oeuf' => 'https://img.icons8.com/color/48/000000/egg-carton.png'),
        'thon' => array('Thon' => 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/fa314a/external-salmon-alaska-icongeek26-flat-icongeek26.png'),
        'saumonfume' => array('Saumon Fumé' => 'https://img.icons8.com/color/48/fa314a/sashimi.png'),
        'viandehachee' => array('Viande hachée' => 'https://img.icons8.com/plasticine/100/000000/ground-beef.png'),
        'lardons' => array('Lardons' => 'https://img.icons8.com/color/48/000000/bacon.png')
    ),
    'Fromages' => array(
        'brie' => array('Brie' => 'https://img.icons8.com/officel/50/000000/mozzarella.png'),
        'emmental' => array('Emmental' => 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-cheese-diet-and-nutrition-icongeek26-linear-colour-icongeek26.png'),
        'chevre' => array('Chèvre' => 'https://img.icons8.com/plasticine/50/000000/mozzarella.png'),
        'raclette' => array('Raclette' => 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cheese-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png')
    ),
    'Condiments' => array(
        'tomate' => array('Tomate' => 'https://img.icons8.com/color/48/000000/tomatoes.png'),
        'epinard' => array('Épinard' => 'https://img.icons8.com/color/48/000000/spinach.png'),
        'salade' => array('Salade' => 'https://img.icons8.com/color/48/000000/cabbage.png'),
        'aneth' => array('Aneth' => 'https://img.icons8.com/color/48/000000/gailan.png'),
        //'oignons' => array('Oignons' => 'https://img.icons8.com/color/48/000000/onion.png'),
        'patate' => array('Pomme de Terre' => 'https://img.icons8.com/color/48/000000/vegetables-bag.png')
    ),
    'Sauces' => array(
        'huiledolive' => array('Huile d\'Olive' => 'https://img.icons8.com/color/48/000000/olive-oil.png'),
        'cremefraiche' => array('Crême Fraiche' => 'https://img.icons8.com/ultraviolet/48/000000/honey.png'),
        'sauceburger' => array('Sauce Burger' => 'https://img.icons8.com/color/48/000000/sauce-bottle.png')
    ),
    'Misc' => array(
        'noix' => array('Noix' => 'https://img.icons8.com/color/50/000000/pecan.png'),
        'citron' => array('Citron' => 'https://img.icons8.com/color/50/000000/citrus.png'),
        'miel' => array('Miel' => 'https://img.icons8.com/color/48/000000/honey-spoon.png')
    )
);

function myShuffle($arrayToShuffle)
{
    $shuffledArray = array();
    $keyArray = array_keys($arrayToShuffle);
    shuffle($keyArray);
    foreach ($keyArray as $k) {
        $shuffledArray[$k] = $arrayToShuffle[$k];
    }
    return ($shuffledArray);
}

foreach ($categories as $cagName => $propreties) {
    $categories[$cagName] = myShuffle($categories[$cagName]); //Shuffle the order of the buttons
    foreach ($propreties as $id => $subPropreties)
        array_push($idarray, $id); // Getting their ID.
}



// echo json_encode($idarray);
