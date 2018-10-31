

$(window).scroll(function(){

	GL_COMPONENTE_ANIMACION.verifica_componente_ventana();
	
	
});


function OBJ_INICIALIZA_ANIMACION(){
	
	this.mousewheel_ejecutando=false;
	this.interval_mousewheel;

	this.cancel_scroll=false;

	this.ini=function(){
		this.domready();
	};


	this.domready=function(){

		GL_COMPONENTE_ANIMACION.verifica_componente_ventana();

		var obj_aux=this;
			

		$('body').on('mousewheel','.cancela-body-mousewheel',function(event){
			GL_COMPONENTE_ANIMACION.cancel_scroll=true;
		});


		 $('html').on('mousewheel','body',function(event){
	

			if(!obj_aux.cancel_scroll){
				
		    if(!obj_aux.mousewheel_ejecutando){
			if($('body').css('overflow')!='hidden' && $('.scroll_uniforme').length>1){



		  if($(window).width()>650 ){




		      obj_aux.mousewheel_ejecutando=true;
		      var intDelta;
		        if(event.originalEvent.wheelDelta){
		          iniDelta=event.originalEvent.wheelDelta;
		        }else{    
		          iniDelta=-1*(event.originalEvent.detail);
		        }


		 		var scroll_top=((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop);
	 		

	 			var scroll_proximo=0;
	 			var limite=true;

		      if(iniDelta>0){

			      	id="";

						limite=false;
					$('.scroll_uniforme').each(function(){

						if($(this).parents('.columna-pagina.oculto').length == 0) {

							if($(this).offset().top<scroll_top && Math.abs($(this).offset().top-scroll_top)>2){		

								scroll_proximo=$(this).offset().top;
								id=$(this).data('area');

							}else{
								return false;
							}

						}
					});

		      		if(id=="inicio"){
		        		//$('.menu-principal li').removeClass('activo');
		      		}else{
		        		//$('.menu-principal li[data-area="'+id+'"]').click();
		      		}
		      }else{


		      	id="";

				$('.scroll_uniforme').each(function(){

					if($(this).parents('.columna-pagina.oculto').length == 0) {
						if($(this).offset().top>scroll_top){
							
							if(Math.abs($(this).offset().top-scroll_top)>2){

								limite=false;

								scroll_proximo=$(this).offset().top;
								id=$(this).data('area');
				      		 	return false;
							}
						}
					}
				});

		        	//$('.menu-principal li[data-area="'+id+'"]').click();

		      }


		      if(limite){

		      	scroll_proximo=$(document).height()-$(window).height();

		      }
/*
		      scroll_proximo=scroll_proximo;

		      if(scroll_proximo==0 && iniDelta<0){
		      	
		      }
*/
		



		      	if(scroll_proximo-40>scroll_top+$(window).height()){

		      		scroll_siguiente=scroll_top+parseInt($(window).height()*3/4);
		      		scroll_optimo=scroll_proximo-$(window).height();

		      		if(scroll_optimo<scroll_siguiente){

		      			$('html,body').animate({scrollTop:  scroll_optimo},600);
		      		}else{

		      			$('html,body').animate({scrollTop: scroll_siguiente },600);
		      		}

		      	}else{	      		


		      		if(scroll_proximo+40<scroll_top-$(window).height()){

		      			scroll_siguiente=scroll_top-parseInt($(window).height());
        
			      		if(scroll_proximo<scroll_siguiente){

			      			$('html,body').animate({scrollTop:  scroll_siguiente},600);
			      		}else{

			      			$('html,body').animate({scrollTop: scroll_proximo },600);
			      		}


		      		}else{
		      			$('html,body').animate({scrollTop: scroll_proximo},600);

		      		}
		      	}


		      
		      obj_aux.interval_mousewheel=setInterval(function(){
		        clearInterval(obj_aux.interval_mousewheel);
		        obj_aux.mousewheel_ejecutando=false;
		      },610);

		      return false;

		    }

			}

		  }
		  
			}

			obj_aux.cancel_scroll=false;

		 });




		
	};




	this.verifica_componente_ventana=function(){
		
		$('.comp-animacion-ini').each(function(){

			if(!$(this).hasClass('manual')){


				if(typeof $(this).data('fraccion_altura')=='string' || typeof $(this).data('fraccion_altura')=='number'){
					fraccion=$(this).data('fraccion_altura');
				}else{
					fraccion=6;
				}

			if($(this).parents('.columna-pagina.oculto').length == 0) {
				
				
				var valor_top=$(this).offset().top;

			//	alert($(this).attr('class')+' '+valor_top+' '+((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop)+$(window).height()/6);

				if(((document.body.scrollTop)? document.body.scrollTop :document.documentElement.scrollTop)+$(window).height()/fraccion>= valor_top){	   	

					var tiempo_delay=0;
					if($(this).data('animaciondelay')){
						tiempo_delay=$(this).data('animaciondelay');
					}	
					
					
					var delay=setInterval(function(obj){
						clearInterval(delay);
						$(obj).removeClass('comp-animacion-ini');
					},tiempo_delay*1000,$(this));
					
			  	}
			}
			}

		});


	};



	this.inicia=function(){

	};
	
	this.carga_imagenes=function(){

	};

	this.resize=function(){
		
	};

}

