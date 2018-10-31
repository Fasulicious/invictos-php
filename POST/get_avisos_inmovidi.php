<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAvisos.php");


$DAOAvisos=new DAOAvisos();

				
	$r=$DAOAvisos->busqueda_avisos_inmovidi();

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>