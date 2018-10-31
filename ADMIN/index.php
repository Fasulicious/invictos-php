<?php 
session_start();

require_once('../UTIL/variables_globales.php');

if(isset($_SESSION['super_user'])){	
	header('location:../ADMINISTRADOR');
}
?>



<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head><meta http-equiv="Content-Type" content="text/html; charset=euc-jp">
	
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>	
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="invictos.la">
	<meta property="og:title" content="Invictos">
	<meta property="og:description" content="">	
	<!--<meta property="og:image" content="<?php echo $og_image;?>">	-->
	<base href="<?php echo $GL_DNS;?>/"></base>
	
	<meta name="description" content="">
  <link rel="shortcut icon" href="IMG/favicon.png">

  <script type="text/javascript" src="JS/LIBRERIAS/jquery-2.1.1.min.js"></script>  
  <!--<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script> -->
  <script type="text/javascript" src="JS/funciones_generales.js"></script>   

  <script type="text/javascript"  src="ADMIN/JS/funciones.js"></script> 
  <script type="text/javascript"  src="ADMIN/JS/funciones_login.js"></script> 

  <link rel="stylesheet" type="text/css" href="ADMIN/CSS/estilo.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_general.css" media="screen"/>

  <script type="text/javascript" src="COMPONENTES/ini_admin_login.js"></script>   

  <title>Invictos S.A.C.</title>
</head>

<body>





<section>
  <div id="cargando" class="comp-cargando" data-srclogo="" data-animacionretirar="desplazar_arriba">
    <div data-elemento="imagen" data-src="IMG/logo_blanco.png"></div>
    <div data-elemento="barra"></div>
    <div data-elemento="fondo" data-src="" data-expandido="false"></div>
  </div>
</section>



    <section id="inicio" class="area-pagina-inicio comp-animacion-ini" data-animaciondelay="1">

      


        <div id="slider-portal" class="comp-slider-full trans_bezier_1" data-tipocarga="manual" data-botones="false" data-autoanimado="true" data-tiemposlide="15">
           
          <slide data-src="IMG/INICIO/slide1.jpg" data-msrc="IMG/INICIO/slide1.jpg"></slide>
          
        </div>



          <div id="caja_login" class="trans_bezier_05">

            <div id="campo_logo" class="campo trans_bezier_05">

              <img src="IMG/logo.png" alt="">

            </div>
            <div id="campo_user" class="campo trans_bezier_05">
              <input type="text" id="username" placeholder="Usuario" autocomplete="off">
              <span class="trans_bezier_05"> Escribe tu Username</span>
            </div>
            <div id="campo_pass" class="campo trans_bezier_05">
              <input type="password" id="password" placeholder="Contraseña" autocomplete="off">
              <span class="trans_bezier_05">Escribe tu Contraseña</span>
            </div>

            <div id="campo_btn" class="campo">
              <input type="button" id="btn_logear" class="trans_bezier_05" value="Ingresar">
              
            </div>

            <span id="aviso_no_login" class="trans_bezier_05">Usuario o Contraseña incorrectos</span>
            
          </div>

    </section>





<!--
<div id="cuerpo">


</div>
-->
</body>
</html>