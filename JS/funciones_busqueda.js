var GL_MIS_LUGARES_PREFERENTES=new Array();



$(document).ready(function(){




	$('#inicio').on('click','#barra_buscador .boton_busqueda',function(){

		fun_get_avisos();
		fun_get_avisos_ranking();

		/*
		GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_profesor_zona'].reset();

		$('#lista_cursos_autocompletado #condicion_temas_cursos').val(valor);


		GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_profesor_zona'].consultar();*/
	});


/////////////////////////////////////////////////////////////////////////


var GL_DELAY_KEYUP_CURSOTEMA;


    $('body').on('keyup','#inicio #barra_buscador #nombre_curso_buscar',function(event){

      if(event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13){

      	var valor=$(this).val();

      	clearInterval(GL_DELAY_KEYUP_CURSOTEMA);
      	var objinput=$(this);
		GL_DELAY_KEYUP_CURSOTEMA=setInterval(function(){
			clearInterval(GL_DELAY_KEYUP_CURSOTEMA);


			if(!$('#inicio').hasClass('busqueda')){

      			$('#lista_cursos_autocompletado').css('top',$(objinput).offset().top + parseInt($(objinput).css('height').replace('px',''))  );

			}else{

      			$('#lista_cursos_autocompletado').css('top','initial');
      			$('#lista_cursos_autocompletado').css('bottom',fun_height_document()-$(objinput).offset().top);

			}

	    
	      $('#lista_cursos_autocompletado').css('left',$(objinput).offset().left);


	      ancho = parseInt($(objinput).css('width').replace('px',''));
			$('#lista_cursos_autocompletado .mensaje_buscando').show();
			$('#lista_cursos_autocompletado .mensaje_resultado').hide();

	      	$('#lista_cursos_autocompletado').css('width',ancho+'px');
			$('#lista_cursos_autocompletado').show();
			$('#lista_cursos_autocompletado #ubicacion-buscador').val('inicio');
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['temas_cursos'].reset();

			$('#lista_cursos_autocompletado #condicion_temas_cursos').val(valor);


			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['temas_cursos'].consultar();

		},200);

      }else{

      	if(event.keyCode==13){ 
    		$('#lista_cursos_autocompletado').hide();
    		
      	}else{


	      	if(event.keyCode==38){ //UP ARROW
	      		if($('#lista_cursos_autocompletado .tema_curso.hover').length>0){
	      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
	      			if($('#lista_cursos_autocompletado .tema_curso').index($('#lista_cursos_autocompletado .tema_curso.hover'))==0){
	      				//esto significa que hemos hecho up en el item que está mas arriba
	      				$('#lista_cursos_autocompletado .tema_curso.hover').removeClass('hover');

	      				$('#lista_cursos_autocompletado .tema_curso').last().addClass('hover');
	      				
	      			}else{
	      				var obj=$('#lista_cursos_autocompletado .tema_curso.hover');
	      				$('#lista_cursos_autocompletado .tema_curso.hover').removeClass('hover');
	      				$(obj).prev().addClass('hover');
	      			}
	      		}else{
	      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de abajo
	      			$('#lista_cursos_autocompletado .tema_curso').last().addClass('hover');
	      		}
	      	}else{
	      		//DOWN ARROW

	      		if($('#lista_cursos_autocompletado .tema_curso.hover').length>0){
	      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
	      			if($('#lista_cursos_autocompletado .tema_curso').index($('#lista_cursos_autocompletado .tema_curso.hover'))==$('#lista_cursos_autocompletado .tema_curso').length-1){
	      				//esto significa que hemos hecho up en el item que está mas arriba
	      				$('#lista_cursos_autocompletado .tema_curso.hover').removeClass('hover');

	      				$('#lista_cursos_autocompletado .tema_curso').first().addClass('hover');
	      				
	      			}else{
	      				var obj=$('#lista_cursos_autocompletado .tema_curso.hover');
	      				$('#lista_cursos_autocompletado .tema_curso.hover').removeClass('hover');
	      				$(obj).next().addClass('hover');
	      			}
	      		}else{
	      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de arriba

	      			$('#lista_cursos_autocompletado .tema_curso').first().addClass('hover');
	      		}


	      	}

	      	$(this).val($('#lista_cursos_autocompletado .tema_curso.hover').data('nombre'));

	      	$('#barra_buscador #id_curso').val($('#lista_cursos_autocompletado .tema_curso.hover').data('id_elemento'));
      	}
      }

    });


    var GL_INICIA_CLICK_TEMACURSO=false;

    $('body').on('mousedown','#lista_cursos_autocompletado .tema_curso',function(){
    	GL_INICIA_CLICK_TEMACURSO=true;
    });

    $('body').mouseup(function(){
    	GL_INICIA_CLICK_TEMACURSO=false;
    });


    $('body').on('click','#lista_cursos_autocompletado .tema_curso',function(){
    	
		$('#lista_cursos_autocompletado').hide();

		if($('#lista_cursos_autocompletado #ubicacion-buscador').val()=='biblioteca'){

			$('#buscador-biblioteca #id_curso').val($(this).data('id_elemento'));
      		$('#buscador-biblioteca .nombre_tema_curso_buscar').val($(this).data('nombre'));


			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].reset();
	      	$('#pagina-biblioteca #condicion_id_conocimiento').val($(this).data('id_elemento'));
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['busqueda_recurso'].consultar();
	
		}else{
			
			$('#inicio #barra_buscador #id_curso').val($(this).data('id_elemento'));
      		$('#inicio #barra_buscador #nombre_curso_buscar').val($(this).data('nombre'));
	
		}
      	
    });

    $('body').on('focusout','#inicio #barra_buscador #nombre_curso_buscar',function(){
    	if(!GL_INICIA_CLICK_TEMACURSO){
    		$('#lista_cursos_autocompletado').hide();	
    	}
    	
    });

///////////////////////////////////////////////////////////////////////////////////////////

    var GL_INICIA_CLICK_LUGAR_PREFERENTE=false;

    $('body').mouseup(function(){
    	GL_INICIA_CLICK_LUGAR_PREFERENTE=false;
    });

    $('body').on('mousedown','#lista_lugares_preferentes .elemento',function(){
    	GL_INICIA_CLICK_LUGAR_PREFERENTE=true;
    });

    $('body').on('focusin','#inicio #barra_buscador #lugar_autocompletado',function(){
    	if(GL_MIS_LUGARES_PREFERENTES.length>0 && $.trim($('#ss_id').val())!=''){
    		//if($.trim($(this).val())==''){
    			fun_mostrar_lista_lugares_preferentes($(this));
    		//}
    		/*}else{
    			if($('#lista_lugares_preferentes #prioridad').val()=='si'){
    				fun_mostrar_lista_lugares_preferentes($(this));
    			}
    		}*/
    	}   
    	var delay=setInterval(function(){
    		clearInterval(delay);

			$('.pac-container').each(function(e){
				console.log($(this).css('display'));
				if($(this).css('display')!='none'){
					$(this).attr('id','pac-container-busqueda');	
				}
			}); 	

    	},1000);
    });

	$('body').on('focusout','#inicio #barra_buscador #lugar_autocompletado',function(){
    	if(!GL_INICIA_CLICK_LUGAR_PREFERENTE){    	
			$('#lista_lugares_preferentes').hide();
    	}
    	    	
    });

    $('body').on('click','#lista_lugares_preferentes .elemento',function(){
    	
		$('#lista_lugares_preferentes').hide();
		$('#inicio #barra_buscador #lugar_latitud').val($(this).data('latitud'));
		$('#inicio #barra_buscador #lugar_longitud').val($(this).data('longitud'));
  		$('#inicio #barra_buscador #lugar_autocompletado').val($(this).data('nombre'));
  		//$('#lista_lugares_preferentes #prioridad').val('si');
    });

    $('body').on('keyup','#inicio #barra_buscador #lugar_autocompletado',function(){
		
      if(event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13){

      	if($.trim($('#ss_id').val())!=''){

	    	if($.trim($(this).val())!=''){

	    		$('#lista_lugares_preferentes').hide();
	    	}else{    		
	  			//$('#lista_lugares_preferentes #prioridad').val('no');
	    		fun_mostrar_lista_lugares_preferentes($(this));
	      	}	
    	}

      }else{

      	if($('#lista_lugares_preferentes').css('display')=='block'){

	      	if(event.keyCode==13){ 
	    		$('#lista_lugares_preferentes').hide();


				$('#barra_buscador #lugar_latitud').val($('#lista_lugares_preferentes .elemento.hover').data('latitud'));
				$('#barra_buscador #lugar_longitud').val($('#lista_lugares_preferentes .elemento.hover').data('longitud'));
				
		      	console.log('--'+$('#lista_lugares_preferentes .elemento.hover').data('nombre'));

		      	$(this).val($('#lista_lugares_preferentes .elemento.hover').data('nombre'));

	      		$('#lista_lugares_preferentes .elemento').removeClass('hover');
				
  				//$('#lista_lugares_preferentes #prioridad').val('si');

	      	}else{

		      	if(event.keyCode==38){ //UP ARROW
		      		if($('#lista_lugares_preferentes .elemento.hover').length>0){
		      			
		      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
		      			if($('#lista_lugares_preferentes .elemento').index($('#lista_lugares_preferentes .elemento.hover'))==0){
		      				//esto significa que hemos hecho up en el item que está mas arriba
		      				$('#lista_lugares_preferentes .elemento.hover').removeClass('hover');

		      				$('#lista_lugares_preferentes .elemento').last().addClass('hover');
		      				
		      			}else{
		      				var obj=$('#lista_lugares_preferentes .elemento.hover');
		      				$('#lista_lugares_preferentes .elemento.hover').removeClass('hover');
		      				$(obj).prev().addClass('hover');
		      			}
		      		}else{
		      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de abajo
		      			$('#lista_lugares_preferentes .elemento').last().addClass('hover');

		      		}
		      	}else{
		      		//DOWN ARROW

		      		if($('#lista_lugares_preferentes .elemento.hover').length>0){
		      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
		      			if($('#lista_lugares_preferentes .elemento').index($('#lista_lugares_preferentes .elemento.hover'))==$('#lista_lugares_preferentes .elemento').length-1){
		      				//esto significa que hemos hecho up en el item que está mas arriba
		      				$('#lista_lugares_preferentes .elemento.hover').removeClass('hover');

		      				$('#lista_lugares_preferentes .elemento').first().addClass('hover');
		      				
		      			}else{
		      				var obj=$('#lista_lugares_preferentes .elemento.hover');
		      				$('#lista_lugares_preferentes .elemento.hover').removeClass('hover');
		      				$(obj).next().addClass('hover');
		      			}
		      		}else{
		      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de arriba

		      			$('#lista_lugares_preferentes .elemento').first().addClass('hover');
		      		}


		      	}
		      	console.log('--'+$('#lista_lugares_preferentes .elemento.hover').data('nombre'));
		      	$(this).val($('#lista_lugares_preferentes .elemento.hover').data('nombre'));

	      	}
      	}else{

	      	if($.trim($('#ss_id').val())!=''){
	    		fun_mostrar_lista_lugares_preferentes($(this));
      		}
      	}
      }


var delay=setInterval(function(){
    		clearInterval(delay);

			$('.pac-container').each(function(e){
				console.log($(this).css('display'));
				if($(this).css('display')!='none'){
					$(this).attr('id','pac-container-busqueda');	
				}
			}); 	

    	},1000);
    });



    $('body').click(function(){
		$('.popup_busqueda_profesores').addClass('oculto');
    });

    $('body').on('click','#input-buscador-profesores',function(event){
    	if($('.popup_busqueda_profesores .elemento').length>0){
    		$('.popup_busqueda_profesores').removeClass('oculto');
    	}
    	fun_cancel_buble_event(event);
    });
    $('body').on('click','.popup_busqueda_profesores',function(event){
    	fun_cancel_buble_event(event);
    });



	$('body').on('mousewheel','.popup_busqueda_profesores',function(event){
		GL_COMPONENTE_ANIMACION.cancel_scroll=true;
	});


var GL_INTERVAL_BUSQUEDA_PROF_X_NOMBRE;
	$('body').on('keyup','#menu_principal #input-buscador-profesores',function(event){

		clearInterval(GL_INTERVAL_BUSQUEDA_PROF_X_NOMBRE);
		GL_INTERVAL_BUSQUEDA_PROF_X_NOMBRE=setInterval(function(obj){
			clearInterval(GL_INTERVAL_BUSQUEDA_PROF_X_NOMBRE);
			fun_buscar_profesores_nombre($(obj).val());	
		},200,$(this));		

	});


	$('body').on('click','#inicio.busqueda .volver_busqueda',function(){
		
		$('#inicio').removeClass('busqueda');
		$('body').removeClass('busqueda');
		$('body,html').scrollTop(0);

		if($(this).hasClass('izq')){
			$('#barra_buscador #nombre_curso_buscar').focus();
		}else{
			$('#barra_buscador #lugar_autocompletado').focus();
		}
	});

	$('body').on('click','#inicio #resultados-busqueda .lista_resultados .resultado',function(){
		
			$(this).siblings().removeClass('seleccionado');
		if($('#ss_tipo').val()=='A'){
			$(this).addClass('seleccionado');
		}
	});

	$('body').on('click','#inicio #resultados-busqueda .lista_resultados .resultado .div_enviar_mensaje',function(){

      fun_enviar_mensaje($(this).parents('.resultado').data('id_usuario'),$(this).parents('.resultado').find('textarea').val(), 1); 
      $(this).parents('.resultado').find('.mensaje').slideUp(300);
      $(this).parents('.resultado').find('textarea').val('');
      $(this).parents('.resultado').find('.contacto_realizado').slideDown(300);
      var delay=setInterval(function(obj){
      	clearInterval(delay);

	      $(obj).parents('.resultado').find('.mensaje').slideDown(300);
	      $(obj).parents('.resultado').find('.contacto_realizado').slideUp(300);
      },3000,$(this));
      
  });


});


