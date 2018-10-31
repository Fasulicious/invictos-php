
$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_NOSOTROS.LISTA){
		GL_COMPONENTE_NOSOTROS.LISTA[index].resize();
	}
	
});




$(window).scroll(function(){

	GL_COMPONENTE_NOSOTROS.verifica_componente_ventana();
	
	
});

function OBJ_INICIALIZA_NOSOTROS(){


	this.CONT_NOSOTROS=0;
	this.LISTA=new Array();

	this.ini=function(){
		var obj_ini=this;


		$('.comp-nosotros').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no

			if($(this).data('tipocarga')=='manual'){	
				var html_fondos='';			
				var html_hitos='';		
				var html_hitos_vertical='';	
				var html_info_hitos='';
				var contador=0;	

				var array_html_extra=new Array();
				var array_class_extra=new Array();
				var array_attr_extra=new Array();


				array_html_extra=new Array();

				$(this).find('HtmlExtra').each(function(){

					if(!array_html_extra[$(this).attr('DOMdestino')]){
						array_html_extra[$(this).attr('DOMdestino')]=new Array();
					}
						array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
				});


				array_class_extra=new Array();

				$(this).find('ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});


				array_attr_extra=new Array();

				$(this).find('AttrExtra').each(function(){		
					array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
				});



				$(this).find('seccion').each(function(){
					

					$(this).find('HtmlExtra').each(function(){

						if(!array_html_extra[$(this).attr('DOMdestino')]){
							array_html_extra[$(this).attr('DOMdestino')]=new Array();
						}
							array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
					});



					$(this).find('ClassExtra').each(function(){		
						array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

					});



					$(this).find('AttrExtra').each(function(){		
						array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
					});


			        contador++;
			       /* html_fondos+='<div id="fondo-'+contador+'" class="fondo">'+
						'<img data-src="'+$(this).data('fondosrc')+'">'+
						'</div>';	*/	

						html_fondos+='<div id="fondo-'+contador+'" class="fondo" >';

						if($(this).data('fondosrc')!='vacio'){
							html_fondos+='<img data-src="'+$(this).data('fondosrc')+'" data-msrc="'+$(this).data('fondomsrc')+'">';	
						}        
						html_fondos+='</div>';


			       
			        html_info_hitos+='<div class="seccion-hito '+array_class_extra['seccion-hito']+'" data-id="'+contador+'" data-idobj="'+obj_ini.CONT_NOSOTROS+'" style="">'+
			        		'<div class="content-info-hito">'+

			        		'<div class="img-titulo  '+
			        		(((typeof $(this).data('img') =='string') && (typeof $(this).data('imgslc') =='string'))? 'imagen_cambiante': '' )+'">'+

			        			((typeof $(this).data('img') =='string')? '<div class="elem-img '+array_class_extra['elem-img']+'"><img data-src="'+$(this).data('img')+'" />  '+((array_html_extra['elem-img'])? ( (array_html_extra['elem-img']['final'])? array_html_extra['elem-img']['final']: '') :'' )+' </div>':'')+

			        			((typeof $(this).data('imgslc') =='string')? '<div class="elem-img-slc"><img data-src="'+$(this).data('imgslc')+'" data-msrc="'+$(this).data('imgslc')+'" class="comp-cargando-img-redirect" data-redirect="true" data-destino="#comp-nosotros-'+obj_ini.CONT_NOSOTROS+' .seccion-hito[data-id='+"'"+contador+"'"+'] .elem-img-slc"> </div>':'')+

			        			'</div>'+

			        			((typeof $(this).data('descripcion') =='string' && $(this).data('descprimero')==true)? '<div class="elem-info oculto '+array_class_extra['elem-info']+'" '+array_attr_extra['elem-info']+'><span>'+$(this).data('descripcion')+'</span><span class="aux">'+$(this).data('descripcion')+'</span></div>':'')+

			        			'<div class="elem-titulo '+array_class_extra['elem-titulo']+'" '+array_attr_extra['elem-titulo']+'><span>'+$(this).data('titulo')+'</span></div>'+

			        			((typeof $(this).data('descripcion') =='string' && $(this).data('descprimero')!=true)? '<div class="elem-info oculto '+array_class_extra['elem-info']+'" '+array_attr_extra['elem-info']+'><span>'+$(this).data('descripcion')+'</span><span class="aux">'+$(this).data('descripcion')+'</span></div>':'')+
			        		'</div>'+
			        	'</div>';
				});



				array_html_extra=new Array();

				$(this).find('HtmlExtra').each(function(){

					if(!array_html_extra[$(this).attr('DOMdestino')]){
						array_html_extra[$(this).attr('DOMdestino')]=new Array();
					}
						array_html_extra[$(this).attr('DOMdestino')][$(this).attr('posicion')]=$(this).html();
				});


				array_class_extra=new Array();

				$(this).find('ClassExtra').each(function(){		
					array_class_extra[$(this).attr('DOMdestino')]=$(this).attr('class');

				});


				array_attr_extra=new Array();

				$(this).find('AttrExtra').each(function(){		
					array_attr_extra[$(this).attr('DOMdestino')]=$(this).attr('atributos');
				});




				/*if($(this).data('autoanimado'))*/
				
				height_linea_tiempo_vertical=100-100/contador;
				
				var html_estructura='<div id="comp-nosotros-'+obj_ini.CONT_NOSOTROS+'" class="comp-nosotros-content"  data-indice="'+obj_ini.CONT_NOSOTROS+'">'+
					'<div class="fondos-nosotros">'+
						html_fondos+				      
					'</div>'+
					'<div class="content_nosotros">'+
						'<div class="contenedor-tabla">'+
							'<div class="contenedor-celda">'+							
								( (typeof $(this).data('titulo')=='string')? '<div class="titulo_nosotros '+array_class_extra['titulo_nosotros']+'" '+array_attr_extra['titulo_nosotros']+'>'+$(this).data('titulo')+'</div>': '')+
								( (typeof $(this).data('descripcion')=='string')? '<div class="desc_nosotros '+array_class_extra['desc_nosotros']+'"  '+array_attr_extra['desc_nosotros']+'>'+$(this).data('descripcion')+'</div>': '')+
								'<div class="div-info-hitos">'+
									html_info_hitos+
								'</div>'+

							'</div>'+
						'</div>'+
						((array_html_extra['content_nosotros'])? ( (array_html_extra['content_nosotros']['final'])? array_html_extra['content_nosotros']['final']: '') :'' )+
					'</div>'+
				'</div>';



				obj_ini.LISTA[obj_ini.CONT_NOSOTROS]=new OBJ_NOSOTROS('#comp-nosotros-'+obj_ini.CONT_NOSOTROS);

				if( typeof $(this).data('autoanimado')=='boolean' ){
				
					obj_ini.LISTA[obj_ini.CONT_NOSOTROS].AUTOANIMADO=$(this).data('autoanimado');

				}



				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente
				//debemos inicializar la lista para remover clases despues de que se ejecuta el inicio de este componente

				obj_ini.LISTA[obj_ini.CONT_NOSOTROS].LISTA_REMOVER_CLASES=new Array();


				$(this).find('RemoverClass').each(function(){


					obj_ini.LISTA[obj_ini.CONT_NOSOTROS].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});


				$(this).html(html_estructura);

				/*if( typeof $(this).data('animacionpantalla')=='boolean' ){
				
					obj_ini.LISTA[obj_ini.CONT_NOSOTROS].ANIMACION_PANTALLA=$(this).data('animacionpantalla');

				}*/



			}

			
				for(var i=0;i<obj_ini.LISTA.length;i++){	
					obj_ini.LISTA[i].resize();	
				}
			
			
			obj_ini.CONT_NOSOTROS++;

		});

				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('nosotros',this);
		}
	};

	this.domready=function(){

		$('body').on('mouseover','.comp-nosotros-content .seccion-hito',function(){

			GL_COMPONENTE_NOSOTROS.LISTA[parseInt($(this).data('idobj'))].senala_hito(parseInt($(this).data('id')));
		});
		$('body').on('mouseleave','.comp-nosotros-content .seccion-hito',function(){

			if(!GL_COMPONENTE_NOSOTROS.LISTA[parseInt($(this).data('idobj'))].responsive){
				GL_COMPONENTE_NOSOTROS.LISTA[parseInt($(this).data('idobj'))].desenala_hito(parseInt($(this).data('id')));
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



function OBJ_NOSOTROS(id){

	this.ID_DOM=id;
	this.ARRAY_NOSOTROS=new Array();
	this.INICIADO=false;
	this.ANIMACION_EJECUTADA=false;
	this.AUTOANIMADO=true;
	//this.ANIMACION_PANTALLA=false;
	this.delay_altura_info;
	this.LISTA_REMOVER_CLASES;
	this.responsive=false;

	
/*
	this.inicia=function(){
		this.inicia_slider()
	};
*/

	this.inicia=function(){

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
		if(!this.INICIADO){

			this.INICIADO=true;
					
			if(this.AUTOANIMADO ){
				this.ejecuta_animacion();
			}else{
				this.inicializa_interfaz_sin_animacion();
			}
				
		}
		//}

	};

	



	this.resize=function(){
		var obj=this;


		var delay_banner=setInterval(function(){


		if($(obj.ID_DOM+' .slide img').length>0){

		var comprobacion_carga=true;

		$(obj.ID_DOM+' .fondo').each(function(){
		  
		  var w=$(this).find('img').width();
		  var h=$(this).find('img').height();
		  if(w>0 && h>0){      
		  }else{
		    comprobacion_carga=false;
		  }
		}); 
		if(comprobacion_carga){

		clearInterval(delay_banner);

		  $(obj.ID_DOM+' .fondo').each(function(){


		    var w=$(this).find('img').width();
		    var h=$(this).find('img').height();
		    
		    var wf=$(window).width();
		    var hf=$(window).height();
		    var hn,wn;
		    $(obj.ID_DOM+' .fondos-nosotros').css('height',hf+'px');
		    $(obj.ID_DOM+' .fondo').css('height',hf+'px');

		    if(hf>h){ //la pantalla es más grande en altura que la imagen, entonces ajustamos la altura
		      hn=hf;
		      wn=w*hn/h;
		    }else{
		      wn=w;
		      hn=h;
		    }

		    if(wn<wf+100){
		      wn=wf+100;
		      hn=wn*h/w;
		    }

		    $(this).find('img').width(wn);
		    $(this).find('img').height(hn);

		    $(obj.ID_DOM+' .fondos-nosotros').css('width',wf+'px');
		    $(obj.ID_DOM+' .fondo').css('width',wf+'px');

		    var diferencia_h=hn-hf;

		    $(this).css('top','-'+(diferencia_h/2)+'px');


		  });

		}

		}else{

		clearInterval(delay_banner);

			 var hf=$(window).height();
			    var wf=$(window).width();
		    $(obj.ID_DOM+' .fondos-nosotros').css('height',hf+'px');
		    $(obj.ID_DOM+' .fondo').css('height',hf+'px');		    
		    $(obj.ID_DOM+' .fondos-nosotros').css('width',wf+'px');
		    $(obj.ID_DOM+' .fondo').css('width',wf+'px');
		}


			var delay_responsive=setInterval(function(){

				clearInterval(delay_responsive);
			/*$('.comp-nosotros').removeClass('responsive');
			var width_texto=$('.div-info-hitos .seccion-hito.select .elem-info span').css('width').replace('px','');
		
			if(width_texto<150){

				$('.comp-nosotros').addClass('responsive');

			    $(obj.ID_DOM+' .fondo').addClass('sin_top');
			}else{

			    $(obj.ID_DOM+' .fondo').removeClass('sin_top');
			}


			if(!obj.ANIMACION_EJECUTADA && obj.AUTOANIMADO && obj.ANIMACION_PANTALLA){
				//esto se hace pues en el responsive de unas líneas atras se necesita que la seccion esté mostrada la primera sección para medir su ancho y así efectuar el responsive respectivo.
				//Sin embargo una vez hecho eso se debe ocultar neuvamente el hito para poder lograr un efecto de inicialización cuando la pantalla esté mostrando la línea de tiempo
			    
			    $(obj.ID_DOM+' .seccion-hito').removeClass('select'); 
			
			}*/

			},100); 

		},100); 


		$(obj.ID_DOM+' .seccion-hito').css('width',(100/($(obj.ID_DOM+' .seccion-hito').length))+'%');


		try{
			fun_resize_obj_nosotros(obj.ID_DOM);
		}catch(e){

		}


		clearInterval(obj.delay_altura_info);

		obj.delay_altura_info=setInterval(function(){
			clearInterval(obj.delay_altura_info);
			var mayor_altura=0;
			$(obj.ID_DOM+' .seccion-hito .elem-info span.aux').each(function(){
				
				if(parseInt($(this).css('height').replace('px',''))>mayor_altura){
					mayor_altura=parseInt($(this).css('height').replace('px',''));
				}
			});

			$(obj.ID_DOM+' .seccion-hito .elem-info').css('height',(mayor_altura+(mayor_altura/20))+'px');

		},1000);
		


	};



	this.ejecuta_animacion=function(){

		var obj=this;

		var mayor_altura=0;
		$(obj.ID_DOM+' .seccion-hito .elem-info span.aux').each(function(){
			
			if(parseInt($(this).css('height').replace('px',''))>mayor_altura){
				mayor_altura=parseInt($(this).css('height').replace('px',''));
			}
		});

		$(obj.ID_DOM+' .seccion-hito .elem-info').css('height',(mayor_altura+(mayor_altura/20))+'px');





		var tiempo_slide=parseInt($(obj.ID_DOM).parent().data('tiemposlide'))*1000;

		 if(!obj.ANIMACION_EJECUTADA){
		 	
		    $(obj.ID_DOM+' .fondo').first().addClass('mostrado'); 

		    $(obj.ID_DOM+' .seccion-hito').first().addClass('select'); 

		    $(obj.ID_DOM+' .seccion-hito .elem-info').first().removeClass('oculto'); 


		    //$(obj.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

		//deslizamiento del banner
		      var delay_left=setInterval(function(){
		          clearInterval(delay_left);

		          nuevo_left=($(obj.ID_DOM+' .fondo').first().find('img').width()-$(window).width())/3;

		         $(obj.ID_DOM+' .fondo').last().css('left','0px');
		         $(obj.ID_DOM+' .fondo').first().css('left','-'+nuevo_left+'px');

		     },500);

		  		obj.ANIMACION_EJECUTADA=true;

		  }

		  var interval_fondo=setInterval(function(){



		    if(!$(obj.ID_DOM+' .fondo.mostrado').is(':last-child')){	

		       var mostrado_aux=$(obj.ID_DOM+' .fondo.mostrado');

		       var seccion_hito_aux=$(obj.ID_DOM+' .seccion-hito.select').last();


		       //var mostrado_texto_aux=$(obj.ID_DOM+' .slide_texto.mostrado');

		       $(obj.ID_DOM+' .fondo.mostrado').removeClass('mostrado');

		       /*$(obj.ID_DOM+' .circulo-hito').removeClass('select');*/
		       //$(obj.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');

		       $(mostrado_aux).next().addClass('mostrado');
		       //$(mostrado_texto_aux).next().addClass('mostrado');

		       //animamos la línea de tiempo horizontal
		    	$(seccion_hito_aux).next().addClass('select');

		    	$(obj.ID_DOM+' .seccion-hito.select .elem-info').last().removeClass('oculto'); 

		    	

		        //deslizamiento del banner
		        var delay_left=setInterval(function(){
		        clearInterval(delay_left);

		        var  nuevo_left=($(obj.ID_DOM+' .fondo.mostrado img').width()-$(window).width())/3;

		           $(obj.ID_DOM+' .fondo.mostrado').prev().css('left','0px');
		           $(obj.ID_DOM+' .fondo.mostrado').css('left','-'+nuevo_left+'px');

		        },500);

		    }else{
		    	clearInterval(interval_fondo);
		    	//termina animación

/*		     	$(obj.ID_DOM+' .fondo.mostrado').removeClass('mostrado');		     
			    $(obj.ID_DOM+' .circulo-hito').removeClass('select'); 
			    $(obj.ID_DOM+' .seccion-hito').removeClass('select'); 

			     
			    $(obj.ID_DOM+' .fondo').first().addClass('mostrado'); 
			    $(obj.ID_DOM+' .circulo-hito').first().addClass('select'); 
			    $(obj.ID_DOM+' .seccion-hito').first().addClass('select'); 

				$(obj.ID_DOM+' .div_linea_tiempo .linea_tiempo_activa').css('width','0%');
						    	

				//deslizamiento del banner
		        var delay_left=setInterval(function(){
		        clearInterval(delay_left);

		        var  nuevo_left=($(obj.ID_DOM+' .fondo.mostrado img').width()-$(window).width())/3;

		           $(obj.ID_DOM+' .fondo').last().css('left','0px');
		           $(obj.ID_DOM+' .fondo').first().css('left','-'+nuevo_left+'px');

		        },500);
*/

		    }

		 
		    
		  },tiempo_slide);
	};

	this.senala_hito=function(posicion){

		var obj=this;
	    $(obj.ID_DOM+' .fondo:nth-child('+posicion+')').addClass('mostrado'); 

	    $(obj.ID_DOM+' .seccion-hito:nth-child('+posicion+')').addClass('select'); 

	    $(obj.ID_DOM+' .seccion-hito:nth-child('+posicion+') .elem-info').removeClass('oculto'); 


	    //$(obj.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

		//deslizamiento del banner
	      var delay_left=setInterval(function(){
	          clearInterval(delay_left);

	          nuevo_left=($(obj.ID_DOM+' .fondo:nth-child('+posicion+')').find('img').width()-$(window).width())/3;

	         $(obj.ID_DOM+' .fondo:nth-child('+posicion+')').first().css('left','-'+nuevo_left+'px');

	     },500);

	};

	this.desenala_hito=function(posicion){

		var obj=this;
	    $(obj.ID_DOM+' .fondo:nth-child('+posicion+')').removeClass('mostrado'); 

	    $(obj.ID_DOM+' .seccion-hito:nth-child('+posicion+')').removeClass('select'); 

	    $(obj.ID_DOM+' .seccion-hito:nth-child('+posicion+') .elem-info').addClass('oculto'); 


	    //$(obj.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

		//deslizamiento del banner
	      var delay_left=setInterval(function(){
	          clearInterval(delay_left);

		       $(obj.ID_DOM+' .fondo:nth-child('+posicion+')').css('left','0px');

	     },500);

	};

	this.inicializa_interfaz_sin_animacion=function(){
					/*
	    $(this.ID_DOM+' .fondo').first().addClass('mostrado'); 
	    $(this.ID_DOM+' .seccion-hito').first().addClass('select'); 
*/
	
		var obj=this;

		var mayor_altura=0;
		$(obj.ID_DOM+' .seccion-hito .elem-info span.aux').each(function(){
			
			if(parseInt($(this).css('height').replace('px',''))>mayor_altura){
				mayor_altura=parseInt($(this).css('height').replace('px',''));
			}
		});

		$(obj.ID_DOM+' .seccion-hito .elem-info').css('height',(mayor_altura+(mayor_altura/20))+'px');



	};

}