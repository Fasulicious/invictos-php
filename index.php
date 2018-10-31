<?php

session_start();

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

  if($_SESSION['situacion_usuario']==-1){
    include('cuenta_bloqueada.php');
  }else{
    include('pagina_principal.php');
  }

?>