function fun_mostrar_lista_lugares_preferentes(obj){

	if($('#inicio').hasClass('busqueda')){
		$('#lista_lugares_preferentes').css('top',$(obj).offset().top - parseInt($('#lista_lugares_preferentes').css('height').replace('px',''))  );
	}else{
		$('#lista_lugares_preferentes').css('top',$(obj).offset().top + parseInt($(obj).css('height').replace('px',''))  );
	}

	$('#lista_lugares_preferentes').css('left',$(obj).offset().left);

	var ancho = parseInt($(obj).css('width').replace('px',''));

	$('#lista_lugares_preferentes').css('width',ancho+'px');
	$('#lista_lugares_preferentes').show();
}



var GL_AVISOS=new Array();
var GL_AVISOS_RANKING=new Array();


var GL_LOCACIONES_EJEMPLO= new Array();




var GL_PROFESORES_DISTANCIA=new Array();

function fun_get_avisos(){

/*
	if($('#seccion_funcion-buscar #posicion-circulo').val()=='si'){
		latitud=GL_CIRCULO_BUSQUEDA.getCenter().lat();
		longitud=GL_CIRCULO_BUSQUEDA.getCenter().lng();

	}else{*/

		var latitud=$('#barra_buscador #lugar_latitud').val();
		var longitud=$('#barra_buscador #lugar_longitud').val();
		var distancia=5000;

	//}
	
	var permiso=true;

	$('#nombre_curso_buscar').parents('.div_content_input').removeClass('alerta');
	if($('#barra_buscador #id_curso').val()=='' || $('#barra_buscador #id_curso').val()==0){
		permiso=false;
		$('#nombre_curso_buscar').parents('.div_content_input').addClass('alerta');
	}

	$('#lugar_autocompletado').parents('.div_content_input').removeClass('alerta');
	if(latitud=='vacio' || longitud=='vacio'){
		permiso=false;
		$('#lugar_autocompletado').parents('.div_content_input').addClass('alerta');
	}

	if(permiso){
		$('#inicio').addClass('busqueda');
		$('body').addClass('busqueda'); // es necesario agregar modo busqueda al body tambien

		$('body,html').scrollTop(0);
		var moneda=$('.div_buscador #moneda').val();

		$.ajax({
	        url: "POST/get_avisos.php",
	        type: "POST",
	        datatype:'json',
	        data:{curso:$('#barra_buscador #id_curso').val(),latitud:latitud, longitud: longitud,distancia:distancia},
	        async:true,
	        beforeSend: function(objeto){        	
	        },	        
			success: function(data){
				console.log(data);
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					GL_AVISOS=new Array();
					GL_AVISOS_RANKING=new Array();

						if(data!='no data'){

							GL_LOCACIONES_EJEMPLO= new Array();

							var respuesta=$.parseJSON(data);
							var contador=0;

							GL_PROFESORES_DISTANCIA=new Array();

							for(var index in respuesta){

								if(GL_PROFESORES_DISTANCIA.indexOf(respuesta[index].id_usuario)==-1){
									GL_AVISOS[respuesta[index].id]=respuesta[index];

									if(respuesta[index].distancia/0.00000925<200){ //menor que 100 metros
										leyenda=3;
									}else if(respuesta[index].distancia/0.00000925<distancia){
										leyenda=2;

									}else{
										leyenda=1;
									}

									GL_LOCACIONES_EJEMPLO[contador]={id:respuesta[index].id,coor_latitud: respuesta[index].coor_latitud,coor_longitud: respuesta[index].coor_longitud,leyenda:leyenda};
									contador++;

									GL_PROFESORES_DISTANCIA.push(respuesta[index].id_usuario);
								}
							}	




						}else{


						}
							fun_imprimir_resultados($('#barra_buscador #id_curso').val());

					}
				}
		});

	}
}



