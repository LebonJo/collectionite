<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'collectionite');

//$db = mysqli_connect('mysql.hostinger.fr', '', '', '');

mysqli_set_charset($db, 'utf8');

$select_pokemon = "SELECT * FROM objet WHERE id =".$_GET['id_objet'];

$result = mysqli_query($db, $select_pokemon);

$objet = mysqli_fetch_assoc($result);
// on affiche les informations de l'enregistrement en cours
echo '[{"id":'.$objet['id'].',"nom":"'.$objet['nom'].'","description":"'.$objet['description'].'","photo":"'.$objet['photo300'].'","type":"'.$objet['type'].'"}]';

mysqli_close($db);
?>
