<?php include 'includes/header.php';

$nombreCliente = "Juli Castro";

// extension de string .length
echo strlen($nombreCliente);
var_dump($nombreCliente); 
echo "<br/>";

// eliminar espacios en blanco
$texto = trim($nombreCliente);
echo strlen($texto);
echo "<br/>";

// convertir a mayuscula
echo strtoupper($nombreCliente);
echo "<br/>";

// convertir a minusculas
echo strtolower($nombreCliente);
echo "<br/>";

$mail1 = "correo@correo.com";
$mail2 = "correo@correo.com";

var_dump(strtolower($mail1) === strtolower($mail2));
echo "<br/>";

echo str_replace("Juli","J", $nombreCliente);

echo "<br/>";

// revisar si string existe o no
echo strpos($nombreCliente, "Castro");
echo "<br/>";

// concat
$tipoCliente = "premium";
echo "el cliente " . $nombreCliente . " es " . $tipoCliente;
echo "<br/>";
echo "El cliente {$nombreCliente} es {$tipoCliente}";

include 'includes/footer.php';