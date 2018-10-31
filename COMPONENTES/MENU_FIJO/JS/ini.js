
$(window).scroll(function(event){

	GL_COMPONENTE_MENU_FIJO.verifica_componente_ventana();
	
	clearInterval(GL_COMPONENTE_MENU_FIJO.delay_activador);
	GL_COMPONENTE_MENU_FIJO.delay_activador=setInterval(function(){

		clearInterval(GL_COMPONENTE_MENU_FIJO.delay_activador);
		if(!GL_COMPONENTE_MENU_FIJO.bloquear_wheel){

			id_menu='#comp-menu-fijo-0';
			scroll_top=((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop);


			$('.area-pagina').each(function(){

				if($(this).parents('.columna-pagina.oculto').length == 0) {

					if($(this).offset().top<scroll_top+$(window).height()/2){
					
						var id=$(this).data('area');
						

				      $(id_menu+' .comp-menu-celda-content').removeClass('activo');
				      $(id_menu+' .comp-menu-celda-content[data-area="'+id+'"]').addClass('activo');

					}else{
						return false;
					}
				}
			});
		}


	},100);
});


/* DESARROLLADO  POR DANTE VIDAL TUEROS*/





$(window).resize(function(){	


	//if(!GL_INICIA_DESDE_MOVIL || GL_CONT_RESIZE_CELULAR<=1){

		for(var index in GL_COMPONENTE_MENU_FIJO.LISTA){
			console.log(index);
			if(GL_COMPONENTE_MENU_FIJO.LISTA[index].resizable){
				GL_COMPONENTE_MENU_FIJO.LISTA[index].resize();
			}
			console.log(index);
		}
	//}
});

function OBJ_INICIALIZA_MENUS_FIJOS(){


	this.CONT=0;
	this.LISTA=new Array();

	this.CLICK_MR=false; //click en menu responsive

	this.bloquear_wheel=false;

	this.delay_activador;

	this.retardo_delay_columnas=0;


	this.ini=function(){
		var obj_aux=this;

		$('.comp-menu-fijo').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no



				var html_opciones='';
				var html_opciones_izq='';
				var html_opciones_der='';	

				var array_html_extra=new Array();
				var array_class_extra=new Array();
				var array_attr_extra=new Array();



				var posicionlogo=($(this).data('posicionlogo'));
				if(typeof posicionlogo!='string'){
					posicionlogo='';
				}
				/*	array_html_extra=new Array();
					$(this).find('>HtmlExtra').each(function(){

						if(!array_html_extra[$(this).attr('DOMdestino')]){
							array_html_extra[$(this).attr('DOMdestino')]=new Array();
						}
							array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();

					});
				*/

					array_class_extra=new Array();
					$(this).find('>ClassExtra').each(function(){						
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');
					});


/*
					array_attr_extra=new Array();

					$(this).find('>AttrExtra').each(function(){	
						array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
						
					});*/



				var menu_partido=($(this).data('menupartido'));
					menu_partido=((typeof menu_partido=='string')? menu_partido: 'no');
				$(this).find('opcion').each(function(){

					array_html_extra=new Array();

					$(this).find('>HtmlExtra').each(function(){

						if(!array_html_extra[$(this).attr('DOMdestino')]){
							array_html_extra[$(this).attr('DOMdestino')]=new Array();
						}
							array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();

					});

					$(this).find('>ClassExtra').each(function(){						
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');
					});

					array_attr_extra=new Array();

					$(this).find('>AttrExtra').each(function(){	
						array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
						
					});


					var html_submenu='<div class="comp-menu-submenu">';
					$(this).find('>subopcion').each(function(){	

						$(this).find('>ClassExtra').each(function(){						
							array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');
						});

					html_subopcion='<a id="'+$(this).attr('iddom')+'" class="comp-submenu-opcion '+array_class_extra['comp-submenu-opcion']+'">'+

								'<div class="comp-submenu-celda-content" data-area="'+$(this).attr('area')+'" data-columna="'+( typeof $(this).attr('columna')=='string'? $(this).attr('columna') : '' )+'" data-rol="'+( typeof $(this).attr('rol')=='string'? $(this).attr('rol') : '' )+'" data-href="'+( typeof $(this).attr('href')=='string'? $(this).attr('href') : '' )+'">'+
									'<div class="comp-submenu-celda">'+									
							              '<span class="comp-submenu-opcion-texto">'+
							                	$(this).attr('texto')+										
							              '</span>'+											
						            '</div>'+            
				            	'</div>'+
				            '</a>';
						html_submenu+=html_subopcion;
					});
					html_submenu+='</div>';


					if($(this).attr('submenu')=='si'){

						etiqueta_contenedora='div';
					}else{
						etiqueta_contenedora='a';
					}



					html_opcion='<'+etiqueta_contenedora+' id="'+$(this).attr('iddom')+'" class="comp-menu-opcion '+array_class_extra['comp-menu-opcion']+'" '+array_attr_extra['comp-menu-opcion']+' data-submenu="'+(typeof $(this).attr('submenu')=='string'?$(this).attr('submenu'):'no')+'">'+

							((array_html_extra['comp-menu-opcion'])? ( (array_html_extra['comp-menu-opcion']['inicio'])? array_html_extra['comp-menu-opcion']['inicio']: '') :'' ) +

							'<div class="comp-menu-celda-content" data-area="'+$(this).attr('area')+'" data-columna="'+( typeof $(this).attr('columna')=='string'? $(this).attr('columna') : '' )+'" data-rol="'+( typeof $(this).attr('rol')=='string'? $(this).attr('rol') : '' )+'" data-href="'+( typeof $(this).attr('href')=='string'? $(this).attr('href') : '' )+'" data-idmenu="'+obj_aux.CONT+'" '+array_attr_extra['comp-menu-celda-content']+'>'+

							((array_html_extra['comp-menu-celda-content'])? ( (array_html_extra['comp-menu-celda-content']['inicio'])? array_html_extra['comp-menu-celda-content']['inicio']: '') :'' ) +

								'<div class="comp-menu-celda '+array_class_extra['comp-menu-celda']+'">'+
									
									((array_html_extra['comp-menu-celda'])? ( (array_html_extra['comp-menu-celda']['inicio'])? array_html_extra['comp-menu-celda']['inicio']: '') :'' ) +


						              '<span class="comp-menu-opcion-texto '+array_class_extra['comp-menu-opcion-texto']+'" '+array_attr_extra['comp-menu-opcion-texto']+'>'+

											((array_html_extra['comp-menu-opcion-texto'])? ( (array_html_extra['comp-menu-opcion-texto']['inicio'])? array_html_extra['comp-menu-opcion-texto']['inicio']: '') :'' ) +

						                	$(this).attr('texto')+
										
											((array_html_extra['comp-menu-opcion-texto'])? ( (array_html_extra['comp-menu-opcion-texto']['final'])? array_html_extra['comp-menu-opcion-texto']['final']: '') :'' ) +
						              '</span>'+
											
									((array_html_extra['comp-menu-celda'])? ( (array_html_extra['comp-menu-celda']['final'])? array_html_extra['comp-menu-celda']['final']: '') :'' ) +				              
					            '</div>'+

							((array_html_extra['comp-menu-celda-content'])? ( (array_html_extra['comp-menu-celda-content']['final'])? array_html_extra['comp-menu-celda-content']['final']: '') :'' ) +             
			            	'</div>'+
							((array_html_extra['comp-menu-opcion'])? ( (array_html_extra['comp-menu-opcion']['final'])? array_html_extra['comp-menu-opcion']['final']: '') :'' ) +
							
							($(this).attr('submenu')=='si'?html_submenu:'')+ 
				            '</'+etiqueta_contenedora+'>';

					html_opciones+=html_opcion;

					if(menu_partido=='si'){
						if($(this).attr('posicion')=='der'){

							html_opciones_der+=html_opcion;
						}else{

							html_opciones_izq+=html_opcion;
						}


					}else{
						if(posicionlogo=='der'){

							html_opciones_izq+=html_opcion;
						}else{
							html_opciones_der+=html_opcion;
						}
					}


				});



				array_class_extra=new Array();
				$(this).find('ClassExtra').each(function(){

					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');
					
				});

				if(typeof $(this).data('tipo')=='string'){

					tipo_menu=$(this).data('tipo');
				}else{
					tipo_menu='menu-superior';
				}


				var html_menu_responsive='<div id="comp-btn-menu-responsive" class="comp-btn-mr abrir oculto '+array_class_extra['comp-btn-mr']+'" data-idmenu="'+obj_aux.CONT+'" '+array_attr_extra['comp-btn-mr']+'>'+
							        '<div class="contenedor-tabla"><div class="contenedor-celda">'+
							          '<div class="comp-mr-circulo mr-c-1"></div>'+
							          '<div class="comp-mr-circulo mr-c-2"></div>'+
							          '<div class="comp-mr-circulo mr-c-3"></div>'+
							        '</div></div>'+
						        '</div>'+
						        '<div class="comp-menu-responsive">'+
							        '<div class="contenedor-tabla">'+
								        '<div class="contenedor-celda">'+
								        	'<ul>'+
								        		html_opciones+
								        	'</ul>'+
								        '</div>'+
							        '</div>'+
						        '</div>';


				var html_menu='<div class="comp-menu-fijo-content '+((typeof posicionlogo=='string')? posicionlogo: 'izq')+' '+array_class_extra['comp-menu-fijo-content']+'" '+array_attr_extra['comp-menu-fijo-content']+'>'+

				        ((array_html_extra['comp-menu-fijo-content'])? ( (array_html_extra['comp-menu-fijo-content']['inicio'])? array_html_extra['comp-menu-fijo-content']['inicio']: '') :'' )+

					    '<div class="comp-menu-fijo-contenido '+array_class_extra['comp-menu-fijo-contenido']+'" '+array_attr_extra['comp-menu-fijo-contenido']+'>'+

				        	((array_html_extra['comp-menu-fijo-contenido'])? ( (array_html_extra['comp-menu-fijo-contenido']['inicio'])? array_html_extra['comp-menu-fijo-contenido']['inicio']: '') :'' );


					        if(tipo_menu=='menu-izquierda'){
					        	if(typeof $(this).data('srclogo')=='string' && $.trim($(this).data('srclogo'))!=''){

								    html_menu+='<a href=""><div class="logo '+((typeof posicionlogo=='string')? posicionlogo: 'izq')+' '+array_class_extra['logo']+'" '+array_attr_extra['logo']+'>'+
								        '<img class="img-logo '+array_class_extra['img-logo']+'" '+array_attr_extra['img-logo']+' data-src="'+$(this).data('srclogo')+'" data-msrc="'+$(this).data('msrclogo')+'">'+
								    '</div></a>';
					        	}
							}

							if(posicionlogo=='izq' || typeof posicionlogo!='string' || posicionlogo==''){

						        html_menu+='<nav class="comp-menu-nav-der">'+				          			          
						          '<ul class="menu-principal '+array_class_extra['menu-principal']+'" '+array_attr_extra['menu-principal']+'>'+	
						          	html_opciones_der+			            
						          '</ul>'+
									html_menu_responsive+
						        '</nav>';

							}

					        if(posicionlogo=='der' || menu_partido=='si'){

						        html_menu+='<nav class="comp-menu-nav-izq">'+				          
						          '<ul class="menu-principal '+array_class_extra['menu-principal']+'" '+array_attr_extra['menu-principal']+'>'+	
						          	html_opciones_izq+			            
						          '</ul>'+
						          	((posicionlogo=='der')? html_menu_responsive: '')+
						        '</nav>';

					        }

					        if(tipo_menu=='menu-superior'){
					        	if(typeof $(this).data('srclogo')=='string' && $.trim($(this).data('srclogo'))!=''){
								    html_menu+='<a href=""><div class="logo '+((typeof posicionlogo=='string')? posicionlogo: 'izq')+' '+array_class_extra['logo']+'" '+array_attr_extra['logo']+'>'+
								        '<img class="img-logo '+array_class_extra['img-logo']+'" '+array_attr_extra['img-logo']+' data-src="'+$(this).data('srclogo')+'" data-msrc="'+$(this).data('msrclogo')+'" data-dim_msrc="'+$(this).data('dim_msrc')+'">'+
								    '</div></a>';
								}
							}
				        	html_menu+=((array_html_extra['comp-menu-fijo-contenido'])? ( (array_html_extra['comp-menu-fijo-contenido']['final'])? array_html_extra['comp-menu-fijo-contenido']['final']: '') :'' )+

						'</div>'+
				        ((array_html_extra['comp-menu-fijo-content'])? ( (array_html_extra['comp-menu-fijo-content']['final'])? array_html_extra['comp-menu-fijo-content']['final']: '') :'' )+
					'</div>';



				obj_aux.LISTA[obj_aux.CONT]=new OBJ_MENU_FIJO('#comp-menu-fijo-'+obj_aux.CONT);


				if(typeof $(this).data('posicionlogo')=='string'){
					obj_aux.LISTA[obj_aux.CONT].posicion_logo=$(this).data('posicionlogo');
				}
				if(typeof $(this).data('menupartido')=='string'){
					obj_aux.LISTA[obj_aux.CONT].menu_partido=$(this).data('menupartido');
				}
				if(typeof $(this).data('resizable')=='boolean'){
					obj_aux.LISTA[obj_aux.CONT].resizable=$(this).data('resizable');
				}


				if(typeof $(this).data('estilo_menu_r')=='string'){
					obj_aux.LISTA[obj_aux.CONT].estilo_menu_r=$(this).data('estilo_menu_r');
					$(this).addClass($(this).data('estilo_menu_r'));
				}



				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente
				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente

				obj_aux.LISTA[obj_aux.CONT].LISTA_REMOVER_CLASES=new Array();


				$(this).find('RemoverClass').each(function(){

					obj_aux.LISTA[obj_aux.CONT].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});

				

				//y ahora insertamos los valores html generados del componente


				$(this).addClass($(this).data('tipo'));


				$(this).attr('id','comp-menu-fijo-'+obj_aux.CONT);
				$(this).html(html_menu);




			//obj_slider.cargar_css();
			/*
			comp=new OBJ_COMPONENTES();
			comp.loadCSS('COMPONENTES/SLIDER_FULL/CSS/estilos.css',function(){*/

			//});	
			
			obj_aux.CONT++;
		});


		//se ejecuta el resize de los componentes
		//se ejecuta el resize de los componentes

/*
		for(var i=0;i<obj_aux.CONT;i++){	

			obj_aux.LISTA[i].resize();	
		}
*/

		
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('menu_fijo',this);
		}



	};


	this.domready=function(){
		GL_COMPONENTE_MENU_FIJO.verifica_componente_ventana();
		
		$('body').click(function(){
			$('.comp-menu-opcion .comp-menu-submenu').removeClass('mostrado');
		});

		$('body').on('click','.comp-menu-opcion .comp-menu-submenu',function(event){
			fun_cancel_buble_event(event);		
		});
		
		$('body').on('click','.comp-menu-celda-content',function(event){
			if($(this).parents('.comp-menu-opcion').data('submenu')=='si'){
				fun_cancel_buble_event(event);
				submenu=$(this).parents('.comp-menu-opcion').find('.comp-menu-submenu');
				if($(submenu).hasClass('mostrado')){

					$(submenu).removeClass('mostrado');
				}else{

					$(submenu).addClass('mostrado');
				}

			}else{

				//alert($(this).data('area')+' '+$(this).data('columna')+' '+$(this).data('rol'));
			if($(this).data('area')!='' || $(this).data('columna')!='' || $(this).data('rol')!=''){
					
				fun_ejecuta_acciones_boton_menu($(this));

					var id=parseInt($(this).data('idmenu'));

			      $(this).parents('.comp-menu-fijo').find('.comp-menu-celda-content').removeClass('activo');
			      $('.comp-menu-celda-content[data-rol="'+$(this).data('rol')+'"]').removeClass('activo');

			      $('.comp-menu-celda-content[data-rol="'+$(this).data('rol')+'"][data-columna="'+$(this).data('columna')+'"][data-area="'+$(this).data('area')+'"]').addClass('activo');

				}

			}
		});



		$('body').on('click','.comp-submenu-celda-content',function(){



			if($(this).data('area')!='' || $(this).data('columna')!='' || $(this).data('rol')!=''){
					

				fun_ejecuta_acciones_boton_menu($(this));


				}

			
		});

		function fun_ejecuta_acciones_boton_menu(obj){
			GL_COMPONENTE_MENU_FIJO.bloquear_wheel=true;
					var delay_block=setInterval(function(){
						clearInterval(delay_block);
						GL_COMPONENTE_MENU_FIJO.bloquear_wheel=false;

					},1100);

					try{
						fun_comp_menu_cambio_vista($(obj).data('area'), $(obj).data('columna'), $(obj).data('rol'), $(obj).data('href'));
					}catch(e){

					}

					if($(obj).data('columna')!='' && typeof $(obj).data('columna')=='string' && $(obj).data('columna')!=$('.rol-columnas[data-rol="'+$(obj).data('rol')+'"] .columna-pagina.mostrado').data('columna')){

						//se va a calcular un retardo de delay de 550 o nulo, dependiendo de si la página está siendo cargada recientemente, de este modo, el efecto de usar URL amigables, no se verá afectado con un delay de 550


						
						if(!$('.rol-columnas[data-rol="'+$(obj).data('rol')+'"] .columna-pagina.mostrado').length){
							GL_COMPONENTE_MENU_FIJO.retardo_delay_columnas=10;
						}else{
							GL_COMPONENTE_MENU_FIJO.retardo_delay_columnas=550;
						}


						$('.rol-columnas[data-rol="'+$(obj).data('rol')+'"] .columna-pagina').addClass('oculto');
						$('.rol-columnas[data-rol="'+$(obj).data('rol')+'"] .columna-pagina').removeClass('mostrado');

						var objeto=$(obj);
						var columna=$(obj).data('columna');
						var delay_none=setInterval(function(){
							clearInterval(delay_none);
							$('.rol-columnas[data-rol="'+$(objeto).data('rol')+'"] .columna-pagina').addClass('none');	
							$('html,body').scrollTop(0);
							$('.rol-columnas[data-rol="'+$(objeto).data('rol')+'"] .columna-pagina[data-columna="'+columna+'"]').removeClass('none');	


							var subdelay=setInterval(function(){
								clearInterval(subdelay);

								$('.rol-columnas[data-rol="'+$(objeto).data('rol')+'"] .columna-pagina[data-columna="'+columna+'"]').removeClass('oculto');
								$('.rol-columnas[data-rol="'+$(objeto).data('rol')+'"] .columna-pagina[data-columna="'+columna+'"]').addClass('mostrado');
								
								if($(objeto).data('area')!='' && typeof $(objeto).data('area')=='string'){

									$('html,body').scrollTop($('.rol-columnas[data-rol="'+$(objeto).data('rol')+'"] .area-pagina[data-area="'+$(objeto).data('area')+'"]').offset().top);
								}
								try{
									$(window).scroll();
								}catch(e){

								}
		/*
								var subdelay=setInterval(function(){
									clearInterval(subdelay);

									if($(objeto).data('area')!='' && typeof $(objeto).data('area')=='string'){

										$('html,body').scrollTop($('.area-pagina[data-area="'+$(objeto).data('area')+'"]').offset().top);

								      	$('html,body').animate({scrollTop: },600);
								  	}

								},300);*/


							},50);

						},GL_COMPONENTE_MENU_FIJO.retardo_delay_columnas);

					}else{

					if($(obj).data('area')!='' && typeof $(obj).data('area')=='string'){

					      $('html,body').animate({scrollTop: $('.rol-columnas[data-rol="'+$(obj).data('rol')+'"]  .area-pagina[data-area="'+$(obj).data('area')+'"]').offset().top},600);
					  }
				      //$(obj).siblings().removeClass('activo');

					}
		}



		$('body').on('click','.comp-btn-mr.abrir',function(e){
			
			//$('#comp-menu-fijo-'+$(this).data('idmenu')+' .comp-menu-responsive').removeClass('oculto');     
			
			var id=parseInt($(this).data('idmenu'));

			if(GL_COMPONENTE_MENU_FIJO.LISTA[id].responsive){

				if(GL_COMPONENTE_MENU_FIJO.LISTA[id].estilo_menu_r=='menu_resp_vh'){

					$('#comp-menu-fijo-'+id+' .comp-menu-responsive').css('height','100vh');

				}else{

					var altura_opcion=$('#comp-menu-fijo-'+id+' .comp-menu-responsive .comp-menu-opcion').css('height').replace('px','');
					var altura_menu_resp=$('#comp-menu-fijo-'+id+' .comp-menu-responsive .comp-menu-opcion').length*altura_opcion;
						
					$('#comp-menu-fijo-'+id+' .comp-menu-responsive').css('height',altura_menu_resp+'px');
	
				}

   
				$('#comp-menu-fijo-'+id+' .comp-menu-responsive').addClass('mostrado');  
				$('.comp-btn-mr').removeClass('abrir');   


				var delay=setInterval(function(){
					clearInterval(delay);
					$('.comp-btn-mr').addClass('cerrar');   
				},500);
				
				
			}
			fun_cancel_buble_event(e);
		});
		$('body').on('click','.comp-menu-responsive',function(e){
			
			fun_cancel_buble_event(e);
		});

		/*$('body').click(function(){

				$('.comp-btn-mr').addClass('abrir');   
				$('.comp-btn-mr').removeClass('cerrar');   

				$('#comp-menu-fijo-'+id+' .comp-menu-responsive').removeClass('mostrado');     
				$('.comp-menu-responsive').css('height','0px');  

		});*/

		$('body').on('click','.comp-btn-mr.cerrar',function(e){

				var delay=setInterval(function(){
					clearInterval(delay);
				$('.comp-btn-mr').addClass('abrir');    
				},500);

				$('.comp-btn-mr').removeClass('cerrar');   


				$('.comp-menu-responsive').removeClass('mostrado');     
				$('.comp-menu-responsive').css('height','0px');  

		});

	};



