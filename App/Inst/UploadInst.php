<?php 
//importing required files 
require_once 'DbOperation.php';
require 'DbConnect.php'; 
 
$dbc = new DbOperation();
 
$response = array(); 
 
if($_SERVER['REQUEST_METHOD']=='POST'){ 
 //hecking the required params 
 if(isset($_POST['nombre'])){

 $tipo = $_POST['tipo'];
 $gest = $_POST['gest'];
 $nombre = $_POST['nombre']; 
 $dpt = $_POST['dpt'];
 $prov = $_POST['prov'];
 $dist = $_POST['dist']; 
 
 //sending push notification and displaying result 
 echo $dbc->uploadInst($tipo, $gest, $nombre, $dpt, $prov, $dist);
 }else{
 $response['error']=true;
 $response['message']='Parameters missing';
 }
}else{
 $response['error']=true;
 $response['message']='Invalid request';
}
 
echo json_encode($response);