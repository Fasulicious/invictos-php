




function OBJ_INICIALIZA_CONSULTOR_ELEMENTO(){


	this.CONT=0;
	this.LISTA=new Array();

	this.ini=function(){

		var obj=this;


		$('.comp-consultor-elemento').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no


			var estructura='';
                $(this).find('estructura').each(function(){
                	estructura=$(this).html();
                });
            var vacio='';    
                $(this).find('vacio').each(function(){
                	vacio=$(this).html();
                });
                var campos_form='';


                $(this).find('condicion').each(function(){
                	campos_form+='<input id="'+$(this).data('iddom')+'" type="text" name="var_'+$(this).data('campo')+'" value="'+$(this).data('valor')+'">';
                });


				campos_form+='<input type="text" name="elemento" value="'+$(this).data('elemento')+'">';

				campos_form+='<input type="text" name="condicion" value="'+$(this).data('condicion')+'">';
				campos_form+='<input type="text" name="orderby" value="'+$(this).data('orderby')+'">';

				campos_form+='<input type="text" name="conteo" value="'+$(this).data('conteo')+'">';
				campos_form+='<input type="text" name="indice" value="0">';



                $(this).find('dato').each(function(){

					campos_form+='<input type="text" id="campo_form_'+$(this).data('id')+'" name="'+$(this).data('id')+'" value="'+$(this).data('valor')+'">';
                });

 
				formulario='<form method="post"  style="display:none;" enctype="multipart/form-data">'+
					campos_form+					
				'</form>';

				recarga='';


				if(typeof $(this).data('recarga')=='boolean' ){
					if($(this).data('recarga')){
						recarga='<div class="comp-consultor-recarga inactivo" data-txt_recarga="'+(typeof $(this).data('vacio')=='string'?$(this).data('txt_recarga'):'Cargar m&aacute;s')+'" data-vacio="'+(typeof $(this).data('vacio')=='string'?$(this).data('vacio'):'No se encontraron m&aacute;s datos')+'">'+(typeof $(this).data('vacio')=='string'? $(this).data('vacio'):'No se encontraron m&aacute;s datos')+'</div>';
					}
				}


				$(this).html(formulario+'<div class="comp-consultor-resultados"></div>'+recarga);


				var iddom='comp-consultor-'+$(this).data('elemento');

				if(typeof $(this).data('iddom')=='string' ){					
					iddom=$(this).data('iddom');
				}

				$(this).attr('id',iddom);
				

				var destino='';
				if(typeof $(this).data('destino')=='string' ){
					destino=$(this).data('destino');
				}

				var id_consultor=$(this).data('elemento');
				if(typeof $(this).data('id_consultor')=='string' ){
					id_consultor=$(this).data('id_consultor');
				}

				obj.LISTA[id_consultor]=new OBJ_CONSULTOR_ELEMENTO('#'+iddom,$(this).data('conteo'),$(this).data('elemento'),estructura,vacio,$(this).data('destino'));

				obj.LISTA[id_consultor].consultar();


		});



				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('consultor_elemento',this);
			GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
		}
		//this.domready();
	};

	this.domready=function(){

		var objeto=this;

			$('body').on('click','.comp-consultor-elemento .elemento',function(){
				if(typeof $(this).parents('.comp-consultor-elemento').data('btns_elemento')!='boolean' || $(this).parents('.comp-consultor-elemento').data('btns_elemento')==false){

					var id_consultor=$(this).parents('.comp-consultor-elemento').data('elemento');
					
					if(typeof $(this).parents('.comp-consultor-elemento').data('id_consultor')=='string' ){
						id_consultor=$(this).parents('.comp-consultor-elemento').data('id_consultor');
					}

					objeto.LISTA[id_consultor].seleccionar_elemento($(this).data('id_elemento'));

				}
			});



			$('body').on('click','.comp-consultor-elemento .elemento .btn_editar',function(){

				var id_consultor=$(this).parents('.comp-consultor-elemento').data('elemento');
 					
				if(typeof $(this).parents('.comp-consultor-elemento').data('id_consultor')=='string' ){
					id_consultor=$(this).parents('.comp-consultor-elemento').data('id_consultor');
				}

				objeto.LISTA[id_consultor].seleccionar_elemento($(this).parents('.elemento').data('id_elemento'));

			});

			$('body').on('click','.comp-consultor-elemento .elemento .btn_eliminar',function(){

				var id_consultor=$(this).parents('.comp-consultor-elemento').data('elemento');
				
				if(typeof $(this).parents('.comp-consultor-elemento').data('id_consultor')=='string' ){
					id_consultor=$(this).parents('.comp-consultor-elemento').data('id_consultor');
				}

				objeto.LISTA[id_consultor].seleccionar_elemento($(this).parents('.elemento').data('id_elemento'));
				$('.comp-gestion-elemento[data-elemento="'+id_consultor+'"] .comp-ge-btn-accion[data-accion="preguntar_delete"]').click();
			});



			$('body').on('click','.comp-consultor-recarga',function(){


				var id_consultor=$(this).parents('.comp-consultor-elemento').data('elemento');

				if(typeof $(this).parents('.comp-consultor-elemento').data('id_consultor')=='string' ){
					id_consultor=$(this).parents('.comp-consultor-elemento').data('id_consultor');
				}

				objeto.LISTA[id_consultor].consultar();
			});


	};


}





