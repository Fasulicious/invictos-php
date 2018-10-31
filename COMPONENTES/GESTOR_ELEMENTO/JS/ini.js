function OBJ_INICIALIZA_GESTION_ELEMENTO(){


	this.CONT=0;
	this.LISTA=new Array();

	this.ini=function(){

		var obj=this;


		$('.comp-gestion-elemento').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

				

				var html_campos='', campos_form='', html_campos_multicampo='';
				var array_class_extra, array_attr_extra, array_html_extra,array_id_extra;
				var num_espacios=$(this).data('espaciototal');
				var id_mapa;
				////////////////////////////////////////////////////////////////////////
				////////////////////////////////////////////////////////////////////////

				var obj2=$(this);
				$(this).find('bloque').each(function(){

					var espacio=$(this).data('espacio');

					width=100*(parseInt(espacio)/parseInt(num_espacios));

					html_campos+='<div class="comp-ge-bloque" style="width:'+width+'%;">';

						var bloque_espacios=$(this).data('espacio');
	                $(this).find('>campo').each(function(){



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


						var espacio_input=$(this).data('espacio');
						
						width=100*(parseInt(espacio_input)/parseInt(bloque_espacios));


	                	switch($(this).data('tipo')){
	                		case 'text':

	                			es_campo_data='';
	                			if(typeof $(this).data('campo')=='string'){
	                			 	es_campo_data='comp-ge-campo-data';
	                			}

	                			permiso_update='';
	                			if(typeof $(this).data('update')=='boolean'){
	                				if($(this).data('update')==false){
	                			 		permiso_update='no-update';
	                				}
	                			}	


	                			if($(this).parents('campo[data-tipo="multicampo"]').html()){

	                				var multicampo=$(this).parents('campo[data-tipo="multicampo"]').data('campo');
		                			html_campos_multicampo+='<div class="comp-ge-campo_multicampo" data-multicampo="'+multicampo+'"><div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+' '+permiso_update+'"  style="width:'+width+'%;">'+

		                			(typeof ($(this).data('nombre'))=='string'? '<div class="comp-ge-campo-label">'+$(this).data('nombre')+'</div>' : '<div class="comp-ge-campo-label-vacio"></div>' )+

											'<input type="text" title="'+$(this).data('nombre')+'"  id="'+$(this).data('iddom')+'" class="'+es_campo_data+'" data-campo="'+$(this).data('campo')+'" value="" name="'+(!fun_esblanco($(this).data('campo'))!=''? (multicampo+'[comp-ge-contador-multicampos]['+$(this).data('campo'))+']' : '')+'" autocomplete="off"/>'+
											'<span class="aviso-aux oculto"></span>'+
										'</div></div>';



	                			}else{


		                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+' '+permiso_update+'"  style="width:'+width+'%;">'+

		                			(typeof ($(this).data('nombre'))=='string'? '<div class="comp-ge-campo-label">'+$(this).data('nombre')+'</div>' : '<div class="comp-ge-campo-label-vacio"></div>' )+

											'<input type="text" title="'+$(this).data('nombre')+'"  id="'+$(this).data('iddom')+'" class="'+es_campo_data+'" data-campo="'+$(this).data('campo')+'" value="" name="'+$(this).data('campo')+'"  autocomplete="off"/>'+
											'<span class="aviso-aux oculto"></span>'+
										'</div>';


	                			}



								/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';*/

	                		break;
	                		case 'hidden':

	                			 	valor_default=$(this).data('valor');


	                			if($(this).parents('campo[data-tipo="multicampo"]').html()){

	                				var multicampo=$(this).parents('campo[data-tipo="multicampo"]').data('campo');

	                				html_campos_multicampo+=
										'<div class="comp-ge-campo_multicampo" data-multicampo="'+multicampo+'"><input type="hidden" id="'+$(this).data('iddom')+'" class="'+array_class_extra['comp-ge-campo']+' comp-ge-campo-data" data-campo="'+$(this).data('campo')+'" value="'+valor_default+'" name="'+multicampo+'[comp-ge-contador-multicampos]['+$(this).data('campo')+']"/>'+
									'</div>';

	                			}else{

	                				html_campos+=
										'<input type="hidden" id="'+$(this).data('iddom')+'" class="'+array_class_extra['comp-ge-campo']+' comp-ge-campo-data" data-campo="'+$(this).data('campo')+'" value="'+valor_default+'" name="'+$(this).data('campo')+'"/>';
	                			}


								/*
									campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';
								*/
	                		break;

	                		case 'constante':
	                			 	valor_default=$(this).data('valor');
	                			html_campos+=
										'<input type="hidden" id="'+$(this).data('iddom')+'" class="comp-ge-campo-data data-constante" data-campo="'+$(this).data('campo')+'" value="'+valor_default+'" name="'+$(this).data('campo')+'"/>';							/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';*/
	                		break;


	                		case 'textarea':

	                			es_campo_data='';
	                			if(typeof $(this).data('campo')=='string'){
	                			 	es_campo_data='comp-ge-campo-data';
	                			}

	                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+

	                				(typeof ($(this).data('nombre'))=='string'? '<div class="comp-ge-campo-label">'+$(this).data('nombre')+'</div>' : '<div class="comp-ge-campo-label-vacio"></div>' )+

										'<textarea class="'+es_campo_data+'" title="'+$(this).data('nombre')+'" id="'+$(this).data('iddom')+'" data-campo="'+$(this).data('campo')+'" name="'+$(this).data('campo')+'"></textarea>'+
										'<span class="aviso-aux oculto"></span>'+
									'</div>';

								/*
								campos_form+='<input type="textarea" id="campo_form_'+$(this).data('campo')+'"  value="">';*/
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
										campo=$(this).data('campo');
			                			$(this).find('div').each(function(){

			                				select="";
			                				if(opcion_select==$(this).data('value')){
			                					select="checked";
			                				}
	                						html_campos+='<div class="radio-campo inline"><input type="radio" value="'+$(this).data('value')+'" name="'+campo+'" '+select+'/>'+$(this).data('opcion')+'</div>';
			                			});

	                			html_campos+='</div>';	

	/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';*/

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
	                					'<input type="hidden" name="'+$(this).data('campo')+'" value="0" />'+
										'<input type="checkbox"  id="'+$(this).data('iddom')+'" class="'+es_campo_data+'" data-campo="'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="1" />'+html_nombre+
										'</div>'+
									'</div>';

								/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';*/

	                		break;


	                		case 'select':

	                			html_nombre='';
	                			/*if(typeof $(this).data('nombre')=='string'){
	                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
	                			}*/

	                			es_campo_data='';
	                			if(typeof $(this).data('campo')=='string'){
	                			 	es_campo_data='comp-ge-campo-data';
	                			}

	                			opcion_select='';
	                			if(typeof $(this).data('select')=='string' || typeof $(this).data('select')=='boolean'){
									opcion_select=$(this).data('select');
	                			}


	                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;">'+

	                			(typeof ($(this).data('nombre'))=='string'? '<div class="comp-ge-campo-label">'+$(this).data('nombre')+'</div>' : '<div class="comp-ge-campo-label-vacio"></div>' )+

										html_nombre+'<div class="lista-select inline"><select id="'+$(this).data('iddom')+'" data-select="'+opcion_select+'" data-campo="'+$(this).data('campo')+'" title="'+$(this).data('nombre')+'" class="'+es_campo_data+'" name="'+$(this).data('campo')+'">';



			                			$(this).find('div').each(function(){

			                				select="";
			                				if(opcion_select==$(this).data('value')){
			                					select="selected";
			                				}
	                						html_campos+='<option value="'+$(this).data('value')+'" '+select+'>'+$(this).data('opcion')+'</option>';
			                			});

	                			html_campos+='</select></div><span class="aviso-aux oculto"></span></div>';	

	/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';*/
	                		break;



	                		case 'date':

	                			html_nombre='';
	                			if(typeof $(this).data('nombre')=='string'){
	                			 	html_nombre='<div class="comp-ge-campo-label ">'+$(this).data('nombre')+'</div>';
	                			}

	                			es_campo_data='';
	                			if(typeof $(this).data('campo')=='string'){
	                			 	es_campo_data='comp-ge-campo-data';
	                			}
				


	                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'" data-esfecha="si" style="width:'+width+'%;" >'+
										html_nombre+
										'<input class="comp-login-date" type="text" name="" value="" placeholder="'+$(this).data('nombre')+'"/>'+

										'<input class="comp-login-input-date '+es_campo_data+'" type="hidden" id="'+$(this).data('iddom')+'" data-campo="'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" />';
	                			html_campos+='</div>';
	/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'"  value="">';*/

	                		break;


							case 'mapa':

								var aux_comp=new OBJ_COMPONENTES();

								//aux_comp.loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&callback=initialize',function(){
								//});
							
								latitud=$(this).data('latitud');
								longitud=$(this).data('longitud');
								img_indicador=$(this).data('srcsenalador');
								
								id_mapa=array_id_extra['comp-ge-campo'];
								
								altura_mapa=$(this).data('altura');
								html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-latitud="'+latitud+'" data-longitud="'+longitud+'" data-srcsenalador="'+img_indicador+'" class="comp-ge-btn-gmaps comp-ge-btn" data-idgestor="'+obj.CONT+'" style="height:'+altura_mapa+'px;"></div>';

	                			html_campos+='<input type="hidden" id="comp-ge-latitud" class="comp-ge-campo-data" data-campo="'+$(this).data('campolatitud')+'" name="'+$(this).data('campolatitud')+'" value=""/>';
	                			html_campos+='<input type="hidden" id="comp-ge-longitud" class="comp-ge-campo-data" data-campo="'+$(this).data('campolongitud')+'" name="'+$(this).data('campolongitud')+'" value=""/>';


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

	                			var src_imagen='IMG';
								if(typeof $(this).data('src')=='string'){

									src_imagen=$(this).data('src');
									
	                			}

	                			var src_imagen_default='IMG/default.png';
								if(typeof $(this).data('src_default')=='string'){
									
									src_imagen_default=$(this).data('src_default');
									
	                			}


								html_campos+='<div class="comp-ge-campo comp-ge-campo-data comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'" data-src="'+src_imagen+'" data-src_default="'+src_imagen_default+'" data-campo="'+$(this).data('campo')+'" style="width:'+width+'%;" data-esimagen="si" data-imagen_btn="'+$(this).data('imagen_btn')+'">'+
										'<div class="comp-ge-btn_subir" >'+
										html_nombre+										
										'<div class="comp-ge-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</div>'+
										'</div>'+
											'<div id="comp-ge-imagen-'+$(this).data('campo')+'" class="comp-ge-vistas_previas">'+
											'<div class="comp-ge-imagen" style="" data-origen="nuevo" ></div>'+
											'</div>'+
											html_texto_extra+
											'<span class="aviso-aux oculto"></span>'+

										'</div>';

								html_campos+='<div style="display:none;"><input id="subir_archivo-'+$(this).data('campo')+'" accept="image/*" onchange="fun_mostrar_imagen_previa(this,'+"'"+'#comp-ge-'+obj.CONT+ ' #comp-ge-imagen-'+$(this).data('campo')+"',"+$(this).data('funcion')+')" type="file" name="'+$(this).data('campo')+'" >';
											//name="imagen" multiple> 


								html_campos+='<input type="text" name="eliminar-imagen-'+$(this).data('campo')+'" value="">';
								html_campos+='<input type="text" name="hay_imagen" value="true"></div>';


							break;   



							case 'multiple_imagen':

	                			html_nombre='';
	//<img class="comp-ge-imagen" style="width:20%; margin-top:10px;"  src="" />
	                			if(typeof $(this).data('nombre')=='string'){
	                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
	                			}

	                			var src_imagen='IMG';
								if(typeof $(this).data('src')=='string'){

									src_imagen=$(this).data('src');
									
	                			}



								html_campos+='<div class="comp-ge-campo comp-ge-campo-data comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'"  data-src="'+src_imagen+'"  data-campo="'+$(this).data('campo')+'" style="width:'+width+'%;" data-esimagen="si" data-esmultiple="si">'+
										html_nombre+
										'<div class="comp-ge-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</div>'+
										'<div id="comp-ge-imagen-'+$(this).data('campo')+'" class="comp-ge-vistas_previas">'+
										''+

										'</div>'+
											'<span class="aviso-aux oculto"></span>'+
										'</div>';

										html_campos+='<div style="display:none;"><div class="bloque_imagenes_multiples" data-campo="'+$(this).data('campo')+'" > <input id="subir_archivo-'+$(this).data('campo')+'" accept="image/*" onchange="fun_mostrar_multiples_imagenes_previas(this,'+"'"+'#comp-ge-'+obj.CONT+ ' #comp-ge-imagen-'+$(this).data('campo')+"'"+')" type="file" name="'+$(this).data('campo')+'0[]" multiple></div>';
											//name="imagen" multiple> 
									html_campos+='<input type="text" name="hay_imagen" value="true"></div>';

							break;   


							case 'archivo':

	                			var html_nombre='';

	                			if(typeof $(this).data('nombre')=='string'){
	                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
	                			}

								var html_texto_extra='';
	                			if(typeof $(this).data('texto_extra')=='string'){

									html_texto_extra='<div class="comp-ge-campo-texto_extra">'+$(this).data('texto_extra')+'</div>';
									
	                			}
	                			accept='image/*';
	                			switch($(this).data('extension')){
	                				case 'pdf':
	                					accept='.pdf';
	                				break;
	                			}
								html_campos+='<div class="comp-ge-campo comp-ge-campo-data comp-ge-campo_input '+array_class_extra['comp-ge-campo']+'" style="width:'+width+'%;"  data-campo="'+$(this).data('campo')+'" data-esarchivo="si">'+
										html_nombre+
										'<button class="comp-ge-subir" data-campo="'+$(this).data('campo')+'" data-id="'+obj.CONT+'">Subir</button>'+
											'<div id="comp-ge-archivo-'+$(this).data('campo')+'" class="comp-ge-vistas_previas" >'+
											''+

											'</div>'+
											html_texto_extra+
											'<span class="aviso-aux oculto"></span>'+
										'</div>';

										html_campos+='<div style="display:none;"><input id="subir_archivo-'+$(this).data('campo')+'" accept="'+accept+'" onchange="fun_mostrar_archivo_previa(this,'+"'"+'#comp-ge-'+obj.CONT+ ' #comp-ge-archivo-'+$(this).data('campo')+"'"+')" type="file" name="'+$(this).data('campo')+'" >';
											
									html_campos+='<input type="text" name="hay_archivo" value="true"></div>';

							break;   

							case 'sub_area':


	                			var html_nombre='';

	                			if(typeof $(this).data('nombre')=='string'){
	                			 	html_nombre='<div class="text-campo inline">'+$(this).data('nombre')+'</div>';
	                			}

	                			html_campos+='<div id="'+$(this).data('iddom')+'" class="comp-ge-campo '+array_class_extra['comp-ge-campo']+'"  style="width:'+width+'%;" >'+
										html_nombre+									
	                				'</div>';

							break;

	                		case 'separador':

	                			html_campos+='<div class="comp-ge-separador"></div>';

	                		break;     

	                		case 'multicampo':

	                			es_campo_data='';
	                			if(typeof $(this).data('campo')=='string'){
	                			 	es_campo_data='comp-ge-campo-data';
	                			}



	                			html_campos+='<div id="'+array_id_extra['comp-ge-campo']+'" data-campo="'+$(this).data('campo')+'" class="comp-ge-campo  '+array_class_extra['comp-ge-campo']+' comp-ge-campo-multicampo '+es_campo_data+'" data-esmulticampo="si" style="width:'+width+'%;">'+

	                			(typeof ($(this).data('nombre'))=='string'? '<div class="comp-ge-campo-label">'+$(this).data('nombre')+'</div>' : '<div class="comp-ge-campo-label-vacio"></div>' )+
	                					'<div class="comp-ge-contenedor-multicampos"></div>'+
	                					//'<input type="hidden" data-campo="'+$(this).data('campo')+'" name="'+$(this).data('campo')+'">'+
										'<div  id="'+$(this).data('iddom')+'" class="comp-ge-agregar_multicampo">'+$(this).data('texto_boton')+'</div>'+
										'<span class="aviso-aux oculto"></span>'+
										'<input type="hidden" class="comp-ge-contador-multicampos" value="0">'+
									'</div>';

								/*
								campos_form+='<input type="text" id="campo_form_'+$(this).data('campo')+'" name="'+$(this).data('campo')+'" value="">';*/

	   


	                		break;        	
						}
						


	                });
					html_campos+='</div>';
                });

						
				campos_form='<div style="display:none;"><input type="text" id="campo_form_elemento" name="elemento" value="'+$(this).data('elemento')+'">';
				campos_form+='<input type="text" id="campo_form_id_elemento" name="id_elemento" value="">';
				if(typeof $(this).data('id_elemento_sesion')=='string'){
					campos_form+='<input type="text" class="data-constante" id="campo_form_id_elemento_sesion" name="id_elemento_sesion" value="'+$(this).data('id_elemento_sesion')+'" >';
				}

				campos_form+='<input type="text" id="campo_form_archivos_ignorados" name="archivos_ignorados" value="">';
				campos_form+='<input type="text" id="campo_form_archivos_eliminados" name="archivos_eliminados" value="">';

				campos_form+='<input type="text" id="campo_form_fotos_ignoradas" name="fotos_ignoradas" value="">';
				campos_form+='<input type="text" id="campo_form_fotos_eliminadas" name="fotos_eliminadas" value=""></div>';

/*id="comp-ge-form-subir_imagen"*/


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
		                        '</div>';	
		            
	                if(typeof $(this).data('titulo_update')=='string'){
			            html_titulo+='<div class="titulo_update">'+
			                          $(this).data('titulo_update')+
			                        '</div>';
					}
	                html_titulo+='</div>'+
                        '</div>';
                }

                var gestion='todo';
                if(typeof $(this).data('gestion') =='string' && $(this).data('gestion')!=''){
                	gestion=$(this).data('gestion');
                }

            	var con_acciones=true;
                if(typeof $(this).data('con_acciones') =='boolean'){
                	con_acciones=$(this).data('con_acciones');
                }
                var html_btn;
                switch(gestion){
                	case 'insert':

                          html_btn='<div class="comp-ge-btns '+array_class_extra['comp-ge-btns']+'">'+
							'<div class="comp-ge-btn-accion '+(con_acciones?'':'sin_accion')+' '+array_class_extra['btn-insert']+'" data-accion="insert" data-funcion="'+$(this).data('funcion_insert')+'" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

	                          '<div class="comp-ge-btn-accion '+array_class_extra['btn-limpiar']+'" data-accion="limpiar" data-idcomp="'+obj.CONT+'">'+
	                            '<div class="content-btn">'+
	                            	'<div class="comp-ge-boton">'+
			                          'Limpiar'+
			                        '</div>'+
	                            '</div>'+
	                            '</div>'+
                            '</div>';
                	break;
                	case 'todo':

                          html_btn='<div class="comp-ge-btns '+array_class_extra['comp-ge-btns']+'">'+
                          '<div class="comp-ge-btn-accion '+(con_acciones?'':'sin_accion')+' '+array_class_extra['btn-insert']+'" data-accion="insert"  data-funcion="'+$(this).data('funcion_insert')+'" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion '+array_class_extra['btn-limpiar']+'" data-accion="limpiar" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Limpiar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion '+(con_acciones?'':'sin_accion')+' '+array_class_extra['btn-update']+'" data-accion="update"  data-funcion="'+$(this).data('funcion_update')+'" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar Cambios'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion '+array_class_extra['btn-cancelar']+'" data-accion="cancelar" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Cancelar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion " data-accion="preguntar_delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Eliminar'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion '+(con_acciones?'':'sin_accion')+' '+array_class_extra['btn-delete']+'" data-accion="delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Confirmar Eliminaci&oacute;n'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion" data-accion="cancelar_delete" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Cancelar Eliminaci&oacute;n'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '</div>';
                	break;
                	case 'update':
                          html_btn='<div class="comp-ge-btns '+array_class_extra['comp-ge-btns']+'"> <div class="comp-ge-btn-accion '+(con_acciones?'':'sin_accion')+' '+array_class_extra['btn-update']+'" data-accion="update"  data-funcion="'+$(this).data('funcion_update')+'" data-idcomp="'+obj.CONT+'">'+
                            '<div class="content-btn">'+
                            	'<div class="comp-ge-boton">'+
		                          'Guardar Cambios'+
		                        '</div>'+
                            '</div>'+
                            '</div>'+

                          '<div class="comp-ge-btn-accion '+array_class_extra['btn-cancelar']+'" data-accion="cancelar" data-idcomp="'+obj.CONT+'">'+
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
                      html_titulo+ 

						'<form method="post"  enctype="multipart/form-data" accept-charset="UTF-8">'+
                        '<div class="comp-ge-campos">'+                        
                        	html_campos+
                        '</div>'+

							campos_form+
                        '</form>'+
                        '<div class="comp-ge-campos-multicampo">'+
                        	html_campos_multicampo+
                        '</div>'+
                        html_btn+
                      '</div>'+
                    '</div>'+
                    
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

			var formulario=this;


			$("body").on('click','.comp-gestion-elemento .comp-ge-subir',function(){				
				id=$(this).data('id');
				campo=$(this).data('campo');

				$('#comp-ge-'+id+" #subir_archivo-"+campo).click();
				
			});


			$("body").on('click','.comp-gestion-elemento .comp-ge-campo[data-imagen_btn="si"] .comp-ge-imagen ',function(){
				$(this).parents('.comp-ge-campo').find('.comp-ge-subir').click();				
			});

			$("body").on('click','.comp-gestion-elemento .div-input-checkbox',function(){				
				
				$(this).find('input[type="checkbox"]').click();
			});

			$("body").on('click','.radio-campo',function(){				
				
				$(this).find('input[type="radio"]').click();
			});

			$('body').on('click','.comp-gestion-elemento .comp-ge-agregar_multicampo',function(){

				var multicampo=$(this).parents('.comp-ge-campo').data('campo');

				var html_multicampos='<div class="comp-ge-conjunto-multicampo"><div class="comp-ge-quitar_multicampo"></div>';

				$(this).parents('.comp-gestion-elemento').find('.comp-ge-campo_multicampo[data-multicampo="'+multicampo+'"]').each(function(){
						html_multicampos+=$(this).html();
					});
				html_multicampos+='</div>';



				var contador = parseInt($(this).parents('.comp-gestion-elemento').find('.comp-ge-campo[data-campo="'+multicampo+'"] .comp-ge-contador-multicampos').val());

				$(this).parents('.comp-gestion-elemento').find('.comp-ge-campo[data-campo="'+multicampo+'"] .comp-ge-contador-multicampos').val(contador+1);

				$(this).parents('.comp-gestion-elemento').find('.comp-ge-campo[data-campo="'+multicampo+'"] .comp-ge-contenedor-multicampos').append(fun_replaceAll(html_multicampos,'[comp-ge-contador-multicampos]','['+contador+']'));

				
			});

			$('body').on('click','.comp-gestion-elemento .comp-ge-quitar_multicampo',function(){


				$(this).parents('.comp-ge-conjunto-multicampo').remove();

			});


			$("body").on('click','.comp-gestion-elemento .div-input-checkbox input[type="checkbox"],.comp-gestion-elemento .radio-campo input[type="radio"]',function(e){				
				
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




			$("body").on('click','.comp-gestion-elemento .comp-ge-imagen-eliminar',function(){		

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




			$("body").on('click','.comp-gestion-elemento .comp-ge-vista_previa-eliminar',function(){		

				indice=$(this).data('indice');

				$(this).hide();

				if($(this).data('origen')=='nuevo'){

					if($(this).parents('.comp-ge-form').find('#campo_form_archivos_ignorados').val()!=''){

						$(this).parents('.comp-ge-form').find('#campo_form_archivos_ignorados').val($(this).parents('.comp-ge-form').find('#campo_form_archivos_ignorados').val()+' '+indice);
					}else{

						$(this).parents('.comp-ge-form').find('#campo_form_archivos_ignorados').val(indice);
					}
				}else{

					if($(this).parents('.comp-ge-form').find('#campo_form_archivos_eliminados').val()!=''){

						$(this).parents('.comp-ge-form').find('#campo_form_archivos_eliminados').val($(this).parents('.comp-ge-form').find('#campo_form_archivos_eliminados').val()+' '+indice);
					}else{

						$(this).parents('.comp-ge-form').find('#campo_form_archivos_eliminados').val(indice);
					}

				}



			});

			$('body').on('click','.comp-gestion-elemento .comp-ge-btn-gmaps',function(){
				var id=$(this).data('idgestor');
				GL_COMPONENTE_GESTOR_ELEMENTOS.LISTA[id].ejecutar_google_maps();
			});


			$('body').on('focusin','.comp-gestion-elemento .comp-ge-campo_input input, .comp-gestion-elemento .comp-ge-campo_input textarea',function(){

				$('.comp-ge-conjunto-multicampo').removeClass('focus-input');
				
				$(this).parents('.comp-ge-campo_input').addClass('focus-input');
			});

			$('body').on('focusout','.comp-gestion-elemento .comp-ge-campo_input input, .comp-gestion-elemento .comp-ge-campo_input textarea',function(){
				$(this).parents('.comp-ge-campo_input').removeClass('focus-input');
			});



			$('body').on('focusin','.comp-gestion-elemento .comp-ge-conjunto-multicampo .comp-ge-campo_input input, .comp-ge-conjunto-multicampo .comp-gestion-elemento .comp-ge-campo_input textarea',function(){
				$('.comp-ge-conjunto-multicampo').removeClass('focus-input');
				$(this).parents('.comp-ge-conjunto-multicampo').addClass('focus-input');
			});
/*
			$('body').on('focusout','.comp-gestion-elemento .comp-ge-conjunto-multicampo .comp-ge-campo_input input, .comp-gestion-elemento .comp-ge-conjunto-multicampo .comp-ge-campo_input textarea',function(){
				$(this).parents('.comp-ge-conjunto-multicampo').removeClass('focus-input');
			});*/



			$('body').on('click','.comp-gestion-elemento .comp-ge-form .comp-ge-btn-accion',function(){

				var boton=$(this);
				var accion=$(this).data('accion');
				if(accion!='cancelar' && accion!='limpiar' && accion!='preguntar_delete' && accion!='cancelar_delete' && !$(this).hasClass('sin_accion') ){

					try{
						switch(accion){
							case 'insert':
								var funcion=$(this).data('funcion');
								eval(funcion);
							break;
							case 'update': 
								var funcion=$(this).data('funcion');
								eval(funcion);
							break;
							case 'delete':
								var funcion=$(this).data('funcion');
								eval(funcion);					
							break;

						}
					}catch(e){

					}
					$('.comp-ge-campo').removeClass('comp-contacto-alerta');
					$('.comp-ge-campo .aviso-aux').addClass('oculto');

					valores={};

					id_componente=$(this).data('idcomp');
					/*
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
*/

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


							console.log('//////////// GESTOR ///////////  '+data+'  //////////////////');


					
							data=$.parseJSON(data);

							if(data.error){
							
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

								switch(data.detalle){

									case 'mysql':
										FMSG_ERROR_CONEXION();
									break;

									case 'duplicado':

										formulario.campo_alerta($('#comp-ge-'+id_componente).data('elemento'), data.campo, 'Este valor ya existe. Escriba otro valor para este campo.');
									break;
									case 'vacio':

										formulario.campo_alerta($('#comp-ge-'+id_componente).data('elemento'), data.campo, 'Este campo es obligatorio.');

									break;
                                                                        case 'correo':

										formulario.campo_alerta($('#comp-ge-'+id_componente).data('elemento'), data.campo, 'Inserte un correo válido');

									break;
									case 'str':

										formulario.campo_alerta($('#comp-ge-'+id_componente).data('elemento'), data.campo, 'Debes escribir letras o n&uacute;meros.');

									break;
									case 'int':
									case 'float':
										if(!data.subcampo){

											formulario.campo_alerta($('#comp-ge-'+id_componente).data('elemento'), data.campo, 'S&oacute;lo se aceptan n&uacute;meros.');

										}else{

											$('#comp-ge-'+id_componente+' .comp-ge-campo[data-campo="'+data.campo+'"] .comp-ge-conjunto-multicampo:nth-child('+(data.indice+1)+') .comp-ge-campo[data-campo="'+data.subcampo+'"]').addClass('comp-contacto-alerta');

											$('#comp-ge-'+id_componente+' .comp-ge-campo[data-campo="'+data.campo+'"] .comp-ge-conjunto-multicampo:nth-child('+(data.indice+1)+')  .comp-ge-campo[data-campo="'+data.subcampo+'"] .aviso-aux').html('S&oacute;lo se aceptan n&uacute;meros');
							       			$('#comp-ge-'+id_componente+' .comp-ge-campo[data-campo="'+data.campo+'"] .comp-ge-conjunto-multicampo:nth-child('+(data.indice+1)+')  .comp-ge-campo[data-campo="'+data.subcampo+'"] .aviso-aux').removeClass('oculto');

										}
									break;
									
								}



								if($('#comp-ge-'+id_componente).data('gestion')=='todo'){			
									$('#comp-ge-'+id_componente).data('accion','insert');								
								}



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

								}


														
							}else{	



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




								try{


									switch(accion){
										case 'insert':

											try{
												GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA[$('#comp-ge-'+id_componente).data('elemento')].agregar_elemento(data.campo_id,data.elemento);
											}catch(e){
											}

											$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="limpiar"]').click();

											fun_ejecuta_comp_ge_insert($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'update': 
											
											try{
												GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA[$('#comp-ge-'+id_componente).data('elemento')].actualizar_elemento(data.campo_id,data.elemento);
											}catch(e){
											}

											if($('#comp-ge-'+id_componente).data('gestion')=='todo'){			
												$('#comp-ge-'+id_componente).attr('data-accion','insert');							
												$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="limpiar"]').click();
											}

											fun_ejecuta_comp_ge_update($('#comp-ge-'+id_componente).data('elemento'),data);
										break;
										case 'delete':

											try{
												GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA[$('#comp-ge-'+id_componente).data('elemento')].eliminar_elemento(data.id_elemento);
											}catch(e){}

											if($('#comp-ge-'+id_componente).data('gestion')=='todo'){			
												$('#comp-ge-'+id_componente).attr('data-accion','insert');		
											}else{	
												$('#comp-ge-'+id_componente).attr('data-accion','update');	
											}

											$('#comp-ge-'+id_componente+' .comp-ge-btn-accion[data-accion="limpiar"]').click();

											fun_ejecuta_comp_ge_delete($('#comp-ge-'+id_componente).data('elemento'),data);						
										break;

									}

								}catch(e){

								}


			
								
							}
						}
						        
					});	
						
				}else if(accion=='cancelar' || accion=='limpiar' || accion=='preguntar_delete' || accion=='cancelar_delete'){


					id_componente=$(this).data('idcomp');


					switch(accion){
						case 'cancelar':
						case 'limpiar':

							$('#comp-ge-'+id_componente+' form input').val('');
							$('#comp-ge-'+id_componente+' form .comp-ge-contador-multicampos').val(0);


							$('#comp-ge-'+id_componente+' form .comp-ge-contenedor-multicampos').html('');


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
							$('#comp-ge-'+id_componente+' .comp-ge-vista_previa').remove();

							$('#comp-ge-'+id_componente+' .comp-ge-campo').removeClass('comp-contacto-alerta');
							$('#comp-ge-'+id_componente+' .comp-ge-campo .aviso-aux').addClass('oculto');

							if($('#comp-ge-'+id_componente).data('gestion')=='todo'){		
								$('#comp-ge-'+id_componente).attr('data-accion','insert');		
								
							}
							if(accion=='cancelar'){

								try{	
									fun_ejecuta_comp_ge_cancelar($('#comp-ge-'+id_componente).data('elemento'));
								}catch(e){}

							}else{
								try{	
									fun_ejecuta_comp_ge_limpiar($('#comp-ge-'+id_componente).data('elemento'));
								}catch(e){}

							}

						break;
						case 'preguntar_delete':		
							$('#comp-ge-'+id_componente).attr('data-accion','delete');	

						break;
						case 'cancelar_delete':

							$('#comp-ge-'+id_componente).attr('data-accion','update');	
						break;
					}

				}
			});




		};

		this.campo_alerta=function(elemento, campo, mensaje){
			
			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+campo+'"]').addClass('comp-contacto-alerta');
			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+campo+'"] .aviso-aux').html(mensaje);
   			$('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="'+campo+'"] .aviso-aux').removeClass('oculto');
		};

}




