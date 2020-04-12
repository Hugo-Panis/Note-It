<?php

session_start();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$obj = new stdClass;

$contentFileJson = file_get_contents("bdd.json");
$scoreBoard = json_decode($contentFileJson, true);

foreach ($scoreBoard['users'] as $value){
    $obj->test = $value['event.name'];

}

echo json_encode($obj);
?>