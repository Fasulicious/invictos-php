
var GL_HEIGHT_WINDOW_INI=$(window).height();
var GL_DELAY_RESIZE_WINDOW;
var GL_BANDERA_RESIZE_MOVIL=false;
$(window).resize(function(){
if ('ontouchstart' in document.documentElement) {

	clearInterval(GL_DELAY_RESIZE_WINDOW);
	GL_DELAY_RESIZE_WINDOW=setInterval(function(){
		clearInterval(GL_DELAY_RESIZE_WINDOW);

		if($(window).width()<600 &&  !GL_BANDERA_RESIZE_MOVIL){


			$('#content_home section').css('height',$(window).height()+'px');
			
			GL_BANDERA_RESIZE_MOVIL=true;
		}
	},200);
}
});



$(window).resize(function(){

	if($('#ss_id').val()==''){		
		if($(window).width()<=410){
			$('#menu_principal .menu-principal').hide();
			$('#menu_principal .comp-menu-fijo').addClass('responsive');
			$('#menu_principal  #comp-btn-menu-responsive').removeClass('oculto');
			GL_COMPONENTE_MENU_FIJO.LISTA[0].responsive=true;
			$('.comp-menu-responsive .boton_invictos').removeClass('boton_invictos');
		}else{		
			$('#menu_principal .menu-principal').show();
			$('#menu_principal .comp-menu-fijo').removeClass('responsive');
			$('#menu_principal  #comp-btn-menu-responsive').addClass('oculto');
			GL_COMPONENTE_MENU_FIJO.LISTA[0].responsive=false;
		}
	}

});


var GL_CIRCULO_BUSQUEDA;
var GL_MAPA;

$(document).ready(function(){


	if(!$('#ss_id').val()==''){		
		fun_consultar_clases_por_confirmar();
	}

	$('body').on('click','.comp-btn-abrir-popup',function(){

		switch($(this).data('popup')){
			case 'registro':
				$('.protector_fondo_popup[data-id_popup="login"]').fadeIn(300);
				$('.comp-login').attr('data-estado','registro');
				$('body').addClass('sin_scroll');
			break;

			case 'update_tipo':
				$('.protector_fondo_popup[data-id_popup="update_tipo"]').fadeIn(300);
				$('body').addClass('sin_scroll');
			break;
			
			
			case 'login':
				$('.protector_fondo_popup[data-id_popup="login"]').fadeIn(300);
				$('.comp-login').attr('data-estado','login');
				$('body').addClass('sin_scroll');
			break;
			case'mapa':			
				$('body').addClass('sin_scroll');
				$('.protector_fondo_popup[data-id_popup="mapa"]').fadeIn(300);

				fun_set_pop_profesor_mapa($(this).parents('.resultado').data('id_elemento'));

				var mapOptions = {
					center: new google.maps.LatLng($('#barra_buscador #lugar_latitud').val(), $('#barra_buscador #lugar_longitud').val()),
					zoom: 13
				}
				if(!GL_MAPA){

				GL_MAPA= new google.maps.Map(document.getElementById('mapa_profesores'), mapOptions);

				}

				var circulo = {
	                  strokeColor: 'rgb(255, 87, 87)',
	                  strokeOpacity: 0.7,
	                  strokeWeight: 2,
	                  fillColor: 'rgb(255, 87, 87)',
	                  fillOpacity: 0.4,
	                  map: GL_MAPA,
	                  draggable:false,
	                  editable:true,
	                  center: new google.maps.LatLng($('#barra_buscador #lugar_latitud').val(), $('#barra_buscador #lugar_longitud').val()),
	                  radius: 5000
	                };
	                // Add the circle for this city to the map.

	                if(GL_CIRCULO_BUSQUEDA){
	                  GL_CIRCULO_BUSQUEDA.setMap(null);
	                }

	                GL_CIRCULO_BUSQUEDA = new google.maps.Circle(circulo);

			 		google.maps.event.addListener(GL_CIRCULO_BUSQUEDA, 'center_changed', function(){
					 	fun_get_avisos_desde_popup();
				    });

		            google.maps.event.addListener(GL_CIRCULO_BUSQUEDA, 'radius_changed', function(){

		              if(GL_CIRCULO_BUSQUEDA.getRadius()>8000){
		                GL_CIRCULO_BUSQUEDA.setRadius(8000);
		              }else{

		                if(GL_CIRCULO_BUSQUEDA.getRadius()<1000){

		                  GL_CIRCULO_BUSQUEDA.setRadius(1000);

		                }
		              }
					 	fun_get_avisos_desde_popup();
              
            	  });

					setMarkers(GL_MAPA,GL_LOCACIONES_EJEMPLO);

			break;


			case'mapa_usuario':			


				$('.protector_fondo_popup[data-id_popup="mapa_usuario"]').fadeIn(300);
				
				GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['zonas_profesor'].reset();
				$('.comp-consultor-elemento[data-elemento="zonas_profesor"] #condicion_id_perfil').val($('#perfil_profesor #condicion_id_perfil').val());
				GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['zonas_profesor'].consultar();


			break;


			case 'recomendacion':


				$('#popup_recomendacion .box_profesor .nombre .texto').html($(this).parents('.elemento').find('.nombre .texto').html());
				$('#popup_recomendacion .box_profesor .foto').css('background-image',$(this).parents('.elemento').find('.foto').css('background-image'));
				$('#popup_recomendacion .box_profesor .conocimientos').html($(this).parents('.elemento').find('.conocimientos').html());
				$('#popup_recomendacion .box_profesor .valoracion .numero').html($(this).parents('.elemento').find('.valoracion .numero').html());
				$('#popup_recomendacion #id_profesor').val($(this).parents('.elemento').data('id_usuario'));
              	
              	$('#popup_recomendacion .msj_exito').hide();
                $('#popup_recomendacion .sup').show();
                $('#popup_recomendacion .inf').show();
                $('#popup_recomendacion .botones').show();

				$('.protector_fondo_popup[data-id_popup="recomendacion"]').fadeIn(300);
			break;

			case 'pago_comision':

				$('.protector_fondo_popup[data-id_popup="pago_comision"] input[name="id"]').val($('#ss_id').val());
				$('.protector_fondo_popup[data-id_popup="pago_comision"] input[name="nombre"]').val($('#ss_nombres').val()+' '+$('#ss_apellidos').val());
				$('.protector_fondo_popup[data-id_popup="pago_comision"] input[name="correo"]').val($('#ss_correo').val());
				$('.protector_fondo_popup[data-id_popup="pago_comision"]').fadeIn(300);

			break;

		}
	});

	$('body').on('click','.protector_fondo_popup',function(){
		if(!$(this).hasClass('no-cerrar-click')){
			$(this).fadeOut(300);
			$('body').removeClass('sin_scroll');
		}
	});
	$('body').on('click','.comp-popup .cerrar_popup',function(){
		$(this).parents('.protector_fondo_popup').fadeOut(300);
		$('body').removeClass('sin_scroll');
	});

	$('body').on('click','.comp-popup',function(e){
			
	    if (!e)	
	      e = window.event;

	    //IE9 & Other Browsers
	    if (e.stopPropagation) {
	    
	      e.stopPropagation();
	    }
	    //IE8 and Lower
	    else {
	    
	      e.cancelBubble = true;
	    }
	});










var GL_DELAY_KEYUP_CURSOTEMA;

    $('body').on('keyup','#buscador-biblioteca .nombre_tema_curso_buscar',function(event){

      	var valor=$(this).val();

      	clearInterval(GL_DELAY_KEYUP_CURSOTEMA);
      	var objinput=$(this);
		GL_DELAY_KEYUP_CURSOTEMA=setInterval(function(){
			clearInterval(GL_DELAY_KEYUP_CURSOTEMA);


			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].reset();
	      	$('#pagina-biblioteca #condicion_texto').val($(objinput).val());
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].consultar();

		},200);


    });

   


