<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();

				
	$r=$DAOConversacion->leer_notificacion($_POST['id_usuario'],$_SESSION['id']);


	print json_encode($r);




?>