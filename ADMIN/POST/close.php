<?php
session_start();

//ELIMINANDO LAS VARIABLES DE SESSION
//-----------------------------------------------------------

unset($_SESSION["super_user"]);
//-----------------------------------------------------------

session_destroy();


?>