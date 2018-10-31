<?php
session_start();

//ELIMINANDO LAS VARIABLES DE SESSION
//-----------------------------------------------------------

unset($_SESSION);


//-----------------------------------------------------------

session_destroy();


?>