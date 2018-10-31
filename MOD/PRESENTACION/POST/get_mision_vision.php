<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../DAO/DAOMisionVision.php");

$DAOMisionVision=new DAOMisionVision();

			
$r=$DAOMisionVision->get_mision_vision();
print json_encode($r);

?>