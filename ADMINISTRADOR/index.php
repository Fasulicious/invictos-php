<?php
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);
session_start();

require_once('../UTIL/variables_globales.php');


if(!isset($_SESSION['super_user'])){ //si la cuenta esta activada no tiene pq estar en esta pagina, asi que se le redirecciona a su perfil
	
	header('location:../');
}

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head><meta http-equiv="Content-Type" content="text/html; charset=euc-jp">
	
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>	
	<meta property="og:type" content="website">	
	<base href="<?php echo $GL_DNS;?>/"></base>
	<meta name="description" content="">
  <link rel="shortcut icon" href="IMG/icon.png">


	<script  type="text/javascript"  src="JS/LIBRERIAS/jquery-2.1.1.min.js"></script>	
	<script  type="text/javascript"  src="JS/LIBRERIAS/AjaxUpload.2.0.min.js"></script>	

	<link rel="stylesheet" type="text/css" href="CSS/estilo_general.css" media="screen"/>
	<link rel="stylesheet" type="text/css" href="CSS/estilo_responsive.css" media="screen"/>



	<script type="text/javascript" src="MOD/USUARIOS/JS/usuarios.js"></script>

	<script type="text/javascript" src="JS/funciones_generales.js"></script>

	<script type="text/javascript" src="ADMINISTRADOR/JS/funciones.js"></script>

	<script type="text/javascript" src="ADMINISTRADOR/JS/admin_usuarios.js"></script>
	<script type="text/javascript" src="ADMINISTRADOR/JS/admin_qns_sms.js"></script>

	<script type="text/javascript" src="ADMINISTRADOR/JS/admin_contacto.js"></script>
	<!--<script type="text/javascript" src="ADMINISTRADOR/JS/admin_clientes.js"></script>-->

	<script type="text/javascript" src="ADMIN/JS/funciones_close.js"></script>

	<link rel="stylesheet" type="text/css" href="ADMINISTRADOR/CSS/estilo.css" media="screen"/>
	

	<link rel="stylesheet" type="text/css" href="ADMINISTRADOR/CSS/estilo_admin_qns_sms.css" media="screen"/>
	<link rel="stylesheet" type="text/css" href="ADMINISTRADOR/CSS/estilo_admin_usuarios.css" media="screen"/>
	<link rel="stylesheet" type="text/css" href="ADMINISTRADOR/CSS/estilo_admin_contacto.css" media="screen"/>

	<script type="text/javascript" src="COMPONENTES/ini_admin.js"></script>

	<title>Administrador Invictos</title>

<style>
/* Popup container - can be anything you want */
.popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* The actual popup */
.popup .popuptext {
    visibility: hidden;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
    from {opacity: 0;} 
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
}
</style>
</head>

<body>



<section>
  <div id="cargando" class="comp-cargando" data-srclogo="" data-animacionretirar="desplazar_arriba">
    <div data-elemento="imagen" data-src="IMG/logo_blanco.png"></div>
    <div data-elemento="barra"></div>
    <div data-elemento="fondo" data-src="" data-expandido="false"></div>
  </div>
</section>




<header class="header">
	
	<div class="menu_sup">

    <div class="logo inicio trans_bezier_05">
        <a href="<?php echo $GL_DNS;?>"><img data-src="IMG/logo_blanco.png" alt="" title=""></a>
    </div>

    <div class="opciones">
    	

    	<div class="opcion" data-area="usuarios_activos">
    		Usuarios Invictos
    	</div>

    	<div class="opcion" data-area="problemas_clases">
    		Problemas de clases
    	</div>

    	<div class="opcion" data-area="instalaciones">
    		Temas y cursos
    	</div>


    	<div class="opcion" data-area="informacion">
    		Informaci&oacute;n
    	</div>

    	<div class="opcion" data-area="terminos">
    		T&eacute;rminos y condiciones
    	</div>
