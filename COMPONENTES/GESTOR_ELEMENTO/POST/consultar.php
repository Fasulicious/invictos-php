<?php
session_start();


require_once("../../UTIL_PHP/variables_globales.php");
require_once("../../UTIL_PHP/armador_sql.php");

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOGestor.php");
require_once("config.php");


	$DAOGestor=new DAOGestor();

	$resultado=$DAOGestor->fun_select_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'*','','',$_POST['contador'],10);


?>