//////////////////////////////////////////////////////////////////////////




	$('#buscador-biblioteca').on('click','.boton_busqueda',function(){

			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].reset();
	      	$('#pagina-biblioteca #condicion_id_conocimiento').val($('#lista_cursos_autocompletado .tema_curso.hover').data('id_elemento'));
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].consultar();
	});
	




$('body').on('click','#btn_notificaciones, #btn_submenu_notificaciones',function(){

	$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
	$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="mensajes"][data-area="mensajes"]').addClass('activo');

	$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();

});	


$('body').on('click','#menu_buscador_profesores .comp-menu-celda-content, #input-buscador-profesores',function(){
	$('#menu_buscador_profesores ').addClass('buscador_activo');
});	

$('body').on('click','#cerrar_buscador_profesores',function(e){
	fun_cancel_buble_event(e);
	$('#menu_buscador_profesores').removeClass('buscador_activo');
	$('.popup_busqueda_profesores').addClass('oculto');
});	

$('body').on('click','.popup_busqueda_profesores .profesor',function(e){
	$('#cerrar_buscador_profesores').click();
});	



});






function fun_resize_obj_contactenos(id_dom){

	fun_resize();

	var delay=setInterval(function(){
		clearInterval(delay);	

		/*if(parseInt($('#contactenos').css('height').replace('px',''))< $('#contactenos .comp-contactenos').css('height').replace('px','')){		
			$('#contactenos').addClass('altura_responsive');
		}else{
			$('#contactenos').removeClass('altura_responsive');
		}*/

		$(id_dom+' .responsive-fontsize').each(function(){

			var proporcion=$(this).data('propfontsize');
			
			font_size=parseInt($(this).css('width').replace('px',''))*parseFloat(proporcion)/100;
			
			if(font_size<parseInt($(this).data('minfontsize'))){
				font_size=parseInt($(this).data('minfontsize'));
			}

			$(this).css('font-size',font_size+'px');
		});

	},100);



	$('#contactenos').removeClass('altura_responsive');

	if(parseInt($('#contactenos').css('height').replace('px',''))-50< parseInt($('#contactenos #comp-contactenos-0>.comp-contactenos-content>.comp-contactenos-celda').css('height').replace('px','')) ){	

		$('#contactenos').addClass('altura_responsive');

	}

}



function fun_resize_obj_informacion(id_dom){

	$('#informacion').removeClass('altura_responsive');


	if(parseInt($('#informacion').css('height').replace('px',''))-$(window).height()*25/100< parseInt($('#informacion .comp-informacion>.contenedor-tabla>.contenedor-celda>.comp-info-contenedor-bloques').css('height').replace('px','')) ){

		$('#informacion').addClass('altura_responsive');

	}

}









function fun_inicia_obj_contactenos(id_dom){

		mod_contacto=new OBJ_MOD_CONTACTO(false);
		mod_contacto.get();

}

function fun_inicia_obj_informacion(id_dom){

	switch(id_dom){
		case '#comp-informacion-0':
		break;
		case '#comp-informacion-1':

			mision_vision=new OBJ_PRESENTACION('#div_qns_sms','#div_mision_vision');
			mision_vision.get_mision_vision();
		break;
	}

}


function fun_llenar_info_contacto(){

	//$('#direccion_info').html(GL_CONTACTO[1].direccion);
	$('#telefono_info').html(GL_CONTACTO[1].telefono);
	$('#email_info').html(GL_CONTACTO[1].email);
}



var GL_MAPA_USUARIO;

