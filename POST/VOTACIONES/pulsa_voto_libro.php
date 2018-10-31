<?php
session_start();

if(isset($_SESSION['id'])){

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/AVISOS/DAOVotoLibro.php");


$DAOVotoLibro=new DAOVotoLibro();

				
	$r=$DAOVotoLibro->pulsa_votar_libro($_SESSION['id'],$_POST['id_recurso']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


}
?>