<?php
session_start();

	if($_SESSION['tipo']=='P'){
require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();

		

		$r=$DAOConversacion->proponer_a_alumno($_SESSION['id'],$_POST['id_usuario'],$_POST['fecha'],$_POST['hora']);

		print json_encode($r);

	}	



?>