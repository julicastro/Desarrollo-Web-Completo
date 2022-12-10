<?php include 'includes/header.php';

/* 2 tipos de arreglos 
indexados y asociativos
*/

$carrito = ["Tablet", "Tv", "Pc"]; // tmb array();

// Util para ver contenidos de un array
echo "<pre>"; 
var_dump($carrito);
echo "</pre>";

// Acceder a elemento del array
echo $carrito[1];

// añade un elemento en indice 3
$carrito[3] = "nuevo producto...";

// añadir elemento al final
array_push($carrito, "Audifonos");

// añadir elemento al inicio
array_unshift($carrito, "SmartTV");

// Util para ver contenidos de un array
echo "<pre>"; 
var_dump($carrito);
echo "</pre>";

include 'includes/footer.php';