



$(window).scroll(function(event){

	GL_COMPONENTE_CONTACTENOS.verifica_componente_ventana();
	
});

$(document).ready(function(){
	$('body').on('click','.comp-contactenos-btn-gmaps',function(){
		var id_contactenos=$(this).data('idcontactenos');
		//alert(id_contactenos);

		//fun_carga_google_maps();
		GL_COMPONENTE_CONTACTENOS.ARRAY[id_contactenos].ejecutar_google_maps();
	});
/* DESARROLLADO  POR DANTE VIDAL TUEROS*/


    $('body').on('click','.comp-contactenos-enviar',function(){



  /*    $('#comp-contactenos-nombre').parent().removeClass('comp-contacto-alerta');
      $('#comp-contactenos-apellidos').parent().removeClass('comp-contacto-alerta');
      $('#comp-contactenos-correo').parent().removeClass('comp-contacto-alerta');
      $('#comp-contactenos-telefono').parent().removeClass('comp-contacto-alerta');
      $('#comp-contactenos-mensaje').parent().removeClass('comp-contacto-alerta');
      
      nombre=((typeof $('#comp-contactenos-nombre').val() =='string')? $('#comp-contactenos-nombre').val() : 'no definido' );
      apellidos=((typeof $('#comp-contactenos-apellidos').val()=='string')? $('#comp-contactenos-apellidos').val() : 'no definido' );
      correo=((typeof $('#comp-contactenos-correo').val()=='string')? $('#comp-contactenos-correo').val() : 'no definido' );
      telefono=((typeof $('#comp-contactenos-telefono').val()=='string')? $('#comp-contactenos-telefono').val() : 'no definido' );
      mensaje=((typeof $('#comp-contactenos-mensaje').val()=='string')? $('#comp-contactenos-mensaje').val() : 'no definido' );
*/



    var motivo=$(this).parents('.comp-contactenos-content').data('motivo');

	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto').parent().removeClass('comp-contacto-alerta');
      $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-cuerpo .comp-contactenos-campo .campo-vacio').addClass('oculto');


	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto').each(function(){

		if($(this).attr('type')=='checkbox'){
			
			$('.comp-contactenos-content[data-motivo="'+motivo+'"] form #campo_form_contacto_'+$(this).data('campo')).val($(this).is(':checked'));

		}else{

			$('.comp-contactenos-content[data-motivo="'+motivo+'"] form #campo_form_contacto_'+$(this).data('campo')).val($(this).val());

		}

	});


/*
	valores= JSON.stringify(valores);
	alert(valores);*/

	formData  = new FormData($('.comp-contactenos-content[data-motivo="'+motivo+'"] form')[0]);



    // if(!fun_esblanco(nombre)  && !fun_esblanco(correo) && !fun_esblanco(telefono) && !fun_esblanco(mensaje)){
        
		$.ajax({
		//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES	        
		data:formData, 
        async:true,
	    cache: false,
	    contentType: false,
	    processData: false,
          url: "COMPONENTES/CONTACTENOS/POST/contacto.php",
          type: "POST",
         // data:{nombre:fun_ignora_tildes(nombre),correo:correo,telefono:telefono,mensaje:fun_ignora_tildes(mensaje)},
          beforeSend: function(objeto){
            
            $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').html('Enviando...');
            $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').addClass('comp-contacto-enviando');
          },
            
          success: function(data){
          	console.log(data);
         	data=$.parseJSON(data);
          
            if(data.error){

              	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').html('Enviar');
            	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').removeClass('comp-contacto-enviando');

            	switch(data.detalle){

					case 'mysql':
						FMSG_ERROR_CONEXION();
					break;
					case 'email':

						$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().addClass('comp-contacto-alerta');

				          $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().find('.campo-vacio').html('Debe escribir un email correcto');
				          $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().find('.campo-vacio').removeClass('oculto');

					break;
					case 'vacio':
						$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().addClass('comp-contacto-alerta');

				          $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().find('.campo-vacio').html('Este campo es obligatorio');
				          $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto[data-campo="'+data.campo+'"]').parent().find('.campo-vacio').removeClass('oculto');
					break;					
            	}

            }else{

				try{
					fun_msj_enviado_obj_contactenos(motivo);
				}catch(e){

				}

              	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-campo-contacto').val('');
                $('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-content-enviar').html('Mensaje enviado');

                var delay_envio=setInterval(function(){
                  clearInterval(delay_envio);
                  	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').html('Enviar');
                	$('.comp-contactenos-content[data-motivo="'+motivo+'"] .comp-contactenos-enviar .comp-content-enviar').removeClass('comp-contacto-enviando');
                },4000);
            }
          }
                  
              
        }); 
        
        
/* DESARROLLADO  POR DANTE VIDAL TUEROS*/
     /* }else{

        if(fun_esblanco(nombre)){
          $('#comp-contactenos-nombre').parent().addClass('comp-contacto-alerta');
          $('#comp-contactenos-nombre').next().removeClass('oculto');
        }
        if(fun_esblanco(apellidos)){
          $('#comp-contactenos-apellidos').parent().addClass('comp-contacto-alerta');
          $('#comp-contactenos-apellidos').next().removeClass('oculto');
        }
        if(fun_esblanco(correo)){
		$('#comp-contactenos-correo').next().html('Este campo es obligatorio');
          $('#comp-contactenos-correo').parent().addClass('comp-contacto-alerta');
          $('#comp-contactenos-correo').next().removeClass('oculto');
        }
        if(fun_esblanco(telefono)){
          $('#comp-contactenos-telefono').parent().addClass('comp-contacto-alerta');
          $('#comp-contactenos-telefono').next().removeClass('oculto');
        }
        if(fun_esblanco(mensaje)){
          $('#comp-contactenos-mensaje').parent().addClass('comp-contacto-alerta');
          $('#comp-contactenos-mensaje').next().removeClass('oculto');
        }  
            
      }
      */
    });

	$('body').on('focusin','.comp-contactenos .comp-contactenos-cuerpo .comp-contactenos-campo_input input, .comp-contactenos .comp-contactenos-cuerpo .comp-contactenos-campo_input textarea',function(){
		$(this).parent().addClass('focus-input');
	});
	$('body').on('focusout','.comp-contactenos .comp-contactenos-cuerpo .comp-contactenos-campo_input input, .comp-contactenos .comp-contactenos-cuerpo .comp-contactenos-campo_input textarea',function(){
		$(this).parent().removeClass('focus-input');
	});

});

