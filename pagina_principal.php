bas<?php 
  // server should keep session data for AT LEAST 1 hour
  ini_set('session.gc_maxlifetime', 360000);

  // each client should remember their session id for EXACTLY 1 hour
  session_set_cookie_params(360000);
  session_start();

require_once('UTIL/variables_globales.php');


/*
require_once('UTIL/verificacion.php');


require_once("CONEXION/Conexion.php");
$og_consulta='';


if(isset($_GET['view']) && isset($_GET['id'])  ){



  switch(strtolower($_GET['view'])){
    case 'anuncios':
      require_once("DAO/AVISOS/DAOAvisos.php");

        $DAOAvisos=new DAOAvisos();

        $id_aviso=explode('_', $_GET['id']);


    
        $og_consulta=$DAOAvisos->get_aviso_por_id($id_aviso[0]);


        if($og_consulta)
        {
          $og_ttl=$og_consulta[0]['titulo'];
          $og_desc=$og_consulta[0]['descripcion'];
          $og_img='IMG/AVISOS/VISTA_PREVIA/WEB/'.$og_consulta[0]['img_previa'].'.'.$og_consulta[0]['img_previa_ext'];
          $og_url=$GL_DNS.'/anuncios/'.$og_consulta[0]['id'].'_'.$og_consulta[0]['img_previa'];
        }

      break;

      case 'noticias':

        require_once("MOD/INSTALACIONES/DAO/DAOInstalaciones.php");

        $DAOInstalaciones=new DAOInstalaciones();

        $id_aviso=explode('_', $_GET['id']);

        $og_consulta=$DAOInstalaciones->get_noticia_por_id($id_aviso[0]);


        if($og_consulta)
        {
          $og_ttl=$og_consulta[0]['titulo'];
          $og_desc=$og_consulta[0]['descripcion'];
          $og_img='IMG/NOTICIAS/FONDOS/WEB/'.$og_consulta[0]['id_img'].'.'.$og_consulta[0]['ext_img'];
          $og_url=$GL_DNS.'/noticias/'.$og_consulta[0]['id_noticia'].'_'.$og_consulta[0]['id_img'];
        }

      break;
      }
    if($og_consulta){
      $og_consulta=json_encode($og_consulta);
    }else{
      $og_ttl='Invictos S.A.C.';
      $og_desc='Descripcion invictos';
      $og_img='IMG/logo-invictos.png';
      $og_url=$GL_DNS;
      $og_consulta='';
    }
}else{
      $og_ttl='Invictos S.A.C.';
      $og_desc='Descripcion invictos';
      $og_img='IMG/logo-invictos.png';
      $og_url=$GL_DNS;
      $og_consulta='';
}

*/

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8"/>
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
  <meta name="author" content=""/>

  <meta property="fb:app_id" content="1196708610389793" />
  <meta property="og:site_name" content="Invictos" />
  <meta property="og:title" content="Invictos - Perfil de usuario" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="<?php echo $GL_DNS;?>" />
  <meta property="og:description" content="Comparte tu conocimiento"/>  
  <meta property="og:image" content="http://www.invictos.la/IMG/logo-invictos.png"/>


  <!--<base href="<?php echo $GL_DNS;?>/"></base>-->

  
  <meta name="description" content="<?php echo $og_desc;?>">

  <link rel="shortcut icon" href="IMG/icon.png">
  <script type="text/javascript" src="JS/LIBRERIAS/jquery-2.1.1.min.js"></script>   



  <link rel="stylesheet" type="text/css" href="CSS/estilo_general.css" media="screen"/>
  
<script type="text/javascript" src="JS/funciones_generales.js"></script>   

<?php
if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){
?>
  <script type="text/javascript" src="JS/funciones_componentes.js"></script>   
<?php
}
?>
  <script type="text/javascript" src="JS/funciones_cargando.js"></script> 

  <link rel="stylesheet" type="text/css" href="CSS/estilo_componentes.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/caja_user.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_menu.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_pie_pagina.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_popup_registro_login.css" media="screen"/>
  <link rel="stylesheet" type="text/css" href="CSS/estilo_biblioteca_portal.css" media="screen"/>

<script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/latest/css/bootstrap.css" />

  <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />

  
  <script type="text/javascript" src="COMPONENTES/ini.js"></script>

<script type="text/javascript" src="JS/funciones_votacion.js"></script>  




  <title>Invictos</title>

</head>