function fun_get_avisos_desde_popup(){

/*
	if($('#seccion_funcion-buscar #posicion-circulo').val()=='si'){
		latitud=GL_CIRCULO_BUSQUEDA.getCenter().lat();
		longitud=GL_CIRCULO_BUSQUEDA.getCenter().lng();

	}else{*/

		var latitud=GL_CIRCULO_BUSQUEDA.getCenter().lat();
		var longitud=GL_CIRCULO_BUSQUEDA.getCenter().lng();
		var distancia=GL_CIRCULO_BUSQUEDA.getRadius();

	//}


	$.ajax({
        url: "POST/get_avisos.php",
        type: "POST",
        datatype:'json',
        data:{curso:$('#barra_buscador #id_curso').val(),latitud:latitud, longitud: longitud,distancia:distancia},
        async:true,
        beforeSend: function(objeto){        	
        },	        
		success: function(data){
			
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

					if(data!='no data'){

						GL_LOCACIONES_EJEMPLO= new Array();

						var respuesta=$.parseJSON(data);
						var contador=0;
						for(var index in respuesta){

							if(respuesta[index].distancia/0.00000925<200){ //menor que 100 metros
								leyenda=3;
							}else if(respuesta[index].distancia/0.00000925<distancia){
								leyenda=2;

							}else{
								leyenda=1;
							}

							GL_LOCACIONES_EJEMPLO[contador]={id:respuesta[index].id,coor_latitud: respuesta[index].coor_latitud,coor_longitud: respuesta[index].coor_longitud,leyenda:leyenda};
							contador++;
						}	

						setMarkers(GL_MAPA,GL_LOCACIONES_EJEMPLO);

					}else{
					}


				}
			}
	});

}