/* DESARROLLADO  POR DANTE VIDAL TUEROS*/

	this.verifica_componente_ventana=function(){
		
		//con esto se verifica la posici'on de la ventana con respecto al componente para lanzarlo
		for(var index in this.LISTA){

			var valor_top=$(this.LISTA[index].ID_DOM).offset().top;

			if(((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop)+$(window).height()/6>= valor_top){
	   	
				
				this.LISTA[index].inicia();

		  	}
			
		}

		//pero a la vez podemos comparar la posici'on de la venta para poder activar los botones de 

	};


/* DESARROLLADO  POR DANTE VIDAL TUEROS*/



}

function OBJ_MENU_FIJO(id){

	this.ID_DOM=id;
	this.loop_resize;
	
	this.LISTA_REMOVER_CLASES;
	this.posicion_logo='izq';
	this.menu_partido='no';
	this.responsive=false;
	this.INICIADO=false;
	this.resizable=true;
	this.estilo_menu_r='';

	
/*
	this.inicia=function(){
		this.inicia()
	};*/

	this.delay_remover=new Array();

	this.inicia=function(){

		//Esto es para quitar la animacion auxiliar que se quiera hacer			
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


	};



/* DESARROLLADO  POR DANTE VIDAL TUEROS*/

	this.resize=function(){
		var obj=this;

		if($(obj.ID_DOM).data('tipo')!='menu-izquierda'){


		clearInterval(obj.loop_resize);

		$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').css('width','initial');


			clearInterval(obj.loop_resize);
			
			
			$(obj.ID_DOM).removeClass('responsive');

			var ancho_logo;

			if(obj.posicion_logo=='centro'){
				ancho_logo=parseInt($(obj.ID_DOM+' .img-logo').css('width').replace('px',''))/2;

				$(obj.ID_DOM+' nav').css('width','calc(50% - '+(ancho_logo+2)+'px)');
			}else{
				ancho_logo=parseInt($(obj.ID_DOM+' .img-logo').css('width').replace('px',''));
			}




			this.loop_resize=setInterval(function(){
					clearInterval(obj.loop_resize);

						$(obj.ID_DOM+' .menu-principal').show();
						$(obj.ID_DOM+' #comp-btn-menu-responsive').addClass('oculto');

						var num_opciones,num_opciones_totales;

						if(obj.menu_partido=='no'){
							num_opciones=$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').length;						
						}else{	
							if($(obj.ID_DOM+' .comp-menu-nav-izq .menu-principal .comp-menu-opcion').length>$(obj.ID_DOM+' .comp-menu-nav-der .menu-principal .comp-menu-opcion').length){
								num_opciones=$(obj.ID_DOM+' .comp-menu-nav-izq .menu-principal .comp-menu-opcion').length;
								
							}else{
								num_opciones=$(obj.ID_DOM+' .comp-menu-nav-der .menu-principal .comp-menu-opcion').length;
							}				
								
						}
						
						num_opciones_totales=$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').length;
						


					/*Desarrollado por Dante Vidal Tueros*/

					var width_opcion_inicial=0;
					$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').each(function(){
							
						if(parseInt($(this).css('width').replace('px',''))>width_opcion_inicial){
							width_opcion_inicial=parseInt($(this).css('width').replace('px',''));
						}

					});



/*

					if(obj.posicion_logo=='centro'){
						espacio=$(window).width()/2-ancho_logo;
					}else{
						espacio=$(window).width()-ancho_logo;
					}
					*/
					var espacio;
					if(obj.posicion_logo=='centro'){
						espacio=parseInt($(obj.ID_DOM+' .comp-menu-fijo-contenido').css('width').replace('px',''))/2-ancho_logo;
					}else{
						espacio=parseInt($(obj.ID_DOM+' .comp-menu-fijo-contenido').css('width').replace('px',''))-ancho_logo;						
					}


					var width_opcion=(espacio-20)/num_opciones;
					
					$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').css('width',width_opcion+'px');

					//revisamos si ya los textos no entran
					var bandera_responsive=false;
					$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').each(function(){
						if(width_opcion<parseInt($(this).find('span').css('width').replace('px',''))+10){
							bandera_responsive=true;
						}
					});


					if(parseInt($(obj.ID_DOM+' .menu-principal').css('width').replace('px',''))<width_opcion*num_opciones-10){
						bandera_responsive=true;
					
					}

						obj.responsive=bandera_responsive;
					if(bandera_responsive){
						$(obj.ID_DOM+' .menu-principal').hide();
						$(obj.ID_DOM).addClass('responsive');
						$(obj.ID_DOM+' #comp-btn-menu-responsive').removeClass('oculto');

					}

			
			},100);

		}else{

			clearInterval(obj.loop_resize);


			$(obj.ID_DOM).removeClass('responsive');

			this.loop_resize=setInterval(function(){
				clearInterval(obj.loop_resize);

				obj.responsive=false;
				$(obj.ID_DOM+' .menu-principal').show();
				$(obj.ID_DOM+' #comp-btn-menu-responsive').addClass('oculto');

				$(obj.ID_DOM).parent().removeClass('responsive');





					var width_opcion=parseInt($(obj.ID_DOM+' .menu-principal .comp-menu-opcion').css('width').replace('px',''));
					

					//revisamos si ya los textos no entran
					var bandera_responsive=false;



					$(obj.ID_DOM+' .menu-principal .comp-menu-opcion span').each(function(){

						if(width_opcion<parseInt($(this).css('width').replace('px',''))+parseInt($(obj.ID_DOM+' .menu-principal .comp-menu-opcion  .comp-menu-celda').css('padding-left').replace('px',''))+10){
							bandera_responsive=true;
						

						}
					});




				if(bandera_responsive){

					obj.responsive=true;
					$(obj.ID_DOM+' .menu-principal').hide();
					num_opciones=$(obj.ID_DOM+' .menu-principal .comp-menu-opcion').length;
					$(obj.ID_DOM).addClass('responsive');
					$(obj.ID_DOM+' #comp-btn-menu-responsive').removeClass('oculto');

					var altura_opcion=$(obj.ID_DOM+' .comp-menu-responsive .comp-menu-opcion').css('height').replace('px','');
					var altura_menu_resp=num_opciones*altura_opcion;		
					$(obj.ID_DOM+' .comp-menu-responsive').css('height',altura_menu_resp+'px');
				}else{

					$(obj.ID_DOM).removeClass('responsive');
				}
			},100);
		}
			try{
				fun_resize_obj_menu_fijo(this.ID_DOM);
			}catch(e){
			}
	};


}

