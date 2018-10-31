<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/ESTADISTICAS/DAOEstadisticas.php");

$DAOEstadisticas=new DAOEstadisticas();

	if($_POST['cod_profesor']!=$_SESSION['id']){
		$r=$DAOEstadisticas->aumentar_visita($_POST['cod_profesor']);
	}
	
	print $r;
	
?>