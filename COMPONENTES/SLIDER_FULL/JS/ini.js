
$(window).resize(function(){
	
	if(!GL_INICIA_DESDE_MOVIL){
		
		for(var index in GL_COMPONENTE_SLIDERS.LISTA){
			GL_COMPONENTE_SLIDERS.LISTA[index].resize();
		}
	}
	
});

$(window).scroll(function(){

	GL_COMPONENTE_SLIDERS.verifica_componente_ventana();
		
});




function OBJ_INICIALIZA_SLIDERS(){


	this.CONT=0;
	this.LISTA=new Array();

	this.ini=function(){
		var obj_aux=this;


		$('.comp-slider-full').each(function(){
			//recogemos todas las imágenes que hay pero debemos verificar si es manual o no
			var obj_slider_full=$(this);
			if($(obj_slider_full).data('tipocarga')=='manual'){	
				var html_slides='';			
				var html_textos='';		

				contador=0;


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



				$(this).find('slide').each(function(){
					//obj_aux.ARRAY_SLIDES[obj_aux.ARRAY_SLIDES.length]=$(this).data('src');
					
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
					html_slides+='<div class="slide" data-idslide="'+contador+'" style="opacity:0;" >'+
			          (($(this).data('src')!='vacio')? '<div class="img_slide">'+
					((array_html_extra['img_slide'])? ( (array_html_extra['img_slide']['inicio'])? array_html_extra['img_slide']['inicio']: '') :'' )+
			          	'</div> <img class="img_fondo" data-src="'+$(this).data('src')+'" data-msrc="'+$(this).data('msrc')+'" data-destino="#comp-slider-full-'+obj_aux.CONT+' .slide[data-idslide='+"'"+contador+"'"+'] .img_slide" '+array_attr_extra['img_fondo']+'>':'<span></span>')+
			          ((array_html_extra['slide'])? ( (array_html_extra['slide']['final'])? array_html_extra['slide']['final']: '') :'' ) +
			        '</div>';


			        //class="carga-img"



			        html_content_texto='';
					switch($(this).data('tipotexto')){

						case 'circulo clasico':
							//'<div class="content_texto">'+$(this).data('texto')+'</div>'
						break;

						case 'texto_dividido':
							html_content_texto+='<div class="content_texto">'+
								'<div class="texto texto_1 '+array_class_extra['texto-dividido-1']+'" '+array_attr_extra['texto-dividido-1']+'><div class="slider-subcontent-texto"><span>'+$(this).data('texto')+'</span></div> </div>'+
								'<div class="texto texto_2 '+array_class_extra['texto-dividido-2']+'" '+array_attr_extra['texto-dividido-2']+'><div class="slider-subcontent-texto"><span>'+$(this).data('subtexto')+'</span></div></div>'+
								'</div>';
						break;

						case 'txt_caja_inf':
							html_content_texto+='<div class="content_texto">'+
								'<div class="texto"><span>'+$(this).data('texto')+'</span></div>'+
								'</div>';
						break;
					}



			        html_textos+='<div class="slide_texto"">'+
			        	html_content_texto+
			        	'</div>';
			        	
			        	$(obj_slider_full).addClass($(this).data('tipotexto'));
				});

				/*
		        <div id="slide4" class="slide" >
		          <img class="carga-img" src="">
		        </div>*/



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




		        html_botones_nav='';

		        if($(obj_slider_full).data('botones')==true){

		        	switch($(obj_slider_full).data('tipobotones')){

		        		case 'flechas':
			        		html_botones_nav='<div class="comp-slider-botones-nav" >'+
					      	'<div class="comp-slider-btn comp-slider-btn-ant" data-idslider="'+obj_aux.CONT+'" onmousedown="return false"  oncontextmenu="return false" ondragstart="return false"  onselectstart="return false"></div>'+
					      	'<div class="comp-slider-btn comp-slider-btn-sig" data-idslider="'+obj_aux.CONT+'" onmousedown="return false"  oncontextmenu="return false" ondragstart="return false"  onselectstart="return false"></div>'+
					      	'</div>';
		        		break;
		        		case 'multiple':

			        		html_botones_nav='<div class="comp-slider-nav-multiple" >';

		        			for(var i=0;i<contador;i++){

					      		html_botones_nav+='<div class="comp-slider-multiple-nav '+((i==0)? 'activo':'')+'" data-idslider="'+obj_aux.CONT+'" onmousedown="return false" data-idslide="'+(i+1)+'" oncontextmenu="return false" ondragstart="return false"  onselectstart="return false"></div>';
		        			}

			        		html_botones_nav+='</div>';
		        		break;
		        	}
		        }



				var html_slider='<div data-indice="'+obj_aux.CONT+'" class="comp-slider-contenedor">'+

			      '<div class="comp-slider-full-content">'+
			      	html_slides+
			      '</div>'+

				  '<div class="comp-slider-textos-content">'+
			      	html_textos+
			      '</div>'+

					html_botones_nav+	

					((array_html_extra['comp-slider-contenedor'])? ( (array_html_extra['comp-slider-contenedor']['final'])? array_html_extra['comp-slider-contenedor']['final']: '') :'' ) +
			    '</div>';



				obj_aux.LISTA[obj_aux.CONT]=new OBJ_SLIDER_FULL('#comp-slider-full-'+obj_aux.CONT);


				obj_aux.LISTA[obj_aux.CONT].LISTA_REMOVER_CLASES=new Array();

				$(this).find('RemoverClass').each(function(){

					obj_aux.LISTA[obj_aux.CONT].LISTA_REMOVER_CLASES.push({domdestino:$(this).attr('DOMdestino'),clases:$(this).attr('class'),tiempodelay:$(this).attr('tiempodelay')});
					/*
					array_clases_removidas[$(this).attr('DOMdestino')]['clases']=$(this).attr('class');
					array_clases_removidas[$(this).attr('DOMdestino')]['tiempodelay']=$(this).attr('tiempodelay');*/
				});


				if( typeof $(obj_slider_full).data('autoanimado')=='boolean' ){
				
					obj_aux.LISTA[obj_aux.CONT].AUTOANIMADO=$(obj_slider_full).data('autoanimado');

				}


				$(obj_slider_full).html(html_slider);
				$(obj_slider_full).attr('id','comp-slider-full-'+obj_aux.CONT);

			}

			//obj_aux.cargar_css();
			/*
			comp=new OBJ_COMPONENTES();
			comp.loadCSS('COMPONENTES/SLIDER_FULL/CSS/estilos.css',function(){*/

				
			//});	
			
			obj_aux.CONT++;



		});

		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('slider',this);
		}


		for(var i=0;i<obj_aux.LISTA.length;i++){	
			obj_aux.LISTA[i].resize();	
		}


	};


	this.genera_content_texto=function(obj_dom){
		var html='';
		return html;
	};





	this.domready=function(){

		GL_COMPONENTE_SLIDERS.verifica_componente_ventana();

		$('body').on('click','.comp-slider-btn-ant',function(){
			GL_COMPONENTE_SLIDERS.LISTA[$(this).data('idslider')].pasar_anterior_slide();		
		});

		$('body').on('click','.comp-slider-btn-sig',function(){
			GL_COMPONENTE_SLIDERS.LISTA[$(this).data('idslider')].pasar_siguiente_slide();
		});

		$('body').on('click','.comp-slider-multiple-nav',function(){
			GL_COMPONENTE_SLIDERS.LISTA[$(this).data('idslider')].pasar_a_slide($(this).data('idslide'));
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



function OBJ_SLIDER_FULL(id){

	this.ID_DOM=id;
	this.ARRAY_SLIDES=new Array();
	this.INICIADO=false;
	this.ANIMACION_EJECUTADA=false;
	this.AUTOANIMADO=true;
	
	this.interval_slide;

	this.LISTA_REMOVER_CLASES;

/*
	this.inicia=function(){
		this.inicia()
	};*/

	this.inicia=function(){

/*
		if(!this.INICIADO){
			this.INICIADO=true;

			var delay_inicio=setInterval(function(){
				clearInterval(delay_inicio);

				$('#comp-slider-full').removeClass('inicio');

				var delay_circulo=setInterval(function(){
					clearInterval(delay_circulo);
					$('#circulo_banner1').addClass('mostrado');
				},3000);

			},500);
*/
			if(!this.ANIMACION_EJECUTADA){
				
				if(this.AUTOANIMADO){
					this.ejecuta_slide();	
				}else{
					this.inicializa_interfaz_sin_animacion();	
				}
			}
		//}



			//Esto es para quitar la animacion auxiliar que se quiera hacer			



		
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




	};

	


	this.resize=function(){
		var obj=this;

		if($(obj.ID_DOM+' .slide .img_slide').length>0){

			var delay_banner=setInterval(function(){

			var comprobacion_carga=true;

			$(obj.ID_DOM+' .slide').each(function(){
			  
			  var w=$(this).find('img[class="img_fondo"]').width();
			  var h=$(this).find('img[class="img_fondo"]').height();

			  if(w>0 && h>0){      
			  }else{
			    comprobacion_carga=false;
			  }
			}); 
			if(comprobacion_carga){

			clearInterval(delay_banner);

			  $(obj.ID_DOM+' .slide').each(function(){


			    var w=$(this).find('img[class="img_fondo"]').width();
			    var h=$(this).find('img[class="img_fondo"]').height();
			    var wf=$(window).width();
			    var hf=$(window).height();
			    var hn,wn;
			    //$(obj.ID_DOM+' .comp-slider-full-content').css('height',hf+'px');

			    if(hf>h){ //la pantalla es más grande en altura que la imagen, entonces ajustamos la altura
			      hn=hf;
			      wn=w*hn/h;
			    }else{
			    	hn=hf;
			      wn=w*hn/h;
			    }

			    if(wn<wf+100){
			      wn=wf+100;
			      hn=wn*h/w;
			    }

			    $(this).find('img[class="img_fondo"]').width(wn);
			    $(this).find('img[class="img_fondo"]').height(hn);

			    //$(this).find('img[class="img_fondo"]').css('margin-left','-'+(wn/2)+'px');
    
			    $(this).find('div[class="img_slide"]').css('background-image','url('+$(this).find('img[class="img_fondo"]').attr('src')+')');
			    $(this).find('img[class="img_fondo"]').css('opacity','0');
			    $(this).find('img[class="img_fondo"]').css('pointer-events','none');


			    $(this).find('div[class="img_slide"]').css('height',hn+'px');
			    $(this).find('div[class="img_slide"]').css('width',wn+'px');

			    var diferencia_w=wn-wf;

			    $(this).find('div[class="img_slide"]').css('margin-left','-'+(diferencia_w/2)+'px');

			    //$(obj.ID_DOM+' .comp-slider-full-content').css('width',wf+'px');
			   // $(obj.ID_DOM+' .comp-slider-full-content .img_slide').css('width',wf+'px');

			    var diferencia_h=hn-hf;


			    $(this).find('div[class="img_slide"]').css('margin-top','-'+(diferencia_h/2)+'px');

			  });

			}

			},100); 
			
		}else{
			/* var hf=$(window).height();
			    var wf=$(window).width();
			 $(obj.ID_DOM+' .comp-slider-full-content').css('height',hf+'px');
			 $(obj.ID_DOM+' .comp-slider-full-content .slide').css('height',hf+'px');
			 $(obj.ID_DOM+' .comp-slider-full-content').css('width',wf+'px');
			 $(obj.ID_DOM+' .comp-slider-full-content .slide').css('width',wf+'px');*/

		}

		if($(window).width()<600){

			$('.comp-slider-full').addClass('responsive600');
			/*if($('.comp-slider-full.texto_dividido '+obj.ID_DOM).html()){

				var delay=setInterval(function(){
					clearInterval(delay);

					var disminucion=true;
					//var font_size_ini=$('.comp-slider-full.texto_dividido '+obj.ID_DOM+' .comp-slider-textos-content .slide_texto .content_texto .texto').css('font-size').replace('px','');
					var font_size_ini=70;
					while(disminucion){
						disminucion=false;
										
						$('.comp-slider-full.texto_dividido '+obj.ID_DOM+' .comp-slider-textos-content .slide_texto .content_texto .texto_1 span').each(function(){	
											
							ancho_content_texto_1=$(this).parent().css('width').replace('px','');
							ancho_texto_1=$(this).css('width').replace('px','');
							
							ancho_content_texto_2=$(this).parent().next().css('width').replace('px',''); //tomamos el texto_2
							ancho_texto_2=$(this).parent().next().find('span').css('width').replace('px','');
							
							if(ancho_content_texto_1<ancho_texto_1 || ancho_content_texto_2<ancho_texto_2){
								
								disminucion=true;	
								return false;
							}			
						});
						
						if(disminucion){
							font_size_ini--;
							$('.comp-slider-full.texto_dividido '+obj.ID_DOM+' .comp-slider-textos-content .slide_texto .content_texto .texto').css('font-size',font_size_ini+'px');
						}
					}
				},200);

			}*/
			/*while(){

			}*/
		}else{

			$('.comp-slider-full').removeClass('responsive600');
		
		}



		try{
			fun_resize_obj_slide_full(this.ID_DOM);
		}catch(e){

		}


	};



	this.ejecuta_slide=function(){
		var obj=this;
		var tiempo_slide=parseInt($(obj.ID_DOM).data('tiemposlide'))*1000;

		 if(!obj.ANIMACION_EJECUTADA){
		 	
		    $(obj.ID_DOM+' .slide').first().addClass('mostrado'); 

		    $(obj.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

		//deslizamiento del banner
		      var delay_left=setInterval(function(){
		          clearInterval(delay_left);


		          nuevo_left=($(obj.ID_DOM+' .slide').first().find('img[class="img_fondo"]').width()-$(window).width())/3;


		         $(obj.ID_DOM+' .slide').last().css('transform','translate3d(0px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').last().css('-webkit-transform','translate3d(0px,0px,0px)');


		         $(obj.ID_DOM+' .slide').first().css('transform','translate3d(-'+nuevo_left+'px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').first().css('-webkit-transform','translate3d(-'+nuevo_left+'px,0px,0px)');
/*
		         $(obj.ID_DOM+' .slide').first().css('transform','translate3d(-10%,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').first().css('-webkit-transform','translate3d(-10%,0px,0px)');*/

		         //$(obj.ID_DOM+' .slide').first().css('left','-'+nuevo_left+'px');
		     },1700);

		  		obj.ANIMACION_EJECUTADA=true;
		  }

		  this.ejecuta_intervalo_slide();


	};


	this.ejecuta_intervalo_slide=function(){

		var obj=this;
		var tiempo_slide=parseInt($(obj.ID_DOM).data('tiemposlide'))*1000;

		  this.interval_slide=setInterval(function(){



		    if($(obj.ID_DOM+' .slide.mostrado').next().html()){


		       var mostrado_aux=$(obj.ID_DOM+' .slide.mostrado');
		       var mostrado_texto_aux=$(obj.ID_DOM+' .slide_texto.mostrado');

		       $(obj.ID_DOM+' .slide.mostrado').removeClass('mostrado');
		       $(obj.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');

		       $(mostrado_aux).next().addClass('mostrado');
		       $(mostrado_texto_aux).next().addClass('mostrado');


		        //deslizamiento del banner
		        var delay_left=setInterval(function(){
		        clearInterval(delay_left);


		        var  nuevo_left=($(obj.ID_DOM+' .mostrado img[class="img_fondo"]').width()-$(window).width())/3;
		          // $(obj.ID_DOM+' .slide.mostrado').prev().css('left','0px');
		         $(obj.ID_DOM+' .slide.mostrado').prev().css('transform','translate3d(0px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide.mostrado').prev().css('-webkit-transform','translate3d(0px,0px,0px)');

		         $(obj.ID_DOM+' .slide.mostrado').css('transform','translate3d(-'+nuevo_left+'px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide.mostrado').css('-webkit-transform','translate3d(-'+nuevo_left+'px,0px,0px)');
/*
		         $(obj.ID_DOM+' .slide.mostrado').css('transform','translate3d(-10%,0px,0px)'); 
		         $(obj.ID_DOM+' .slide.mostrado').css('-webkit-transform','translate3d(-10%,0px,0px)');*/

		           //$(obj.ID_DOM+' .slide.mostrado').css('left','-'+nuevo_left+'px');
		        },1700);

		    }else{

		     $(obj.ID_DOM+' .slide.mostrado').removeClass('mostrado');
		     $(obj.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');
		     $(obj.ID_DOM+' .slide').first().addClass('mostrado'); 
		     $(obj.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

		//deslizamiento del banner
		      var delay_left=setInterval(function(){
		          clearInterval(delay_left);


		         /*$(obj.ID_DOM+' .slide').last().css('left','0px');
		         $(obj.ID_DOM+' .slide').first().css('left','-'+nuevo_left+'px');*/

		        var  nuevo_left=($(obj.ID_DOM+' .slide').first().find('img[class="img_fondo"]').width()-$(window).width())/3;

		         $(obj.ID_DOM+' .slide').last().css('transform','translate3d(0px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').last().css('-webkit-transform','translate3d(0px,0px,0px)');

		         $(obj.ID_DOM+' .slide').first().css('transform','translate3d(-'+nuevo_left+'px,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').first().css('-webkit-transform','translate3d(-'+nuevo_left+'px,0px,0px)');
/*
		         $(obj.ID_DOM+' .slide').first().css('transform','translate3d(-10%,0px,0px)'); 
		         $(obj.ID_DOM+' .slide').first().css('-webkit-transform','translate3d(-10%,0px,0px)');*/

		     },1700);

		    }

			var index = $(obj.ID_DOM+' .slide').index( $(obj.ID_DOM+' .slide.mostrado') )+1;

	       $(obj.ID_DOM+' .comp-slider-multiple-nav').removeClass('activo');
	       $(obj.ID_DOM+' .comp-slider-multiple-nav:nth-child('+index+')').addClass('activo');

		    
		  },tiempo_slide);
	};





	this.inicializa_interfaz_sin_animacion=function(){
						 	
	    $(this.ID_DOM+' .slide').first().addClass('mostrado'); 
	    $(this.ID_DOM+' .slide_texto').first().addClass('mostrado'); 
	
	};

	this.pasar_siguiente_slide=function(){
		
	    if($(this.ID_DOM+' .slide.mostrado').next().html()){
	       var mostrado_aux=$(this.ID_DOM+' .slide.mostrado');
	       var mostrado_texto_aux=$(this.ID_DOM+' .slide_texto.mostrado');

	       $(this.ID_DOM+' .slide.mostrado').removeClass('mostrado');
	       $(this.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');

	       $(mostrado_aux).next().addClass('mostrado');
	       $(mostrado_texto_aux).next().addClass('mostrado');  
	   }else{

	     $(this.ID_DOM+' .slide.mostrado').removeClass('mostrado');
	     $(this.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');
	     $(this.ID_DOM+' .slide').first().addClass('mostrado'); 
	     $(this.ID_DOM+' .slide_texto').first().addClass('mostrado'); 

	    }
	};


	this.pasar_anterior_slide=function(){

	    if($(this.ID_DOM+' .slide.mostrado').prev().html()){
	       var mostrado_aux=$(this.ID_DOM+' .slide.mostrado');
	       var mostrado_texto_aux=$(this.ID_DOM+' .slide_texto.mostrado');

	       $(this.ID_DOM+' .slide.mostrado').removeClass('mostrado');
	       $(this.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');

	       $(mostrado_aux).prev().addClass('mostrado');
	       $(mostrado_texto_aux).prev().addClass('mostrado');  
	   }else{

	     $(this.ID_DOM+' .slide.mostrado').removeClass('mostrado');
	     $(this.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');
	     $(this.ID_DOM+' .slide').last().addClass('mostrado'); 
	     $(this.ID_DOM+' .slide_texto').last().addClass('mostrado'); 

	    }
	};



	this.pasar_a_slide=function(id_slide){
	
		clearInterval(this.interval_slide);

		var obj=this;

	       var mostrado_aux=$(obj.ID_DOM+' .slide.mostrado');

	       $(obj.ID_DOM+' .slide').removeClass('mostrado');
	       $(obj.ID_DOM+' .slide_texto').removeClass('mostrado');


			var delay=setInterval(function(){

			 	clearInterval(delay);
			    $(obj.ID_DOM+' .slide:nth-child('+id_slide+')').addClass('mostrado'); 

			    $(obj.ID_DOM+' .slide_texto:nth-child('+id_slide+')').addClass('mostrado'); 

			//deslizamiento del banner
			      var delay_left=setInterval(function(){
			          clearInterval(delay_left);


		        var  nuevo_left=($(obj.ID_DOM+' .mostrado img[class="img_fondo"]').width()-$(window).width())/3;

			         $(mostrado_aux).css('transform','translate3d(0px,0px,0px)'); 
			         $(mostrado_aux).css('-webkit-transform','translate3d(0px,0px,0px)');
			        /* $(obj.ID_DOM+' .slide.mostrado').css('transform','translate3d(-10%,0px,0px)'); 
			         $(obj.ID_DOM+' .slide.mostrado').css('-webkit-transform','translate3d(-10%,0px,0px)');
*/
			         $(obj.ID_DOM+' .slide.mostrado').css('transform','translate3d(-'+nuevo_left+'px,0px,0px)'); 
			         $(obj.ID_DOM+' .slide.mostrado').css('-webkit-transform','translate3d(-'+nuevo_left+'px,0px,0px)');

			     },1700);

		  
			},100);


	       $(obj.ID_DOM+' .comp-slider-multiple-nav').removeClass('activo');

	       $(obj.ID_DOM+' .comp-slider-multiple-nav:nth-child('+id_slide+')').addClass('activo');


		  this.ejecuta_intervalo_slide();



	     /*  var mostrado_aux=$(this.ID_DOM+' .slide.mostrado');
	       var mostrado_texto_aux=$(this.ID_DOM+' .slide_texto.mostrado');

	       $(this.ID_DOM+' .slide.mostrado').removeClass('mostrado');
	       $(this.ID_DOM+' .slide_texto.mostrado').removeClass('mostrado');

	       $(mostrado_aux).prev().addClass('mostrado');
	       $(mostrado_texto_aux).prev().addClass('mostrado');  */
	 
	};


}