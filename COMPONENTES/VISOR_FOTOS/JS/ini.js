

$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_VISOR_FOTOS.LISTA){
		GL_COMPONENTE_VISOR_FOTOS.LISTA[index].resize();
	}
	
});


$(window).scroll(function(){

	GL_COMPONENTE_VISOR_FOTOS.verifica_componente_ventana();
	
	
});


function OBJ_INICIALIZA_VISORES(){


	this.CONT_VISORES=0;
	this.LISTA=new Array();

	this.ini=function(){
		var obj_ini=this;


		$('.comp-visor-fotos').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no
			var obj_dom=$(this);
			if(!$(obj_dom).data('inicializado')){

				$(obj_dom).data('inicializado',true);
				var html_fotos='';			
				var html_mini_fotos='';			
				var html_textos='';		
				var cont_fotos=0;


				$(this).find('foto').each(function(){
					
			        	cont_fotos++;

						html_fotos+='<div class="comp-visor-foto" data-idfoto="'+cont_fotos+'">'+
				          '<img  data-src="'+$(this).data('src')+'" data-msrc="'+$(this).data('msrc')+'" class="comp-cargando-img-redirect" data-redirect="true" data-destino="#comp-visor-fotos-'+obj_ini.CONT_VISORES+' .comp-visor-foto[data-idfoto='+"'"+cont_fotos+"'"+']">'+
						(typeof($(this).data('titulo'))=='string' || typeof($(this).data('descripcion'))=='string' ? '<div class="comp-visor-foto-descripcion">'+ (typeof($(this).data('titulo'))=='string'? '<div class="comp-visor-titulo-foto">'+$(this).data('titulo')+'</div>':'') +
				          (typeof($(this).data('descripcion'))=='string'? '<div class="comp-visor-desc-foto">'+$(this).data('descripcion')+'</div>':'') +  '</div>'   :'')+


				          (typeof($(this).data('titulo'))=='string'? '<div class="comp-visor-titulo-foto">'+$(this).data('titulo')+'</div>':'') +
				          (typeof($(this).data('descripcion'))=='string'? '<div class="comp-visor-desc-foto">'+$(this).data('descripcion')+'</div>':'') +
				        '</div>';		

						html_mini_fotos+='<div class="comp-visor-fotoprev" data-idvisor="#comp-visor-fotos-'+obj_ini.CONT_VISORES+'" data-idfoto="'+cont_fotos+'">'+

							'<div class="contenedor-tabla"><div class="contenedor-celda">'+

							'<div class="comp-visor-fotoprev-content">'+
								'<div class="previmg"></div>'+

					          '<img  data-src="'+$(this).data('minisrc')+'" data-msrc="'+$(this).data('minisrc')+'" class="comp-cargando-img-redirect"  data-redirect="true" data-destino="#comp-visor-fotos-'+obj_ini.CONT_VISORES+' .comp-visor-fotoprev[data-idfoto='+"'"+cont_fotos+"'"+'] .previmg">'+

							'</div>'+
							'</div>'+
							'</div>'+
				        '</div>';		



						/*html_mini_fotos+='<div class="comp-visor-fotoprev" data-idvisor="#comp-visor-fotos-'+obj_ini.CONT_VISORES+'" data-idfoto="'+cont_fotos+'">'+
							'<div class="comp-visor-fotoprev-content">'+
							'<div class="contenedor-tabla"><div class="contenedor-celda">'+
								'<img  data-src="'+$(this).data('minisrc')+'" data-msrc="'+$(this).data('minisrc')+'">'+
							'</div></div>'+
					          
							'</div>'+
				        '</div>';
						html_fotos+='<div class="comp-visor-foto" data-idfoto="'+cont_fotos+'">'+
				          '<img  data-src="'+$(this).data('src')+'" data-msrc="'+$(this).data('msrc')+'" class="comp-cargando-img-redirect" data-redirect="true" data-destino="#comp-visor-fotos-'+obj_ini.CONT_VISORES+' .comp-visor-foto[data-idfoto='+"'"+cont_fotos+"'"+']">'+
				        '</div>';*/
				});

				/*
		        <div id="slide4" class="slide" >
		          <img class="carga-img" src="">
		        </div>*/



				array_class_extra=new Array();

				$(this).find('ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});


		        html_botones_nav='';

		        if($(obj_dom).data('botones')==true){
		        	
		        	html_botones_nav='<div class="comp-vf-botones-nav" >'+
			      	' <div class="comp-vf-btn-ant-content"> <div class="comp-vf-btn comp-vf-btn-ant '+array_class_extra['comp-vf-btn-ant']+'" data-idvf="#comp-visor-fotos-'+obj_ini.CONT_VISORES+'" data-idfoto="0" onmousedown="return false"  oncontextmenu="return false" ondragstart="return false"  onselectstart="return false"></div></div>'+
			      	'<div class="comp-vf-btn-sig-content"> <div class="comp-vf-btn comp-vf-btn-sig '+array_class_extra['comp-vf-btn-sig']+'" data-idvf="#comp-visor-fotos-'+obj_ini.CONT_VISORES+'" data-idfoto="2" onmousedown="return false"  oncontextmenu="return false" ondragstart="return false"  onselectstart="return false"></div></div>'+
			      	'</div>'
		        }

				var array_html_extra=new Array();

				$(this).find('HtmlExtra').each(function(){

					if(!array_html_extra[$(this).attr('DOMdestino')]){
						array_html_extra[$(this).attr('DOMdestino')]=new Array();
					}
						array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
				});



				var html_visor='<div class="comp-visor-fotos-content" data-indice="'+obj_ini.CONT_VISORES+'">'+

			      	'<div class="comp-visor-fotos-contenido">'+
			      	html_fotos+
			      	((array_html_extra['comp-visor-fotos-contenido'])? ( (array_html_extra['comp-visor-fotos-contenido']['final'])? array_html_extra['comp-visor-fotos-contenido']['final']: '') :'' ) +
			      	html_botones_nav+
			      	'</div>'+

					'<div class="comp-visor-fotos-barra ">'+
						'<div class="comp-vf-barra-contenido comp-vf-barra-activa" style="">'+
							html_mini_fotos+
						'</div>'+

			      	((array_html_extra['comp-visor-fotos-barra'])? ( (array_html_extra['comp-visor-fotos-barra']['final'])? array_html_extra['comp-visor-fotos-barra']['final']: '') :'' ) +

					'</div>'+

			      	((array_html_extra['comp-visor-fotos-content'])? ( (array_html_extra['comp-visor-fotos-content']['final'])? array_html_extra['comp-visor-fotos-content']['final']: '') :'' ) +
			    '</div>';

				$(obj_dom).html(html_visor);
				$(obj_dom).attr('id','comp-visor-fotos-'+obj_ini.CONT_VISORES);
				$(obj_dom).data('indice',obj_ini.CONT_VISORES);
				$(obj_dom).addClass($(obj_dom).data('tipo'));



				obj_ini.LISTA[obj_ini.CONT_VISORES]=new OBJ_VISOR_FOTOS('#comp-visor-fotos-'+obj_ini.CONT_VISORES);
					
				if(typeof $(obj_dom).data('getbd')=='boolean'){
					obj_ini.LISTA[obj_ini.CONT_VISORES].get_bd=$(obj_dom).data('getbd');
				}				
				obj_ini.LISTA[obj_ini.CONT_VISORES].resize();	


				if($(obj_dom).data('iniciar')){					
					obj_ini.LISTA[obj_ini.CONT_VISORES].inicia();
				}	



/*
				if( typeof $(obj_dom).data('autoanimado')=='boolean' ){
				
					obj_ini.LISTA[obj_ini.CONT_VISORES].AUTOANIMADO=$(obj_dom).data('autoanimado');

				}*/

				obj_ini.CONT_VISORES++;
			}

			//obj_ini.cargar_css();
			/*
			comp=new OBJ_COMPONENTES();
			comp.loadCSS('COMPONENTES/SLIDER_FULL/CSS/estilos.css',function(){*/

			//});	
			



		});


			/*	for(var i=0;i<obj_ini.LISTA.length;i++){	
					if(!obj_ini.LISTA[i].INICIALIZADO){

						obj_ini.LISTA[i].inicia();	

					}
				}*/


		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes

		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('visor_fotos',this);
			GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
		}


	};


	this.domready=function(){
		
		for(var index in GL_COMPONENTE_VISOR_FOTOS.LISTA){
			GL_COMPONENTE_VISOR_FOTOS.LISTA[index].resize();
		}
		
		$('body').on('click','.comp-visor-fotos .comp-vf-barra-activa .comp-visor-fotoprev',function(f){

			id_foto=$(this).data('idfoto');
			idvisor=$(this).data('idvisor');	
		
			if(id_foto!=$(idvisor+' .comp-visor-foto.select').data('idfoto')){


				//posicion de foto seleccionada 
				pos_select_nuevo=$( idvisor+ " .comp-visor-fotoprev" ).index( $(this) );
				//posicion del que ya esta seleccionado
				pos_select=$( idvisor+ " .comp-visor-fotoprev" ).index( $(idvisor+' .comp-visor-fotoprev.activo') );



				$(idvisor+' .comp-visor-fotoprev').removeClass('activo');
				$(this).addClass('activo');


			    if($(idvisor+' .comp-visor-fotoprev.activo').is(':last-child') && GL_COMPONENTE_VISOR_FOTOS.LISTA[parseInt($(idvisor).data('indice'))].get_bd){

					GL_COMPONENTE_VISOR_FOTOS.LISTA[parseInt($(idvisor).data('indice'))].get_elementos_bd();
				}


/*Desarrollado por Dante Vidal Tueros*/
				$(idvisor+' .comp-vf-barra-contenido').removeClass('comp-vf-barra-activa');



				if(pos_select_nuevo<pos_select){

					//desplaza fotos hacia la derecha

					$(idvisor+' .comp-visor-foto.select').addClass('select_transition');

					//$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('pre_select_der');

					$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('select_transition');

					var delay1=setInterval(function(){

						clearInterval(delay1);

						
						$(idvisor+' .comp-visor-foto.select').addClass('pre_select_der');
						$(idvisor+' .comp-visor-foto.select').removeClass('select');
						$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('select');

					},100);

					var delay=setInterval(function(){
						clearInterval(delay);
						$(idvisor+' .comp-visor-foto.select_transition').removeClass('select_transition');
						$(idvisor+' .comp-visor-foto.pre_select_der').removeClass('pre_select_der');

						$(idvisor+' .comp-vf-barra-contenido').addClass('comp-vf-barra-activa');
					},600);


				}else{


					//desplaza fotos hacia la izquierda


					$(idvisor+' .comp-visor-foto.select').addClass('select_transition');

					$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('pre_select_der');

					var delay1=setInterval(function(){

						clearInterval(delay1);

						$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('select_transition');
						
						$(idvisor+' .comp-visor-foto.select').removeClass('select');
						$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').addClass('select');

					},100);

					var delay=setInterval(function(){
						clearInterval(delay);
						$(idvisor+' .comp-visor-foto.select_transition').removeClass('select_transition');
						$(idvisor+' .comp-visor-foto[data-idfoto="'+id_foto+'"]').removeClass('pre_select_der');

						$(idvisor+' .comp-vf-barra-contenido').addClass('comp-vf-barra-activa');
					},600);


				}





				$(idvisor+' .comp-vf-btn-sig').data('idfoto',parseInt(id_foto)+1);
				$(idvisor+' .comp-vf-btn-ant').data('idfoto',parseInt(id_foto)-1);


				
				if(typeof f=='function'){
					f();
				}
			}
		});
			

		$('body').on('click','.comp-vf-btn-ant',function(){

			foto_elegida=$(this).data('idfoto');

	
			if(foto_elegida==0){
				foto_elegida=$($(this).data('idvf')+' .comp-visor-foto').length;
				/*$($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto',$($(this).data('idvf')+' .comp-visor-foto').length+1);
				$($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto',$($(this).data('idvf')+' .comp-visor-foto').length-1);*/
			}else{

			/*	$($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto',parseInt($($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto'))-1);
				$($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto',parseInt($($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto'))-1);*/
			}		

			$($(this).data('idvf')+' .comp-visor-fotoprev[data-idfoto="'+foto_elegida+'"').click();
						
});



		$('body').on('click','.comp-vf-btn-sig',function(){

			foto_elegida=$(this).data('idfoto');



			if(foto_elegida>$($(this).data('idvf')+' .comp-visor-foto').length){
				foto_elegida=1;
			/*	$($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto','2');
				$($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto','0');*/
			}else{

			/*	$($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto',parseInt($($(this).data('idvf')+' .comp-vf-btn-sig').data('idfoto'))+1);
				$($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto',parseInt($($(this).data('idvf')+' .comp-vf-btn-ant').data('idfoto'))+1);*/
			}

			$($(this).data('idvf')+' .comp-visor-fotoprev[data-idfoto="'+foto_elegida+'"').click();
				
		});


		



		

	};


	this.verifica_componente_ventana=function(){
  	
		for(var index in this.LISTA){

			var valor_top=$(this.LISTA[index].ID_DOM).offset().top;	   	
			
			if(((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop)+$(window).height()/6>= valor_top){	
				this.LISTA[index].inicia();
		  	}	

		}

	};

/*

	this.cargar_css=function(f){
	
						
	};
	this.cargar_js_css=function(){

		this.CONT_HTML_CARGANDO--;

		if(this.CONT_HTML_CARGANDO==0){

			comp=new OBJ_COMPONENTES();

			comp.loadCSS('COMPONENTES/SLIDER_FULL/CSS/estilos.css');		

			//comp.loadScript('COMPONENTES/SLIDER_FULL/JS/funciones.js',function(){
				
			});	

		}
	};
*/
}/*Desarrollado por Dante Vidal Tueros*/