var GL_BANDERA_CONSULTA_TRAS_CREACION=false;
var GL_ID_TEMA_CURSO_RECIEN_CREADO=0;
function fun_ejecuta_comp_consultor_consulta(elemento,data){
	switch(elemento){
		case 'temas_cursos':
			$('#lista_cursos_autocompletado .mensaje_buscando').hide();

			if(GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA[elemento].datos.length==0 ){
				//esto significa que se ha escrito un nombre de curso pero no existe, entonces hay que crearlo
				$('#lista_cursos_autocompletado .mensaje_resultado').show();
			}else{

				$('#lista_cursos_autocompletado .mensaje_resultado').hide();
			}
		break;
		case 'info_perfil':
			/*if(data.data.vacio){
				fun_cambio_vista(false,'error','');
			}else{*/
			for(var index in data){


				if(data[index].id==$('#ss_id').val()){
					$('.contactar_profesor').addClass('oculto');
				}else{
					$('.contactar_profesor').removeClass('oculto');
				}
				if(data[index].tipo=='A'){
					$('.contenido_perfil').removeClass('profesor');					
					$('.contenido_perfil').addClass('alumno');

					$('.armar_propuesta').remove();
					$('.generar_propuesta').remove();

					$('.propuesta_economica #btns_profesor').remove();

					$('.contenido_perfil .contenido_info .sup .educacion .label').html('Centro educativo');

				}else{
					
					$('.contenido_perfil .contenido_info .sup .educacion .label').html('Formaci&oacute;n acad&eacute;mica');

					$('.contenido_perfil').removeClass('alumno');
					$('.contenido_perfil').addClass('profesor');

					$('.propuesta_economica #btns_alumno').remove();
					$('.propuesta_economica .msj_auxiliar').remove();

				}

				$('.contenido_perfil').data('id_usuario',data[index].id);
				$('.contenido_perfil').data('tipo_usuario',data[index].tipo);

				$('.contenido_perfil .nombre').html(data[index].nombres+' '+data[index].apellidos);
				$('.contenido_perfil .ranking span').html(data[index].ranking);
				$('.contenido_perfil .btn.facebook').parents('a').attr('href',data[index].link_facebook);
				$('.contenido_perfil .btn.twitter').parents('a').attr('href',data[index].link_twitter);
				$('.contenido_perfil .btn.linkedin').parents('a').attr('href',data[index].link_linkedin);

				if(data[index].foto){
					$('.contenido_perfil .foto').css('background-image','url(IMG/USUARIOS/WEB/'+data[index].foto);
				}else{
					if(data[index].tipo=='A'){

						$('.contenido_perfil .foto').css('background-image','url(IMG/USUARIOS/WEB/alumno_default.png');
					}else{

						$('.contenido_perfil .foto').css('background-image','url(IMG/USUARIOS/WEB/profesor_default.png');
					}
				}
				if(data[index].portada){
					$('.contenido_perfil .portada').css('background-image','url(IMG/PERFILES/PORTADAS/WEB/'+data[index].portada);
				}else{
					$('.contenido_perfil .portada').css('background-image','url(IMG/PERFILES/PORTADAS/default.png');
				}

				//if(data[index].voto==1){
					$('.contenido_perfil .valoracion .icono').addClass('activo');
				/*}else{
					$('.contenido_perfil .valoracion .icono').removeClass('activo');
				}*/

				$('.contenido_perfil .valoracion .numero').html(data[index].calificacion);
				$('.contenido_perfil .direccion').html(data[index].direccion);

				$('.contenido_perfil .contenido_info .sup .tiempo span').html(data[index].horas_trabajo);

				nivel_educativo='';
				switch(parseInt(data[index].nivel_educativo)){
					case 1: nivel_educativo='Primaria';break;
					case 2: nivel_educativo='Secundaria';break;
					case 3: nivel_educativo='Preparatoria';break;
					case 4: nivel_educativo='Instituto';break;
					case 5: nivel_educativo='Universitario';break;
				}


				$('.contenido_perfil .contenido_info .sup .nivel span').html(nivel_educativo);
				$('.contenido_perfil .contenido_info .sup .educacion span').html(data[index].educacion);

				$('.contenido_perfil .presentacion .texto').html(data[index].presentacion);
				$('.contenido_perfil .pensamiento .texto').html(data[index].pensamiento);
				if(data[index].mostrar_edad==0 && data[index].id!=$('#ss_id').val()){

					$('.contenido_perfil .edad').addClass('oculto');
					$('.contenido_perfil .edad span').html('');
				}else{


					if(data[index].fecha_nacimiento!='' && typeof(data[index].fecha_nacimiento)=='string'){

						$('.contenido_perfil .edad').removeClass('oculto');
						$('.contenido_perfil .edad span').html(fun_anios_hasta_hoy(data[index].fecha_nacimiento.split('-')[2],data[index].fecha_nacimiento.split('-')[1],data[index].fecha_nacimiento.split('-')[0]));

					}else{
						$('.contenido_perfil .edad').addClass('oculto');						

					}

				}
				if(data[index].mostrar_telefono==0 && data[index].id!=$('#ss_id').val()){

					$('.contenido_perfil .telefono').addClass('oculto');
					$('.contenido_perfil .telefono span').html('');
				}else{

					$('.contenido_perfil .telefono').removeClass('oculto');
					$('.contenido_perfil .telefono span').html(data[index].telefono);
				}

				//var tiempo_inscrito=fun_anios_hasta_hoy(data[index].fecha_registro.split('-')[2],data[index].fecha_registro.split('-')[1],data[index].fecha_registro.split('-')[0]);
				fecha_registro=data[index].fecha_registro.split(' ');
				tiempo_inscrito=fun_calcula_tiempo_hasta_ahora_no_fechas(fecha_registro[0],fecha_registro[1],true);

				$('.contenido_perfil .tiempo_ranking span').html(tiempo_inscrito);



				var html_conocimientos='';
				for(var ind in data[index].conocimientos){
					html_conocimientos+='<div class="conocimiento">'+data[index].conocimientos[ind].nombre_conocimiento+'</div>';
				}
				$('.contenido_perfil .conocimientos').html(html_conocimientos);

			
			}

			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].seleccionar_elemento($('#ss_id').val());

			//}
		break;

		case 'zonas_profesor':
				if(data[0]){
					var mapOptions = {
						center: new google.maps.LatLng(data[0].coor_latitud, data[0].coor_longitud),
						zoom: 11
					}
					if($('.contenido_perfil').data('tipo_usuario')=='P'){
						$('#popup_mapa_usuario .descripcion .texto').html('Hay '+data.length+' '+(data.length==1?'lugar':'lugares')+' donde el profesor puede dictar clases');
					}else{
						$('#popup_mapa_usuario .descripcion .texto').html('Hay '+data.length+' '+(data.length==1?'lugar':'lugares')+' donde el alumno puede recibir clases');
					}
				}else{

					var mapOptions = {
						center: new google.maps.LatLng(GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].datos[$('.contenido_perfil').data('id_usuario')].latitud_ini,GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].datos[$('.contenido_perfil').data('id_usuario')].longitud_ini),
						zoom: 11
					}

					//estos mensajes se muestran cuando el mapa mostrado no le pertenece al usuario
					if($('.contenido_perfil').data('tipo_usuario')=='P'){
						$('#popup_mapa_usuario .descripcion .texto').html('El profesor a&uacute;n no ha registrado los lugares donde puede dictar clases.');
					}else{
						$('#popup_mapa_usuario .descripcion .texto').html('El alumno a&uacute;n no ha registrado los lugares donde puede recibir clases.');
					}

					if(GL_MAPA_USUARIO){
						GL_MAPA_USUARIO.setCenter(mapOptions.center);
					}

				}
				
				if(!GL_MAPA_USUARIO){

					GL_MAPA_USUARIO= new google.maps.Map(document.getElementById('mapa_usuario'), mapOptions);
				}



				setMarkers_usuario(GL_MAPA_USUARIO,data);

		break;
		case 'aviso':

			$('.contenido_zonas .comp-consultor-elemento[data-elemento="aviso"] .zona.inactivo').remove();

			var num_avisos=data.length;
			if(isNaN(num_avisos)){
				num_avisos=0;
			}

			var elementos_faltan=3-num_avisos;
			var html_elemento='';

			for(var i=0;i<elementos_faltan;i++){
				html_elemento+='<div class="zona inactivo">'+
         				'<div class="div_nombre">'+
	         				'<div class="icono"></div>'+
	         				'<div class="texto">Ubicaci&oacute;n vac&iacute;a</div>'+
	         			'</div>'+
         				'<div class="btn_editar"></div>'+
         			'</div>';
			}

			$('.contenido_zonas .comp-consultor-elemento[data-elemento="aviso"]').append(html_elemento);


			var html_lista_lugares='';
			for(var index in data){
				GL_MIS_LUGARES_PREFERENTES[index]={nombre: data[index].direccion, latitud: data[index].coor_latitud, longitud: data[index].coor_longitud};
				html_lista_lugares+='<div class="elemento trans_bezier_03" data-nombre="'+data[index].direccion+'" data-latitud="'+data[index].coor_latitud+'" data-longitud="'+data[index].coor_longitud+'">'+
            			'<div>'+data[index].direccion+'</div>'+
          			'</div>';
			}
			
			$('#lista_lugares_preferentes .lista_cursos_temas').html(html_lista_lugares);
          

		break;
		case 'mis_recursos':

			for(var index in data){
				$('.perfil_biblioteca .msj_biblioteca_vacia').hide();
				$('.perfil_biblioteca .comp-consultor-elemento').removeClass('oculto');
			}
		break;
		
		case 'buscar_conocimientos':

			
			if(GL_BANDERA_CONSULTA_TRAS_CREACION){
					
					//	$('#lista_cursos_autocompletado .tema_curso').first().click();	
					$('#lista_conocimientos_autocom .tema_curso[data-id_elemento="'+GL_ID_TEMA_CURSO_RECIEN_CREADO+'"]').first().click();	
					
			}
			GL_BANDERA_CONSULTA_TRAS_CREACION=false;
		break;

		case 'terminos':
			html_final=GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['terminos'].datos[1].terminos_condiciones;
			valores=html_final.split('\n');
			html_final='';
			for(var i in valores){
				html_final+='<p>'+valores[i]+'</p>';
			}
			$('#pagina-terminos article').html(html_final);
		break;

		case 'busqueda_recurso':
		var conteo_libros=$('#pagina-biblioteca .resultados-biblioteca .resultado').length;

			$('.resultados-biblioteca #conteo_libros').html(conteo_libros+' Libro'+(conteo_libros==1?'':'(s)'));
		break;
	}
}

  
var GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "home", gl_get_subview:"", push_history: true, scroll_top:0};