<!--
    	<div class="opcion" data-area="contacto">
    		Contacto
    	</div>-->
    	<div class="opcion" data-area="usuarios">
    		Usuarios
    	</div>
    	<div class="opcion" data-area="correo">
    		Correo
    	</div>

    </div>
    <div class="div_cerrar_sesion">Cerrar sesion</div>
	</div>  
  
</header>


<div id="cuerpo">


	<div id="contenido-instalaciones-principal" class="contenido-principal  contenido_menu">
		
	<div id="div_nueva_instalacion">

          <div class="comp-gestion-elemento" data-titulo="Registrar Tema o Curso" data-titulo_update="Editar Tema o Curso" data-elemento="temas_cursos" data-accion="insert" data-gestion="todo" data-espaciototal="4">
			<bloque data-espacio="4">
	            <campo data-nombre="Nombre:" data-iddom="nombre_tema_curso" data-espacio="4" data-campo="nombre" data-tipo="text"></campo>
	            <campo data-nombre="" data-iddom="nombre_busqueda_tema_curso" data-espacio="4" data-campo="nombre_busqueda" data-tipo="hidden"></campo>	        
			</bloque>
          </div>
		</div>
		
		<div class="ttl_content">Temas y Cursos Creados</div>
		
		<div class="div_filtro">
			<span>Filtro: </span> <span><input type="text" id="filtro_temas_cursos"></span>
		</div>
		

		<div id="content_instalaciones">	

	      <div class="comp-consultor-elemento" data-elemento="temas_cursos" data-condicion="consulta_1" data-orderby="order_nombre" data-conteo="60" data-recarga="true">                
	        <condicion data-iddom="condicion_temas_cursos" data-campo="nombre_busqueda" data-valor=""></condicion>
	        <estructura>
	          <div class="tema_curso trans_bezier_03 elemento" data-nombre="{nombre}"  data-id_elemento="{id}" style="display: inline-block; width: 320px">
	            <div>{nombre}</div>
	          </div>
	        </estructura>
	      </div>

		</div>

	</div>

	<div id="contenido-usuarios_activos-principal" class="contenido-principal contenido_select contenido_menu">

		<div id="div_editar_usuario" class="oculto">

          <div class="comp-gestion-elemento" data-titulo="Gestionar usuarios" data-titulo_update="Editar estado de usuario" data-elemento="usuarios_invictos" data-accion="update" data-gestion="update" data-espaciototal="4">
			<bloque data-espacio="4">
	            <campo data-nombre="Nombre:" data-iddom="nombre_usuario" data-update="false" data-espacio="4" data-campo="nombres" data-tipo="text"></campo>
	            <campo data-nombre="Apellido:" data-iddom="apellido_usuario" data-update="false" data-espacio="4" data-campo="apellidos" data-tipo="text"></campo>

	            <campo data-nombre="Monto generado:" data-iddom="" data-update="false" data-espacio="4" data-campo="monto_acumulado" data-tipo="text">
	            </campo>

	            <campo data-nombre="Comisi&oacute; por pagar:" data-iddom="" data-update="false" data-espacio="4" data-campo="comision" data-tipo="text">
	            </campo>
	            <campo data-nombre="Fecha l&iacute;mite de pago:" data-iddom="" data-update="false" data-espacio="4" data-campo="fecha_fin" data-tipo="text">
	            </campo>

	            <campo data-nombre="Situaci&oacute;n de usuario:" data-espacio="4" data-campo="situacion_usuario" data-tipo="select" data-grupo="gpo_situacion_cuenta" data-select="1">
	              <div data-opcion="Usuario bloqueado por caso cr&iacute;tico" data-value="-1"></div>
	              <div data-opcion="Desactivado por no pagar comisi&oacute;n" data-value="0"></div>
	              <div data-opcion="Usuario en buen estado" data-value="1"></div>
	            </campo>


	            <campo data-nombre="Estado del pago actual:" data-espacio="4" data-campo="pagado" data-tipo="radio" data-grupo="gpo_deuda" data-select="1">
	              <div data-opcion="Deuda cancelada" data-value="1"></div>
	              <div data-opcion="Deuda vigente" data-value="0"></div>
	              <IdExtra DOMdestino="comp-ge-campo" id="radios_estado_deuda"></IdExtra>
	            </campo>

			</bloque>
          </div>
		</div>
		

		<div class="oculto">
			
          <div class="comp-gestion-elemento" data-titulo="" data-titulo_update="" data-elemento="pago_usuario" data-accion="update" data-gestion="update" data-espaciototal="4">
			<bloque data-espacio="4">

	            <campo data-nombre="Estado pago:" data-iddom="pago_estado" data-update="false" data-espacio="4" data-campo="pagado" data-tipo="text">
	            </campo>	            
	            <campo data-nombre="Monto acumulado:" data-iddom="pago_monto" data-update="false" data-espacio="4" data-campo="monto_acumulado" data-tipo="text">
	            </campo>
	            <campo data-nombre="Comisi&oacute;n:" data-iddom="pago_comision" data-update="false" data-espacio="4" data-campo="comision" data-tipo="text">
	            </campo>
	            <campo data-nombre="Fecha l&iacute;mite:" data-iddom="pago_fecha_fin" data-update="false" data-espacio="4" data-campo="fecha_fin" data-tipo="text">
	            </campo>

			</bloque>
          </div>
		</div>


		<div class="ttl_content">Usuarios de la Web invictos</div>
		
	      <div class="comp-consultor-elemento" data-elemento="numero_usuarios" data-condicion="consulta_1" data-orderby="" data-conteo="2" data-recarga="false">                
	     
	        <estructura>
	          <div class="numero_usuarios">Hay {conteo} if["{tipo}"=="A"]then[alumnos]else[profesores] activos a la fecha</div>
	        </estructura>
	      </div>


		<div class="div_filtro">
			<span>Filtrar por ID o nombre: </span> <span><input type="text" id="filtro_usuario"></span>
		</div>
		
		<div id="content_usuarios_invictos" class="content_elementos" style="width: 1190px; max-width: 1190px">	

	      <div class="comp-consultor-elemento" data-elemento="usuarios_invictos" data-condicion="consulta_nombre" data-orderby="order_nombre" data-conteo="30" data-recarga="true">                
	        <condicion data-iddom="condicion_filtro_id_usuario" data-campo="id_usuario" data-valor=""></condicion>       
	        <condicion data-iddom="condicion_filtro_nombre_usuario" data-campo="nombre_usuario" data-valor=""></condicion>
	        <estructura>
	          <div class="usuario trans_bezier_03 elemento" data-situacion="{situacion_usuario}" data-nombre="{nombres}" data-id_elemento="{id}" style="display: inline-block; width: 360px">
 
				<div class="div_foto" style="background-image:url('IMG/USUARIOS/WEB/{foto|profesor_default.png}');"></div>

	            <div class="div_nombre">{nombres} {apellidos| }</div>	            
	            <div class="div_comision" data-valor="{comision}">Comisi&oacute;n del mes: <span class="comision">{comision|Sin comisi&oacute;n este mes}</span></div>
	            <div class="div_fecha" data-valor="{fecha_fin}">Fecha l&iacute;mite: <span class="fecha">{fecha_fin|Sin comisi&oacute;n este mes}</span></div>
	            <div class="div_situacion">Situaci&oacute;n: <span class="situacion_usuario">{situacion_usuario}</span></div>

	          	<input class="estado_pago" type="hidden" value="{pagado}">
	          	<input class="monto_acumulado" type="hidden" value="{monto_acumulado}">
	          </div>
	        </estructura>
	      </div>

		</div>

	</div>



	<div id="contenido-problemas_clases-principal" class="contenido-principal  contenido_menu">

		<div id="div_editar_problema" class="oculto">

          <div class="comp-gestion-elemento" data-titulo="Gestionar usuarios" data-titulo_update="Editar estado de usuario" data-elemento="problemas_clase" data-accion="update" data-gestion="update" data-espaciototal="4" data-con_acciones="false">
			<bloque data-espacio="4">

	            <campo data-nombre="" data-iddom="cod_alumno" data-espacio="4" data-campo="cod_alumno" data-tipo="hidden"></campo>	 

	            <campo data-nombre="" data-iddom="cod_profesor" data-espacio="4" data-campo="cod_profesor" data-tipo="hidden"></campo>	 

	            <campo data-nombre="Nombre:" data-iddom="nombre_usuario" data-update="false" data-espacio="4" data-campo="nombre_alumno" data-tipo="text"></campo>
	            <campo data-nombre="Fecha de la clase:" data-iddom="fecha_clase" data-update="false" data-espacio="4" data-campo="fecha" data-tipo="text">
	            </campo>
	            <campo data-nombre="Hora de la clase:" data-iddom="hora_clase" data-update="false" data-espacio="4" data-campo="hora" data-tipo="text">
	            </campo>
	            <campo data-nombre="Situaci&oacute;n del problema:" data-iddom="estado_problema" data-espacio="4" data-campo="estado_problema" data-tipo="select" data-grupo="gpo_problema_estado" data-select="1">
	              <div data-opcion="En revisi&oacute;n" data-value="activo"></div>
	              <div data-opcion="Resuelto" data-value="resuelto"></div>
	              <div data-opcion="Problema no resuelto" data-value="inactivo"></div>
	            </campo>
			</bloque>
          </div>

		</div>
		
		<div class="ttl_content">Problemas en clases</div>
		
		
		<div class="div_filtro">
			<span>Filtrar por nombre de alumno: </span> <span><input type="text" id="filtro_inproblema"></span>
		</div>

		<div class="content_elementos">	

	      <div class="comp-consultor-elemento" data-elemento="problemas_clase" data-condicion="consulta_1" data-orderby="" data-conteo="20" data-recarga="true">                
	        
	        <condicion data-iddom="condicion_filtro_nombre_alumno" data-campo="nombre_filtro" data-valor=""></condicion>

	        <estructura>
	          <div class="problema trans_bezier_03 elemento" data-nombre="{nombre_alumno} {apellido_alumno}" data-cod_alumno="{cod_alumno}" data-cod_profesor="{cod_profesor}" data-fecha="{fecha}" data-hora="{hora}"  data-estado_problema="{estado_problema}">
				<div class="ttl">Alumno</div>
				<div class="div_foto_alumno" style="background-image:url('IMG/USUARIOS/WEB/{foto_alumno|alumno_default.png}');"></div>
	            <div class="div_nombre">{nombre_alumno} {apellido_alumno| }</div>	          
	            <div class="div_info" data-valor="{fecha_fin}">Fecha: <span class="fecha">{fecha}</span></div>         
	            <div class="div_info" data-valor="{fecha_hora}">Hora: <span class="hora">{hora}</span></div>
	            <div class="div_info">Correo: <span class="correo">{correo_alumno}</span></div>
				<div class="div_problema">
				<div class="ttl">Problema</div>					
					<span class="problema_txt">{problema}</span>
					<span>
					{problema_mensaje}
					</span>
				</div>
				<div class="datos_profesor">
				<div class="ttl">Profesor</div>
					<div class="div_foto_profesor" style="background-image:url('IMG/USUARIOS/WEB/{foto_profesor|profesor_default.png}');"></div>
	            	<div class="div_nombre">{nombre_profesor} {apellido_profesor| }</div>	 
	            	<div class="div_info">Correo: <span class="correo">{correo_profesor}</span></div>
	            	<div class="div_info">ID de usuario: <span class="">{cod_profesor}</span></div>
				</div>

	          </div>
	        </estructura>
	      </div>

		</div>

	</div>





	<div id="contenido-informacion-principal" class="contenido-principal contenido_menu">
		


          <div class="comp-gestion-elemento" data-titulo="Registrar Tema o Curso" data-titulo_update="Editar Tema o Curso" data-elemento="info_empresa" data-accion="update" data-gestion="update" data-espaciototal="4" data-objeto="info_empresa">

			<bloque data-espacio="4">
	            <campo data-nombre="Filosof&iacute;a:" data-iddom="edit_quienes_somos" data-espacio="4" data-campo="quienes_somos" data-tipo="textarea"></campo>
	            <campo data-nombre="Misi&oacute;n:" data-iddom="edit_mision" data-espacio="4" data-campo="mision" data-tipo="textarea"></campo>
	            <campo data-nombre="Visi&oacute;n:" data-iddom="edit_vision" data-espacio="4" data-campo="vision" data-tipo="textarea"></campo>	            
			</bloque>
          </div>




		<div class="" style="display:none;">
		<div class="comp-consultor-elemento" data-elemento="info_empresa" data-condicion="" data-orderby="" data-conteo="1" data-recarga="false">               

	        <estructura>
	          <div class="elemento" data-nombre=""  data-id_elemento="{id}">
			
	          </div>
	        </estructura>
	      </div>
	
		</div>
	      

	</div>

	<div id="contenido-terminos-principal" class="contenido-principal contenido_menu">
		


          <div class="comp-gestion-elemento" data-titulo="Actualizar T&eacute;rminos y Condiciones" data-titulo_update="Actualizar T&eacute;rminos y Condiciones" data-elemento="terminos" data-accion="update" data-gestion="update" data-espaciototal="4" data-objeto="terminos">

			<bloque data-espacio="4">
	            <campo data-nombre="T&eacute;rminos y condiciones:" data-iddom="edit_terminos" data-espacio="4" data-campo="terminos_condiciones" data-tipo="textarea"></campo>	            
			</bloque>
          </div>




		<div class="" style="display:none;">
			<div class="comp-consultor-elemento" data-elemento="terminos" data-condicion="" data-orderby="" data-conteo="1" data-recarga="false">
	        <estructura>
	          <div class="elemento" data-nombre=""  data-id_elemento="{id}">			
	          </div>
	        </estructura>
	      </div>
	
		</div>
	      

	</div>


	<div id="contenido-contacto-principal" class="contenido-principal contenido_menu">

      <div class="comp-gestion-elemento" data-titulo="Registrar Informaci&oacute;n contacto" data-titulo_update="Editar Informaci&oacute;n de Contacto" data-elemento="contacto" data-accion="update" data-gestion="update" data-espaciototal="4" data-objeto="contacto">

		<bloque data-espacio="4">
	        <campo data-nombre="Direcci&oacute;n:" data-iddom="" data-espacio="4" data-campo="direccion" data-tipo="text"></campo>
	        <campo data-nombre="Tel&eacute;fono:" data-iddom="" data-espacio="4" data-campo="telefono" data-tipo="text"></campo>
	        <campo data-nombre="E-mail:" data-iddom="" data-espacio="4" data-campo="email" data-tipo="text"></campo>        
		</bloque>
      </div>




		<div class="" style="display:none;">
		<div class="comp-consultor-elemento" data-elemento="contacto" data-condicion="" data-orderby="" data-conteo="1" data-recarga="false">               

	        <estructura>
	          <div class="elemento" data-nombre=""  data-id_elemento="{id}">
			shit
	          </div>
	        </estructura>
	      </div>
	
		</div>
	      




	</div>


	<div id="contenido-usuarios-principal" class="contenido-principal contenido_menu">

		<div id="div_nuevo_usuario">

			<div class="campo" id="ttl_nuevo_usuario">
				Agrega un nuevo usuario
			</div>
			<div class="campo" id="ttl_modificar_usuario">
				Modificar contraseña del usuario
			</div>
			
			<div class="campo" id="campo-username" >
				<input type="text" id="nuevo_usuario-username" placeholder="Username" />
				<span>Escriba un nombre de usuario</span>
			</div>

			<div class="campo" id="campo-password">
				<input type="text" id="nuevo_usuario-password" placeholder="Contraseña" />
				<span>Escriba una contraseña</span>
			</div>
			
			<div class="campo" >
				<input type="button" id="btn_agregar_usuario" value="Agregar Usuario" />
				<input type="button" id="btn_modificar_usuario" value="Modificar Contraseña" />
				<input type="button" id="btn_cancelar_modificar" value="Cancelar" />
			</div>
		</div>

		<div class="ttl_content">Usuarios Creados</div>
		<div id="content_usuarios">
		</div>

	</div>

