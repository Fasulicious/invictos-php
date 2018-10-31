



/*

$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_LOGIN.LISTA){
		GL_COMPONENTE_LOGIN.LISTA[index].resize();
	}
	
});
*/

function OBJ_INICIALIZA_GESTION_ELEMENTO(){


	this.CONT=0;
	this.LISTA=new Array();

	this.ini=function(){

		var obj=this;


		$('.comp-gestion-elemento').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

				

				var html_campos='',campos_form='';
				var array_class_extra, array_attr_extra, array_html_extra,array_id_extra;
				var num_espacios=$(this).data('espaciototal');
				var id_mapa;
				////////////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////////////////
                $(this).find('campo').each(function(){


					array_class_extra=new Array();

					$(this).find('ClassExtra').each(function(){		
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

					});

				////////////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////////////////

					var array_id_extra=new Array();

					$(this).find('IdExtra').each(function(){	

						array_id_extra[$(this).attr('DOMdestino')]=$(this).attr('id');
					
					});


					var espacio=$(this).data('espacio');

					width=100*(parseInt(espacio)/parseInt(num_espacios));

                	switch($(this).data('tipo')){
                		case 'text':

                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+
									'<input type="text" title="'+$(this).data('nombre')+'"  id="'+$(this).data('iddom')+'" class="'+es_campo_data+'" data-campo="'+$(this).data('campo')+'" value="" placeholder="'+$(this).data('nombre')+'"/>'+
									'<span class="aviso-aux oculto"></span>'+
								'</div>';

							
							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';

                		break;
                		case 'hidden':

                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

                			html_campos+=
									'<input type="hidden" id="'+$(this).data('iddom')+'" class="comp-ge-campo-data" data-campo="'+$(this).data('campo')+'" value=""/>';
							
							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';
                		break;

                		case 'textarea':

                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+
									'<textarea class="'+es_campo_data+'" title="'+$(this).data('nombre')+'" id="'+$(this).data('iddom')+'" data-campo="'+$(this).data('campo')+'" placeholder="'+$(this).data('nombre')+'"></textarea>'+
									'<span class="aviso-aux oculto"></span>'+
								'</div>';

							
							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';
                		break;

                		case 'radio':

                			html_nombre='';
                			if(typeof $(this).data('nombre')=='string'){
                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
                			}


                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

							nombre_grupo=$(this).data('grupo');
                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo '+es_campo_data+' comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;" data-radiogrupo="'+nombre_grupo+'" >'+
									html_nombre;
									opcion_select=$(this).data('select');
		                			$(this).find('div').each(function(){

		                				select="";
		                				if(opcion_select==$(this).data('value')){
		                					select="checked";
		                				}
                						html_campos+='<div class="radio-campo inline"><input type="radio" value="'+$(this).data('value')+'" name="'+nombre_grupo+'" '+select+'/>'+$(this).data('opcion')+'</div>';
		                			});

                			html_campos+='</div>';	


							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';

                		break;

                		case 'checkbox':



                			html_nombre='';
                			if(typeof $(this).data('nombre')=='string'){
                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
                			}


                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+
                					'<div class="div-input-checkbox">'+
									'<input type="checkbox"  id="'+$(this).data('iddom')+'" class="'+es_campo_data+'" data-campo="'+$(this).data('campo')+'"  />'+html_nombre+
									'</div>'+
								'</div>';

							
							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';

                		break;


                		case 'select':

                			html_nombre='';
                			if(typeof $(this).data('nombre')=='string'){
                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
                			}

                			es_campo_data='';
                			if(typeof $(this).data('campo')=='string'){
                			 	es_campo_data='comp-ge-campo-data';
                			}

                			opcion_select='';
                			if(typeof $(this).data('nombre')=='string'){
								opcion_select=$(this).data('select');
                			}


                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+
									html_nombre+'<div class="lista-select inline"><select id="'+$(this).data('iddom')+'" data-select="'+opcion_select+'" data-campo="'+$(this).data('campo')+'" title="'+$(this).data('nombre')+'" class="'+es_campo_data+'">';



		                			$(this).find('div').each(function(){

		                				select="";
		                				if(opcion_select==$(this).data('value')){
		                					select="selected";
		                				}
                						html_campos+='<option value="'+$(this).data('value')+'" '+select+'>'+$(this).data('opcion')+'</option>';
		                			});

                			html_campos+='</select></div><span class="aviso-aux oculto"></span></div>';	


							campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';
                		break;

						case 'mapa':
/*
							var aux_comp=new OBJ_COMPONENTES();

							aux_comp.loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&callback=initialize',function(){
							});
*/
						


							latitud=$(this).data('latitud');
							longitud=$(this).data('longitud');
							img_indicador=$(this).data('srcsenalador');
							
							id_mapa=array_id_extra['comp-ge-campo'];
							
							altura_mapa=$(this).data('altura');
							html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-latitud="'+latitud+'" data-longitud="'+longitud+'" data-srcsenalador="'+img_indicador+'" class="comp-ge-btn-gmaps comp-ge-btn" data-idgestor="'+obj.CONT+'" style="height:'+altura_mapa+'px;"></div>';

                			html_campos+='<input type="hidden" id="comp-ge-latitud" class="comp-ge-campo-data" data-campo="'+$(this).data('campolatitud')+'" value=""/>';
                			html_campos+='<input type="hidden" id="comp-ge-longitud" class="comp-ge-campo-data" data-campo="'+$(this).data('campolongitud')+'" value=""/>';


							campos_form+='<input type="text" id="campo_form_'+$(this).data('campolatitud')+'" name="'+$(this).data('campolatitud')+'" value="">';							
							campos_form+='<input type="text" id="campo_form_'+$(this).data('campolongitud')+'" name="'+$(this).data('campolongitud')+'" value="">';
						break;

						case 'imagen':

                			var html_nombre='';

                			if(typeof $(this).data('nombre')=='string'){
                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
                			}

							var html_texto_extra='';
                			if(typeof $(this).data('texto_extra')=='string'){

								html_texto_extra='<div class="comp-ge-campo-texto_extra">'+$(this).data('texto_extra')+'</div>';
								
                			}
							html_campos+='<div class="comp-ge-campo comp-ge-campo-data comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'" style="width:'+width+'%;" data-esimagen="si">'+
									html_nombre+
									'<button class="comp-ge-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</button>'+
										'<div id="comp-ge-imagen-'+$(this).data('campo')+'" >'+
										''+

										'</div>'+
										html_texto_extra+
									'</div>';

									campos_form+='<input id="subir_imagen-'+$(this).data('campo')+'" accept="image/*" onchange="fun_mostrar_imagen_previa(this,'+"'"+'#comp-ge-'+obj.CONT+ ' #comp-ge-imagen-'+$(this).data('campo')+"'"+')" type="file" name="imagen-'+$(this).data('campo')+'" >';
										//name="imagen" multiple> 
								campos_form+='<input type="text" name="hay_imagen" value="true">';

						break;   

						case 'multiple_imagen':

                			html_nombre='';
//<img class="comp-ge-imagen" style="width:20%; margin-top:10px;"  src="" />
                			if(typeof $(this).data('nombre')=='string'){
                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
                			}
							html_campos+='<div class="comp-ge-campo comp-ge-campo-data comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'" style="width:'+width+'%;" data-esimagen="si">'+
									html_nombre+
									'<button class="comp-ge-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</button>'+
									'<div id="comp-ge-imagen-'+$(this).data('campo')+'" >'+
									''+

									'</div>'+
									'</div>';

									campos_form+='<div class="bloque_imagenes_multiples" data-campo="'+$(this).data('campo')+'" > <input id="subir_imagen-'+$(this).data('campo')+'" accept="image/*" onchange="fun_mostrar_multiples_imagenes_previas(this,'+"'"+'#comp-ge-'+obj.CONT+ ' #comp-ge-imagen-'+$(this).data('campo')+"'"+')" type="file" name="imagenes0-'+$(this).data('campo')+'[]" multiple></div>';
										//name="imagen" multiple> 
								campos_form+='<input type="text" name="hay_imagen" value="true">';

						break;   

                		case 'separador':

                			html_campos+='<div class="comp-ge-separador"></div>';

                		break;             	
					}
					


                });

						
				campos_form+='<input type="text" id="campo_form_elemento" name="elemento" value="'+$(this).data('elemento')+'">';
				campos_form+='<input type="text" id="campo_form_id_elemento" name="id_elemento" value="">';

				campos_form+='<input type="text" id="campo_form_fotos_ignoradas" name="fotos_ignoradas" value="">';
				campos_form+='<input type="text" id="campo_form_fotos_eliminadas" name="fotos_eliminadas" value="">';

				formulario='<form method="post" id="comp-ge-form-subir_imagen" style="display:none;" enctype="multipart/form-data">'+
					campos_form+

				'</form>';
				

				array_class_extra=new Array();

				$(this).find('ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});


				array_attr_extra=new Array();

				$(this).find('AttrExtra').each(function(){		
					array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
				});



				array_html_extra=new Array();

				$(this).find('HtmlExtra').each(function(){

					if(!array_html_extra[$(this).attr('DOMdestino')]){
						array_html_extra[$(this).attr('DOMdestino')]=new Array();
					}
						array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
				});




                html_titulo='';

                if(typeof $(this).data('titulo')=='string'){
                	html_titulo='<div class="comp-content-titulo">'+
	                        '<div class="comp-ge-titulos">'+
		                        '<div class="titulo">'+
		                          $(this).data('titulo')+
		                        '</div>'+		                       
	                        '</div>'+
                        '</div>';
                }

                switch($(this).data('accion')){
                	case 'todo':

                          html_btn='<div class="comp-ge-btns">'+
                          '<div class="comp-ge-btn-accion" data-accion="insert" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion" data-accion="limpiar" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Limpiar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion oculto" data-accion="update" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar Cambios'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion oculto" data-accion="cancelar" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Cancelar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion oculto" data-accion="preguntar_delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Eliminar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion oculto" data-accion="delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Confirmar eliminaci&oacute;n'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion oculto" data-accion="cancelar_delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Cancelar eliminaci&oacute;n'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '</div>';
                	break;

                	case 'update':

                          html_btn='<div class="comp-ge-btns"> <div class="comp-ge-btn-accion" data-accion="update" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion" data-accion="cancelar" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Cancelar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>';
                	break;


                }


				html_form='<div class="comp-ge-form trans_bezier_05">'+    

                    '<div class="contenedor-tabla">'+
                      '<div class="contenedor-celda">'  +     
                        '<div class="comp-ge-campos">'+
                        
                        	html_campos+

                        '</div>'+
                        html_btn+
                      '</div>'+
                    '</div>'+
                    formulario+
                  '</div> ';  


				$(this).html(html_form);

				$(this).attr('id','comp-ge-'+obj.CONT);
				$(this).data('id',obj.CONT);

				obj.LISTA[obj.CONT]=new OBJ_GESTOR_ELEMENTO('#comp-ge-'+obj.CONT);

				if(id_mapa){
					obj.LISTA[obj.CONT].id_mapa=id_mapa;
				}else{
					obj.LISTA[obj.CONT].id_mapa='comp-ge-'+obj.CONT+'-mapa';
				}

				obj.LISTA[obj.CONT].id_objeto=$(this).data('objeto');
			
				obj.CONT++;
		});


		for(var i=0;i<obj.CONT;i++){	
			obj.LISTA[i].inicia();	
		}
	
				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('gestion_elemento',this);
			GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
		}
		//this.domready();
	};



		this.domready=function(){



			$("body").on('click','.comp-ge-subir',function(){				
				id=$(this).data('id');
				campo=$(this).data('campo');

				$('#comp-ge-'+id+" #subir_imagen-"+campo).click();
			});

			$("body").on('click','.div-input-checkbox',function(){				
				
				$(this).find('input[type="checkbox"]').click();
			});

			$("body").on('click','.radio-campo',function(){				
				
				$(this).find('input[type="radio"]').click();
			});



			$("body").on('click','.div-input-checkbox input[type="checkbox"],.radio-campo input[type="radio"]',function(e){				
				
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





			$("body").on('click','.comp-ge-imagen-eliminar',function(){		

				indice=$(this).data('indice');


				if($(this).data('origen')=='nuevo'){

					if($(this).parents('.comp-ge-form').find('#campo_form_fotos_ignoradas').val()!=''){

						$(this).parents('.comp-ge-form').find('#campo_form_fotos_ignoradas').val($(this).parents('.comp-ge-form').find('#campo_form_fotos_ignoradas').val()+' '+indice);
					}else{

						$(this).parents('.comp-ge-form').find('#campo_form_fotos_ignoradas').val(indice);

					}

				}else{

					if($(this).parents('.comp-ge-form').find('#campo_form_fotos_eliminadas').val()!=''){

						$(this).parents('.comp-ge-form').find('#campo_form_fotos_eliminadas').val($(this).parents('.comp-ge-form').find('#campo_form_fotos_eliminadas').val()+' '+indice);
					}else{

						$(this).parents('.comp-ge-form').find('#campo_form_fotos_eliminadas').val(indice);
					}

				}

				$(this).hide();


			});


			$('body').on('click','.comp-ge-btn-gmaps',function(){
				var id=$(this).data('idgestor');
				GL_COMPONENTE_GESTOR_ELEMENTOS.LISTA[id].ejecutar_google_maps();
			});


			$('body').on('focusin','.comp-gestion-elemento .comp-ge-campo_input input, .comp-gestion-elemento .comp-ge-campo_input textarea',function(){
				$(this).parent().addClass('focus-input');
			});

			$('body').on('focusout','.comp-gestion-elemento .comp-ge-campo_input input, .comp-gestion-elemento .comp-ge-campo_input textarea',function(){
				$(this).parent().removeClass('focus-input');
			});


			$('body').on('click','.comp-ge-form .comp-ge-btn-accion',function(){

				var boton=$(this);
				var accion=$(this).data('accion');


				if(accion!='cancelar' && accion!='limpiar' && accion!='preguntar_delete' && accion!='cancelar_delete' ){

					$('.comp-ge-campo').removeClass('comp-contacto-alerta');
					$('.comp-ge-campo .aviso-aux').addClass('oculto');

					valores={};

					id_componente=$(this).data('idcomp');
					$('#comp-ge-'+id_componente+' .comp-ge-campo-data').each(function(){

						hay_imagen=false;
						if($(this).data('esimagen')=='si'){

							hay_imagen=true;
						}else{

							if(typeof $(this).data('radiogrupo')=='string'){

								radio_grupo=$(this).data('radiogrupo');
								//valores[$(this).data('campo')]=$('.comp-ge-campo-data[data-radiogrupo="'+radio_grupo+'"] input[name='+radio_grupo+']:checked').val();

								$('#comp-ge-'+id_componente+' form #campo_form_'+$(this).data('campo')).val($('.comp-ge-campo-data[data-radiogrupo="'+radio_grupo+'"] input[name='+radio_grupo+']:checked').val());

								
							}else{
								

								//valores[$(this).data('campo')]=$(this).val();
								if($(this).attr('type')=='checkbox'){
									

									$('#comp-ge-'+id_componente+' form #campo_form_'+$(this).data('campo')).val($(this).is(':checked'));

								}else{

									$('#comp-ge-'+id_componente+' form #campo_form_'+$(this).data('campo')).val($(this).val());
								}

							}
						}

					});


	/*
					valores= JSON.stringify(valores);
					alert(valores);*/
					formData  = new FormData($('#comp-ge-'+id_componente+' form')[0]);

					switch(accion){
						case 'insert':
							dir_post="COMPONENTES/GESTOR_ELEMENTO/POST/agregar.php";
						break;
						case 'update': 
							dir_post="COMPONENTES/GESTOR_ELEMENTO/POST/modificar.php";
						break;
						case 'delete':
							dir_post="COMPONENTES/GESTOR_ELEMENTO/POST/eliminar.php";						
						break;

					}


					var id_insertado=0;
					$.ajax({
				        url: dir_post,	
				        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
				        
	            		data:formData, 
				        async:true,
					    cache: false,
					    contentType: false,
					    processData: false,
				        beforeSend: 
						function(objeto){        	
				        		
							$(boton).parent().find('.comp-ge-btn-accion').css('pointer-events','none');


							switch(accion){
								case 'insert':								
								case 'update': 
									$(boton).find('.comp-ge-boton').html('Guardando...');
								break;
								case 'delete':
									$(boton).find('.comp-ge-boton').html('Eliminando...');					
								break;

							}

				        },
				        
						success: function(data){
				alert(data);

							switch(accion){
								case 'insert':							
								case 'update': 							
									$(boton).find('.comp-ge-boton').html('Guardado');
								break;
								case 'delete':
									$(boton).find('.comp-ge-boton').html('Eliminado');					
								break;

							}

							var delay_boton=setInterval(function(){
								clearInterval(delay_boton);

								$(boton).parent().find('.comp-ge-btn-accion').css('pointer-events','initial');
								
								switch(accion){
									case 'insert':							
										$(boton).find('.comp-ge-boton').html('Guardar');
									break;	
									case 'update': 						
										$(boton).find('.comp-ge-boton').html('Guardar Cambios');
									break;
									case 'delete':
										$(boton).find('.comp-ge-boton').html('Confirmar Eliminaci&oacute;n');					
									break;

								}

							},2000);
					
							data=$.parseJSON(data);

							if(data.error){
							
								switch(data.detalle){
									case 'mysql':
										FMSG_ERROR_CONEXION();
									break;
									case 'vacio':
										$('.comp-ge-campo[data-campo="'+data.campo+'"]').addClass('comp-contacto-alerta');
										$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').html('Este campo es obligatorio');
						       			$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').removeClass('oculto');
									break;
									case 'str':
										$('.comp-ge-campo[data-campo="'+data.campo+'"]').addClass('comp-contacto-alerta');
										$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').html('Debes escribir letras o n&uacute;meros');
						       			$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').removeClass('oculto');
									break;
									case 'int':
									case 'float':
										$('.comp-ge-campo[data-campo="'+data.campo+'"]').addClass('comp-contacto-alerta');
										$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').html('S&oacute;lo se aceptan n&uacute;meros');
						       			$('.comp-ge-campo[data-campo="'+data.campo+'"] .aviso-aux').removeClass('oculto');
									break;
								}



/*
								try{


									switch(accion){
										case 'insert':

											fun_ejecuta_comp_ge_insert($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'update': 
											fun_ejecuta_comp_ge_update($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'delete':
											fun_ejecuta_comp_ge_delete($('#comp-ge-'+id_componente).data('elemento'),data);						
										break;

									}

								}catch(e){

								}*/


														
							}else{	



									$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="limpiar"]').click();

								try{


									switch(accion){
										case 'insert':
/*
											$('#comp-ge-'+id_componente+' form input').val('');
											$('#comp-ge-'+id_componente+' form #campo_form_elemento').val($('#comp-ge-'+id_componente).data('elemento'));

											$('#comp-ge-'+id_componente+' .comp-ge-campo-data').val('');
											$('#comp-ge-'+id_componente+' .comp-ge-imagen').remove();
*/

											fun_ejecuta_comp_ge_insert($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'update': 


											fun_ejecuta_comp_ge_update($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'delete':
/*
											$('#comp-ge-'+id_componente+' form input').val('');
											$('#comp-ge-'+id_componente+' form #campo_form_elemento').val($('#comp-ge-'+id_componente).data('elemento'));

											$('#comp-ge-'+id_componente+' .comp-ge-campo-data').val('');
											$('#comp-ge-'+id_componente+' .comp-ge-imagen').remove();
											*/
											fun_ejecuta_comp_ge_delete($('#comp-ge-'+id_componente).data('elemento'),data);						
										break;

									}

								}catch(e){

								}


			
								
							}
						}
						        
					});	
						
				}else{



					id_componente=$(this).data('idcomp');

					switch(accion){
						case 'cancelar':
						case 'limpiar':

							$('#comp-ge-'+id_componente+' form input').val('');
							$('#comp-ge-'+id_componente+' form #campo_form_elemento').val($('#comp-ge-'+id_componente).data('elemento'));


							$('#comp-ge-'+id_componente+' .comp-ge-campo-data').each(function(){
								

								if($(this).prop('tagName').toLowerCase()=='select'){

									if($(this).data('select')!=''){
										$(this).val($(this).data('select'));
									}else{										
										$(this).val($(this).find('option').first().val());
									}
								}else{

									if(!$(this).hasClass('data-constante')){
										$(this).val('');
										$(this).prop('checked',false);
									}

								}
							}); 

							$('#comp-ge-'+id_componente+' .comp-ge-imagen').remove();


							if($('#comp-ge-'+id_componente).data('accion')=='todo'){					
								$('#comp-ge-'+id_componente+' .comp-ge-btn-accion').addClass('oculto');
								$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="insert"').removeClass('oculto');
								$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="limpiar"').removeClass('oculto');
							}
						break;
						case 'preguntar_delete':
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion').addClass('oculto');
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="delete"').removeClass('oculto');
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="cancelar_delete"').removeClass('oculto');
						break;
						case 'cancelar_delete':
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion').addClass('oculto');
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="update"').removeClass('oculto');
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="cancelar"').removeClass('oculto');
							$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="preguntar_delete"').removeClass('oculto');
						break;
					}

				}
			});




		};



}




function OBJ_GESTOR_ELEMENTO(id){

	this.ID_DOM=id;
	this.id_mapa;

	this.img_indicador;
	this.latitud;
	this.longitud
	this.id_objeto;


	this.inicia=function(){

		this.resize();			

		try{

			fun_inicia_objeto(this.id_objeto,this.ID_DOM);

		}catch(e){

		}
	};


	this.resize=function(){
		
/*		var obj=this;
		//$(this.ID_DOM+' .comp-login-content').css('width',$(window).width()+'px');
	

		if($(window).width()<500){
			$(this.ID_DOM+' .comp-login-alineador').addClass('responsive');

		}else{
			$(this.ID_DOM+' .comp-login-alineador').removeClass('responsive');			
		}
*/


	};


	this.insert=function(){
		alert('insertar');
	};

	this.update=function(){
		alert('update');
	};
	


	this.ejecutar_google_maps=function(){

	  	if(!this.canvas_lanzado){
	  		this.canvas_lanzado=true;
	  		obj_aux=this;
		  	var delay=setInterval(function(){
				clearInterval(delay);
		  		//obj_aux.carga_google_maps();
		  		
		  	},100);

	  	}

	};

this.mapa;
this.marcador;
this.markers = [];



}






  // Create the search box and link it to the UI element.




var GL_MARKER_AVISO;

var GL_INFO_WINDOW_LUGAR;
var GL_MARKERS_LUGARES= [];

var GL_MAPA;

function iniciar(latitud,longitud) {


//	var geolocalizacion = new google.maps.LatLng(latitud,longitud);

     //   map.setCenter(geolocalizacion);



	var image = '';
        var opcionesMapa = {
            zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP

        };

        
         GL_MAPA= new google.maps.Map(document.getElementById('mapa_registro'), opcionesMapa);
         



        var geolocalizacion = new google.maps.LatLng(latitud,longitud);


      // Create a marker for each place.
      GL_MARKER_AVISO = new google.maps.Marker({
        map: GL_MAPA,
        draggable:true,
        position: geolocalizacion,
        icon: image, animation: google.maps.Animation.DROP
      });

        fun_get_locacion(GL_MARKER_AVISO);

     

        GL_MAPA.setCenter(geolocalizacion);




  GL_INFO_WINDOW_LUGAR = new google.maps.InfoWindow();

		  var input = /** @type {HTMLInputElement} */(
		      document.getElementById('pac-input'));


		  GL_MAPA.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		  
		  var searchBox = new google.maps.places.SearchBox((input));


  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = GL_MARKERS_LUGARES[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    GL_MARKERS_LUGARES = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
 
   	//if(places[0]){


		fun_set_lugar_buscador(place);



		//var extendPoint = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);

		bounds.extend(place.geometry.location);	

   	}
   

	    GL_MAPA.fitBounds(bounds);
	    GL_MAPA.setZoom(11);

  });


	// Bias the SearchBox results towards places that are within the bounds of the
	// current map's viewport.
	google.maps.event.addListener(GL_MAPA, 'bounds_changed', function() {
		var bounds = GL_MAPA.getBounds();
		searchBox.setBounds(bounds);

	});

    google.maps.event.addListener(GL_MARKER_AVISO, 'mouseup', function(){
  
        fun_get_locacion(GL_MARKER_AVISO);

    });


}

