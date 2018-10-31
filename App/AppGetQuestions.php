<?php 

$sql = "SELECT * FROM app_preguntas ORDER BY id DESC";

require 'AppConnect.php';

$r = mysqli_query($db,$sql);

$result = array();

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
	'tag'=>$row['tag_id'],
	'answer_id'=>$row['respuesta_id'],
	'answer_user_id'=>$row['respuesta_user_id'],
	'user_id'=>$row['user_id'],
        'email'=>$row['email'],
	'fb_id'=>$row['fb_id'],
        'title'=>$row['titulo'],
        'description'=>$row['contenido'],
	'photo'=>$row['foto'],
	'photo_low'=>$row['foto_low'],
	'user_photo'=>$row['user_photo'],
	'name'=>$row['nombre'],
	'last_name'=>$row['apellido'],
	'date'=>$row['fecha'],
	'latitude'=>$row['latitud'],
	'longitude'=>$row['longitud']
    ));
}

echo json_encode(array('result'=>$result));

mysqli_close($db);