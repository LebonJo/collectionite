<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'collectionite');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$select = "SELECT * FROM categorie";

$result = mysqli_query($db, $select);

echo '[';

$i = 1;

while($data = mysqli_fetch_assoc($result)){
	if($i == 1){
        echo('{');
        $i = 2;
    }else{
        echo(',{');
    }
    echo '"label":"'.$data['label'].'"';
    echo('}');
}

echo ']';

mysqli_close($db);
?>