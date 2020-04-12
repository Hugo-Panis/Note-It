<?php
session_start();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');// pour ne pas garder de cache
header('Content-type: application/json');

$obj = new stdClass;
$obj ->message = 'pseudo ou mot de passe incorrect';
$obj ->success = false;

$contentFileJson = file_get_contents("bdd.json");
$scoreBoard = json_decode($contentFileJson, true);


//regarde si la combinaison user/pass est la meme que dans le json -> success true
foreach ($scoreBoard['users'] as $value){
    if ($value["pseudo"] == $_POST["pseudo"] && $value["password"] == $_POST["password"]){
        $_SESSION['pseudo'] = $value["pseudo"];
        $_SESSION['password'] = $value["password"];

        $obj->success = true;
        break;
    }

}

echo json_encode($obj);
?>