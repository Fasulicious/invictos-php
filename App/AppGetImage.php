<?php
 
 if($_SERVER['REQUEST_METHOD']=='GET'){
 $id = $_GET['id'];
 $sql = "select foto from app_preguntas where id = '$id'";
 require_once('AppConnect.php');
 
 $r = mysqli_query($db, $sql);
 
 $result = mysqli_fetch_array($r);
 
 header('content-type: image/jpeg');
 
 echo base64_decode($result['image']);
 
 mysqli_close($db);
 
 }else{
 echo "Error";
 }