function OBJ_CONSULTOR_ELEMENTO(id,conteo,elemento,estructura,vacio,destino){

	this.ID_DOM=id;
	this.datos=new Array();
	this.conteo=conteo;
	this.indice=0;
	this.elemento=elemento;
	
	this.estructura=estructura;
	this.vacio=vacio;
	this.destino=destino;
	this.inicia=function(){};
	this.resize=function(){
	};

	this.seleccionar_elemento=function(id_elemento){

		$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"]').attr('data-accion','update');		
/*
		if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"]').data('gestion')=='update'){
		}*/

		$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] #campo_form_id_elemento').val(id_elemento);
		for(var campo in this.datos[id_elemento]){

			if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('esimagen')=='si' && $('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('esmultiple')=='si'){

				$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] .comp-ge-vistas_previas').html('');

				src_imagen=$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('src');
				
				if(src_imagen.substring(src_imagen.length-1)!='/'){
					src_imagen+='/';
				}

				for(var ind in this.datos[id_elemento][campo]){
					
					if(this.datos[id_elemento][campo][ind].id_foto){
						
						nodo_img='<div class="comp-ge-imagen comp-ge-imagen-eliminar" data-origen="bd" data-indice="'+this.datos[id_elemento][campo][ind].id_foto+'" style="background-image:url('+src_imagen+this.datos[id_elemento][campo][ind].ruta+');" ></div>';
												
						$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] .comp-ge-vistas_previas').append(nodo_img);

					}

				}

			}else{

				if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('esimagen')=='si'){

					src_imagen=$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('src');

					if(src_imagen.substring(src_imagen.length-1)!='/'){
						src_imagen+='/';
					}

					if(this.datos[id_elemento][campo]){
						src_imagen=src_imagen+this.datos[id_elemento][campo];
					}else{
						src_imagen=$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('src_default');
					}
			        var nodo_img='<div class="comp-ge-imagen" style="background-image: url('+src_imagen+');" data-origen="bd" ></div>';

					$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] .comp-ge-vistas_previas').html(nodo_img);

					$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"]  .comp-ge-form input[name="eliminar-imagen-'+campo+'"]').val(this.datos[id_elemento][campo]);

				}else{

					if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('esarchivo')=='si'){


						if(this.datos[id_elemento][campo]!=''){

		 					var nodo_img='';
				            /*if(file.type.match(/pdf/)){*/
				        		nodo_img='<div class="comp-ge-vista_previa comp-ge-vista_previa-eliminar" data-tipo="pdf" data-indice="0" style="" data-origen="bd" ></div>';
				            //}  

							$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] .comp-ge-vistas_previas').html(nodo_img);

						}else{

							$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] .comp-ge-vistas_previas').html('');
						}

					}else{


						if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('esmulticampo')=='si'){


							$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"]  form .comp-ge-contenedor-multicampos').html('');
							

							for(var ind in this.datos[id_elemento][campo]){
								
								if(this.datos[id_elemento][campo][ind]){						

									$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-multicampo[data-campo="'+campo+'"] .comp-ge-agregar_multicampo').click();

									for(var ind2 in this.datos[id_elemento][campo][ind]){
																	

											$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-multicampo[data-campo="'+campo+'"] .comp-ge-contenedor-multicampos .comp-ge-campo-data[data-campo="'+ind2+'"]').last().val(this.datos[id_elemento][campo][ind][ind2]);


										}
								}

							}

						}else{

							if(typeof $('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('radiogrupo')=='string'){

									radio_grupo=$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').data('radiogrupo');


								$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"] input').filter('[value="'+this.datos[id_elemento][campo]+'"]').attr('checked', true);

									
								}else{
									
							


							//valores[$(this).data('campo')]=$(this).val();
								if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').attr('type')=='checkbox'){

									valor_check=this.datos[id_elemento][campo];

									if(valor_check==1){
										valor_check=true;
									}else if(valor_check==0){
										valor_check=false;
									}

									$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').prop('checked',valor_check);
									
								}else{

								if($('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo[data-campo="'+campo+'"]').data('esfecha')=='si'){

									if(typeof this.datos[id_elemento][campo] == 'string'){

										var valor_campo=this.datos[id_elemento][campo];
										/*
										if(typeof(valor_campo)=='string'){
											valor_campo=valor_campo.HTMLDecode();
										}*/
			 							
										$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').val(valor_campo);

										$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo[data-campo="'+campo+'"] .comp-login-date').val(fun_formatear_fecha(valor_campo,'-/?'));

									}
									}else{


									var valor_campo=this.datos[id_elemento][campo];
									/*
									if(typeof(valor_campo)=='string'){
										valor_campo=valor_campo.HTMLDecode();
									}*/
		 							var span=$('<span />').css('display','none').html(valor_campo);
		 							
									$('.comp-gestion-elemento[data-elemento="'+this.elemento+'"] .comp-ge-campo-data[data-campo="'+campo+'"]').val($(span).html());

									}
								}
							}
						}
		/*
						*/
					}
				}
			}
		}
		
	};
	this.reset=function(){
		this.indice=0;
		this.datos=new Array();


		if(!this.destino || this.destino==''){

			$(this.ID_DOM+' .comp-consultor-resultados').html('');
		}else{
			$(this.destino).append('')
		}

			$(this.ID_DOM+' .comp-consultor-recarga').html($(this.ID_DOM+' .comp-consultor-recarga').data('txt_recarga'));
			$(this.ID_DOM+' .comp-consultor-recarga').removeClass('inactivo');



	};

	this.consultar=function(f){


		$(this.ID_DOM+' form input[name="indice"]').val(this.indice);

		var formData  = new FormData($(this.ID_DOM+' form')[0]);

		var objeto=this;
		$.ajax({
	        url: "COMPONENTES/CONSULTOR_ELEMENTO/POST/consultar.php",	
	        type: "POST",//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
    		//data:{elemento:objeto.elemento,indice:objeto.indice,conteo:objeto.conteo}, 
    		data:formData, 
	        async:true,
		    cache: false,
		    contentType: false,
		    processData: false,
	        beforeSend: 
			function(){        					        		
	        },
 



			success: function(data){
				
				console.log('*************'+objeto.ID_DOM+'**********************'+data+'*************');

				var  data=$.parseJSON(data);    
				if(data.error){

					switch(data.detalle){
						case 'mysql':
							FMSG_ERROR_CONEXION();
						break;
					}
					try{
						fun_ejecuta_comp_consultor_consulta(objeto.elemento,data);
					}catch(e){
					}

				}else{

					var html_resultado='';

						if(!data.data.vacio){

							var estructura='';
							var campo_id=data.campo_id;
							data=data.data;
							var contador=0;
							for(var index in data){

								estructura=objeto.estructura;

								/*verificamos si hay condicionales*/

								while(estructura.indexOf('if[')!=-1){
									//si hay algun valor, entonces debemos reemplazarlo
									condicion=estructura.split('if[')[1].split(']')[0];

									string_condicionado=estructura.split('then[')[1].split(']')[0];
									string_alternativo=estructura.split('then['+string_condicionado+']else[')[1].split(']')[0];
									condicion_final=condicion;
									for(var campo in data[index]){
										while(condicion_final.indexOf('{'+campo+'}')!=-1){
											condicion_final=condicion_final.replace('{'+campo+'}',data[index][campo]);

										}

									}


									while(condicion_final.indexOf('&amp;')!=-1){
										condicion_final=condicion_final.replace('&amp;','&');
									}

									if(eval(condicion_final)){
										if(string_alternativo){
											estructura=estructura.replace('if['+condicion+']then['+string_condicionado+']else['+string_alternativo+']',string_condicionado);
										}else{
											estructura=estructura.replace('if['+condicion+']then['+string_condicionado+']',string_condicionado);
										}
									}else{
										if(string_alternativo){
											estructura=estructura.replace('if['+condicion+']then['+string_condicionado+']else['+string_alternativo+']',string_alternativo);
										}else{
											estructura=estructura.replace('if['+condicion+']then['+string_condicionado+']','');
										}
									}
					
										//solo reemplazaremos al primer valor encontrado


								}
								
								/*Verificamos si hay algun valor creciente en loop*/
								while(estructura.indexOf('{*')!=-1){
									//si hay alg&uacute; valor, entonces debemos reemplazarlo

									valor=estructura.split('{*')[1].split('}')[0];
									
					
										//solo reemplazaremos al primer valor encontrado
									estructura=estructura.replace('{*'+valor+'}',valor*contador);
								}
								
								if(!objeto.datos[data[index][campo_id]]){
									
									objeto.datos[data[index][campo_id]]=data[index];

									for(var campo in data[index]){
										while(estructura.indexOf('{'+campo+'}')!=-1 || estructura.indexOf('{'+campo+'|')!=-1){

											if(estructura.indexOf('{'+campo+'}')!=-1){
												estructura=estructura.replace('{'+campo+'}',data[index][campo]);
											}else{
												//se deben recorrer todos los casos donde existe un campo con valor alternativo

												//ahora dividimos en partes
												var split_aux=estructura.split('{'+campo+'|')[1];
												
												//para finalmente recuperar el primer cierre de llaves
												var elemento_alterno=split_aux.split('}')[0];

												if(data[index][campo]!=null){
													estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',data[index][campo]);
												}else{
													estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',elemento_alterno);
												}
											}
										}
									}

									objeto.indice++;
									html_resultado+=estructura;
									
									contador++;
								}

							}

							$(objeto.ID_DOM+' .comp-consultor-recarga').html($(objeto.ID_DOM+' .comp-consultor-recarga').data('txt_recarga'));
							$(objeto.ID_DOM+' .comp-consultor-recarga').removeClass('inactivo');
						}else{

							html_resultado=objeto.vacio;

							$(objeto.ID_DOM+' .comp-consultor-recarga').html($(objeto.ID_DOM+' .comp-consultor-recarga').data('vacio'));
							$(objeto.ID_DOM+' .comp-consultor-recarga').addClass('inactivo');
						}



					if(!objeto.destino || objeto.destino==''){

						$(objeto.ID_DOM+' .comp-consultor-resultados').append(html_resultado);

					}else{
						$(objeto.destino).append(html_resultado)
					}

						if(typeof f=="function"){
							f(data);
						}


					try{

						fun_ejecuta_comp_consultor_consulta(objeto.elemento,data);

					}catch(e){

					}
				}
			}
			        
		});	

	};


	this.agregar_elemento=function(campo_id,elemento){

		var html_resultado='';
		var estructura='';



		estructura=this.estructura;	
		this.datos[elemento[campo_id]]=elemento;
		

		for(var campo in elemento){
			while(estructura.indexOf('{'+campo+'}')!=-1 || estructura.indexOf('{'+campo+'|')!=-1){
				if(estructura.indexOf('{'+campo+'}')!=-1){
					estructura=estructura.replace('{'+campo+'}',elemento[campo]);
				}else{
					//se deben recorrer todos los casos donde existe un campo con valor alternativo

					//ahora dividimos en partes
					var split_aux=estructura.split('{'+campo+'|')[1];
					
					//para finalmente recuperar el primer cierre de llaves
					var elemento_alterno=split_aux.split('}')[0];

					

					if(data[index][campo]!=null){
						estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',data[index][campo]);
					}else{
						estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',elemento_alterno);
					}
				}
			}

		}	

			if(estructura.match(/{[a-zA-Z0-9.|]+}/gi)){
				var matchs=estructura.match(/{[a-zA-Z0-9.|]+}/gi);

				for(var n in matchs){
					while(estructura.indexOf(matchs[n])!=-1){
						if(matchs[n].indexOf('|')==-1){
							estructura=estructura.replace(matchs[n],'');
						}else{
							//se deben recorrer todos los casos donde existe un campo con valor alternativo

							//ahora dividimos en partes
							var split_aux_=matchs[n].split('|')[1];
							//para finalmente recuperar el primer cierre de llaves
							var elemento_alterno_=split_aux_.split('}')[0];
							estructura=estructura.replace(matchs[n],elemento_alterno_);
						}
					}

				}
			}



		html_resultado+=estructura;
		this.indice++;

		$(this.ID_DOM+' .comp-consultor-resultados').append(html_resultado);

	};
	this.actualizar_elemento=function(campo_id,elemento){

		if(this.datos[elemento[campo_id]]){

			var estructura='';
			id_elemento=elemento[campo_id];
			estructura=this.estructura;	
			
			
			for(var campo in elemento){
				if(typeof(elemento[campo])=='object'){ //significa que es un array de fotos
					for(var subcampo in elemento[campo]){
						if(elemento[campo][subcampo]==false){
							delete this.datos[elemento[campo_id]][campo][subcampo];
						}else{
							this.datos[elemento[campo_id]][campo][subcampo]=elemento[campo][subcampo];
						}
					}
				}else{
					this.datos[elemento[campo_id]][campo]=elemento[campo];
				}
			}

		for(var campo in this.datos[elemento[campo_id]]){
			while(estructura.indexOf('{'+campo+'}')!=-1 || estructura.indexOf('{'+campo+'|')!=-1){
				if(estructura.indexOf('{'+campo+'}')!=-1){
					estructura=estructura.replace('{'+campo+'}',this.datos[elemento[campo_id]][campo]);
				}else{
					//se deben recorrer todos los casos donde existe un campo con valor alternativo

					//ahora dividimos en partes
					var split_aux=estructura.split('{'+campo+'|')[1];
					
					//para finalmente recuperar el primer cierre de llaves
					var elemento_alterno=split_aux.split('}')[0];


					if(this.datos[elemento[campo_id]][campo]!=null){
						estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',this.datos[elemento[campo_id]][campo]);
					}else{
						estructura=estructura.replace('{'+campo+'|'+elemento_alterno+'}',elemento_alterno);
					}

				}
			}

		}

			if(estructura.match(/{[a-zA-Z0-9.|]+}/gi)){
				var matchs=estructura.match(/{[a-zA-Z0-9.|]+}/gi);
				for(var n in matchs){
					while(estructura.indexOf(matchs[n])!=-1){
						if(matchs[n].indexOf('|')==-1){
							estructura=estructura.replace(matchs[n],'');
						}else{
							//se deben recorrer todos los casos donde existe un campo con valor alternativo

							//ahora dividimos en partes
							var split_aux_=matchs[n].split('|')[1];
							
							//para finalmente recuperar el primer cierre de llaves
							var elemento_alterno_=split_aux_.split('}')[0];

							estructura=estructura.replace(matchs[n],elemento_alterno_);
						}
					}

				}
			}



			$( this.ID_DOM+' .elemento[data-id_elemento="'+id_elemento+'"]' ).replaceWith( estructura );


		}

	};



	this.eliminar_elemento=function(id_elemento){

		if(this.datos[id_elemento]){

			delete this.datos[id_elemento];

			this.indice--;

			$( this.ID_DOM+' .elemento[data-id_elemento="'+id_elemento+'"]' ).remove();


		}

	};



}