function OBJ_GESTOR_ELEMENTO(id){

	this.ID_DOM=id;
	this.id_mapa;

	this.img_indicador;
	this.latitud;
	this.longitud
	this.id_objeto;
	this.INICIADO=false;


	this.inicia=function(){

		this.resize();			
		this.INICIADO=true;
		

		try{
		    $(this.ID_DOM+' .comp-login-date').daterangepicker({
		        singleDatePicker: true,
			//	"minDate": GLOBAL_HOY_DIA+"/"+GLOBAL_HOY_MES+"/"+GLOBAL_HOY_ANIO,
		        locale: {
		            format: 'DD/MM/YYYY'
		        }
		    });	

			$(this.ID_DOM+' .comp-login-date').on('apply.daterangepicker', function(ev, picker) {

			  $(this).parents('.comp-ge-campo_input').find('.comp-login-input-date').val(picker.startDate.format('YYYY-MM-DD'));
			  try{
			  	fun_apply_daterangepicker();
			  }catch(e2){

			  }


			});
		}catch(e){
		}



		try{
			fun_inicia_gestor_elemento(this.id_objeto,this.ID_DOM);
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





  // Create the search box and link it to the UI element.




var GL_COMP_MARKER_AVISO;

var GL_COMP_INFO_WINDOW_LUGAR;
var GL_COMP_MARKERS_LUGARES= [];

var GL_COMP_MAPA;

function fun_comp_iniciar_mapa(latitud,longitud) {



//	var geolocalizacion = new google.maps.LatLng(latitud,longitud);

     //   map.setCenter(geolocalizacion);

	var image = '';
        var geolocalizacion = new google.maps.LatLng(latitud,longitud);
        var opcionesMapa = {
            zoom: 12, 
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: geolocalizacion
        };

        GL_COMP_MAPA = new google.maps.Map(document.getElementById('mapa_registro'), opcionesMapa);





      // Create a marker for each place.
      GL_COMP_MARKER_AVISO = new google.maps.Marker({
        map: GL_COMP_MAPA,
        draggable:true,
        position: geolocalizacion,
        icon: image, animation: google.maps.Animation.DROP
      });

        fun_comp_get_locacion(GL_COMP_MARKER_AVISO);

     

        GL_COMP_MAPA.setCenter(geolocalizacion);




  GL_COMP_INFO_WINDOW_LUGAR = new google.maps.InfoWindow();

  var input = $('#input_oculto #pac-input')[0];

  GL_COMP_MAPA.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox((input));
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = GL_COMP_MARKERS_LUGARES[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    GL_COMP_MARKERS_LUGARES = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
 
   	//if(places[0]){


		fun_comp_set_lugar_buscador(place);



		//var extendPoint = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);

		bounds.extend(place.geometry.location);	

   	}

	    GL_COMP_MAPA.fitBounds(bounds);
	    GL_COMP_MAPA.setZoom(11);

  });
   


	// Bias the SearchBox results towards places that are within the bounds of the
	// current map's viewport.
	google.maps.event.addListener(GL_COMP_MAPA, 'bounds_changed', function() {
		var bounds = GL_COMP_MAPA.getBounds();
		searchBox.setBounds(bounds);

	});

    google.maps.event.addListener(GL_COMP_MARKER_AVISO, 'mouseup', function(){
  
        fun_comp_get_locacion(GL_COMP_MARKER_AVISO);

    });

}


function fun_comp_cambiar_place(latitud,longitud){


	var geolocalizacion = new google.maps.LatLng(latitud,longitud);

	var image = '';
	GL_COMP_MARKER_AVISO.setMap(null);

	// Create a marker for each place.
	GL_COMP_MARKER_AVISO = new google.maps.Marker({
		map: GL_COMP_MAPA,
		draggable:true,
		position: geolocalizacion,
		icon: image, animation: google.maps.Animation.DROP
	});

    google.maps.event.addListener(GL_COMP_MARKER_AVISO, 'mouseup', function(){
  
        fun_comp_get_locacion(GL_COMP_MARKER_AVISO);

    });

    
        GL_COMP_MAPA.setCenter(geolocalizacion);

		fun_comp_get_locacion(GL_COMP_MARKER_AVISO);
}

function fun_comp_set_info_mapa(latitud,longitud){

      GL_COMP_MARKER_AVISO.setMap(null);
      
	var geolocalizacion = new google.maps.LatLng(latitud,longitud);

	var image = '';
	// Create a marker for each place.
	GL_COMP_MARKER_AVISO = new google.maps.Marker({
		map: GL_COMP_MAPA,
		draggable:true,
		position: geolocalizacion,
		icon: image, animation: google.maps.Animation.DROP
	});

	fun_comp_get_locacion(GL_COMP_MARKER_AVISO);
	GL_COMP_MAPA.setCenter(geolocalizacion);

}




function fun_comp_set_lugar_buscador(place){
		 
	  var marker_lugar = new google.maps.Marker({
			map: GL_COMP_MAPA,
			draggable:false,
			title: place.name,
			position: place.geometry.location,
			icon: 'IMG/place.png', animation: google.maps.Animation.DROP
		});

		GL_COMP_MARKERS_LUGARES.push(marker_lugar);


	  google.maps.event.addListener(marker_lugar, 'click', function() {
	    GL_COMP_INFO_WINDOW_LUGAR.setContent(place.name);
	    GL_COMP_INFO_WINDOW_LUGAR.open(GL_COMP_MAPA, this);
	  });
}




function fun_comp_get_locacion(marker) {

    var latitud = marker.getPosition().lat();
    var longitud = marker.getPosition().lng();
	$('.columna_zonas #comp-ge-latitud').val(latitud);
	$('.columna_zonas #comp-ge-longitud').val(longitud);
}



 function fun_mostrar_archivo_previa(fileInput,iddom) {
        var files = fileInput.files;


        if(files.length>0){

     	   $(iddom).html('');

        }

        for (var i = 0; i < files.length; i++) { 


            var file = files[i];



            if(file.type.match(/pdf/)){
        		nodo_img='<div class="comp-ge-vista_previa comp-ge-vista_previa-eliminar" data-tipo="pdf" style="" data-indice="0" data-origen="nuevo" ></div>';
        		
        		
            } 


        	$(iddom).append(nodo_img);

            /*if (!file.type.match(imageType)) {
                continue;
            }  */         
           
/*
            var reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    $(aImg).css('background-image','url('+e.target.result+')') ; 
                }; 
            })($(iddom+' .comp-ge-vista_previa:last-child'));
            reader.readAsDataURL(file);*/
        }    
 }   




 function fun_mostrar_imagen_previa(fileInput,iddom,f) {
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
                    try{
                    	f(e.target.result);
                    }catch(e){

                    }
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


        	nuevo_input_file='<input id="subir_archivo-'+campo+'" accept="image/*" onchange="fun_mostrar_multiples_imagenes_previas(this,'+"'"+div_contenedor+ ' #comp-ge-imagen-'+campo+"'"+')" type="file" name="'+campo+num_inputs+'[]" multiple>';

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