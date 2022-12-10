<?php include 'includes/header.php';

// son equivalentes a los objetos en javascript

$cliente = [
    "nombre" => "Juli",
    "saldo" => 700,
    "info" => [
        "tipo" => "premium",
        "disponibles" => 100
    ]
];

echo "<pre>"; 
var_dump($cliente["nombre"]);
echo "</pre>";

echo "<pre>"; 
var_dump($cliente);
echo "</pre>";

echo $cliente["info"]["tipo"];

// agrega propiedad q no existe. si existe la remplaza
$cliente["codigo"] = 123546;

echo "<pre>"; 
var_dump($cliente);
echo "</pre>";


include 'includes/footer.php';