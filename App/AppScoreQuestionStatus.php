<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $question_id = $_POST['question_id'];
    $user_id = $_POST['user_id'];
    $like_status = $_POST['like_status'];

    if (empty($question_id) || empty($user_id)) {
	echo "empty";
    } else {

  try{
 $sql = "REPLACE INTO `app_like_question` SET `id` = '$id',`question_id` = '$question_id', `user_id` = '$user_id', `like_status` = '$like_status'";
 
 //adding the path and name to database 
 if(mysqli_query($db, $sql)){
 
 //filling response array with values 
 $response['error'] = false; 
 }
 //if some error occurred 
 }catch(Exception $e){
 $response['error']=true;
 $response['message']=$e->getMessage();
 } 

 //displaying the response 
 echo mysqli_insert_id($db);

 //closing the connection 
 mysqli_close($db);
}
}