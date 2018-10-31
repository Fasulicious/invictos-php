<?php
require 'AppConnect.php';

if(isset($_POST)){
    $email = trim($_POST['email']);
    $fb = trim($_POST['fb']);
    $user_id  = trim($_POST['user_id']);
    $description = trim($_POST['description']);
    $title = trim($_POST['title']);
    $tag = trim($_POST['tag']);
    $name = trim($_POST['name']);
    $last_name = trim($_POST['last_name']);
    $latitude = trim($_POST['latitude']);
    $longitude = trim($_POST['longitude']);
    $photo  = trim($_POST['photo']);
    $user_photo  = trim($_POST['user_photo']);

    if (empty($photo) && empty($description) && empty($title)) {
        echo "empty";
    } else {
        $insert = $db->prepare("INSERT INTO app_preguntas (email, user_id, fb_id, contenido, tag_id, titulo, nombre, apellido, latitud, longitud, foto, user_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $insert->bind_param('ssssssssssss', $email, $user_id, $fb, $description, $tag, $title, $name, $last_name, $latitude, $longitude, $photo, $user_photo);	
        if ($insert->execute())
	    $id = mysqli_insert_id($db);
            echo $id;
    }
}
mysqli_close($db);