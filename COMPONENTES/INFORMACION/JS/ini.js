
$(window).scroll(function(event){

	GL_COMPONENTE_INFORMACION.verifica_componente_ventana();
	
});


$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_INFORMACION.ARRAY){
		GL_COMPONENTE_INFORMACION.ARRAY[index].resize();
	}
	
});

function OBJ_INICIALIZA_INFORMACION(){


	this.CONT=0;
	this.ARRAY=new Array();

	this.ini=function(){
		var obj_ini=this;


		$('.comp-informacion').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

				

				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA
				//////CLASES EXTRA     CLASES EXTRA

				var array_class_extra,array_attr_extra,array_html_extra;
				var bloques='';
				$(this).find('bloque').each(function(){

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


					bloques+='<div class="comp-info-bloque '+array_class_extra['comp-info-bloque']+'" id="'+$(this).data('iddom')+'" '+array_attr_extra['comp-info-bloque']+'>'+
							$(this).html()+
							'</div>';

				});
				
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


				var html_componente=
					'<div class="contenedor-tabla">'+
						'<div class="contenedor-celda">'+

							'<div class="comp-info-contenedor-bloques">'+
						//		'<div class="comp-info-tc-alineador">'+
									bloques+
							//	'</div>'+
							'</div>'+
						'</div>'+
					'</div>';


				altura_window=$(this).data('alturawindow');

				obj_ini.ARRAY[obj_ini.ARRAY.length]=new OBJ_INFORMACION('#comp-informacion-'+obj_ini.CONT);


				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente
				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente

				obj_ini.ARRAY[obj_ini.CONT].LISTA_REMOVER_CLASES=new Array();


				$(this).find('RemoverClass').each(function(){

					obj_ini.ARRAY[obj_ini.CONT].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});

				$(this).attr('id','comp-informacion-'+obj_ini.CONT);
				$(this).html(html_componente);

				/*
			
				for(var i=0;i<obj_ini.ARRAY.length;i++){	
					obj_ini.ARRAY[i].inicia();	
				}*/
			
			
			obj_ini.CONT++;
		});


				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('informacion',this);
		}

	};

	this.domready=function(){

		GL_COMPONENTE_INFORMACION.verifica_componente_ventana();

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


function OBJ_INFORMACION(id){

	this.ID_DOM=id;
	this.LISTA_REMOVER_CLASES;
	this.INICIADO=false;


	this.delay_remover=new Array();

	this.inicia=function(){
		//Esto es para quitar la animacion auxiliar que se quiera hacer			
		if(!this.INICIADO){

			this.INICIADO=true;

			var id_dom=this.ID_DOM;

			if($(id_dom).parents('.columna-pagina.oculto').length == 0) {


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

				this.resize();
			try{	
				fun_inicia_obj_informacion(this.ID_DOM);
			}catch(e){

			}
		}

	};

	



	this.resize=function(){
		
		var obj=this;
	
		try{
			fun_resize_obj_informacion(this.ID_DOM);
		}catch(e){

		}


	};



	
}