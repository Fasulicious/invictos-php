<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../DAO/DAOInstalaciones.php");

$DAOInstalaciones=new DAOInstalaciones();

			
$r=$DAOInstalaciones->get($_POST['indice']);
if($r){

	print json_encode($r);
}else{
	print 'no data';
}

?>