function fun_imprimir_resultados(id_curso_match){

	var cont=0;


		
		var html_avisos='';
		for(var index in GL_AVISOS){
			cont++;

			html_avisos+=fun_armar_html_result_aviso(GL_AVISOS[index],id_curso_match);
		}
	if(GL_AVISOS.length>0){
		$('#resultados-busqueda .lista_resultados').html(html_avisos);
		
		$('#resultados-busqueda .descripcion').html('<span>Encontramos '+cont+' profesores(as)</span> <span class="txt_aux">cercanos a la ubicaci&oacute;n consultada.</span>');


	}else{

		$('#resultados-busqueda .lista_resultados').html('');
		$('#resultados-busqueda .descripcion').html('No se encontraron profesores cercanos a la ubicación consultada.');

	}

}



function fun_armar_html_result_aviso(aviso,id_curso_match){

    var html='<div class="resultado elemento" data-id_elemento="'+aviso.id+'" data-id_usuario="'+aviso.id_usuario+'">'+
            '<div class="contenido">'+
              '<div class="foto" style="'+(aviso.foto? 'background-image:url(IMG/USUARIOS/WEB/'+aviso.foto+');':'')+'"></div>'+
              '<div class="informacion">'+
                '<div class="info_sup">'+
                  '<div class="nombre">'+
                    '<div class="texto comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(aviso.username? aviso.username :aviso.id_usuario)+'">'+
                      aviso.nombres+' '+aviso.apellidos+
                    '</div>'+
                  '</div>'+
                  '<div class="valoracion">'+
                    '<div class="btn_votar activo">'+
                      '<div class="icono"></div>'+ 
                      '<div class="numero">'+aviso.calificacion+'</div>'+
                    '</div>'+
                    '<div class="texto">'+
                      'Valoraci&oacute;n ' +
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="info_inf">'+
                  '<div class="info_inf_izq">'+
                    '<div class="conocimientos">';
                    
                    for(var index in aviso.conocimientos){
                    	if(aviso.conocimientos[index].id_conocimiento==id_curso_match){
                    		html+='<div class="conocimiento match">'+aviso.conocimientos[index].nombre+'</div>';
                    		break;
                    	}
                    }
                    conteo_conocimientos=0;
                    for(var index in aviso.conocimientos){
                    	if(aviso.conocimientos[index].id_conocimiento!=id_curso_match){
	                    	conteo_conocimientos++;
	                    	html+='<div class="conocimiento">'+aviso.conocimientos[index].nombre+'</div>';
	                    	if(conteo_conocimientos==2){
	                    		break;
	                    	}
	                    }
                    }

            html+='</div>'+
                    '<div class="direccion">'+
                      aviso.direccion+
                    '</div>'+
                  '</div>'+
                  '<div class="info_inf_der">'+
                    '<div class="enlace_mapa comp-btn-abrir-popup" data-popup="mapa">'+
                      'Ver mapa'+
                    '</div>'+
                  '</div>'+
                '</div>'+  
              '</div>' +
              '<div class="mensaje"><textarea id="mensaje_aviso" placeholder="Mensaje para el profesor"></textarea><div class="div_enviar_mensaje boton_invictos">Enviar</div></div>'+
              '<div class="contacto_realizado">Mensaje enviado</div>'+             
            '</div> ' +          
          '</div>';

        return html;

}