function fun_comp_menu_cambio_vista(area, columna, rol, href){
/*
	GL_ESTADO_HISTORIAL = { columna: "perfil", interfaz:"perfil"};

	window.history.pushState(GL_ESTADO_HISTORIAL, null, href);
*/

	switch(rol){
		case 'principal':

			switch(columna){
				case 'perfil':

					var id_usuario_url=href.toString().split('/')[0];
					if($('#ss_id').val()==id_usuario_url || $('#ss_username').val()==id_usuario_url){
						$('.contenido_perfil .btn_editar').removeClass('oculto');
					}else{
						$('.contenido_perfil .btn_editar').addClass('oculto');				
					}
					GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].reset();

					var id=0;
					if(isNaN(href)){
						id=0;
					}else{
						id=href;
					}	

					if(!GL_POP_STATE){

						GL_ESTADO_HISTORIAL={ gl_get_user: href , gl_get_view: "", gl_get_subview: "", scroll_top:0};
						window.history.pushState(GL_ESTADO_HISTORIAL, null, href);

					}

					$('#perfil_profesor #condicion_id_perfil').val(id);
					$('#perfil_profesor #condicion_username_perfil').val(href);
					GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].consultar();
		        	fun_aumentar_visita(href);
				break;
				case 'dashboard':
					switch(area){
						case 'dashboard':
							if(!$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').length){

								var retardo=600;
								if($('.columna-pagina[data-columna="dashboard"]').hasClass('mostrado')){
									retardo=0;
								}

								var delay=setInterval(function(){
									clearInterval(delay);
									$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal  .comp-menu-celda-content[data-columna="editar_perfil"]').click();
								},retardo);
							}else{						

								var retardo=600;
								if($('.columna-pagina[data-columna="dashboard"]').hasClass('mostrado')){
									retardo=0;
								}

								var delay=setInterval(function(){
									clearInterval(delay);
									$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').click();
								},retardo);
							}
						break;
						case 'biblioteca':
							if(!$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').length){

								var retardo=600;
								if($('.columna-pagina[data-columna="dashboard"]').hasClass('mostrado')){
									retardo=0;
								}

								var delay=setInterval(function(){
									clearInterval(delay);
									$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal  .comp-menu-celda-content[data-columna="biblioteca"]').click();
								},retardo);
							}else{						

								var retardo=600;
								if($('.columna-pagina[data-columna="dashboard"]').hasClass('mostrado')){
									retardo=0;
								}

								var delay=setInterval(function(){
									clearInterval(delay);
									$('.cuerpo_dashboard .comp-menu-fijo.menu-izquierda .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').click();
								},retardo);
							}
						break;
					}
				break;

				case 'biblioteca':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "biblioteca", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "biblioteca");}
				break;
				case 'home':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "inicio", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "inicio");}
				break;
				case 'nosotros':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "nosotros", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "nosotros");}
				break;
				case 'terminos':
					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "terminos", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "terminos");}
				break;
				case 'contacto':
					if(!GL_POP_STATE){
				
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "contacto", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "contacto");	}
				break;
