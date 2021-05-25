<?php

require "app.php";

function includeTemplate( string $nombre, bool $inicio = false ){
    include TEMPLATES_URL . "/${nombre}.php";
}