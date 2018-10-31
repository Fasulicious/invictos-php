<?php
 
 if($_SERVER['REQUEST_METHOD']=='POST'){
 
 $image = $_POST['image'];
 $id = $_POST['id'];
 
 require 'AppConnect.php';
 
 $sql = "UPDATE app_preguntas SET foto = (?) WHERE id = $id";
 
 $stmt = mysqli_prepare($db,$sql);
 
 mysqli_stmt_bind_param($stmt,"s", $image);
 mysqli_stmt_execute($stmt);
 
 $check = mysqli_stmt_affected_rows($stmt);
 
 if($check == 1){
 echo "Image Uploaded Successfully";
 }else{
 echo "Error Uploading Image";
 }
 mysqli_close($db);
 }else{
 echo "Error";
 }