/*
				case 'login':
					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "login", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "login");}
				break;*/

			}
		break;
		case 'dashboard':

			switch(columna){

				case 'historial':

					if(!$('.cuerpo_dashboard .columna_historial .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').length){

						var retardo=600;
						/*if($('.columna-pagina[data-columna="historial"]').hasClass('mostrado')){
							retardo=0;
						}*/

						var delay=setInterval(function(){
							clearInterval(delay);
							$('.cuerpo_dashboard .columna_historial .menu-principal .comp-menu-opcion:first-child .comp-menu-celda-content').click();
						},retardo);
					}else{	
						var retardo=600;
						/*if($('.columna-pagina[data-columna="historial"]').hasClass('mostrado')){
							retardo=0;
						}*/
			
						var delay=setInterval(function(){
							clearInterval(delay);
							$('.cuerpo_dashboard .columna_historial .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').click();
						},retardo);
					}
				break;

				case 'mensajes':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "mensajes", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, 'mensajes');
}
	
				
					$('#menu_principal #btn_notificaciones').removeClass('activo');
					if(!$('.cuerpo_dashboard .columna_mensajes .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').length){

						var retardo=500;
						if($('.columna-pagina[data-columna="mensajes"]').hasClass('mostrado')){
							retardo=0;
						}

						var delay=setInterval(function(){
							clearInterval(delay);
							$('.cuerpo_dashboard .columna_mensajes .menu-principal .comp-menu-opcion:first-child .comp-menu-celda-content').click();
						},retardo);
					}else{		

						var retardo=500;
						if($('.columna-pagina[data-columna="mensajes"]').hasClass('mostrado')){
							retardo=0;
						}	
						var delay=setInterval(function(){
							clearInterval(delay);
							$('.cuerpo_dashboard .columna_mensajes .menu-principal .comp-menu-opcion .comp-menu-celda-content.activo').click();
						},retardo);
					}
				break;

				case 'editar_perfil':

					if(!GL_POP_STATE){
					
						GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "editar_perfil", gl_get_subview: "", scroll_top:0};
						window.history.pushState(GL_ESTADO_HISTORIAL, null, "editar_perfil");
					}

					GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].reset();
					$('#perfil_profesor #condicion_id_perfil').val($('#ss_id').val());

					GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].consultar();

				break;	

				case 'mis_zonas':

					if(!GL_POP_STATE){
				
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "mis_zonas", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "mis_zonas");
	}
				break;
				case 'conocimientos':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "mis_conocimientos", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "mis_conocimientos");
}
				break;
				case 'estadisticas':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "estadisticas", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "estadisticas");
}
				break;
				case 'biblioteca':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "mi_biblioteca", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "mi_biblioteca");
}
				break;
				case 'contacto':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "user_contacto", gl_get_subview: "", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, "user_contacto");
}
				break;
			}

		break;
		case 'historial':
			switch(columna){

				case 'valoraciones':
					if($('#ss_tipo').val()=='A'){


					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "historial", gl_get_subview: "profesores", scroll_top:0};
						window.history.pushState(GL_ESTADO_HISTORIAL, null, 'historial/profesores');
}
					}else{
						if($('#ss_tipo').val()=='P'){

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "historial", gl_get_subview: "alumnos", scroll_top:0};
						window.history.pushState(GL_ESTADO_HISTORIAL, null, 'historial/alumnos');
}
						}
					}

		      		fun_get_profesores();

				break;

				case 'mis_alumnos':

					if(!GL_POP_STATE){
					
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "historial", gl_get_subview: "clases", scroll_top:0};
					window.history.pushState(GL_ESTADO_HISTORIAL, null, 'historial/clases');
}
		      			fun_get_clases();
				break;

			}
		break;
	}

}
function fun_aumentar_visita(cod_profesor){
          $.ajax({
            url:'POST/ESTADISTICAS/aumentar_visita_anuncio.php',
            data:{cod_profesor:cod_profesor},
            async:true,
            type:'POST',
            datatype:'json',
            success:function(data){
            }
          });
        }




var autocomplete2;

// [START region_fillform]
function get_direccion() {

	var place = autocomplete2.getPlace();
    $('#pac-input').val(place.formatted_address);

    if(GL_COMP_MAPA){
      fun_comp_cambiar_place(place.geometry.location.lat(), place.geometry.location.lng());
    }else{
      fun_comp_iniciar_mapa(place.geometry.location.lat(), place.geometry.location.lng());
    }
    
}

var autocomplete_edit_perfil;

function fun_get_direccion_edit_perfil() {

	var place = autocomplete_edit_perfil.getPlace();
    $('.columna_editar_perfil input.comp-ge-campo-data[data-campo="ciudad"]').val(place.formatted_address);
    $('.columna_editar_perfil input.comp-ge-campo-data[data-campo="latitud_ini"]').val(place.geometry.location.lat());
    $('.columna_editar_perfil input.comp-ge-campo-data[data-campo="longitud_ini"]').val(place.geometry.location.lng());
}

function fun_inicia_gestor_elemento(id_objeto,id_dom){

	switch(id_objeto){
		case 'zona':

		  // Create the autocomplete object, restricting the search to geographical
		  // location types.
		  autocomplete2 = new google.maps.places.Autocomplete(
		      /** @type {!HTMLInputElement} */(document.getElementById('zona_autocompletado')),
		      {types: ['geocode']});

		  // When the user selects an address from the dropdown, populate the address
		  // fields in the form.
		  autocomplete2.addListener('place_changed', get_direccion);

      		//fun_comp_iniciar_mapa(-12.0499000000, -77.0230000000);  

		break;
		case 'info_perfil':

		  // Create the autocomplete object, restricting the search to geographical
		  // location types.

		  if(!autocomplete_edit_perfil){
		  	
			  autocomplete_edit_perfil = new google.maps.places.Autocomplete(document.getElementById('ciudad_edit_info_perfil'),
			      {types: ['geocode']});

			  // When the user selects an address from the dropdown, populate the address
			  // fields in the form.
			  autocomplete_edit_perfil.addListener('place_changed', fun_get_direccion_edit_perfil);

	      		//fun_comp_iniciar_mapa(-12.0499000000, -77.0230000000);  

		  }




		break;

	}

}

