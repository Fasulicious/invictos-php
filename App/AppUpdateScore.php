<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $score = $_POST['score'];
    $ok = $_POST['ok'];

    if (empty($id) || empty($ok)) {
	echo "empty";
    } else {

 try{
 $sql = "UPDATE `app_respuestas` SET `score` = '$score' WHERE `id` = '$id';";
 
 //adding the path and name to database 
 if(mysqli_query($db, $sql)){
 
 //filling response array with values 
 $response['error'] = false; 
 $response['url'] = $file_url; 
 $response['name'] = $name;
 }
 //if some error occurred 
 }catch(Exception $e){
 $response['error']=true;
 $response['message']=$e->getMessage();
 } 
 //displaying the response 
 echo json_encode($score);
 
 //closing the connection 
 mysqli_close($db);
}
}