<div id="contenido-correo-principal" class="contenido-principal contenido_menu">
		
<style>
  .hide { position:absolute; top:-1px; left:-1px; width:1px; height:1px; }
</style>

        <iframe name="hiddenFrame" class="hide"></iframe>

	<form style="margin-left: auto;margin-right: auto;display: table;margin-bottom: 15px;" target="hiddenFrame">

          <div class="comp-gestion-elemento" data-titulo="Enviar correo" data-elemento="titulo" data-espaciototal="4" data-objeto="titulo">

                        <bloque data-espacio="4">
	            <campo data-nombre="Asunto:" data-iddom="edit_titulo" data-espacio="4" data-campo="asunto" data-tipo="text"></campo>     
			</bloque>

			<bloque data-espacio="4">
	            <campo data-nombre="T&iacute;tulo:" data-iddom="edit_titulo" data-espacio="4" data-campo="titulo" data-tipo="text"></campo>     
			</bloque>

                        <bloque data-espacio="4">
	            <campo data-nombre="Mensaje:" data-iddom="edit_mensaje" data-espacio="4" data-campo="mensaje" data-tipo="textarea"></campo>	         
			</bloque>
          </div>

	
          <input type="checkbox" name="teacher" value="True" style="display: inline-block;">Profesores<br>
          <input type="checkbox" name="student" value="True" style="display: inline-block;">Alumnos<br>

			<button class="popup" type="submit" onclick="myFunction()" formmethod="post" formaction="/POST/CORREO/correo_general.php" style="display: block; margin-left: auto; margin-right: auto; color: white; background: rgb(255,87,87); font-size: 13px; padding-left: 27px; padding-right: 27px; border-radius: 20px; text-align: center; padding: 6px 10px 6px 10px; border: 1px solid rgba(250, 250, 250, 0.83);cursor: pointer; font-family: OpenSansLight; min-width: 140px; min-height: 32px">Enviar correo<span class="popuptext" id="myPopup">Correos enviados</span></button>   
</div>
          
          </form>

		<div class="" style="display:none;">
			<div class="comp-consultor-elemento" data-elemento="terminos" data-condicion="" data-orderby="" data-conteo="1" data-recarga="false">
	        <estructura>
	          <div class="elemento" data-nombre=""  data-id_elemento="{id}">
	          </div>
	        </estructura>
	      </div>
	
		</div>
	      

	</div>

</div>

<script>
// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
</script>

 <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
      	
        FB.init({
          appId: '364646193710789',
          cookie: true,
          xfbml: true,
          oauth: true
        });
        FB.Event.subscribe('auth.login', function(response) {
        });
        FB.Event.subscribe('auth.logout', function(response) {
        });
      };
        (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.d
		 Element(s); js.id = id;
		  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=360243690745814";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

      
      
    </script>

<input type="hidden" id="gl_admin" value="1"/>
<input type="hidden" id="mi_propio_username" value="<?php echo $_SESSION['super_user']; ?>"/>
</body>
</html>