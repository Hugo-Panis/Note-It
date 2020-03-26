<?php
session_start();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

$obj = new stdClass();

if (isset($_SESSION['mail'], $_SESSION['password'])){
    $obj->isConnected = true;
}else {
    $obj->isConnected = false;
}

echo json_encode($obj);