var GL_PROFESORES_RANKING=new Array();
function fun_get_avisos_ranking(){


/*
	if($('#seccion_funcion-buscar #posicion-circulo').val()=='si'){
		latitud=GL_CIRCULO_BUSQUEDA.getCenter().lat();
		longitud=GL_CIRCULO_BUSQUEDA.getCenter().lng();

	}else{*/

		var latitud=$('#barra_buscador #lugar_latitud').val();
		var longitud=$('#barra_buscador #lugar_longitud').val();

		var distancia=2000;
	//}



	var moneda=$('.div_buscador #moneda').val();

	$.ajax({
        url: "POST/get_avisos_ranking.php",
        type: "POST",
        datatype:'json',
        data:{curso:$('#barra_buscador #id_curso').val(),latitud:latitud, longitud: longitud,distancia:distancia},
        async:true,
        beforeSend: function(objeto){        	
        },	        
		success: function(data){
			console.log(data);
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

					if(data!='no data'){

						var respuesta=$.parseJSON(data);
						var GL_PROFESORES_RANKING=new Array();
						for(var index in respuesta){
							if(GL_PROFESORES_RANKING.indexOf(respuesta[index].id_usuario)==-1){
								GL_AVISOS_RANKING[index]=respuesta[index];
								GL_PROFESORES_RANKING.push(respuesta[index].id_usuario);
							}
						}	

					}else{
					}
						fun_imprimir_resultados_ranking($('#barra_buscador #id_curso').val());

				}
			}
	});

}






