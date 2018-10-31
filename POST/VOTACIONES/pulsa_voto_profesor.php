<?php
session_start();

if(isset($_SESSION['id'])){

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/AVISOS/DAOVotoProfesor.php");


$DAOVotoProfesor=new DAOVotoProfesor();

				
	$r=$DAOVotoProfesor->pulsa_votar_profesor($_SESSION['id'],$_POST['id_profesor']);

	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}

}else{	
		print 'no data';
}

?>