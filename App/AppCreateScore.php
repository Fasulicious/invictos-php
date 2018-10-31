<?php
require 'AppConnect.php';

if(isset($_POST)){
    $answer_id = trim($_POST['answer_id']);
    $user_id = trim($_POST['user_id']);
    $like_status = trim($_POST['like_status']);

    if (empty($answer_id) && empty($user_id)) {
	echo "Field cannot be empty";
    } else {
	$insert = $db->prepare("INSERT INTO  app_like_answer 
(answer_id, user_id, like_status) VALUES (?, ?, ?)");
	$insert->bind_param('sss', $answer_id, $user_id, $like_status);
	if ($insert->execute())
	    $id = mysqli_insert_id($db);
            echo $id;
    }
}