<body class="inicio">

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=1196708610389793";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<section>
  <div id="cargando" class="comp-cargando" data-srclogo="" data-animacionretirar="desplazar_arriba">
    <div data-elemento="imagen" data-src="IMG/logo_blanco.png" ></div>
    <div data-elemento="barra"></div>
    <div data-elemento="fondo" data-src="" data-expandido="false"></div>
  </div>
</section>





    <div id="menu_principal"  <?php if(isset($_SESSION['id'])){ echo 'class="logeado"'; } ?>>
      <div class="comp-menu-fijo comp-animacion-ini trans_bezier_04" data-posicionlogo="izq" data-resizable="false" data-tipo="menu-superior" data-animaciondelay="0.5" data-srclogo="IMG/BARRA_SUPERIOR/logo.png" data-msrclogo="IMG/BARRA_SUPERIOR/isotipo.png" data-dim_msrc="750" data-estilo_menu_r="menu_resp_vh">
        
        <ClassExtra DOMdestino="logo" class="trans_bezier_04 anim-escala_0">
        </ClassExtra>

<?php
    if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){
    
    if(isset($_SESSION['id'])){
    
    	if($_SESSION['tipo']=='A'){
?>        

	<opcion iddom="btn_menu_inicio" area="inicio" href='' texto="Inicio" rol="principal" columna="home">      
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 anim-desplaza-izquierda-10 anim-oculto-opacity activo">
          </ClassExtra>
        </opcion>
        
<?php } else if($_SESSION['tipo']=='P'){ ?>

	<opcion iddom="btn_menu_inicio" area="inicio" href='' texto="Inicio" rol="principal" columna="home">      
          <ClassExtra DOMdestino="comp-menu-opcion" class="oculto">
          </ClassExtra>
        </opcion>

	<opcion iddom="btn_menu_inicio" area="dashboard" href='' texto="Inicio" rol="principal" columna="dashboard">      
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 anim-desplaza-izquierda-10 anim-oculto-opacity activo">
          </ClassExtra>
        </opcion>
        
<?php } 
	} else { ?>

<opcion iddom="btn_menu_inicio" area="inicio" href='' texto="Inicio" rol="principal" columna="home">      
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 anim-desplaza-izquierda-10 anim-oculto-opacity activo">
          </ClassExtra>
        </opcion>
        
<?php } ?>        
       

        <opcion iddom="btn_menu_biblio" area="biblio" href="biblioteca" texto="Biblioteca" rol="principal" columna="biblioteca">      
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_02 anim-desplaza-izquierda-10 anim-oculto-opacity activo">
          </ClassExtra>
        </opcion>



 <?php 
}

 if(!isset($_SESSION['id'])){ ?>

        <opcion area="" texto="Reg&iacute;strate"  rol="" columna="">
          <ClassExtra DOMdestino="comp-menu-opcion" class="comp-btn-abrir-popup trans_bezier_04 trans_delay_04 anim-desplaza-izquierda-10 anim-oculto-opacity ">
          </ClassExtra>          
          <AttrExtra DOMdestino="comp-menu-opcion" atributos="data-popup='registro'">
          </AttrExtra>
        </opcion>

<!-- Opcion que aparece cuando estoy fuera de sesion -->

        <opcion area="" texto="Ingresa"  columna="">
          <ClassExtra DOMdestino="comp-menu-opcion" class="comp-btn-abrir-popup trans_bezier_04 trans_delay_06 anim-desplaza-izquierda-10 anim-oculto-opacity ">
          </ClassExtra>
          <ClassExtra DOMdestino="comp-menu-opcion-texto" class="boton_invictos">
          </ClassExtra>
          <AttrExtra DOMdestino="comp-menu-opcion" atributos="data-popup='login'">
          </AttrExtra>
        </opcion>


<?php }else{ 


  
  if($_SESSION['usuario_activo']){
?>
<!-- Opciones que aparecen cuando estoy dentro de sesion -->
        <opcion iddom="menu_buscador_profesores" area="" texto="<div id='buscador_profesores'> <div class='icono_busqueda'></div> <input id='input-buscador-profesores' placeholder='Buscar Profesor'> </div> <div id='cerrar_buscador_profesores'></div>"  columna="columna2">
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_04 anim-desplaza-izquierda-10 anim-oculto-opacity ">
          </ClassExtra>       

          <HtmlExtra DOMdestino="comp-menu-celda-content" posicion="final">
            
            <div id="" class="popup_busqueda_profesores oculto">              
              <div class="content_lista">


              <!--       
              -->
              </div>
            </div>

          </HtmlExtra>
        </opcion>


        <opcion iddom="btn_menu_notificaciones" area="" texto="<div id='btn_notificaciones' class=''></div>"  columna="columna2">
          <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_06 anim-desplaza-izquierda-10 anim-oculto-opacity">
          </ClassExtra>
        </opcion>
<?php
  }

    if(isset($_SESSION['foto'])){
?>  
        <opcion area="" texto="<div id='btn_perfil_menu' style='background-image: url(IMG/USUARIOS/MINI/<?php echo $_SESSION['foto']; ?>);' class=''></div>" submenu="si" >
<?php
    }else{
      if($_SESSION['tipo']=='A'){
?>
        <opcion area="" texto="<div id='btn_perfil_menu' style='background-image: url(IMG/USUARIOS/MINI/alumno_default.png' class=''></div>" submenu="si" >
<?php
      }else{
?>
        <opcion area="" texto="<div id='btn_perfil_menu' style='background-image: url(IMG/USUARIOS/MINI/profesor_default.png' class=''></div>" submenu="si" >
<?php
      }
    }

          

  
  if($_SESSION['usuario_activo']){
?>
<ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_08 anim-desplaza-izquierda-10 anim-oculto-opacity">
          </ClassExtra>
          <subopcion href='<?php echo $_SESSION['id'];?>' area="perfil" texto="<div class='nombre'><?php echo $_SESSION['nombres'].' '.$_SESSION['apellidos'];?></div><div class='txt'>ver perfil</div>"  columna="perfil" rol="principal" >
          </subopcion>

          <subopcion iddom="btn_submenu_inicio" area="inicio" href='' texto="Inicio" rol="principal" columna="home">
          </subopcion>

          <subopcion iddom="btn_submenu_biblio" area="biblio" href="biblioteca" texto="Biblioteca" rol="principal" columna="biblioteca">
          </subopcion>

          <subopcion iddom="btn_submenu_notificaciones" area="" texto="Mensajes" columna="columna2">
          </subopcion>

          <subopcion area="dashboard" texto="Dashboard" columna="dashboard" rol="principal">
          </subopcion>

          <subopcion area="terminos" texto="T&eacute;rminos y condiciones"  columna="terminos" rol="principal">
          </subopcion>

          <subopcion area="cambiar_pass" texto="Cambiar Contrase&ntilde;a"  columna="cambiar_pass" rol="principal">
          </subopcion>
<?php

}else{

  ?>
        <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_08 anim-desplaza-izquierda-10 anim-oculto-opacity submenu_reducido">
          </ClassExtra>

  <?php
}
?>
          <subopcion area="" texto="Cerrar Sesi&oacute;n"  columna="">          
            <ClassExtra DOMdestino="comp-submenu-opcion" class="comp-login-cerrar_sesion">
            </ClassExtra>
          </subopcion>

        </opcion>
<?php } ?>

      </div>
    </div>







