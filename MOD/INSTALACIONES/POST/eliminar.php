<?php
session_start();

require_once("../../../UTIL/variables_globales.php");
require_once("../../../UTIL/verificacion.php");




		require_once("../../../CONEXION/Conexion.php");
		require_once("../DAO/DAOInstalaciones.php");

		$DAOInstalaciones=new DAOInstalaciones();

		$r=$DAOInstalaciones->eliminar_instalacion($_POST['id']);
		print $r;


?>