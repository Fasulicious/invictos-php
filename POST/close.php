<?php
session_start();

//ELIMINANDO LAS VARIABLES DE SESSION
//-----------------------------------------------------------

unset($_SESSION['id']);
unset($_SESSION['id_fb']);
unset($_SESSION['user']);
unset($_SESSION['nombre']);
unset($_SESSION['id_img']);
unset($_SESSION['ext_img']);
unset($_SESSION['presentacion']);
unset($_SESSION['usuario_activo']);
//-----------------------------------------------------------

session_destroy();


?>