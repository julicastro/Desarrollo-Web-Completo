<?php include 'includes/header.php';

$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = "30";

var_dump($numero1 > $numero2);
echo "<br/>";

var_dump($numero1 < $numero2);
echo "<br/>";

var_dump($numero1 >= $numero2);
echo "<br/>";

var_dump($numero1 <= $numero2);
echo "<br/>";

var_dump($numero1 == $numero2);
echo "<br/>";

//== revisa valor. === revisa valor y tipo de dato
var_dump($numero1 === $numero2);
echo "<br/>";

// da -1, 0, 1 depende cual de las 3 se cumpla
var_dump($numero1 <=> $numero2);
echo "<br/>";



include 'includes/footer.php';