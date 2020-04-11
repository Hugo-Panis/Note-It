<?php
session_start();

// $is_connected = isset($_SESSION['user']);

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$obj = new stdClass();

if (isset($_SESSION['pseudo'], $_SESSION['password'])){
    $obj->isConnected = true;
    $obj->user = $_SESSION['pseudo'];
    $obj->password = $_SESSION['password'];
}else {
    $obj->isConnected = false;
}
echo json_encode($obj);