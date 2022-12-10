<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet', 
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Television 24"', 
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo', 
        'precio' => 400,
        'disponible' => false
    ]
];

echo "<pre>";

var_dump($productos);

// arreglo a string
$json = json_encode($productos, JSON_UNESCAPED_UNICODE);

// string a arreglo
$json_array = json_decode($json); 

var_dump($json);
var_dump($json_array);

echo "</pre>";


include 'includes/footer.php';