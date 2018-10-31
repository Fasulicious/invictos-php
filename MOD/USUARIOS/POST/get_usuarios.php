<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../../../ADMIN/DAO/DAOLogin.php");


$DAOLogin=new DAOLogin();

if($DAOLogin->es_usuario($_SESSION['super_user'])=='si'){


	require_once("../DAO/DAOUsuarios.php");

	$DAOUsuarios=new DAOUsuarios();

				
	$r=$DAOUsuarios->get_usuarios();

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}

}

?>