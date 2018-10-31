<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAvisos.php");


$DAOAvisos=new DAOAvisos();

				
	$r=$DAOAvisos->get_aviso_por_id($_POST['id']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>