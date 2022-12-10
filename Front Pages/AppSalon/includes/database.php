<?php

$db = mysqli_connect("localhost","root","root","appsalon");

if(!$db){
    echo "conexion fallida";
}else{
    echo "conexion correcta";
}