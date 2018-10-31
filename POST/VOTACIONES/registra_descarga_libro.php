<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/AVISOS/DAOVotoLibro.php");


$DAOVotoLibro=new DAOVotoLibro();

	$r=$DAOVotoLibro->descarga_libro($_POST['id_recurso']);

	if($r){
		print json_encode($r);
	}else{
		print 'no data';
	}

?>