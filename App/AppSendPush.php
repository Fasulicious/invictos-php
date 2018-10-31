<?php 
//importing required files 
require_once 'AppDbOperation.php';
require_once 'AppSendNotification.php';
require_once 'AppPush.php';
require 'AppConnect.php'; 
 
$dbc = new AppDbOperation();
 
$response = array(); 
 
if($_SERVER['REQUEST_METHOD']=='POST'){ 
 //checking the required params 
 if(isset($_POST['title']) and isset($_POST['message']) and isset($_POST['id'])){
 
 //creating a new push
 $push = null; 

 $push = new AppPush($_POST['title'], $_POST['message']);
 
 //getting the push from push object
 $mPushNotification = $push->getPush(); 
 
 //getting the token from database object 
 $devicetoken = $dbc->getTokenById($_POST['id']);
 
 //creating firebase class object 
 $firebase = new AppSendNotification(); 
 
 //sending push notification and displaying result 
 echo $firebase->send($devicetoken, $mPushNotification);
 }else{
 $response['error']=true;
 $response['message']='Parameters missing';
 }
}else{
 $response['error']=true;
 $response['message']='Invalid request';
}
 
echo json_encode($response);