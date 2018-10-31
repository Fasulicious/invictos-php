<?php
session_start();


require_once("../../UTIL_PHP/variables_globales.php");
require_once("../../UTIL_PHP/armador_sql.php");

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOGestor.php");
require_once("config.php");


$elemento=$_POST['elemento'];
$imagen=$_POST['hay_imagen'];
$id_elemento=$_POST['id_elemento'];



unset($_POST['hay_imagen']);
unset($_POST['elemento']);
unset($_POST['id_elemento']);


$partes_sql=fun_obtener_campo_id($GL_ELEMENTOS[$elemento]);


	if($partes_sql['tipo_id']=='str'){
		$condicion=$partes_sql['campo_id'].'="'.$id_elemento.'"';

	}else{

		$condicion=$partes_sql['campo_id'].'='.$id_elemento;

	}



	$DAOGestor=new DAOGestor();

	$resultado=$DAOGestor->fun_delete_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$condicion);


	$resultado['id_elemento']=$id_elemento;

	echo json_encode($resultado);

?>