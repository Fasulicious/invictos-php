<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAdmin.php");
require_once("../UTIL/verificacion.php");


	$DAOAdmin=new DAOAdmin();
				
	$r=$DAOAdmin->get_num_usuarios($_POST['curso'],$_POST['latitud'],$_POST['longitud'],$_POST['moneda'],$_POST['costo_inicial'],$_POST['costo_final'],$_POST['distancia']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>