<div id="content_pagina">

  <div id="content_home" class="rol-columnas trans_bezier_1" data-rol="principal">

    <div class="columna-pagina none oculto" data-columna="home">
      <?php
      if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){

        include('buscador_principal.html');

      }
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="biblioteca">
      <?php

      if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){
        include('biblioteca.php');
      }
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="nosotros">
      <?php

      include('nosotros.html');

      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="terminos">
      <?php

      include('terminos.html');

      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="cambiar_pass">
      <?php
      if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){

      include('cambiar_pass.html');
      }

      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="contacto">
      <?php
      include('contacto.html');
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="activar_cuenta">
      <?php
      include('activar_cuenta.php');
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="login">
      <?php
      include('pagina_login.html');
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="perfil">
      <?php
      if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){

      include('perfil_profesor.php');
    }
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="dashboard">
      <?php
      if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){

      include('dashboard_profesor.html');
    }
      ?>
    </div>

    <div class="columna-pagina none oculto" data-columna="error">
      <?php
      include('pagina_error.html');
      ?>
    </div>
      


      <div id="pie_pagina">
        <div id="menu_pie">
          
            <div class="comp-menu-fijo comp-animacion-ini trans_bezier_05" data-fraccion_altura="1.1" data-posicionlogo="der"  data-resizable="false" data-tipo="menu-superior" data-animaciondelay="0.5" data-srclogo="IMG/PIE_PAGINA/logo.png"  data-msrclogo="IMG/PIE_PAGINA/isotipo.png" data-dim_msrc="750" data-menufijo="no">
              
              <ClassExtra DOMdestino="logo" class="trans_bezier_04 anim-escala_0">
              </ClassExtra>

              <opcion area="nosotros" texto="Nosotros" rol="principal" columna="nosotros">      
                <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 anim-desplaza-abajo-10 anim-oculto-opacity activo">
                </ClassExtra>
              </opcion>

              <opcion area="terminos" texto="T&eacute;rminos y condiciones"  rol="principal"  columna="terminos">
                <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_02 anim-desplaza-abajo-10 anim-oculto-opacity ">
                </ClassExtra>
              </opcion>

              <opcion area="contacto" texto="Cont&aacute;ctanos"  rol="principal" columna="contacto">
                <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_04 anim-desplaza-abajo-10 anim-oculto-opacity ">
                </ClassExtra>
              </opcion>

              <opcion area="" texto="Facebook"  columna="">
                <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_06 anim-desplaza-abajo-10 anim-oculto-opacity ">
                </ClassExtra>

                <AttrExtra DOMdestino="comp-menu-opcion" atributos="href='https://www.facebook.com/invictos.oficial.1618' target='blank'">
                </AttrExtra>
              </opcion>

              <opcion area="" texto="Twitter"  columna="" >
                <ClassExtra DOMdestino="comp-menu-opcion" class="trans_bezier_04 trans_delay_08 anim-desplaza-abajo-10 anim-oculto-opacity ">
                </ClassExtra>
                <AttrExtra DOMdestino="comp-menu-opcion" atributos="href='https://twitter.com/_Invictos' target='blank'">
                </AttrExtra>
              </opcion>
            </div>

        </div>
        <div id="firma">
          Copyright &copy; 2017 Invictos
        </div>

      </div>





      <div id="lista_cursos_autocompletado" class="lista_input_autocompletado">
        
        <div class="mensaje_resultado">
          No se encontraron coincidencias
        </div>
        <div class="mensaje_buscando">
          Buscando...
        </div>
        <div class="lista_cursos_temas">
          

          <div class="comp-consultor-elemento" data-elemento="temas_cursos" data-condicion="consulta_1" data-orderby="order_1" data-conteo="5" data-recarga="false">
            
            
            <condicion data-iddom="condicion_temas_cursos" data-campo="nombre_busqueda" data-valor=""></condicion>
            
            <estructura>
              <div class="tema_curso trans_bezier_03 elemento" data-nombre="{nombre}"  data-id_elemento="{id}">
                <div>{nombre}</div>
              </div>
            </estructura>

          </div>



        </div>

        <input type="hidden" id="ubicacion-buscador">
      </div>




