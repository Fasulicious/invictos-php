<?php
require 'AppConnect.php';

if(isset($_POST)){
    $pregunta_id = trim($_POST['question_id']);
    $user_id = trim($_POST['user_id']);
    $pregunta_user_id = trim($_POST['question_user_id']);
    $fb_id = trim($_POST['fb_id']);
    $pregunta_fb_id = trim($_POST['question_fb_id']);
    $pregunta_email = trim($_POST['question_email']);
    $email = trim($_POST['email']);
    $answer = trim($_POST['answer']);
    $name = trim($_POST['name']);
    $last_name = trim($_POST['last_name']);
    $photo = trim($_POST['photo']);
    $user_photo = trim($_POST['user_photo']);

    if (empty($email) && empty($answer)) {
	echo "Field cannot be empty";
    } else {
	$insert = $db->prepare("INSERT INTO  app_respuestas 
(pregunta_id, user_id, pregunta_user_id, fb_id, pregunta_fb_id, pregunta_email, email, contenido, nombre, apellido, foto, user_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	$insert->bind_param('ssssssssssss', $pregunta_id, $user_id, $pregunta_user_id, $fb_id, $pregunta_fb_id, $pregunta_email, $email, $answer, $name, $last_name, $photo, $user_photo);
	if ($insert->execute())
	    $id = mysqli_insert_id($db);
            echo $id;
    }
}