function fun_ejecuta_comp_ge_cancelar(elemento){
	switch(elemento){
		case 'foto_portada':
            $('.popup_edit_portada').hide();
		break;
		case 'foto_perfil':
            $('.popup_edit_foto_perfil').hide();

		break;

		case 'info_perfil':
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_perfil'].seleccionar_elemento($('#ss_id').val());

			$('.columna_editar_perfil .comp-gestion-elemento .comp-ge-btns .comp-ge-btn-accion').addClass('inactivo');

		break;
		case 'aviso':
				$('.columna_zonas .comp-gestion-elemento').slideUp(300);

		break;
		case 'conocimiento':

	    	$('.columna_conocimientos .lista_conocimientos .elemento').show();
	    	$('.columna_conocimientos .lista_conocimientos .form_gestion').hide();

			$('.btn_mostrar_agregar').show();
			$('.formulario').hide();
		break;
	}
}


function fun_ejecuta_comp_ge_update(elemento,respuesta){
	switch(elemento){
		case 'foto_portada':

			if(respuesta.error){

				fun_muestra_mensaje_insert(true,'Hubo un error al intentar actualizar su foto de portada.');

			}else{

	            $('.popup_edit_portada').hide();

	            $('.contenido_perfil .portada').css('background-image',$('.popup_edit_portada').css('background-image'));

				fun_muestra_mensaje_insert(false,'Foto de portada actualizada exitosamente.');

			}
		break;
		case 'foto_perfil':

			if(respuesta.error){

				fun_muestra_mensaje_insert(true,'Hubo un error al intentar actualizar su foto de perfil.');

			}else{

	            $('.popup_edit_foto_perfil').hide();

	            $('.contenido_perfil .foto').css('background-image',$('.popup_edit_foto_perfil .imagen').css('background-image'));

	            $('#menu_principal #btn_perfil_menu').css('background-image',$('.popup_edit_foto_perfil .imagen').css('background-image'));
				fun_muestra_mensaje_insert(false,'Foto de perfil actualizada exitosamente.');

			}
		break;

		case 'password':		

			if(respuesta.detalle){

				switch(respuesta.detalle){
					case 'vacio':

						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"]').addClass('comp-contacto-alerta');
						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"] .aviso-aux').html('Este campo es obligatorio');
		       			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"] .aviso-aux').removeClass('oculto');

					break;
					case 'diferente':

						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"]').addClass('comp-contacto-alerta');
						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"] .aviso-aux').html('Debe reescribir la nueva contrase&ntilde;a');
		       			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+respuesta.campo+'"] .aviso-aux').removeClass('oculto');
					break;
				}

			}else{
				if(respuesta.numero_registros==0){

						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="password_actual"]').addClass('comp-contacto-alerta');
						$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="password_actual"] .aviso-aux').html('Esta no es su contrase&ntilde;a actual. Intente otra vez.');
		       			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="password_actual"] .aviso-aux').removeClass('oculto');

				}else{

					$('#pagina-cambiar_pass .comp-ge-btn-accion[data-accion="cancelar"]').click();

				}	
			}
			
		break;

		case 'info_perfil':

			if(respuesta.error){
				fun_muestra_mensaje_insert(true,'Hubo un error al intentar actualizar sus datos.');

			}else{
if(respuesta.elemento.foto){
	            $('#menu_principal #btn_perfil_menu').css('background-image','url(IMG/USUARIOS/MINI/'+respuesta.elemento.foto+')');
}

				fun_muestra_mensaje_insert(false,'Datos actualizados exitosamente.');

			}

		break;
	}
}

var GL_INTERVAL_MSJ_NUEVO_TEMA;
function fun_ejecuta_comp_ge_insert(elemento,data){
	switch(elemento){
		case 'aviso':
			if(!data.error){

				fun_muestra_mensaje_insert(false,'Zona registrada exitosamente.');
				$('.contenido_zonas .comp-consultor-elemento[data-elemento="aviso"] .zona').last().remove();	
			}else{

				fun_muestra_mensaje_insert(true,'Hubo un error al intentar registrar la zona.');
			}
            
		break;
		
		case 'nuevo_tema':


			if(data.error){
				switch(data.detalle){

					case 'duplicado':
						
						data.constraint=fun_replaceAll(data.constraint,"'",'');
						if(data.constraint=='const_nombre_busqueda'){
							$('#lista_conocimientos_autocom .msj_alerta').slideDown(300);
							clearInterval(GL_INTERVAL_MSJ_NUEVO_TEMA);
							GL_INTERVAL_MSJ_NUEVO_TEMA=setInterval(function(){
								clearInterval(GL_INTERVAL_MSJ_NUEVO_TEMA);
								$('#lista_conocimientos_autocom .msj_alerta').slideUp(300);

							},3000);
						}

					break;
				}
			}else{

				GL_BANDERA_CONSULTA_TRAS_CREACION=true;
				GL_ID_TEMA_CURSO_RECIEN_CREADO=data.elemento.id;


				$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"]').addClass('comp-contacto-alerta');
				$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"]').addClass('exito');
				$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"] .aviso-aux').html('Tema o curso creado con &eacute;xito');		
       			$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"] .aviso-aux').removeClass('oculto');

				clearInterval(GL_INTERVAL_MSJ_NUEVO_TEMA);
				GL_INTERVAL_MSJ_NUEVO_TEMA=setInterval(function(){
					clearInterval(GL_INTERVAL_MSJ_NUEVO_TEMA);

					$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"]').removeClass('comp-contacto-alerta');
					$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"]').removeClass('exito');
	       			$('.comp-gestion-elemento[data-elemento="conocimiento"] .comp-ge-campo[data-campo="nombre"] .aviso-aux').addClass('oculto');


				},3000);

					fun_mostrar_conocimiento_keyup($('#input_mostrar_conocimiento'));
		    	
			
			}


		break;

		case 'conocimiento':
			if(data.error){


				switch(data.detalle){
					case 'vacio':
					case 'int':
						if(data.campo=='id_conocimiento'){
							GL_COMPONENTE_GESTOR_ELEMENTOS.campo_alerta('conocimiento', 'nombre', 'Debe seleccionar o crear un conocimiento.');
						}		
					break;
					case 'duplicado':
						GL_COMPONENTE_GESTOR_ELEMENTOS.campo_alerta('conocimiento', 'nombre', 'Ya ha agregado este conocimiento anteriormente.');
					break;

				}

				fun_muestra_mensaje_insert(true,'Hubo un error al intentar registrar el conocimiento.');
			}else{

				fun_muestra_mensaje_insert(false,'Conocimiento registrado exitosamente.');
			}
		break;
	}
}


			

