<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/ESTADISTICAS/DAOEstadisticas.php");


$DAOEstadisticas=new DAOEstadisticas();

				
	$r=$DAOEstadisticas->get_estadisticas_ganancias_mensuales($_SESSION['id'],$_POST['fecha_ini'],$_POST['fecha_fin']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>