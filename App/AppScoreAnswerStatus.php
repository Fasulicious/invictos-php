<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $answer_id = $_POST['answer_id'];
    $user_id = $_POST['user_id'];
    $like_status = $_POST['like_status'];

    if (empty($answer_id) || empty($user_id)) {
	echo "empty";
    } else {

  try{
 $sql = "UPDATE `app_like_answer` SET  `like_status` = '$like_status' WHERE `answer_id` = '$answer_id' AND `user_id` = '$user_id'";
 
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