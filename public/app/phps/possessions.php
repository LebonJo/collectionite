<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'collectionite');

//$db = mysqli_connect('mysql.hostinger.fr', '', '', '');

mysqli_set_charset($db, 'utf8');

$sql = "SELECT * FROM possession s JOIN objet o ON s.id_objet = o.id WHERE s.id_user=".$_GET['id_user'];

if($_GET['orderBy'] == 'desc') $sql = $sql." ORDER BY s.id DESC";

$sql = $sql." LIMIT ".$_GET['bottomLimit'].", ".$_GET['topLimit'];

$req = mysqli_query($db, $sql);

echo("[");

$i = 1;

while($data = mysqli_fetch_assoc($req)){
    if($i == 1){
        echo('{');
        $i = 2;
    }else{
        echo(',{');
    }
    // on affiche les informations de l'enregistrement en cours
    echo '"id": '.$data['id'].', "nom":"'.$data['nom'].'", "photo":"'.$data['photo100'].'", "type":"'.$data['type'].'"';
    echo('}');
};

echo("]");

mysqli_close($db);
?>
