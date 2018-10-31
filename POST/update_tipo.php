<?php

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

session_start();
require_once("../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");


$logeo=new DAOLogin();

$tipo=$_POST['tipo'];
if($_POST['tipo']!='A' && $_POST['tipo']!='P'){
	$tipo='A';
}

$respuesta=$logeo->update_tipo($_SESSION['id_fb'],$tipo);


$_SESSION['tipo']=$tipo;
json_encode($respuesta);

?>