<style>
  .lista_input_autocompletado{
    position: absolute;
    background: white;
    width: 300px;
    min-height: 30px;
    z-index: 100;
    display: none;

    padding: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0px 0px 1px #aaa;
  }
  .lista_input_autocompletado .elemento{
    padding: 7px 10px;
    font-size: 13px;
    cursor:pointer;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .lista_input_autocompletado .elemento.hover{
    background: #ffb4b4;
    color: white;
  }
  .lista_input_autocompletado .elemento:hover{
    background: #ffcccc;
    color:inherit;

  }

  .lista_input_autocompletado .mensaje_resultado,
  .lista_input_autocompletado .mensaje_buscando{

    padding: 11px;
    color: #666;
    display: none;
  }

  .contenedor_msj_alerta_busqueda{
    position: absolute;
    z-index: 100;
    bottom: 115px;
    width: 150px;
    height: 62px;
  }

  .mensaje_alerta_busqueda{
    border-radius: 10px;
    background-color: #FFEDED;
    border: 3px red solid;
    padding: 10px;
    color: brown;
    text-align: center;
    box-shadow: 0px 2px 5px rgba(100,100,100,0.5);
    width: 150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;

  }
  .contenido_msj_alerta_busqueda.oculto{

    -webkit-transform:translate3D(0px,50px,0px);
    -moz-transform:translate3D(0px,50px,0px);
    -ms-transform:translate3D(0px,50px,0px);
    -o-transform:translate3D(0px,50px,0px);
    transform:translate3D(0px,50px,0px);
    pointer-events: none;
  }
  .contenido_msj_alerta_busqueda.oculto .mensaje_alerta_busqueda{
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
  body .comp-gestion-elemento .comp-ge-campo[data-campo="skill_level"]{
	    width: calc(33% - 5px) !important;
	    margin-left: 5px;
	    height: 51px;
     }

</style>

      <div id="lista_lugares_preferentes" class="lista_input_autocompletado">
        <input type="hidden" id="prioridad" value="no">
        <div class="lista_cursos_temas">
          
        </div>

      </div>


      <style>
      </style>





  <div id="lista_conocimientos_autocom" class="lista_input_autocompletado">
    
    <div class="lista_cursos_temas">
      <div id="crear_nuevo_curso_tema" >
        No existe ese tema, &iquest;Desea crearlo?
      </div>
      <div class="msj_alerta">
        Ya existe este tema o curso.
      </div>
      <div class="msj_correcto">
        Creado con &eacute;xito.
      </div>
      <div class="comp-consultor-elemento" data-elemento="buscar_conocimientos" data-condicion="consulta_1" data-orderby="order_1" data-conteo="5" data-recarga="false">                
        <condicion data-iddom="condicion_temas_cursos" data-campo="nombre_busqueda" data-valor=""></condicion>
        <estructura>
          <div class="tema_curso trans_bezier_03 elemento" data-nombre="{nombre}"  data-id_elemento="{id}">
            <div>{nombre}</div>
          </div>
        </estructura>
      </div>
    </div>
    
        <div style="display: none">
          
          <div class="comp-gestion-elemento" data-titulo="" data-objeto="" data-elemento="nuevo_tema" data-accion="insert" data-gestion="insert" data-espaciototal="4">

            <bloque data-espacio="4 ">
              <campo data-nombre="Conocimiento:" data-iddom="nombre_nuevo_tema_curso" data-update="false" data-espacio="4" data-campo="nombre" data-tipo="text"></campo>
              <campo data-nombre="nombre busqueda:" data-iddom="nombre_busqueda_nuevo_tema_curso" data-update="false" data-espacio="4" data-campo="nombre_busqueda" data-tipo="text">
              </campo>
            </bloque>
          </div>

        </div>
        <input type="hidden" id="lugar_buscador" />
  </div>
  
  <div id="lista_academ_autocom" class="lista_input_autocompletado">
    
    <div class="lista_cursos_academ">      
      <div class="comp-consultor-elemento" data-elemento="buscar_academ" data-condicion="consulta_1" data-orderby="order_1" data-conteo="5" data-recarga="false">                
        <condicion data-iddom="condicion_temas_academ" data-campo="nombre" data-valor=""></condicion>
        <estructura>
          <div class="tema_academ trans_bezier_03 elemento" data-nombre="{nombre}"  data-id_elemento="{id}">
            <div>{nombre}</div>
          </div>
        </estructura>
      </div>
    </div>
    
        <div style="display: none">
          
          <div class="comp-gestion-elemento" data-titulo="" data-objeto="" data-elemento="nuevo_tema" data-accion="insert" data-gestion="insert" data-espaciototal="4">

            <bloque data-espacio="4 ">
              <campo data-nombre="Academ:" data-iddom="nombre_nuevo_tema_curso" data-update="false" data-espacio="4" data-campo="nombre" data-tipo="text"></campo>
              <campo data-nombre="nombre:" data-iddom="nombre_busqueda_nuevo_tema_curso" data-update="false" data-espacio="4" data-campo="nombre_busqueda" data-tipo="text">
              </campo>
            </bloque>
          </div>

        </div>
        <input type="hidden" id="lugar_buscador" />
  </div>






  </div>

</div>















<style>
  /*Style LOGIN*/

        body .comp-login .comp-login-campo_input{
          border: 1px solid rgba(48, 48, 48, 0.21) ;
          border-radius: 5px;
          width: 86%;
        margin-left: auto;
        margin-right: auto;
          padding: 2px;
        }
        body .comp-login .comp-login-campo input{

            font-size: 12px;
            padding-left: 10px;
        }

        body .comp-login .comp-login-btn-enviar{

          background: #ff5757;
        }
        body .comp-login .comp-login-btn-enviar:hover{

                background-color:rgb(199,62,62);  
        }
      body .comp-login-campo-checks{

        border: 0px !important;
        margin-bottom: 13px;
      }

      body .comp-login .comp-login-radiobutton.select{
        background: rgb(80,151,255); 
      }


</style>


<?php
if(!isset($_SESSION['id'])){
  include('popup_login.html');
  include('popup_update_tipo.html');
  
}
  

  if($_SESSION['usuario_activo'] || empty($_SESSION['id'])){
    include('popup_mapa.html');
  }

  if($_SESSION['usuario_activo']){
    include('popup_profesor_clases_confirma.html');

  }
?>










<style>

  

  .mensaje_accion_formulario{
    border-radius: 5px;
    min-width: 150px;
    max-width: 250px;
    text-align: center;
    position: fixed;
    bottom: 10px;
    font-size: 14px;
    right: 10px;
    z-index: 10;
    padding: 3px 20px;
    -webkit-transition: all .5s cubic-bezier(0,0,0.25,1);
    -moz-transition: all .5s cubic-bezier(0,0,0.25,1);
    -ms-transition: all .5s cubic-bezier(0,0,0.25,1);
    -o-transition: all .5s cubic-bezier(0,0,0.25,1);
    transition: all .5s cubic-bezier(0,0,0.25,1);
  }
  .mensaje_accion_formulario.positivo{
    background: lightgreen;
    color: green;
    border: 2px solid green;
  }
  .mensaje_accion_formulario.negativo{
    background: pink;
    color: red;
    border: 2px solid red;
  }
  .mensaje_accion_formulario.oculto{
    -webkit-transform: translate3d(0px,100px,0px);
    -moz-transform: translate3d(0px,100px,0px);
    -ms-transform: translate3d(0px,100px,0px);
    -o-transform: translate3d(0px,100px,0px);
    transform: translate3d(0px,100px,0px);
    opacity: 0;
  }

</style>

<div id="mensaje_aviso_positivo" class="mensaje_accion_formulario positivo oculto">
  <div class="contenedor-tabla">
    <div class="contenedor-celda">
      <span class="texto">El aviso fue guardado correctamente.</span> 
    </div>
  </div>
</div>

<div id="mensaje_aviso_error" class="mensaje_accion_formulario negativo oculto">
  <div class="contenedor-tabla">
    <div class="contenedor-celda">
      <span class="texto">Hubo un error al intentar guardar el aviso.<br>
      Revise los datos por favor.</span> 
    </div>
  </div>
</div>






<!--
<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>

-->


    <script>
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

var placeSearch, input_autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function Autocompletador() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  input_autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('lugar_autocompletado')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  input_autocomplete.addListener('place_changed', fillInAddress);


}

// [START region_fillform]
function fillInAddress() {

    // Get the place details from the autocomplete object.
    var place = input_autocomplete.getPlace();

  /*
    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }*/

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.

    $('#barra_buscador #lugar_latitud').val(place.geometry.location.lat());
    $('#barra_buscador #lugar_longitud').val(place.geometry.location.lng());


    GL_RESET_CIRCULO=true;
    $('#seccion_funcion-buscar #posicion-circulo').val('no');

    /*for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }*/

}
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
// [END region_geolocation]

    </script>


    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDynHed2PBvIyUCd6WkYmDyQbuC5aiYGHs&libraries=places&callback=Autocompletador"></script>



<input type="hidden" id="ss_id" value="<?php echo $_SESSION['id'];?>" />
<input type="hidden" id="ss_username" value="<?php echo $_SESSION['username'];?>" />
<input type="hidden" id="ss_nombres" value="<?php echo $_SESSION['nombres'];?>" />
<input type="hidden" id="ss_apellidos" value="<?php echo $_SESSION['apellidos'];?>" />
<input type="hidden" id="ss_correo" value="<?php echo $_SESSION['correo'];?>" />
<input type="hidden" id="ss_foto" value="<?php echo $_SESSION['foto'];?>" />
<input type="hidden" id="ss_tipo" value="<?php echo $_SESSION['tipo'];?>" />
<input type="hidden" id="ss_latitud" value="<?php echo $_SESSION['latitud_ini'];?>" />
<input type="hidden" id="ss_longitud" value="<?php echo $_SESSION['longitud_ini'];?>" />
<input type="hidden" id="ss_usuario_activo" value="<?php echo $_SESSION['usuario_activo'];?>" />



<input type="hidden" id="gl_get_user" value="<?php echo $_GET['user'];?>" />
<input type="hidden" id="gl_get_view" value="<?php echo $_GET['view'];?>" />
<input type="hidden" id="gl_get_subview" value="<?php echo $_GET['subview'];?>" />

<!--<input type="hidden" id="gl_get_id" value="<?php echo $_GET['id'];?>" />
<input type="hidden" id="gl_get_consulta_data" value='<?php echo $og_consulta;?>' />
-->



<!--
<div id="debug" style="position:fixed; bottom:0; left:0; width:300px; height: 200px; background: white; z-index:5000; overflow-x:hidden;"></div>-->


  <link rel="stylesheet" type="text/css" href="CSS/estilo_componentes_responsive.css" media="screen"/>
  
</body></html>