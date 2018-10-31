


$(window).scroll(function(){

	GL_COMPONENTE_GALERIA.verifica_componente_ventana();
	
	
});

$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_GALERIA.LISTA){
		GL_COMPONENTE_GALERIA.LISTA[index].resize();
	}
	
});



function OBJ_INICIALIZA_GALERIA(){


	this.CONT=0;
	this.LISTA=new Array();

	this.ini=function(){
		var obj_ini=this;



		$('.comp-galeria').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

			obj_dom=$(this);

			if($(obj_dom).data('tipocarga')=='manual'){	
						obj_ini.ini_galeria(obj_dom);
			}
		});


		for(var i=0;i<obj_ini.CONT;i++){

				obj_ini.LISTA[i].resize();	
			
		}
		
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes

		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('galeria',this);
			
		}


	};


	this.ini_galeria_por_id=function(obj_dom){
		this.ini_galeria(obj_dom);

		this.LISTA[this.CONT-1].resize();	
	};

	this.ini_galeria=function(obj_dom){


		var obj_ini=this;

			if(!$(obj_dom).attr('id') || $(obj_dom).attr('id')=='' ){

				 html_componente='';
				 filas=$(obj_dom).data('filas');
				 columnas=$(obj_dom).data('columnas');

				 cont_elem=0;

				 cuenta_espacio_fila=0;
				 cuenta_espacio_total=0;

				 num_rejilla=0;


				//antes de empezar abrimos una rejilla de elementos
				array_aux_conjunto_elementos=new Array();


				clase_fila1='fila1';
				clase_columnaf='';


				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA

				var array_class_extra=new Array();

				$(obj_dom).find('ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});


				var array_attr_extra=new Array();

				$(obj_dom).find('AttrExtra').each(function(){		
					array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
				});


				var array_html_extra=new Array();

				$(obj_dom).find('HtmlExtra').each(function(){

					if(!array_html_extra[$(this).attr('DOMdestino')]){
						array_html_extra[$(this).attr('DOMdestino')]=new Array();
					}
						array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
				});


				elementos_totales=$(obj_dom).find('elemento').length;

				completar_espacio_vacio=$(obj_dom).data('completarvacio');
				completar_espacio_html='';

				$(obj_dom).find('elemento').each(function(){
					


					$(this).find('ClassExtra').each(function(){		
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

					});

					$(this).find('AttrExtra').each(function(){		
						array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
					});


					$(this).find('HtmlExtra').each(function(){

						if(!array_html_extra[$(this).attr('DOMdestino')]){
							array_html_extra[$(this).attr('DOMdestino')]=new Array();
						}
							array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
					});




			        //////////////////////////////////////////////////////

			        if(cuenta_espacio_total==0){
			        	array_aux_conjunto_elementos[num_rejilla]='';
			        }

			        cont_elem++;

			        espacio=$(this).data('espacio');
			        cuenta_espacio_fila+=espacio;

			        if(cuenta_espacio_fila>=columnas){
			        	espacio=espacio-(cuenta_espacio_fila-columnas);
			        	cuenta_espacio_fila=0;
			        	clase_columnaf='columnaf';
			        }else{

			        }


			        width_elemento=(100/columnas)*espacio;
			        height=100/filas;


			        if(elementos_totales==cont_elem && clase_columnaf!='columnaf' && $(window).width()>700 && $(obj_dom).data('paginacion')=='si' ){
			        	if(completar_espacio_vacio){
			        		completar_espacio_html='<div class="cg-elemento '+clase_fila1+' columnaf '+array_class_extra['cg-elemento']+'" '+array_attr_extra['cg-elemento']+' style="width:'+width_elemento+'%;height:'+height+'%;">'+
		        	'</div>';
			        	}
			        }



			        array_aux_conjunto_elementos[num_rejilla]+='<div class="cg-elemento '+clase_fila1+' '+clase_columnaf+' '+array_class_extra['cg-elemento']+'" '+array_attr_extra['cg-elemento']+' style="width:'+width_elemento+'%;height:'+height+'%;">'+
			        		'<div class="cg-elemento-contenido">'+

				        		'<div class="cg-elemento-imagen '+array_class_extra['cg-elemento-imagen']+'" data-idelem="'+cont_elem+'">';

				        		if(typeof($(this).data('video'))=='string' && $(this).data('video')!='' ){

				        			url_video=$(this).data('video').split('?v=');
				        			url_video=url_video[1].split('&');
				        			url_video=url_video[0];

				        			array_aux_conjunto_elementos[num_rejilla]+='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+url_video+'" frameborder="0" allowfullscreen></iframe>';


				        		}else{

				        		array_aux_conjunto_elementos[num_rejilla]+=	((typeof $(this).data('src') =='string')?'  <img data-src="'+$(this).data('src')+'" data-msrc="'+$(this).data('msrc')+'" class="comp-cargando-img-redirect" data-redirect="true" data-destino="#comp-galeria-'+obj_ini.CONT+' .cg-elemento-imagen[data-idelem='+"'"+cont_elem+"'"+']">':'')+
				        			'<div class="cg-elemento-info">'+
				        				'<div class="cg-elemento-titulo '+array_class_extra['cg-elemento-titulo']+'"> <div class="contenedor-tabla"><div class="contenedor-celda">'+$(this).data('titulo')+'</div></div> </div>'+
				        				((typeof $(this).data('subtitulo')=='string')? '<div class="cg-elemento-subtitulo '+array_class_extra['cg-elemento-subtitulo']+'" '+array_attr_extra['cg-elemento-subtitulo']+'> <div class="contenedor-tabla"><div class="contenedor-celda">'+$(this).data('subtitulo')+'</div></div> </div>':'')+
				        			'</div>';

				        		}
	
				        array_aux_conjunto_elementos[num_rejilla]+=	'</div>'+
			        		'</div>'+
			        	'</div>'+completar_espacio_html;


			        if(cuenta_espacio_fila==0){ //esto significa que la fila ya ha sido llenada entonces debemos volver a colocar la columna 1
			        	clase_columnaf='';
						clase_fila1='';
			        }else{
						clase_columnaf='';
			        }


			        cuenta_espacio_total+=espacio;

			        if(cuenta_espacio_total==columnas*filas){
			        	//esto significa que ya se ha alcanzado el maximo permitido de espacios en la rejilla
			        	cuenta_espacio_total=0;
			        	num_rejilla++;
			        	
						clase_fila1='fila1';
			        }


				});
				width_contenedor_rejillas='100';
				for(indice in array_aux_conjunto_elementos){
					indice=parseInt(indice);

					if($(window).width()>700 && $(obj_dom).data('paginacion')=='si'){
						width_contenedor_rejillas=(100*array_aux_conjunto_elementos.length);
						html_componente+='<div class="cg-rejilla-elementos" style="width:'+(100/array_aux_conjunto_elementos.length)+'%;" data-idrejilla="'+(indice+1)+'">'+array_aux_conjunto_elementos[indice]+'</div>';	
					}else{

						html_componente+=array_aux_conjunto_elementos[indice];	
					}
						
				
				}

				html_componente='<div class="cg-contenedor-rejillas" style="width:'+width_contenedor_rejillas+'%;">'+html_componente+'</div>';	

				//armamos el navegador


				html_nav1='';
				html_nav2='';

				if($(window).width()>700 && $(obj_dom).data('paginacion')=='si'){

					if($(obj_dom).data('navegador')=='inferior'){

						for(indice in array_aux_conjunto_elementos){
							indice=parseInt(indice);						
							if(array_aux_conjunto_elementos.length>1 ){						
								html_nav2+='<div class="cg-nav-btn '+((indice==0)? 'activo': '')+'" data-idgaleria="'+obj_ini.CONT+'" data-idrejilla="'+(indice+1)+'"></div>';
							}
						}

						if(html_nav2!=''){
							html_nav2='<div class="cg-contenedor-nav">'+html_nav2+'</div>';
						}

					}else{

						html_nav1='<div class="cg-nav-lateral cg-nav-izq inactivo" data-direccion="izq" data-idgaleria="'+obj_ini.CONT+'" data-idrejilla="0"><div class="contenedor-tabla">'+
								'<div class="contenedor-celda">'+
									'<div class="cg-nav-flecha" ></div>'+
								'</div>'+
							'</div>'+
							'</div>';

							inactivo='';

							if(array_aux_conjunto_elementos.length<=1 ){		
								inactivo='inactivo';
							}
						html_nav2='<div class="cg-nav-lateral '+inactivo+'" data-direccion="der" data-idgaleria="'+obj_ini.CONT+'" data-idrejilla="2"><div class="contenedor-tabla">'+
								'<div class="contenedor-celda">'+
									'<div class="cg-nav-flecha" ></div>'+
								'</div>'+
							'</div>'+
							'</div>';
						
						

					}
				}



//DESAROLLADO POR DANTE VIDAL TUEROS



				/*if($(this).data('autoanimado'))*/
				
				
				var html_estructura='<div class="comp-galeria-contenedor"  data-indice="'+obj_ini.CONT+'">'+
					
					'<div class="comp-galeria-contenido ">'+
						'<div class="contenedor-tabla">'+
							'<div class="contenedor-celda">'+							
								( (typeof $(obj_dom).data('titulo')=='string')? '<div class="cg-titulo '+array_class_extra['cg-titulo']+'" '+array_attr_extra['cg-titulo']+'>'+$(obj_dom).data('titulo')+'</div>': '')+
								( (typeof $(obj_dom).data('descripcion')=='string')? '<div class="cg-descripcion '+array_class_extra['cg-descripcion']+'" '+array_attr_extra['cg-descripcion']+'>'+$(obj_dom).data('descripcion')+'</div>': '')+
								'<div class="cg-contenedor '+$(obj_dom).data('navegador')+'">'+

										html_nav1+
									'<div class="cg-div-galeria '+$(obj_dom).data('estilo')+'">'+									
										html_componente+
									'</div>'+
										html_nav2+
								'</div>'+
							'</div>'+
						'</div>'+
						((array_html_extra['comp-galeria-contenido'])? ( (array_html_extra['comp-galeria-contenido']['final'])? array_html_extra['comp-galeria-contenido']['final']: '') :'' )+
					'</div>'+
				'</div>';


			
				obj_ini.LISTA[obj_ini.CONT]=new OBJ_GALERIA('#comp-galeria-'+obj_ini.CONT);


				obj_ini.LISTA[obj_ini.CONT].LISTA_REMOVER_CLASES=new Array();

				$(obj_dom).find('RemoverClass').each(function(){

					obj_ini.LISTA[obj_ini.CONT].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});


				if( typeof $(obj_dom).data('ajustepantalla')=='boolean' ){
				
					obj_ini.LISTA[obj_ini.CONT].ajuste_pantalla=$(this).data('ajustepantalla');

				}
				

				$(obj_dom).html(html_estructura);
				$(obj_dom).attr('id','comp-galeria-'+obj_ini.CONT);



			
			obj_ini.CONT++;

			}
	};



	this.domready=function(){

		GL_COMPONENTE_GALERIA.verifica_componente_ventana();

		for(var index in GL_COMPONENTE_GALERIA.LISTA){
			GL_COMPONENTE_GALERIA.LISTA[index].resize();
		}
		
		$('body').on('click','.cg-contenedor-nav .cg-nav-btn',function(){
			
			id_galeria=$(this).data('idgaleria');
	
			num_rejillas=$('#comp-galeria-'+id_galeria+' .cg-rejilla-elementos').length;

			id_rejilla_seleccionada=$(this).data('idrejilla');

			desplazamiento_rejilla=100/num_rejillas;
			
			desplazar=(desplazamiento_rejilla*(id_rejilla_seleccionada-1));
		
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-nav .cg-nav-btn').removeClass('activo');
			$(this).addClass('activo');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-webkit-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-ms-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-moz-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-o-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('transform','translate3d(-'+desplazar+'%,0px,0px)');


		});

		$('body').on('click','.comp-galeria .cg-contenedor.laterales .cg-nav-lateral',function(){
			
			id_galeria=$(this).data('idgaleria');
			num_rejillas=$('#comp-galeria-'+id_galeria+' .cg-rejilla-elementos').length;

			id_rejilla_seleccionada=$(this).data('idrejilla');

			desplazamiento_rejilla=100/num_rejillas;
			
			desplazar=(desplazamiento_rejilla*(id_rejilla_seleccionada-1));
					
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-webkit-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-ms-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-moz-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('-o-transform','translate3d(-'+desplazar+'%,0px,0px)');
			$('#comp-galeria-'+id_galeria+' .cg-contenedor-rejillas').css('transform','translate3d(-'+desplazar+'%,0px,0px)');


			$('#comp-galeria-'+id_galeria+' .cg-nav-lateral').removeClass('inactivo');
			if($(this).data('direccion')=='izq'){

				$('#comp-galeria-'+id_galeria+' .cg-nav-lateral').each(function(){

					$(this).data('idrejilla',$(this).data('idrejilla')-1);
					if($(this).data('idrejilla')<=0){
						$(this).addClass('inactivo');
					}
				});

			}else{

				$('#comp-galeria-'+id_galeria+' .cg-nav-lateral').each(function(){
					$(this).data('idrejilla',parseInt($(this).data('idrejilla'))+1);
					if($(this).data('idrejilla')>num_rejillas){
						$(this).addClass('inactivo');
					}				
				});
			}


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
}



function OBJ_GALERIA(id){

	this.ID_DOM=id;
	this.ARRAY_GALERIA=new Array();
	this.INICIADO=false;
	this.ajuste_pantalla=true;

	this.LISTA_REMOVER_CLASES;

	
/*
	this.inicia=function(){
		this.inicia_slider()
	};
*/

	this.inicia=function(){


		if(!this.BANNER_INICIADO){
			this.BANNER_INICIADO=true;
/*
			var delay_inicio=setInterval(function(){
				clearInterval(delay_inicio);

				$('#comp-slider-full').removeClass('inicio');

				var delay_circulo=setInterval(function(){
					clearInterval(delay_circulo);
					$('#circulo_banner1').addClass('mostrado');
				},3000);

			},500);
*/
//
		



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


		try{
			fun_inicia_obj_galeria(this.ID_DOM);
		}catch(e){

		}	
}

	};

	



	this.resize=function(){
		var obj=this;
	
		try{
			fun_resize_obj_galeria(this.ID_DOM);
		}catch(e){

		}	

	};



	this.ejecuta_animacion=function(){

	};


	this.inicializa_interfaz_sin_animacion=function(){
					
	
	};

}