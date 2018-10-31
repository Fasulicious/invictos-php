<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/ESTADISTICAS/DAOEstadisticas.php");

$DAOEstadisticas=new DAOEstadisticas();

	$r=$DAOEstadisticas->set_ranking();
	
	print $r;
	
?>