function fun_imprimir_resultados_ranking(id_curso_match){

	var cont=0;


	if(GL_AVISOS_RANKING.length>0){
		
		var html_avisos='';
		for(var index in GL_AVISOS_RANKING){
			cont++;

			html_avisos+=fun_armar_html_result_aviso_ranking(GL_AVISOS_RANKING[index],id_curso_match);
		}
		$('#resultados-busqueda-ranking .lista_resultados_ranking').html(html_avisos);
		

	}else{

		$('#resultados-busqueda-ranking .lista_resultados_ranking').html('');
	  	//setMarkers(GL_MAPA, GL_AVISOS);
	}

}



function fun_armar_html_result_aviso_ranking(aviso,id_curso_match){


    var html='<div class="resultado elemento" data-id_elemento="'+aviso.id+'"  data-id_usuario="'+aviso.id_usuario+'">'+
            '<div class="contenido">'+
              '<div class="foto" style="'+(aviso.foto? 'background-image:url(IMG/USUARIOS/WEB/'+aviso.foto+');':'')+'"></div>'+
              '<div class="informacion">'+
                '<div class="info_sup">'+
                  '<div class="nombre">'+
                    '<div class="texto comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(aviso.username? aviso.username :aviso.id_usuario)+'">'+
                      aviso.nombres+' '+aviso.apellidos+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="info_inf">'+
                    '<div class="conocimientos">';
                    
                    for(var index in aviso.conocimientos){
                    	if(aviso.conocimientos[index].id_conocimiento==id_curso_match){
                    		html+='<div class="conocimiento match">'+aviso.conocimientos[index].nombre+'</div>';
                    		break;
                    	}
                    }
                    conteo_conocimientos=0;
                    for(var index in aviso.conocimientos){
                    	if(aviso.conocimientos[index].id_conocimiento!=id_curso_match){
	                    	conteo_conocimientos++;
	                    	html+='<div class="conocimiento">'+aviso.conocimientos[index].nombre+'</div>';
	                    	if(conteo_conocimientos==2){
	                    		break;
	                    	}
	                    }
                    }

            html+='</div>'+
                    '<div class="valoracion">'+
                          '<div class="btn_votar activo">'+
                            '<div class="icono"></div>'+
                            '<div class="numero">'+aviso.calificacion+'</div>'+
                          '</div>'+
                        '</div>'+
                '</div>'+  
              '</div>' +                 
            '</div> ' +          
          '</div>';

        return html;

}








