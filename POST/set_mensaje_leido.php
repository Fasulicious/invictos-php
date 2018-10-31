<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAvisos.php");


$DAOAvisos=new DAOAvisos();

				
	$r=$DAOAvisos->set_mensaje_leido($_SESSION['id'],$_POST['id_mensaje']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>