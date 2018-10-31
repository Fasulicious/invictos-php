<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");




		$DAOConversacion=new DAOConversacion();

		if($_SESSION['tipo']=='A'){
			$alumno=$_SESSION['id'];
			$profesor=$_POST['id_usuario'];
		}elseif($_SESSION['tipo']=='P'){
			$profesor=$_SESSION['id'];
			$alumno=$_POST['id_usuario'];
		}
		
		$r=$DAOConversacion->consulta_propuesta_economica($profesor,$alumno);

	
		print json_encode($r);
	

	


?>