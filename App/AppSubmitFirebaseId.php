<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $token = $_POST['token'];
    $ok = $_POST['ok'];

    if (empty($id) || empty($ok)) {
	echo "empty";
    } else {

 try{
 $sql = "UPDATE `grl_tbl_users` SET `notification_token` = '$token' WHERE `id` = '$id';";
 
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
 echo json_encode($token);
 
 //closing the connection 
 mysqli_close($db);
}
}