function fun_ejecuta_comp_ge_delete(elemento, data){
	switch(elemento){
		case 'aviso':


				var html_elemento='<div class="zona inactivo">'+
         				'<div class="div_nombre">'+
	         				'<div class="icono"></div>'+
	         				'<div class="texto">Ubicaci&oacute;n vac&iacute;a</div>'+
	         			'</div>'+
         				'<div class="btn_editar"></div>'+         				
         			'</div>';
			$('.contenido_zonas .comp-consultor-elemento[data-elemento="aviso"]').append(html_elemento);
		break;
	}
}


		


function fun_ejecuta_comp_ge_limpiar(elemento){
	switch(elemento){
		case 'aviso':
				$('.columna_zonas .comp-gestion-elemento').slideUp(300);

		break;
		case 'conocimiento':

	    	$('.columna_conocimientos .lista_conocimientos .elemento').show();
	    	$('.columna_conocimientos .lista_conocimientos .form_gestion').hide();

			$('.btn_mostrar_agregar').show();
			$('.formulario').hide();
		break;
	}
}







var GL_INTERVAL_AVISO_ACCION;

function fun_muestra_mensaje_insert(error,mensaje){

	GL_CONSULTA_AVISOS=true;

	clearInterval(GL_INTERVAL_AVISO_ACCION);
	$('.mensaje_accion_formulario').addClass('oculto');

	if(error){

		$('#mensaje_aviso_error .texto').html(mensaje);

		$('#mensaje_aviso_error').removeClass('oculto');
		GL_INTERVAL_AVISO_ACCION=setInterval(function(){

			$('#mensaje_aviso_error').addClass('oculto');
			clearInterval(GL_INTERVAL_AVISO_ACCION);

		},4000);

	}else{

		$('#mensaje_aviso_positivo .texto').html(mensaje);

		$('#mensaje_aviso_positivo').removeClass('oculto');
		GL_INTERVAL_AVISO_ACCION=setInterval(function(){

			$('#mensaje_aviso_positivo').addClass('oculto');
			clearInterval(GL_INTERVAL_AVISO_ACCION);

		},4000);

	}
}









var GL_CLASES_CONFIRMAR=new Array();

function fun_consultar_clases_por_confirmar(){
	$.ajax({
        url:'POST/CLASES/get_clases_por_confirmar.php',
        data:{},
        async:true,
        type:'POST',
        datatype:'json',
        beforeSend: function(obj){
        },
        success: function(data){
        	data=$.parseJSON(data);
        	if(!data.error){
        		if(!data.vacio){
        			for(var ind in data.data){
        				GL_CLASES_CONFIRMAR.push(data.data[ind]);
        			}
        			fun_llenar_popup_clase_confirmar(0);
        		}
        	}

        }
	});

}



