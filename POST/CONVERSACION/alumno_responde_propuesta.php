<?php
session_start();


	if($_SESSION['tipo']=='A'){

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();

	switch($_POST['accion']){
		case 'rechazar':
			$respuesta=2;
		break;
		case 'aprobar':
			$respuesta=3;
		break;
	}


	$r=$DAOConversacion->cambiar_estado_propuesta_economica($_POST['id_usuario'],$_SESSION['id'],$respuesta);

	print json_encode($r);
}




?>