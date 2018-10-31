<?php
 
 if($_SERVER['REQUEST_METHOD']=='POST'){
 
 $number = $_POST['number'];
 
 require 'AppConnect.php';
 
 $sql = "UPDATE grl_tbl_users SET nivel_educativo = (?) WHERE nivel_educativo IS NULL";
 
 $stmt = mysqli_prepare($db,$sql);
 
 mysqli_stmt_bind_param($stmt,"s", $number);
 mysqli_stmt_execute($stmt);

 echo "Fixed";

 mysqli_close($db);
 }else{
 echo "Error";
 }