function fun_llenar_popup_clase_confirmar(ind){
	ind=parseInt(ind);
	if(ind==0){
		$('#popup_confirmar_clases .volver').addClass('oculto');
	}else{
		$('#popup_confirmar_clases .volver').removeClass('oculto');
	}

	if(ind+1==GL_CLASES_CONFIRMAR.length){
		$('#popup_confirmar_clases .sgt').addClass('terminar');
		$('#popup_confirmar_clases .sgt').html('Finalizar y enviar');		
	}else{
		$('#popup_confirmar_clases .sgt').removeClass('terminar');
		$('#popup_confirmar_clases .sgt').html('Siguiente');
	}

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"]').show();

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] #indice').val(ind);

	if(GL_CLASES_CONFIRMAR[ind].foto){
		$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .foto').css('background-image','url(IMG/USUARIOS/WEB/'+GL_CLASES_CONFIRMAR[ind].foto+')');
	}else{
		$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .foto').css('background-image','url(IMG/USUARIOS/WEB/alumno_default.png');
	}

	if(GL_CLASES_CONFIRMAR[ind].estado_problema=="resuelto"){
		$('#popup_confirmar_clases .help_resuelto').show();
		$('#popup_confirmar_clases .botones_help').hide();
	}else{
		$('#popup_confirmar_clases .help_resuelto').hide();
		$('#popup_confirmar_clases .botones_help').show();
	}
	
	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .nombre').html(GL_CLASES_CONFIRMAR[ind].nombres+' '+GL_CLASES_CONFIRMAR[ind].apellidos);

	var fecha_hora_transportada=fun_diferencia_horaria(GL_CLASES_CONFIRMAR[ind].fecha,GL_CLASES_CONFIRMAR[ind].hora,'UTC-normal');

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .fecha').html(fun_oracion_fecha(fun_formatear_fecha(fecha_hora_transportada.fecha,'--?'))+' - '+fun_oracion_hora(fecha_hora_transportada.hora));

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .costo_hora span').html(GL_CLASES_CONFIRMAR[ind].costo_hora);

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .tiempo span').html((GL_CLASES_CONFIRMAR[ind].tiempo==1)?'1 hora':GL_CLASES_CONFIRMAR[ind].tiempo+' horas');

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .costo_total span').html(GL_CLASES_CONFIRMAR[ind].costo_hora*GL_CLASES_CONFIRMAR[ind].tiempo);

	$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .btns .boton').removeClass('activo');

    $('#popup_confirmar_clases .sgt').removeClass('inactivo');




	if($('#ss_tipo').val()=='A'){

	    

		if(GL_CLASES_CONFIRMAR[ind].calificacion==1){
			$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .btns .aprobar').addClass('activo');
		}else if(GL_CLASES_CONFIRMAR[ind].calificacion==0){		
			$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .btns .rechazar').addClass('activo');	
		}else{
	        $('#popup_confirmar_clases .sgt').addClass('inactivo');
		}

		$('#popup_confirmar_clases .criterio').removeClass('activo');
		$('#popup_confirmar_clases .criterio').attr('data-orden',0);
		$('#popup_confirmar_clases .problema').removeClass('activo');

		hay_criterios=false;


		if(GL_CLASES_CONFIRMAR[ind].criterios){
			if(GL_CLASES_CONFIRMAR[ind].criterios.length>0){

				hay_criterios=true;	
			}
		}

		if(hay_criterios){
			$('#popup_confirmar_clases .help_volver').click();
			orden=1;
			criterios_aux=GL_CLASES_CONFIRMAR[ind].criterios.slice()
			for(var m in criterios_aux){
				$('#popup_confirmar_clases .criterio[data-id="'+criterios_aux[m]+'"]').click();
			}
		}else if(GL_CLASES_CONFIRMAR[ind].problema){

			$('#popup_confirmar_clases .help').click();
			$('#popup_confirmar_clases .problema[data-id="'+GL_CLASES_CONFIRMAR[ind].problema+'"]').click();			
			$('#popup_confirmar_clases .seccion_ayuda textarea').val(GL_CLASES_CONFIRMAR[ind].mensaje);
		}else{
			$('#popup_confirmar_clases .help_volver').click();			
		}




	}else{

		if(GL_CLASES_CONFIRMAR[ind].confirmado==1){
			$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .btns .aprobar').addClass('activo');
		}else if(GL_CLASES_CONFIRMAR[ind].confirmado==0){		
			$('.protector_fondo_popup[data-id_popup="confirmar_clases"] .btns .rechazar').addClass('activo');	
		}else{
	        $('#popup_confirmar_clases .sgt').addClass('inactivo');
		}

	}

}






         	function fun_enviar_mensaje(id_usuario,mensaje,n){
         		if($.trim(mensaje)!=''){

		         	$.ajax({
		         		url:'POST/CONVERSACION/enviar_mensaje.php',
		         		data:{id_usuario:id_usuario,mensaje:mensaje,n:n},
		         		type:'POST',
		         		datatype:'json',
		         		async:true,
		         		beforeSend: function(objeto){
		         		},
		         		success:function (data){
		         			console.log(data);
		         			data=$.parseJSON(data);
		         			if(data.error){
								FMSG_ERROR_CONEXION();
		         			}else{
		         				if(data.vacio){

		         				}else{	
		         					var html_conversacion='';
		         					
		         					var conteo=$('.columna_mensajes .conversacion .mensaje').length;	

		         						conteo++;

		         						var background='';
		         						var nombres='';
		         						
			         						if($('#ss_foto').val()!=''){
			         							background='style="background-image:url(IMG/USUARIOS/WEB/'+$('#ss_foto').val()+')"';
			         						}else{
			         							if($('#ss_tipo').val()=='A'){

			         							background='style="background-image:url(IMG/USUARIOS/WEB/alumno_default.png)"';
			         							}else{

			         							background='style="background-image:url(IMG/USUARIOS/WEB/profesor_default.png)"';
			         							}
			         						}
			         						nombres=$('#ss_nombres').val()+' '+$('#ss_apellidos').val();
		         							
		         						html_conversacion+='<div class="mensaje yo">'+
											'<div class="cab">'+
												'<div class="info_user inline vertical-m">'+
													'<div class="foto f-i inline vertical-m" '+background+'></div>'+
													'<div class="nombre inline vertical-m c-celeste">'+nombres+'</div>'+
													'<div class="foto f-d inline vertical-m" '+background+'></div>'+
													'<div class="fecha_hora inline vertical-m">'+GLOBAL_HORA+':'+GLOBAL_MINUTOS+'</div>'+
												'</div>'+
											'</div>'+
											'<div class="txt_msj">'+
												mensaje+
											'</div>'+
										'</div>';
		         					$('.columna_mensajes .conversacion').data('inicio',conteo);
		         					$('.columna_mensajes .conversacion').append(html_conversacion);

		         					$('.columna_mensajes .conversacion').scrollTop(fun_max_scrolltop($('.columna_mensajes .conversacion')));

		         				}
		         			}

		         		}

		         	});
         		}
         	}


var autocomplete_login1=false;
var autocomplete_login2;

function fun_inicia_login(){

	if(!autocomplete_login1){
		  // Create the autocomplete object, restricting the search to geographical
		  // location types.
		  autocomplete_login1 = new google.maps.places.Autocomplete(
		      /** @type {!HTMLInputElement} */(document.querySelector('#popup_registro #comp-login-ciudad')),
		      {types: ['geocode']});

		  // When the user selects an address from the dropdown, populate the address
		  // fields in the form.
		  autocomplete_login1.addListener('place_changed', fun_get_ciudad1);


		  // Create the autocomplete object, restricting the search to geographical
		  // location types.
		  autocomplete_login2 = new google.maps.places.Autocomplete(
		      /** @type {!HTMLInputElement} */(document.querySelector('#pagina-login #comp-login-ciudad')),
		      {types: ['geocode']});

		  // When the user selects an address from the dropdown, populate the address
		  // fields in the form.
		  autocomplete_login2.addListener('place_changed', fun_get_ciudad2);

	}

}

// [START region_fillform]
function fun_get_ciudad1() {

	var place = autocomplete_login1.getPlace();
    $('#popup_registro  #comp-login-ciudad').val(place.formatted_address);
    $('#popup_registro .comp-login-input-ciudad[name="longitud"]').val(place.geometry.location.lng());
    $('#popup_registro .comp-login-input-ciudad[name="latitud"]').val(place.geometry.location.lat());
    
}

// [START region_fillform]
function fun_get_ciudad2() {

	var place = autocomplete_login2.getPlace();
    $('#pagina-login #comp-login-ciudad').val(place.formatted_address);
    $('#pagina-login .comp-login-input-ciudad[name="longitud"]').val(place.geometry.location.lng());
    $('#pagina-login .comp-login-input-ciudad[name="latitud"]').val(place.geometry.location.lat());
    
}


