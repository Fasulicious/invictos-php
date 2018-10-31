<?php
session_start();

require_once("../../../UTIL/verificacion.php");
require_once("../../../UTIL/variables_globales.php");



require_once("../../../CONEXION/Conexion.php");
require_once("../DAO/DAOMisionVision.php");
$DAOMisionVision=new DAOMisionVision();

	$r=$DAOMisionVision->modificar_presentacion($_POST['qns_sms'],$_POST['mision_vision']);
	print $r;



?>