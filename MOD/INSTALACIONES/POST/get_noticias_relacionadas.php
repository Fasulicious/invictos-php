<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../DAO/DAOInstalaciones.php");

$DAOInstalaciones=new DAOInstalaciones();

			
$r=$DAOInstalaciones->get_noticias_relacionadas($_POST['id_noticia']);
if($r){

	print json_encode($r);
}else{
	print 'no data';
}

?>