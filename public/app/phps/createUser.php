<?php

$input = file_get_contents("php://input");
$postdata = json_decode($input);

$db = mysqli_connect('localhost', 'root', '', 'collectionite');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$sql = 'INSERT INTO user (pseudo, password, nom, prenom, email, type) VALUES ("'.$postdata->pseudo.'", "'.$postdata->mdp.'", "'.$postdata->nom.'", "'.$postdata->prenom.'", "'.$postdata->email.'", "user")';
$req = mysqli_query($db, $sql);

mysqli_close($db);
?>