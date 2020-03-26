<?php
session_start();

$obj = new stdClass;
$obj ->message = 'adresse e-mail ou mot de passe incorrect';
$obj ->success = false;

$contentFileJson = file_get_contents("login.json");
$scoreBoard = json_decode($contentFileJson, true);

//regarde si la combinaison user/pass est la meme que dans le json -> success true
foreach ($scoreBoard['users'] as $key => $value){
    if ($value["mail"] == $_POST["mail"] && $value["password"] == $_POST["password"]){
        $obj -> success = true;
    }
    // echo $value['username']. ' | '.$value['password'].'<br>';

}
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

echo json_encode($obj);

?>