function OBJ_VISOR_FOTOS(id){

	this.ID_DOM=id;
	this.INICIALIZADO=false;
	this.ANIMACION_EJECUTADA=false;
	this.AUTOANIMADO=true;
	
	this.LISTA_REMOVER_CLASES;
	this.get_bd=false;
/*
	this.inicia=function(){
		this.inicia()
	};*/

	this.inicia=function(){


		if(!this.INICIALIZADO){
			this.INICIALIZADO=true;
			$(this.ID_DOM+' .comp-visor-fotoprev:first-child').click();

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


			if(this.get_bd){

				this.get_elementos_bd();
			}

		}



	};

	
	this.cont_fotos=0;

	this.get_elementos_bd=function(){
	
			var objeto=this;


			this.cargando_data=true;
			$.ajax({
		        url: GL_DNS_POST+"/MOD/INSTALACIONES/POST/get.php",
		        type: "POST",
		        datatype:'json',
		        data:{indice:objeto.cont_fotos},
		        async:false,
		        beforeSend: function(objeto){
		        	
		        },
				success: function(data){
		
		
			//	objeto.cargando_data=false;
					
					if(data=="mysql_no"){
						FMSG_ERROR_CONEXION();
					}else{

						if(data!='no data'){
							var respuesta=$.parseJSON(data);
							
							inicia_visor=false;
							if(objeto.cont_fotos==0){
								inicia_visor=true;
							}

							var html_fotos='';
							var html_mini_fotos='';

							for(var index in respuesta){

								if(!GL_NOTICIAS[respuesta[index].id_noticia]){
									GL_NOTICIAS[respuesta[index].id_noticia]=respuesta[index];
										
									objeto.cont_fotos++;
									
									/*Desarrollado por Dante Vidal Tueros*/
									html_fotos+='<div class="comp-visor-foto" data-idfoto="'+objeto.cont_fotos+'">'+
							          '<img  data-src="IMG/NOTICIAS/FONDOS/WEB/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" data-msrc="IMG/NOTICIAS/FONDOS/MOVIL/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" class="comp-cargando-img-redirect" data-redirect="true" data-destino="'+objeto.ID_DOM+' .comp-visor-foto[data-idfoto='+"'"+objeto.cont_fotos+"'"+']">'+
							          	'<div class="comp-visor-foto-descripcion">'+
											'<div class="comp-visor-titulo-foto">'+
												respuesta[index].titulo+
											'</div>'+
											'<div class="comp-visor-desc-foto">'+
												( respuesta[index].descripcion.length>150 ? respuesta[index].descripcion.substring(0,140)+'...' : respuesta[index].descripcion  ) +
											'<span class="noticia-leer_mas"">Leer m&aacute;s</span><span class="noticia-leer_mas_oculto" data-id_noticia="'+respuesta[index].id_noticia+'"></span></div>'+
										'</div>'+
							        '</div>';		

									html_mini_fotos+='<div class="comp-visor-fotoprev"  data-idvisor="'+objeto.ID_DOM+'" data-idfoto="'+objeto.cont_fotos+'">'+
										'<div class="contenedor-tabla"><div class="contenedor-celda">'+
											'<div class="comp-visor-fotoprev-content">'+
												'<div class="previmg"></div>'+
									          	//'<img  data-src="IMG/NOTICIAS/FONDOS/MINI/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" data-msrc="IMG/NOTICIAS/FONDOS/MINI/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" class="comp-cargando-img-redirect"  data-redirect="true" data-destino="'+objeto.ID_DOM+' .comp-visor-fotoprev[data-idfoto='+"'"+objeto.cont_fotos+"'"+'] .previmg">'+
											'</div>'+
										'</div>'+
										'</div>'+
							        '</div>';							        
						        }		        
							}

							$(objeto.ID_DOM+' .comp-visor-fotos-contenido').append(html_fotos);
							$(objeto.ID_DOM+' .comp-vf-barra-contenido').append(html_mini_fotos);


							$(objeto).resize();
							
							if(inicia_visor){
								$(objeto.ID_DOM+' .comp-visor-fotoprev:first-child').click();
							}



							if(GL_COMPONENTE_CARGANDO){

								GL_COMPONENTE_CARGANDO.cargar_msrc();
								GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
							}


						}
					
					}
				}

			});
	
	};


	this.resize=function(){
		var obj=this;


		if($(obj.ID_DOM).data('tipo')=='barra-vertical'){


		}else{

			var delay=setInterval(function(){
				clearInterval(delay);
				
				if($(obj.ID_DOM+' .comp-vf-barra-contenido .comp-visor-fotoprev').css('width')){

					altura=parseInt($(obj.ID_DOM+' .comp-vf-barra-contenido .comp-visor-fotoprev').css('width').replace('px',''));
					ancho_contenedor=altura*$(obj.ID_DOM+' .comp-vf-barra-contenido .comp-visor-fotoprev').length;
					
					
					$(obj.ID_DOM+' .comp-vf-barra-contenido').css('width',ancho_contenedor+'px');	
				}
			},100);
		
		}

		try{
			fun_resize_obj_visor_fotos(obj.ID_DOM);
		}catch (e){

		}

	};



	this.ejecuta_visor_fotos=function(){
		
	};





	this.pasar_siguiente_foto=function(){
	
	};


	this.pasar_anterior_foto=function(){

	};
}