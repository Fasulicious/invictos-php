<?php
session_start();

require_once("../../../UTIL/variables_globales.php");
require_once("../../../UTIL/verificacion.php");


			



		require_once("../../../CONEXION/Conexion.php");
		require_once("../DAO/DAOContacto.php");

		$DAOContacto=new DAOContacto();
		$r=$DAOContacto->modificar($_POST['direccion'],$_POST['telefono'],$_POST['email']);
			print $r;




?>