function fun_buscar_profesores_nombre(nombre){

		$.ajax({
	        url: "POST/buscar_profesores_nombre.php",
	        type: "POST",
	        datatype:'json',
	        data:{nombre:nombre},
	        async:true,
	        beforeSend: function(objeto){        	
	        },	        
			success: function(data){
				console.log(data);
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{
					

						fun_imprimir_profesores(data);



				}
			}
		});

}



function fun_imprimir_profesores(profesores){


	if(profesores!='no data'){
		profesores=$.parseJSON(profesores);
		var html_profesores='';
		for(var index in profesores){
			html_profesores+=fun_armar_html_result_profesor(profesores[index]);
		}

		$('.popup_busqueda_profesores').removeClass('oculto');
		$('.popup_busqueda_profesores .content_lista').html(html_profesores);
		

	}else{

		$('.popup_busqueda_profesores').addClass('oculto');
		$('.popup_busqueda_profesores .content_lista').html('');
	
	}

}



function fun_armar_html_result_profesor(profesor){

    var html='<div class="profesor elemento comp-menu-celda-content"  data-id_usuario="'+profesor.id+'" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(profesor.username? profesor.username :profesor.id)+'">'+
	              '<div class="foto" style="'+(profesor.foto? 'background-image:url(IMG/USUARIOS/WEB/'+profesor.foto+');':'')+'"></div>'+
	              '<div class="informacion">'+
	                '<div class="nombre">'+profesor.nombre+'</div>'+
	                '<div class="valoracion">'+
	                  '<div class="btn_votar ">'+
	                    '<div class="icono"></div>'+
	                    '<div class="numero">'+profesor.calificacion+'</div>'+
	                  '</div>'+
	                '</div>'+
	              '</div>'+
	            '</div>';

        return html;

}