$(window).resize(function(){
	
	if(!GL_INICIA_DESDE_MOVIL){
		for(var index in GL_COMPONENTE_CONTACTENOS.ARRAY){
			GL_COMPONENTE_CONTACTENOS.ARRAY[index].resize();
		}
	}
	
/* DESARROLLADO  POR DANTE VIDAL TUEROS*/
});

function OBJ_INICIALIZA_CONTACTENOS(){


	this.CONT=0;
	this.ARRAY=new Array();

	this.ini=function(){
		var obj_ini=this;


		$('.comp-contactenos').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

			
			obj_dom=$(this);
			if($(obj_dom).data('tipocarga')=='manual'){	
				obj_ini.ini_componente(obj_dom);
			}

		});


				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('contactenos',this);

		}
	};



	this.ini_por_id=function(obj_dom){

		this.ini_componente(obj_dom);
		this.ARRAY[this.CONT-1].resize();

		if(GL_COMPONENTE_CARGANDO){
			GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
		}
				
	};		

	this.ini_componente=function(obj_dom){



		var obj_ini=this;
			if(!$(obj_dom).attr('id') || $(obj_dom).attr('id')=='' ){

				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA

				var array_class_extra=new Array();
				var array_attr_extra=new Array();

				$(obj_dom).find('AttrExtra').each(function(){		
					array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
				});

				array_class_extra=new Array();
 
				$(obj_dom).find('>ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});

/* DESARROLLADO  POR DANTE VIDAL TUEROS*/


				var altura_boton_ubicanos=0;
				var contador=0;	
				var html_formulario='',html_ubicanos='',img_indicador='',campos_form='';
				var latitud=0,longitud=0;

				var html_pie='';
				var html_info_extra='';
				var altura_pie=0;



				var palabra_boton='Enviar';
				if(typeof $(obj_dom).data('palabraboton')=='string'){					
					palabra_boton=$(obj_dom).data('palabraboton');
				}


				var div_enviar= '<div class="comp-contactenos-campo comp-contactenos-campo-enviar '+array_class_extra['comp-contactenos-campo-enviar']+'"><div class="comp-contactenos-enviar">'+
										'<div class="comp-content-enviar">'+palabra_boton+'</div>'+
									'</div></div>';

				$(obj_dom).find('bloque').each(function(){

					$(this).find('>ClassExtra').each(function(){		
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');
					});

					html_formulario+='<div class="comp-contactenos-bloque '+array_class_extra['comp-contactenos-bloque']+'">';

					if(typeof $(this).data('titulo')=='string'){
						html_formulario+='<div class="comp-contactenos-bloque-titulo '+array_class_extra['comp-contactenos-bloque-titulo']+'">'+$(this).data('titulo')+'</div>';
					}


					$(this).find('dato').each(function(){
						

						if($(this).attr('tipo')=='input' || $(this).attr('tipo')=='textarea'  || $(this).attr('tipo')=='checkbox'  || $(this).attr('tipo')=='archivo' ){

							imagen_input='';
							if($(this).attr('src')){
								imagen_input=$(this).attr('src');
							}

							array_class_extra=new Array();

							$(this).find('>ClassExtra').each(function(){		
								array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

							});


							html_formulario+='<div class="comp-contactenos-campo comp-contactenos-campo_input  '+array_class_extra['comp-contactenos-campo']+'">'+
								( (imagen_input!='')? '<div class="comp-contactenos-img-input '+$(this).attr('tipo')+'"><div class="contenedor-tabla"><div class="contenedor-celda"><img data-src="'+imagen_input+'"></div></div></div>':'' );

								switch($(this).attr('tipo')){
									case 'input':

										html_formulario+='<input class="comp-contactenos-campo-contacto '+
											( (imagen_input!='')? 'con_img':'' )+
											'" type="text" data-campo="'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="" placeholder="'+$(this).attr('nombre')+'"/> <span class="campo-vacio oculto">Este campo es obligatorio</span>';
										//campos_form+='<input type="text" id="campo_form_contacto_'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="">';

									break;
									case 'textarea':
										html_formulario+='<textarea class="comp-contactenos-campo-contacto '+
										( (imagen_input!='')? 'con_img':'' )+
										'" data-campo="'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" placeholder="'+$(this).attr('nombre')+'"></textarea><span class="campo-vacio oculto">Este campo es obligatorio</span>';

										//campos_form+='<input type="text" id="campo_form_contacto_'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="">';
									break;
									case 'checkbox':

										html_formulario+='<input class="comp-contactenos-campo-contacto" type="checkbox" data-campo="'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="" placeholder="'+$(this).attr('nombre')+'"/><span>'+$(this).attr('nombre')+'</span>';

										//campos_form+='<input type="text" id="campo_form_contacto_'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="">';
									break;

									case 'archivo':

										var html_texto_extra='';
			                			if(typeof $(this).attr('texto_extra')=='string'){

											html_texto_extra='<div class="comp-contactenos-campo-texto_extra">'+$(this).attr('texto_extra')+'</div>';
											
			                			}

										html_formulario+='<div class="comp-contactenos-subir comp-contactenos-campo-contacto"  data-campo="'+$(this).attr('campo')+'" >'+$(this).attr('nombre')+'</div><span class="campo-vacio oculto">Este campo es obligatorio</span>'+
													html_texto_extra;

										html_formulario+='<div id="comp-contactenos-archivo-'+$(this).attr('campo')+'" class="comp-contactenos-vistas_previas" >'+		
													'</div>';

	/*
			                			accept='image/*';
			                			switch($(this).attr('extension')){
			                				case 'pdf':
			                					accept='.pdf';
			                				break;
			                				case 'doc':
			                					accept='.doc';
			                				break;
			                			}*/
			                			accept='.pdf,.doc';
			                			accept='image/*';


			                			/*accept='image/*';
			                			switch($(this).data('extension')){
			                				case 'pdf':
			                					accept='.pdf';
			                				break;
			                				case 'midi':
			                					accept='.mid';
			                				break;
			                				case 'mp3':
			                					accept='.mp3';
			                				break;

			                			}*/
										html_formulario+='<input id="subir_archivo-'+$(this).attr('campo')+'" accept="'+accept+'" onchange="fun_mostrar_archivo_previa(this,'+"'"+'#comp-contactenos-'+obj_ini.CONT+ ' #comp-contactenos-archivo-'+$(this).attr('campo')+"'"+')" type="file" name="'+$(this).attr('campo')+'" >';

			                	/*		var html_nombre='';

			                			if(typeof $(this).data('nombre')=='string'){
			                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
			                			}

										var html_texto_extra='';
			                			if(typeof $(this).data('texto_extra')=='string'){

											html_texto_extra='<div class="comp-contactenos-campo-texto_extra">'+$(this).data('texto_extra')+'</div>';
											
			                			}
			                			accept='image/*';
			                			switch($(this).data('extension')){
			                				case 'pdf':
			                					accept='.pdf';
			                				break;
			                				case 'midi':
			                					accept='.mid';
			                				break;
			                				case 'mp3':
			                					accept='.mp3';
			                				break;

			                			}
										html_campos+='<div class="comp-contactenos-campo comp-contactenos-campo-data comp-contactenos-campo_input '+array_class_extra['comp-contactenos-campo']+'" style="width:'+width+'%;"  data-campo="'+$(this).data('campo')+'" data-esarchivo="si" data-extension="'+accept+'">'+
												html_nombre+
												'<div class="comp-contactenos-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</div>'+
													'<div id="comp-contactenos-archivo-'+$(this).data('campo')+'" class="comp-contactenos-vistas_previas" >'+
													''+

													'</div>'+
													html_texto_extra+
													'<span class="aviso-aux oculto"></span>'+
												'</div>';

										campos_form+='<input id="subir_archivo-'+$(this).attr('campo')+'" accept="'+accept+'" onchange="fun_mostrar_archivo_previa(this,'+"'"+'#comp-contactenos-'+obj.CONT+ ' #comp-contactenos-archivo-'+$(this).attr('campo')+"'"+')" type="file" name="'+$(this).attr('campo')+'" >';
											
										campos_form+='<input type="text" name="hay_archivo" value="true">';
	*/
									break;
								}

								html_formulario+='</div>';
						}else{

							switch($(this).attr('tipo')){
								
								case 'mapa':

								var aux_comp=new OBJ_COMPONENTES();
/*
								aux_comp.loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize',function(){
								});
							*/

								latitud=$(this).data('latitud');
								longitud=$(this).data('longitud');
								img_indicador=$(this).data('src');
											
								html_texto='';
								
								if(typeof $(this).data('texto')=='string'){					
									html_texto=$(this).data('texto');
								}

								height_boton_mapa=$(this).data('alturaboton');
								
								if(typeof $(this).data('alturaboton')!='number'){					
									height_boton_mapa=0;
								}

								html_formulario+='<div id="comp-contactenos-google-maps" class="comp-contactenos-btn-gmaps comp-gm-btn" data-idcontactenos="'+obj_ini.CONT+'" style="height:'+height_boton_mapa+'px;">'+html_texto+'</div>';


							
								break;
								case 'texto_html':

									html_formulario+= "<div class='comp-contactenos-texto_html'>"+$(this).html()+"</div>";

								break;

								case 'hidden':
									html_formulario+='<input class="comp-contactenos-campo-contacto '+
										( (imagen_input!='')? 'con_img':'' )+
										'" type="hidden" data-campo="'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value=""/> ';
									//campos_form+='<input type="text" id="campo_form_contacto_'+$(this).attr('campo')+'" name="'+$(this).attr('campo')+'" value="">';

								break;
							}


						}

					});

	




							if(typeof $(this).data('btn_enviar')=='boolean' && $(this).data('btn_enviar')== true){

								html_formulario+=div_enviar;
							}
							
					html_formulario+='</div>';

				});


				array_class_extra=new Array();
 
				$(obj_dom).find('>ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});



				$(obj_dom).find('div').each(function(){
					switch($(this).data('elemento')){
						

/* DESARROLLADO  POR DANTE VIDAL TUEROS*/

						case 'infoextra':
							html_info_extra=$(this).html();
						break;

						case 'ubicanos':

							var aux_comp=new OBJ_COMPONENTES();
/*
							aux_comp.loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize',function(){
							});
						*/

							latitud=$(this).data('latitud');
							longitud=$(this).data('longitud');
							img_indicador=$(this).data('src');
										
							html_texto='';
							
							if(typeof $(this).data('texto')=='string'){					
								html_texto=$(this).data('texto');
							}

							altura_boton_ubicanos=$(this).data('alturaboton');
							
							if(typeof $(this).data('alturaboton')!='number'){					
								altura_boton_ubicanos=0;
							}

							html_ubicanos='<div id="comp-contactenos-google-maps" class="comp-contactenos-btn-gmaps comp-gm-btn" data-idcontactenos="'+obj_ini.CONT+'" style="height:'+altura_boton_ubicanos+'px;">'+html_texto+'</div>';
						break;
						case 'pie':
							altura_pie=$(this).data('altura');	

							if(typeof $(this).data('altura')!='number'){					
								altura_pie=0;
							}
							texto_pie=$(this).data('texto');	
							html_pie='<div class="comp-contactenos-pie-pagina '+array_class_extra['comp-contactenos-pie-pagina']+'" style="height:'+altura_pie+'px;">'+
									'<div class="comp-contactenos-pie-content">'+		
										'<div class="comp-contactenos-pie-celda">'+						
											'<div class="comp-contactenos-pie-texto">'+texto_pie+'</div>'+
										'</div>'+
									'</div>'+
								'</div>';			
						break;
					}
				});
				
				var html_titulo='';
				
/* DESARROLLADO  POR DANTE VIDAL TUEROS*/
				
				if(typeof $(obj_dom).data('titulo')=='string'){					
					html_titulo='<div class="comp-contactenos-titulo '+array_class_extra['comp-contactenos-titulo']+'" '+array_attr_extra['comp-contactenos-titulo']+' >'+
									'<div class="contenedor-tabla">'+
										'<div class="contenedor-celda">'+					
											$(obj_dom).data('titulo')+	
										'</div>'+
									'</div>'+			      
								'</div>';
				}



				html_formulario+='<input type="hidden" id="campo_form_contacto_motivo" name="motivo" value="'+$(obj_dom).data('motivo')+'">';
    


				var array_attr_extra=new Array();



					array_html_extra=new Array();
					$(obj_dom).find('HtmlExtra').each(function(){

						if(!array_html_extra[$(this).attr('DOMdestino')]){
							array_html_extra[$(this).attr('DOMdestino')]=new Array();
						}
							array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();

					});

				var motivo="contacto";
				if(typeof $(obj_dom).data('motivo')== 'string'){
					motivo=$(obj_dom).data('motivo');
				}
    
    			var altura_extra=0;
				if(typeof $(obj_dom).data('altura_extra')== 'number'){

    				altura_extra=parseInt($(obj_dom).data('altura_extra'));
    			}
				var html_contactenos='<div class="comp-contactenos-content" data-motivo="'+motivo+'" style="height: calc(100% - '+(altura_boton_ubicanos + altura_pie+ altura_extra)+'px);">'+
						'<div class="comp-contactenos-celda">'+
					((array_html_extra['comp-contactenos-celda'])? ( (array_html_extra['comp-contactenos-celda']['inicio'])? array_html_extra['comp-contactenos-celda']['inicio']: '') :'' ) +  

							'<div class="comp-contactenos-alineador '+array_class_extra['comp-contactenos-alineador']+'">'+

								html_titulo+
								'<div class="comp-contactenos-cuerpo '+array_class_extra['comp-contactenos-cuerpo']+'">'+	
								'<form method="post"  style="" enctype="multipart/form-data">'+	
									html_formulario+  
								'</form>'+
									
									//formulario+
								'</div>'+
							'</div>'+
							
							'<div class="info_extra '+array_class_extra['info_extra']+'">'+		
							html_info_extra+		
							'</div>'+
						'</div>'+

						((array_html_extra['comp-contactenos-content'])? ( (array_html_extra['comp-contactenos-content']['final'])? array_html_extra['comp-contactenos-content']['final']: '') :'' ) +  

					'</div>'+

					html_ubicanos+
					((array_html_extra['comp-contactenos'])? ( (array_html_extra['comp-contactenos']['final'])? array_html_extra['comp-contactenos']['final']: '') :'' ) +  
					html_pie;

				$(obj_dom).attr('id','comp-contactenos-'+obj_ini.CONT);
				
				altura_window=$(obj_dom).data('alturawindow');

				obj_ini.ARRAY[obj_ini.ARRAY.length]=new OBJ_CONTACTENOS('#comp-contactenos-'+obj_ini.CONT,latitud,longitud,img_indicador,altura_window);




				obj_ini.ARRAY[obj_ini.ARRAY.length-1].LISTA_REMOVER_CLASES=new Array();

				$(obj_dom).find('RemoverClass').each(function(){



					obj_ini.ARRAY[obj_ini.ARRAY.length-1].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});
				$(obj_dom).html(html_contactenos);



			
			
/* DESARROLLADO  POR DANTE VIDAL TUEROS*/
			obj_ini.CONT++;
			}

	};


	this.domready=function(){

		GL_COMPONENTE_CONTACTENOS.verifica_componente_ventana();

		$("body").on('click','.comp-contactenos-subir',function(){	
			campo=$(this).data('campo');

			$(this).parents('.comp-contactenos-content').find("#subir_archivo-"+campo).click();
			
		});


	};


	this.verifica_componente_ventana=function(){
		
		//con esto se verifica la posici'on de la ventana con respecto al componente para lanzarlo
		for(var index in this.ARRAY){

			var valor_top=$(this.ARRAY[index].ID_DOM).offset().top;

			if(((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop)+$(window).height()/6>= valor_top){
	   	
				
				this.ARRAY[index].inicia();

		  	}
			
		}

		//pero a la vez podemos comparar la posici'on de la venta para poder activar los botones de 

	};


}



function OBJ_CONTACTENOS(id,latitud,longitud,img_indicador,altura_window){

	this.ID_DOM=id;
	this.INICIADO=false;
	this.latitud=latitud;
	this.longitud=longitud;
	this.img_indicador=img_indicador;
	this.canvas_lanzado=false;
	this.altura_window=altura_window;
	this.auth='djavt';

	this.LISTA_REMOVER_CLASES;
/*
	this.inicia=function(){
		this.inicia_slider()
	};*/

	this.delay_remover=new Array();

	this.inicia=function(){

/*
		if(!this.BANNER_INICIADO){
			this.BANNER_INICIADO=true;

			var delay_inicio=setInterval(function(){
				clearInterval(delay_inicio);

				$('#comp-slider-full').removeClass('inicio');

				var delay_circulo=setInterval(function(){
					clearInterval(delay_circulo);
					$('#circulo_banner1').addClass('mostrado');
				},3000);

			},500);
*/
			this.resize();
			
		//}

		if(!this.INICIADO){
			this.INICIADO=true;
			var id_dom=this.ID_DOM;

			var lista_remover=this.LISTA_REMOVER_CLASES;

			var lista_delays=new Array();
			var obj=this;

			for(var index in lista_remover){


				lista_delays[lista_remover[index].domdestino]=setInterval(function(dom_destino,clases_removidas){
				
					clearInterval(lista_delays[dom_destino]);

					$(id_dom+' '+dom_destino).removeClass(clases_removidas);



				},lista_remover[index].tiempodelay*1000,lista_remover[index].domdestino,lista_remover[index].clases);
			}

		}



		try{
			fun_inicia_obj_contactenos(this.ID_DOM);
		}catch(e){

		}
	};

	



	this.resize=function(){
		
		var obj=this;
		//$(this.ID_DOM+' .comp-contactenos-content').css('width',$(window).width()+'px');
	/*	if(obj.altura_window){

			var altura_gmaps=0;
			if($(this.ID_DOM+' .comp-contactenos-btn-gmaps').css('height')){
				altura_gmaps=$(this.ID_DOM+' .comp-contactenos-btn-gmaps').css('height').replace('px','');	
			}

			var altura_pie=0;
			if($(this.ID_DOM+' .comp-contactenos-pie-pagina').css('height')){
				altura_pie=$(this.ID_DOM+' .comp-contactenos-pie-pagina').css('height').replace('px','');
			}
			
			var altura=$(window).height()-altura_gmaps-altura_pie;
			$(this.ID_DOM+' .comp-contactenos-content').css('height',altura+'px');

		}

		if($(window).width()<500){
			$(this.ID_DOM+' .comp-contactenos-alineador').addClass('responsive');

		}else{
			$(this.ID_DOM+' .comp-contactenos-alineador').removeClass('responsive');			
		}
*/


		try{
			fun_resize_obj_contactenos(this.ID_DOM);
		}catch(e){

		}


	};


	this.ejecutar_google_maps=function(){


	  $(this.ID_DOM+' .comp-contactenos-btn-gmaps').removeClass('comp-gm-btn');
	  $(this.ID_DOM+' .comp-contactenos-btn-gmaps').addClass('comp-gm-canvas');
	  	if(!this.canvas_lanzado){
	  		this.canvas_lanzado=true;
	  	obj_aux=this;
		  	var delay=setInterval(function(){
				clearInterval(delay);
		  		obj_aux.carga_google_maps();
		  		
		  	},1000);

	  	}
	};

	 this.carga_google_maps=function(){
	 	var mapa;
            var opcionesMapa = {
                zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP

            };
			
            mapa = new google.maps.Map(document.getElementById('comp-contactenos-google-maps'), opcionesMapa);
            var geolocalizacion = new google.maps.LatLng(this.latitud,this.longitud);
            var image = this.img_indicador;
            
            var marcador = new google.maps.Marker({
                map: mapa,
                draggable: false,
                position: geolocalizacion,
                visible: true,

                icon: image, animation: google.maps.Animation.DROP
            });
            mapa.setCenter(geolocalizacion);

            var styles = [
                /*{
                    stylers: [
                        {hue: "#bc0d38"},
                        {Weight: 3.5},
                        {saturation: -100}
                    ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        {lightness: 100},
                        {visibility: "simplified"}
                    ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                        {visibility: "on"}
                    ]
                }*/
            ];

            mapa.setOptions({styles: styles});
/*
      google.maps.event.addDomListener(window, 'load', drawMap);
        function drawMap() {
            var mapa;
            var opcionesMapa = {
                zoom: 17, mapTypeId: google.maps.MapTypeId.ROADMAP

            };
            mapa = new google.maps.Map(document.getElementById('google_canvas'), opcionesMapa);
            var geolocalizacion = new google.maps.LatLng(-12.1274578, -76.99983179999998);
            var image = "img/indicador.png";
            var marcador = new google.maps.Marker({
                map: mapa,
                draggable: false,
                position: geolocalizacion,
                visible: true,
                icon: image, animation: google.maps.Animation.DROP
            });
            mapa.setCenter(geolocalizacion);

            var styles = [
                {
                    stylers: [
                        {hue: "#bc0d38"},
                        {Weight: 3.5},
                        {saturation: -100}
                    ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        {lightness: 100},
                        {visibility: "simplified"}
                    ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                        {visibility: "on"}
                    ]
                }
            ];

            mapa.setOptions({styles: styles});

        }*/
    };
			

	
}


 function fun_mostrar_archivo_previa(fileInput,iddom) {
        var files = fileInput.files;


        if(files.length>0){

     	   $(iddom).html('');

        }

        for (var i = 0; i < files.length; i++) { 


            var file = files[i];



            if(file.type.match(/pdf/)){
        		nodo_img='<div class="comp-contactenos-vista_previa " data-tipo="pdf" style="" data-indice="0" data-origen="nuevo" ></div><div class="comp-contactenos-adj_texto_titulo">'+file.name+'</div>';
        		
        		
            }   else if(file.type.match(/msword/)){

        		nodo_img='<div class="comp-contactenos-vista_previa " data-tipo="doc" style="" data-indice="0" data-origen="nuevo" ></div><div class="comp-contactenos-adj_texto_titulo">'+file.name+'</div>';
            }


        	$(iddom).append(nodo_img);

        }    


 }   