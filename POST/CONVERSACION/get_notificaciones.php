<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");




	$DAOConversacion=new DAOConversacion();

	$tipo_receptor=$_SESSION['tipo'];
	if($tipo_receptor=='A'){
		$tipo_emisor='P';
	}else{
		$tipo_emisor='A';
	}
	
	$r=$DAOConversacion->consulta_notificaciones($_SESSION['id'],$_POST['inicio'],$tipo_emisor,$tipo_receptor);




	print json_encode($r);


	


?>