function fun_set_info_mapa(latitud,longitud){

      GL_MARKER_AVISO.setMap(null);
      
	var geolocalizacion = new google.maps.LatLng(latitud,longitud);

	var image = '';
	// Create a marker for each place.
	GL_MARKER_AVISO = new google.maps.Marker({
		map: GL_MAPA,
		draggable:true,
		position: geolocalizacion,
		icon: image, animation: google.maps.Animation.DROP
	});

	fun_get_locacion(GL_MARKER_AVISO);
	GL_MAPA.setCenter(geolocalizacion);

}




function fun_set_lugar_buscador(place){

		 var marker_lugar = new google.maps.Marker({
			map: GL_MAPA,
			draggable:false,
			title: place.name,
			position: place.geometry.location,
			icon: 'IMG/place.png', animation: google.maps.Animation.DROP
		});

		GL_MARKERS_LUGARES.push(marker_lugar);


	  google.maps.event.addListener(marker_lugar, 'click', function() {
	    GL_INFO_WINDOW_LUGAR.setContent(place.name);
	    GL_INFO_WINDOW_LUGAR.open(GL_MAPA, this);
	  });
	  
}




function fun_get_locacion(marker) {

    latitud = marker.getPosition().lat();
    longitud = marker.getPosition().lng();

	$('#registrar_aviso #comp-ge-latitud').val(latitud);
	$('#registrar_aviso #comp-ge-longitud').val(longitud);
}




 function fun_mostrar_imagen_previa(fileInput,iddom) {
        var files = fileInput.files;


        nodo_img='<div class="comp-ge-imagen" style="" data-origen="nuevo" ></div>';

        if(files.length>0){

     	   $(iddom).html('');

        }
        for (var i = 0; i < files.length; i++) { 

        	$(iddom).append(nodo_img);

            var file = files[i];
            var imageType = /image.*/;     
            if (!file.type.match(imageType)) {
                continue;
            }           
           /* var img=document.getElementById("comp-ge-imagen-previa");            
            img.file = file;  */
        
            //$(iddom+' img:last-child')[0].file=file;
            
            var reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    $(aImg).css('background-image','url('+e.target.result+')') ; 
                }; 
            })($(iddom+' .comp-ge-imagen:last-child'));
            reader.readAsDataURL(file);
        }    
 }   



 function fun_mostrar_multiples_imagenes_previas(fileInput,iddom) {
        var files = fileInput.files;


        //$(iddom+' .comp-ge-imagen[data-origen="nuevo"]').remove();

        ind=0;
        if(files.length>0){
        	div_contenedor=iddom.split('#comp-ge-imagen-')[0];
        	campo=iddom.split('#comp-ge-imagen-')[1];
        	$('.bloque_imagenes_multiples[data-campo="'+campo+'"] input').attr('id','');


        	num_inputs=$('.bloque_imagenes_multiples[data-campo="'+campo+'"] input').length;


        	nuevo_input_file='<input id="subir_imagen-'+campo+'" accept="image/*" onchange="fun_mostrar_multiples_imagenes_previas(this,'+"'"+div_contenedor+ ' #comp-ge-imagen-'+campo+"'"+')" type="file" name="imagenes'+num_inputs+'-'+campo+'[]" multiple>';

        	$('.bloque_imagenes_multiples[data-campo="'+campo+'"]').append(nuevo_input_file);
        }


        if($(iddom+' .comp-ge-imagen[data-origen="nuevo"]').length>0){

        	indice_base=parseInt($(iddom+' .comp-ge-imagen[data-origen="nuevo"]:last-child').data('indice'))+1;
        }else{
        	indice_base=0;
        }



        for (var i = 0; i < files.length; i++) {    

        	nodo_img='<div class="comp-ge-imagen comp-ge-imagen-eliminar" style="" data-origen="nuevo" data-indice="'+(indice_base+ind)+'" ></div>';
        	$(iddom).append(nodo_img);
        	ind++;

            var file = files[i];
            var imageType = /image.*/;     
            if (!file.type.match(imageType)) {
                continue;
            }           
           /* var img=document.getElementById("comp-ge-imagen-previa");            
            img.file = file;  */
        
            //$(iddom+' img:last-child')[0].file=file;
            
            var reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    $(aImg).css('background-image','url('+e.target.result+')') ; 
                }; 
            })($(iddom+' .comp-ge-imagen:last-child'));
            reader.readAsDataURL(file);
        }    
 }   