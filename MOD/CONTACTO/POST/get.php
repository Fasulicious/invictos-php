<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../DAO/DAOContacto.php");

$DAOContacto=new DAOContacto();

			
$r=$DAOContacto->get();
if($r){

	print json_encode($r);
}else{
	print 'no data';
}

?>