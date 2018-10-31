<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAvisos.php");


$DAOAvisos=new DAOAvisos();

				
				
	$r=$DAOAvisos->get_mis_avisos($_SESSION['id']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>