<?php
require 'AppConnect.php';

if(isset($_POST)){    
    $user_id = trim($_POST['user_id']);
    $question_user_id = trim($_POST['question_user_id']);
    $question_id = trim($_POST['question_id']);
    $status = trim($_POST['status']);
    $question_user_name = trim($_POST['question_user_name']);
    $content = trim($_POST['content']);
    
	$insert = $db->prepare("INSERT INTO  app_notifications 
(user_id, question_user_id, question_id, status, question_user_name, content) VALUES (?, ?, ?, ?, ?, ?)");
	$insert->bind_param('ssssss', $user_id, $question_user_id, $question_id, $status, $question_user_name, $content);
	if ($insert->execute())
	    $id = mysqli_insert_id($db);
            echo $id;
}