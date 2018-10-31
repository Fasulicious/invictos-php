			var GL_INTERVALO_CONVERSACIONES;

         	$(document).ready(function(){
         		fun_get_notificaciones(0);
         		var intervalo_mensajes = setInterval(function(){
         			fun_get_notificaciones(0);
         		},60000);
         		
         		var d = new Date();
			     var h = (d.getHours()<10?'0':'') + d.getHours();
			     var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
			     var new_h = h+2
			
			if(new_h>23){ new_h = 23}
         		
         		$('.armar_propuesta #hora_propuesta').val(new_h)
         		$('.armar_propuesta #minutos_propuesta').val(m)

         		fun_get_recomendaciones($('.columna_mensajes .area-der .lista_recomendaciones .elemento').length);
				    $('#fecha_propuesta').daterangepicker({
				        singleDatePicker: true,
						//	"minDate": GLOBAL_HOY_DIA+"/"+GLOBAL_HOY_MES+"/"+GLOBAL_HOY_ANIO,
					        locale: {
					            format: 'DD/MM/YYYY'
					        }
				    });	

				    $('.columna_mensajes .acciones .generar_propuesta').click(function(){
				    	if($('.columna_mensajes .acciones').hasClass('propuesta')){

				    		$(this).html('Proponer clase');
				    		
				    	$('.columna_mensajes .acciones').removeClass('propuesta');
				    	}else{
				    		$(this).html('Cancelar');
				    	$('.columna_mensajes .acciones').addClass('propuesta');
				    	}
				    });

				    $('.columna_mensajes').on('click','.area-der .lista_mensajes .resultado',function(){
				    	//$(this).data('nombres');
				    	//$(this).data('foto');
				    	
				    	

						fun_get_conversacion($(this).data('id_usuario'),0); 
				    	


				    });

				    $('.columna_mensajes').on('change','.armar_propuesta #tiempo',function(){

						 $('.armar_propuesta #precio_total').html('S/.'+$('.armar_propuesta #precio').val()*$('.armar_propuesta #tiempo').val());
				    	
				    });
				    $('.columna_mensajes').on('keyup','.armar_propuesta #precio',function(){

						 $('.armar_propuesta #precio_total').html('S/.'+$('.armar_propuesta #precio').val()*$('.armar_propuesta #tiempo').val());
				    	
				    });


				    $('.columna_mensajes .acciones .btn_enviar').click(function(){


				    	if(!$('.columna_mensajes .acciones').hasClass('propuesta')){

				    		fun_enviar_mensaje($('.columna_mensajes .conversacion').data('id_usuario'),$('.columna_mensajes .nuevo_mensaje textarea').val(),0);
				    		$('.columna_mensajes .nuevo_mensaje textarea').val('');
				    		$('.columna_mensajes .nuevo_mensaje textarea').focusin();
				    	}else{

		    				$('.armar_propuesta .caja').removeClass('alerta');
			    			$('.columna_mensajes .area-izq .acciones .mensaje_alerta').hide();

				    		if($.trim($('.armar_propuesta #hora_propuesta').val())=='' || $.trim($('.armar_propuesta #minutos_propuesta').val())=='' || $('.armar_propuesta #hora_propuesta').val()>23 || $('.armar_propuesta #minutos_propuesta').val()>59 || isNaN($('.armar_propuesta #hora_propuesta').val()) || isNaN($('.armar_propuesta #minutos_propuesta').val()) || $('.armar_propuesta #hora_propuesta').val()<0 || $('.armar_propuesta #minutos_propuesta').val()<0){

				    			$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Falta completar datos de la clase');
				    			$('.columna_mensajes .area-izq .acciones .mensaje_alerta').slideDown(300);
				    			
				    			if($.trim($('.armar_propuesta #hora_propuesta').val())=='' ){
				    				$('.armar_propuesta #hora_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Falta completar datos de la clase');
				    			}
				    			if($.trim($('.armar_propuesta #minutos_propuesta').val())=='' ){
				    				$('.armar_propuesta #minutos_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Falta completar datos de la clase');
				    			}

				    			if($('.armar_propuesta #hora_propuesta').val()>23 ){
				    				$('.armar_propuesta #hora_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('La hora no puede ser mayor a 23');
				    			}
				    			if($('.armar_propuesta #minutos_propuesta').val()>59){
				    				$('.armar_propuesta #minutos_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Los minutos no pueden ser mayores a 59');
				    			}

				    			if($('.armar_propuesta #hora_propuesta').val()<0 ){
				    				$('.armar_propuesta #hora_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('La hora no puede ser menor a 0');
				    			}
				    			if($('.armar_propuesta #minutos_propuesta').val()<0){
				    				$('.armar_propuesta #minutos_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Los minutos no pueden ser menores a 0');
				    			}

				    			if(isNaN($('.armar_propuesta #hora_propuesta').val()) ){
				    				$('.armar_propuesta #hora_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Coloque un valor correcto para la hora');
				    			}
				    			if(isNaN($('.armar_propuesta #minutos_propuesta').val())){
				    				$('.armar_propuesta #minutos_propuesta').parents('.caja').addClass('alerta');
				    				$('.columna_mensajes .area-izq .acciones .mensaje_alerta').html('Coloque un valor correcto para los minutos');
				    			}

				    		}else{
				    			fun_enviar_propuesta_economica($('.columna_mensajes .conversacion').data('id_usuario'), fun_formatear_fecha($('.armar_propuesta #fecha_propuesta').val(),'/-?'), $('.armar_propuesta #hora_propuesta').val()+':'+$('.armar_propuesta #minutos_propuesta').val());	
				    		}
							
				    	}
				    });

				    $('.columna_mensajes .nuevo_mensaje textarea').keyup(function(event){
				    	if(event.keyCode==13){
				    		fun_enviar_mensaje($('.columna_mensajes .conversacion').data('id_usuario'),$('.columna_mensajes .nuevo_mensaje textarea').val(),0);	
				    		$('.columna_mensajes .nuevo_mensaje textarea').val('');
				    		$('.columna_mensajes .nuevo_mensaje textarea').focusin();
				    	}
				    });
				    $('.columna_mensajes').on('click','.area-der .cargar_mas',function(){
				    	$('.columna_mensajes .area-der .cargar_mas').remove();         				fun_get_notificaciones($('.columna_mensajes .area-der .lista_mensajes .elemento').length);
				    		
				    });
				    $('.columna_mensajes').on('click','.conversacion .cargar_mas',function(){
				    	$('.columna_mensajes .conversacion .cargar_mas').remove();         				fun_get_conversacion($('.columna_mensajes .conversacion').data('id_usuario'),$('.columna_mensajes .conversacion .mensaje').length);				    		
				    });

				    $('#confirmar_propuesta').click(function(){
				    	fun_enviar_respuesta_propuesta_economica($('.columna_mensajes .conversacion').data('id_usuario'),'aprobar');

				    });
				    $('#rechazar_propuesta').click(function(){

				    	fun_enviar_respuesta_propuesta_economica($('.columna_mensajes .conversacion').data('id_usuario'),'rechazar');
				    });
				    $('#replantear_propuesta').click(function(){

						$('.armar_propuesta #tiempo').val($('.columna_mensajes .propuesta_economica #tiempo .valor').val());
						 $('.armar_propuesta #precio').val($('.columna_mensajes .propuesta_economica #precio_hora .valor').val());
						 $('.armar_propuesta #precio_total').html('S/.'+$('.columna_mensajes .propuesta_economica #precio_hora .valor').val()*$('.columna_mensajes .propuesta_economica #tiempo .valor').val());

						 var fecha=$('.columna_mensajes .propuesta_economica #fecha .valor').val();
						 $('.armar_propuesta #fecha_propuesta').val( fun_formatear_fecha(fecha,'-/?'))

						 var hora=$('.columna_mensajes .propuesta_economica #hora .valor').val();
						 partes_hora=hora.split(':');

/*
						 if(partes_hora[0]>=12){

						 $('.armar_propuesta #meridiano_propuesta').val('pm');
						 $('.armar_propuesta #hora_propuesta').val(partes_hora[0]-12);

						 }else{

						 $('.armar_propuesta #meridiano_propuesta').val('am');
						 $('.armar_propuesta #hora_propuesta').val(partes_hora[0]);
						 }*/
						 $('.armar_propuesta #hora_propuesta').val(partes_hora[0]);

						 $('.armar_propuesta #minutos_propuesta').val(partes_hora[1]);



				    	if(!$('.columna_mensajes .acciones').hasClass('propuesta')){
				    		$('.columna_mensajes .acciones .generar_propuesta').click();
				    	}
				    });
				    $('#cancelar_propuesta').click(function(){

				    	fun_cancelar_propuesta_economica($('.columna_mensajes .conversacion').data('id_usuario'));
				    });

				    $('.propuesta_economica .titulo_propuesta').click(function(){
				    	if($('.propuesta_economica').hasClass('minimizado')){
				    		$('.propuesta_economica').removeClass('minimizado');
         					$('.columna_mensajes .conversacion').addClass('reducir');
         					$('.columna_mensajes .conversacion').removeClass('semireducir');
				    	}else{
				    		$('.propuesta_economica').addClass('minimizado');
         					$('.columna_mensajes .conversacion').removeClass('reducir');
         					$('.columna_mensajes .conversacion').addClass('semireducir');		    		
				    	}
				    });

				    $('.recomendaciones .flecha.sig').click(function(){
				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').next().addClass('mostrado');
				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').first().hide();
				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').first().removeClass('mostrado');
				    	var delay=setInterval(function(obj){
				    		clearInterval(delay);
				    		$(obj).parents('.recomendaciones').find('.resultado.mostrado').fadeIn(300);
				    	},310,$(this));
				    	
				    	$(this).parents('.recomendaciones').find('.flecha.ant').removeClass('inactivo');
				    	if(!$(this).parents('.recomendaciones').find('.resultado.mostrado').next().length){
				    		$(this).addClass('inactivo');
				    	}
				    });

				    $('.recomendaciones .flecha.ant').click(function(){

				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').prev().addClass('mostrado');
				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').last().hide();
				    	$(this).parents('.recomendaciones').find('.resultado.mostrado').last().removeClass('mostrado');

				    	var delay=setInterval(function(obj){
				    		clearInterval(delay);
				    		$(obj).parents('.recomendaciones').find('.resultado.mostrado').fadeIn(300);
				    	},310,$(this));

				    	$(this).parents('.recomendaciones').find('.flecha.sig').removeClass('inactivo');
				    	
				    	if(!$(this).parents('.recomendaciones').find('.resultado.mostrado').prev().length){
				    		$(this).addClass('inactivo');
				    	}
				    });
				    $('body').on('click','.columna_mensajes .columna-pagina[data-columna="notificaciones"] .resultado',function(){
				    	$('.columna_mensajes .comp-menu-fijo .comp-menu-celda-content[data-columna="chat"]').click();
				    });
         	});

         	function fun_get_notificaciones(inicio){
         		if(inicio==0){
         			$('.columna_mensajes .area-der .lista_mensajes').html('');
 					$('.columna_mensajes .area-der .titulo_rec').data('num',0);
         		}
	         	$.ajax({
	         		url:'POST/CONVERSACION/get_notificaciones.php',
	         		data:{inicio:inicio},
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
	         					
	         					html_notificaciones='<div class="no_hay_mas">No hay m&aacute;s resultados</div>';
	         					
	         					$('.columna_mensajes .area-der .lista_mensajes').append(html_notificaciones);
	         				}else{	
	         					var html_notificaciones='';
	         					var conteo=parseInt($('.columna_mensajes .titulo_cont_msj').data('num'));
	         					var cont_mensajes_sin_leer=0;
	         					for(var ind in data){

	         						if(data[ind].estado==0){
		         						conteo++;	
	         						}
	         						var background='';

		         						if(data[ind].foto){
		         							background='style="background-image:url(IMG/USUARIOS/WEB/'+data[ind].foto+')"';
		         						}else{
		         							if($('#ss_tipo').val()=='A'){
		         								background='style="background-image:url(IMG/USUARIOS/WEB/profesor_default.png)"';
		         							}else{
		         								background='style="background-image:url(IMG/USUARIOS/WEB/alumno_default.png)"';	
		         							}
		         						}	
	         						
	         						html_notificaciones+='<div class="resultado elemento '+(data[ind].estado==1?'':'sin-leer')+'" data-id_usuario="'+data[ind].emisor+'" data-nombres="'+data[ind].nombres+' '+data[ind].apellidos+'" data-foto="'+data[ind].foto+'">'+
					         			'<div class="content">'+
							              	'<div class="foto" '+background+'></div>'+
							              	'<div class="informacion">'+
								                '<div class="info_sup">'+
								                  	'<div class="nombre">'+
								                    	'<div class="texto">'+
								                     		data[ind].nombres+' '+data[ind].apellidos+
								                    	'</div>'+
								                  	'</div>'+
								                '</div>'+
								                '<div class="info_inf">'+
								                    '<div class="resumen">'+
								                    	data[ind].msj_resumen+
								            		'</div>'+
								            		'<div class="fecha_hora">'+
								            			data[ind].fecha+ ' '+data[ind].hora+
								            		'</div>'+
								                '</div> ' +
							              	'</div>'+
							            '</div>  '+
					         		'</div>';

	         					}
	         					if(conteo>0){
     								$('#btn_menu_notificaciones #btn_notificaciones').addClass('activo');

		         						if(!$('#btn_menu_notificaciones #btn_notificaciones').hasClass('activo')){
			         						var repeticion = setInterval(function(){
			         							if($('#btn_menu_notificaciones #btn_notificaciones').length){
			         								$('#btn_menu_notificaciones #btn_notificaciones').addClass('activo');
			         								clearInterval(repeticion);
			         							}
			         						},1000);
			         					}
	         					}

	         					$('.columna_mensajes .titulo_cont_msj').data('num',conteo);
	         					$('.columna_mensajes .titulo_cont_msj').html('Mensajes ('+conteo+')');
	         					html_notificaciones+='<div class="cargar_mas">Cargar m&aacute;s</div>';
	         					$('.columna_mensajes .area-der .lista_mensajes').append(html_notificaciones);

	         				}
	         			}

	         		}

	         	});
         	}





         	function fun_get_conversacion(id_usuario,inicio){


				if(!GL_POP_STATE){
					GL_ESTADO_HISTORIAL={ gl_get_user: "" , gl_get_view: "mensajes", gl_get_subview: id_usuario, scroll_top:0};

					window.history.pushState(GL_ESTADO_HISTORIAL, null, "mensajes/"+id_usuario);
				}
         		if(inicio==0){
					$('.columna_mensajes .conversacion').html('');
         		}
				fun_leer_notificacion(id_usuario);

	         	$.ajax({
	         		url:'POST/CONVERSACION/get_conversacion.php',
	         		data:{id_usuario:id_usuario,inicio:inicio},
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

	         					html_conversacion='<div class="no_hay_mas">No hay m&aacute;s mensajes</div>';
	         					
	         					$('.columna_mensajes .conversacion').prepend(html_conversacion);
	         				}else{	
	         					var html_conversacion='';
	         					
	         					var conteo=0;	

	         					for(var ind in data.conversacion){

	         						conteo++;

	         						var background='';
	         						var nombres='';

	         						if(id_usuario==data.conversacion[ind].emisor){

		         						if(data.info_usuario.foto){
		         							background='style="background-image:url(IMG/USUARIOS/WEB/'+data.info_usuario.foto+')"';
		         						}else{
		         							
		         							if($('#ss_tipo').val()=='A'){
		         								background='style="background-image:url(IMG/USUARIOS/WEB/profesor_default.png)"';
		         							}else{
		         								background='style="background-image:url(IMG/USUARIOS/WEB/alumno_default.png)"';	
		         							}
		         						}	
		         						nombres=data.info_usuario.nombres+' '+data.info_usuario.apellidos;
	         						}else{

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
	         							
	         						}
	         						var fecha_hora_convertidas=fun_diferencia_horaria(data.conversacion[ind].solo_fecha,data.conversacion[ind].solo_hora,'UTC-normal');
	         						html_conversacion='<div class="mensaje '+(id_usuario==data.conversacion[ind].emisor ?'':'yo')+'">'+
										'<div class="cab">'+
											'<div class="info_user inline vertical-m">'+
												'<div class="foto f-i inline vertical-m" '+background+'></div>'+
												'<div class="nombre inline vertical-m c-celeste">'+nombres+'</div>'+
												'<div class="foto f-d inline vertical-m" '+background+'></div>'+
												'<div class="fecha_hora inline vertical-m">'+fun_formatear_fecha(fecha_hora_convertidas.fecha,'-/?')+' '+fun_oracion_hora_minutos(fecha_hora_convertidas.hora)+'</div>'+
											'</div>'+
										'</div>'+
										'<div class="txt_msj">'+
											data.conversacion[ind].mensaje+
										'</div>'+
									'</div>'+html_conversacion;
	         					}

	         					html_conversacion='<div class="cargar_mas">Cargar m&aacute;s</div>'+html_conversacion;
	         					$('.columna_mensajes .conversacion').data('inicio',conteo);
	         					$('.columna_mensajes .conversacion').prepend(html_conversacion);

								elem = $('.columna_mensajes .conversacion');
								maxScrollTop = elem[0].scrollHeight - elem.outerHeight();
								
								$('.columna_mensajes .conversacion').scrollTop(maxScrollTop);


								$('.columna_mensajes .area-izq .titulo span').html('<a class="comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(data.username?data.username : id_usuario )+'">'+data.info_usuario.nombres+' '+data.info_usuario.apellidos+'</a>');
						    	$('.columna_mensajes .conversacion').data('inicio',0);
						    	$('.columna_mensajes .conversacion').data('id_usuario',id_usuario);
						    	$('.columna_mensajes .conversacion').data('nombres',data.info_usuario.nombres+' '+data.info_usuario.apellidos);
						    	$('.columna_mensajes .conversacion').data('foto',data.info_usuario.foto);

				    			fun_get_propuesta_economica(id_usuario);

				    			clearInterval(GL_INTERVALO_CONVERSACIONES);
				    			
						    	GL_INTERVALO_CONVERSACIONES = setInterval(function(){

									fun_get_conversacion(id_usuario,0);
				         			
				         		},60000);



	         				}
	         			}

	         		}

	         	});
         	}

         	function fun_get_propuesta_economica(id_usuario){

	         	$.ajax({
	         		url:'POST/CONVERSACION/get_propuesta_economica.php',
	         		data:{id_usuario:id_usuario},
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
	         					$('.columna_mensajes .conversacion').removeClass('semireducir');
	         					$('.columna_mensajes .conversacion').removeClass('reducir');
	         					$('.columna_mensajes .propuesta_economica').slideUp(300);
	         				}else {	
	         				
		         				var today = new Date();
							var dd = today.getDate();
							var tt = dd + 1;
							var mm = today.getMonth()+1; //January is 0!
							var yyyy = today.getFullYear();
							
							if(dd<10) {
							    dd = '0'+dd;
							    tt = '0'+tt;
							} 
							
							if(mm<10) {
							    mm = '0'+mm;
							} 
							
							today = yyyy + '-' + mm + '-' + dd;
							tomorrow = yyyy + '-' + mm + '-' + tt;
		         				
	         					if (data.fecha != today && data.fecha != tomorrow) {
	         					
	         						fun_cancelar_propuesta_economica($('.columna_mensajes .conversacion').data('id_usuario'));				
	         					} else {
	         					
		         					$('.columna_mensajes .propuesta_economica').attr('data-estado',data.estado);
		         					switch(parseInt(data.estado)){
		         						case 1:
		         							$('.columna_mensajes .propuesta_economica .estado_propuesta .txt').html('Clase en espera');
		         							//$('.columna_mensajes .acciones .generar_propuesta').html('Replantear clase');
		         							$('.columna_mensajes .area-izq .acciones .generar_propuesta').removeClass('oculto');
		         						break;
		         						case 2:
		         							$('.columna_mensajes .propuesta_economica .estado_propuesta .txt').html('Clase rechazada');
		         							$('.columna_mensajes .acciones .generar_propuesta').html('Replantear clase');
		         							$('.columna_mensajes .area-izq .acciones .generar_propuesta').removeClass('oculto');
		         						break;
		         						case 3:
		         							$('.columna_mensajes .propuesta_economica .estado_propuesta .txt').html('Clase aprobada');
		         							$('.columna_mensajes .acciones .generar_propuesta').html('Replantear clase');			
		         							$('.columna_mensajes .area-izq .acciones .generar_propuesta').addClass('oculto');
		         						break;
		         						case 0:
		         							$('.columna_mensajes .acciones .generar_propuesta').html('Proponer clase');
		         							$('.columna_mensajes .area-izq .acciones .generar_propuesta').removeClass('oculto');
		         						break;
		         					}
	
	
		         					if(parseInt(data.estado)!=0){
	
			         					$('.columna_mensajes .conversacion').addClass('semireducir');
		         						$('.columna_mensajes .propuesta_economica').addClass('minimizado');
		    
			         					$('.columna_mensajes .propuesta_economica #tiempo span').html((data.tiempo>1)?data.tiempo+' hrs':data.tiempo+' hra');
			         					$('.columna_mensajes .propuesta_economica #tiempo .valor').val(data.tiempo);
			         					$('.columna_mensajes .propuesta_economica #precio_hora span').html('S/. '+parseFloat(data.costo_hora).toFixed(2));
			         					$('.columna_mensajes .propuesta_economica #precio_hora .valor').val(data.costo_hora);
			         					$('.columna_mensajes .propuesta_economica #precio_total').html('S/. '+parseFloat(data.costo_hora*data.tiempo).toFixed(2));
	
			         					fecha_valor_transformados=fun_diferencia_horaria(data.fecha,data.hora,'UTC-normal');
			         					$('.columna_mensajes .propuesta_economica #fecha span').html(fun_formatear_fecha(fecha_valor_transformados.fecha,'--?'));
			         					$('.columna_mensajes .propuesta_economica #fecha .valor').val(fecha_valor_transformados.fecha);
	
			         					$('.columna_mensajes .propuesta_economica #hora span').html(fun_oracion_hora(fecha_valor_transformados.hora));
			         					$('.columna_mensajes .propuesta_economica #hora .valor').val(fecha_valor_transformados.hora);
	
			         					$('.columna_mensajes .propuesta_economica').slideDown(300);
	
	
		         					}else{
	
	
			         					$('.columna_mensajes .conversacion').removeClass('semireducir');
			         					$('.columna_mensajes .conversacion').removeClass('reducir');
			         					$('.columna_mensajes .propuesta_economica').slideUp(300);
		         					}
	
									elem = $('.columna_mensajes .conversacion');
									maxScrollTop = elem[0].scrollHeight - elem.outerHeight();
									
									$('.columna_mensajes .conversacion').scrollTop(maxScrollTop);
								
							}
	         				}
	         			}

	         		}

	         	});
         	}





         	function fun_enviar_propuesta_economica(id_usuario, fecha, hora){
/*
         		if($.trim(fecha)=='' || $.trim(hora)==''){

         		}else{*/
         		var fecha_hora_convertidas=fun_diferencia_horaria(fecha,hora,'normal-UTC');
	         	$.ajax({
	         		url:'POST/CONVERSACION/enviar_propuesta_economica.php',
	         		data:{id_usuario:id_usuario,fecha:fecha_hora_convertidas.fecha,hora:fecha_hora_convertidas.hora},
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

 							$('.columna_mensajes .propuesta_economica').attr('data-estado',1);
 							$('.columna_mensajes .propuesta_economica .estado_propuesta .txt').html('Propuesta en espera');
         					$('.columna_mensajes .conversacion').addClass('semireducir');
         					$('.columna_mensajes .propuesta_economica').addClass('minimizado');
         					$('.columna_mensajes .propuesta_economica').slideDown(300);
         					$('.columna_mensajes .propuesta_economica #fecha span').html(fecha);
         					$('.columna_mensajes .propuesta_economica #fecha .valor').val(fecha);
         					$('.columna_mensajes .propuesta_economica #hora span').html(hora);
         					$('.columna_mensajes .propuesta_economica #hora .valor').val(hora);

         					$('.columna_mensajes .acciones .generar_propuesta').click();

	         			}

	         		}

	         	});
         	//	}
         	}



         	function fun_enviar_respuesta_propuesta_economica(id_usuario,accion){

		         	$.ajax({
		         		url:'POST/CONVERSACION/alumno_responde_propuesta.php',
		         		data:{id_usuario:id_usuario,accion:accion},
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
		         				switch(accion){
		         					case 'rechazar':
	         							$('.columna_mensajes .propuesta_economica').attr('data-estado',2);
	         							$('.propuesta_economica .titulo_propuesta .estado_propuesta .txt').html('Propuesta rechazada');
		         					break;
		         					case 'aprobar':
		         						$('.columna_mensajes .propuesta_economica').attr('data-estado',3);
		         						$('.propuesta_economica .titulo_propuesta .estado_propuesta .txt').html('Propuesta aprobada');
		         					break;
		         				}

		         				$('.propuesta_economica .btns').slideUp(300);
		         				$('.propuesta_economica .msj_auxiliar').slideDown(300);
	         					

		         			}

		         		}

		         	});
         	}



         	function fun_cancelar_propuesta_economica(id_usuario){

		         	$.ajax({
		         		url:'POST/CONVERSACION/cancelar_propuesta_economica.php',
		         		data:{id_usuario:id_usuario},
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

	         					$('.columna_mensajes .conversacion').removeClass('reducir');
	         					$('.columna_mensajes .conversacion').removeClass('semireducir');
	         					$('.columna_mensajes .propuesta_economica').slideUp(300);
	         					

		         			}

		         		}

		         	});
         	}


         	function fun_get_recomendaciones(inicio){

	         	$.ajax({
	         		url:'POST/RECOMENDACIONES/get_recomendaciones.php',
	         		data:{inicio:inicio},
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

	         					html_notificaciones='';
	         					
	         					$('.columna_mensajes .lista_recomendaciones').append(html_notificaciones);

	         				}else{	
	         					data=data.data;
	         					var html_notificaciones='';
	         					var conteo=parseInt($('.columna_mensajes  .titulo_rec').data('num'));
	         					for(var ind in data){

		         						conteo++;	

	         						var background='';

		         						if(data[ind].foto_profe){
		         							background='style="background-image:url(IMG/USUARIOS/MINI/'+data[ind].foto_profe+')"';
		         						}	



	         						html_notificaciones+='<div class="resultado elemento comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(data[ind].username_profe ? data[ind].username_profe : data[ind].cod_profe)+'" data-id_usuario="" data-nombres="">'+	         		
					         		'<div class="remitente">'+
					         			'<span>'+data[ind].nombres_alumno+' '+data[ind].apellidos_alumno+'</span> te recomienda a:'+
					         		'</div>'+
				         			'<div class="content">'+
						              	'<div class="foto" '+background+'></div>'+
						              	'<div class="informacion">'+
							                '<div class="info_sup">'+
							                  	'<div class="nombre">'+
							                    	'<div class="texto">'+
											            data[ind].nombres_profe+' '+data[ind].apellidos_profe+
							                    	'</div>'+
							                  	'</div>'+
							                '</div>'+
							                '<div class="info_inf">'+				                    
							                    '<div class="conocimientos">';

										for(var ind2 in data[ind].conocimientos){
											html_notificaciones+='<div class="conocimiento">'+data[ind].conocimientos[ind2].nombre_conocimiento+'</div>';
										}
											
							html_notificaciones+='</div>'+
								                    '<div class="valoracion">'+
								                      '<div class="btn_votar btn_votar_profesor">'+
								                        '<div class="icono"></div>'+
								                        '<div class="numero">'+data[ind].calificacion+'</div>'+
								                      '</div>'+
								                    '</div>'+
								                '</div>'+
							              	'</div>'+
							            '</div>'+
					         		'</div>';

	         					}

	         					$('.columna_mensajes  .titulo_rec').data('num',conteo);

	         					$('.columna_mensajes  .titulo_rec').html('Recomendaciones ('+conteo+')');
	         					//html_notificaciones+='<div class="cargar_mas">Cargar m&aacute;s</div>';
	         					$('.columna_mensajes .lista_recomendaciones').append(html_notificaciones);

	         					if(conteo>1){
	         						$('.recomendaciones .flecha.sig').removeClass('inactivo');
	         					}


	         					if(conteo>0){
     								$('#btn_menu_notificaciones #btn_notificaciones').addClass('activo');

		         						if(!$('#btn_menu_notificaciones #btn_notificaciones').hasClass('activo')){
			         						var repeticion = setInterval(function(){
			         							if($('#btn_menu_notificaciones #btn_notificaciones').length){
			         								$('#btn_menu_notificaciones #btn_notificaciones').addClass('activo');
			         								clearInterval(repeticion);
			         							}
			         						},1000);
			         					}
	         					}

	         					
	         					$('.columna_mensajes .lista_recomendaciones .resultado:first-child').addClass('mostrado');
	         					$('.columna_mensajes .lista_recomendaciones .resultado:first-child').show();

	         				}
	         			}

	         		}

	         	});
         	}





         	function fun_leer_notificacion(id_usuario){
         		$('.columna_mensajes .area-der .lista_mensajes .resultado[data-id_usuario="'+id_usuario+'"]').removeClass('sin-leer');

		         	$.ajax({
		         		url:'POST/CONVERSACION/leer_notificacion.php',
		         		data:{id_usuario:id_usuario},
		         		type:'POST',
		         		datatype:'json',
		         		async:true,
		         		beforeSend: function(objeto){
		         		},
		         		success:function (data){
		         		}

		         	});
         	}

