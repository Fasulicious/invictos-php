<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");



	$DAOClases=new DAOClases();
	$r = $DAOClases->alumno_califica_clase($_POST['reporte']);


	foreach ($_POST['reporte'] as $clase) {
		if($clase['problema']!=0){
			//envio de correo
		}
	}

	print json_encode($r);
?>