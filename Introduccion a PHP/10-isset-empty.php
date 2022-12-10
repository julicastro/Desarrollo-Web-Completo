<?php include 'includes/header.php';

$client = [];
$clientes2 = array();
$clientes3 = array("pedro", "juan", "karen");
$cliente = [
    "nombre" => "juli"
];
//Empty (revisa si esta vacio) 
var_dump(empty($clientes));
var_dump(empty($clientes3));
var_dump(empty($clientes2));
echo "<br/>";

// Issert (revisa si arreglo esta creado o prop esta difinida)
var_dump( isset($clientes4) );
var_dump( isset($clientes1) );
var_dump( isset($clientes2) );
var_dump( isset($clientes3) );
echo "<br/>";

// aca revisa si existe la propiedad
var_dump( isset($cliente["nombre"]) );
var_dump( isset($cliente["apellido"]) );
var_dump( isset($cliente3[100]) ); // si existe el indice 100





include 'includes/footer.php';
