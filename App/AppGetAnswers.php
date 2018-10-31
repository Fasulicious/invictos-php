<?php 

$sql = "SELECT * FROM app_respuestas";

require 'AppConnect.php';

$r = mysqli_query($db,$sql);

$result = array();

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
        'user_id'=>$row['user_id'],
	'id'=>$row['id'],
	'question_id'=>$row['pregunta_id'],
	'description'=>$row['contenido'],
	'name'=>$row['nombre'],
	'last_name'=>$row['apellido'],
	'photo'=>$row['foto'],
	'user_photo'=>$row['user_photo'],
	'score'=>$row['score']
    ));
   }

echo json_encode(array('result'=>$result));

mysqli_close($db);