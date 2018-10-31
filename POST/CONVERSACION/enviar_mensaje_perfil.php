<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();
	
	$respuesta=$DAOConversacion->obtener_tipo_usuario($_POST['id_usuario']);

	$r=$DAOConversacion->insertar_mensaje($_SESSION['id'],$_POST['id_usuario'],$_SESSION['tipo'],$respuesta->tipo,$_POST['mensaje']);

	print json_encode($r);




?>