<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'collectionite');

//$db = mysqli_connect('mysql.hostinger.fr', '', '', '');

mysqli_set_charset($db, 'utf8');

$select_user = "SELECT id, pseudo FROM user WHERE pseudo =".$_GET['pseudo']." AND password =".$_GET['mdp'];

$result = mysqli_query($db, $select_user);

$user = mysqli_fetch_assoc($result);

if($user){
	echo '[{"success":true, "user":"'.$user['pseudo'].'", "id_user":'.$user['id'].'}]';
} else {
	echo '[{"success":false}]';
}

mysqli_close($db);
?>
