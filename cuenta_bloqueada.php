<?php 
  // server should keep session data for AT LEAST 1 hour
  ini_set('session.gc_maxlifetime', 360000);

  // each client should remember their session id for EXACTLY 1 hour
  session_set_cookie_params(360000);
  session_start();

require_once('UTIL/variables_globales.php');


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="author" content=""> 
  <meta property="og:type" content="website"> 
  
  <meta property="og:site_name" content="www.invictos.pe">
  <meta property="og:url" content="<?php echo $og_url;?>">
  <meta property="og:title" content="<?php echo $og_ttl;?>">
  <meta property="og:description" content="<?php echo $og_desc;?>">  
  <meta property="og:image" content="<?php echo $og_img;?>">  

  <base href="<?php echo $GL_DNS;?>/"></base>

  
  <meta name="description" content="<?php echo $og_desc;?>">

  <link rel="shortcut icon" href="IMG/icon.png">


  <script type="text/javascript" src="JS/LIBRERIAS/jquery-2.1.1.min.js"></script>   



  <link rel="stylesheet" type="text/css" href="CSS/estilo_general.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_menu.css" media="screen"/>
  
<script type="text/javascript" src="JS/funciones_generales.js"></script>   
  <script type="text/javascript" src="COMPONENTES/ini_bloqueado.js"></script>
<script type="text/javascript" src="JS/funciones_cargando.js"></script> 

  <title>Invictos - Cuenta bloqueada</title>
</head>

<body class="inicio">



<section>
  <div id="cargando" class="comp-cargando" data-srclogo="" data-animacionretirar="desplazar_arriba">
    <div data-elemento="imagen" data-src="IMG/logo_blanco.png"></div>
    <div data-elemento="barra"></div>
    <div data-elemento="fondo" data-src="" data-expandido="false"></div>
  </div>
</section>





    <div id="menu_principal">
      <div class="comp-menu-fijo comp-animacion-ini trans_bezier_04" data-posicionlogo="izq" data-tipo="menu-superior" data-animaciondelay="0.5" data-srclogo="IMG/BARRA_SUPERIOR/logo.png">
        
        <ClassExtra DOMdestino="logo" class="trans_bezier_04 anim-escala_0">
        </ClassExtra>

          <opcion area="" texto="Cerrar Sesi&oacute;n"  columna="">          
            <ClassExtra DOMdestino="comp-menu-opcion" class="comp-login-cerrar_sesion">
            </ClassExtra>
          </opcion>

        </opcion>


      </div>
    </div>


<div class="contenedor-tabla">
  <div class="contenedor-celda">
        
    <div class="mensaje">
      <div>Tu cuenta ha sido bloqueada por darle un mal uso o por un reporte de conducta perjudicial por tu parte.</div>
      <div class="imagen"></div>
    </div>

  </div>
</div>


<style>
.mensaje{

    max-width: 500px;
    text-align: center;
    padding: 30px;
    box-sizing: border-box;
    margin: auto;
}
  .imagen{
    display: inline-block;
    width: 180px;
    height: 130px;
    background-position: center;;
    background-repeat: none;
    background-size: cover;
    background-image: url(IMG/logotipo_invictos.png);
  }
</style>

</body></html>