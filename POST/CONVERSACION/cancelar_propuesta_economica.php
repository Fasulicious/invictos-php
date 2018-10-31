<?php
session_start();

	if($_SESSION['tipo']=='P'){
require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();
	

		$r=$DAOConversacion->cambiar_estado_propuesta_economica($_SESSION['id'],$_POST['id_usuario'],0);

		print json_encode($r);
	}



?>