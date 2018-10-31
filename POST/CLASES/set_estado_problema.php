<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");

	if(isset($_SESSION['super_user'])){

		$DAOClases=new DAOClases();
		$r = $DAOClases->set_estado_problema($_POST['cod_alumno'],$_POST['cod_profesor'],$_POST['fecha'],$_POST['hora'],$_POST['estado']);

		print json_encode($r);
		
	}

?>