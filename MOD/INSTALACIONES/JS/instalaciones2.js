var GL_INSTALACIONES= new Array();
var GL_CONT_INSTALACIONES=0;


$(window).on('scroll',function(){

	if( ($(window).scrollTop()>=$(document).height() - $(window).height() - $(window).height()/20) && ($(window).width()<=500  || $('#gl_admin').val()=='1' ) ){
	
		if($("#contenido-instalaciones-principal").css("display")=="block"){
			if(!mod_instalaciones.cargando_data){
				mod_instalaciones.get();
			}
		}
					
	}	
});

		
function OBJ_MOD_INSTALACIONES() {
 
    this.directorio=GL_DNS_POST+"/MOD/INSTALACIONES";

    if($('#gl_admin').val()=='1'){
    	this.admin=true;
    }else{
    	this.admin=false;
    }
    this.cargando_data=false;

    this.get=function(f){
		var objeto=this;

		this.cargando_data=true;
		$.ajax({
	        url: this.directorio+"/POST/get.php",
	        type: "POST",
	        datatype:'json',
	        data:{indice:GL_CONT_INSTALACIONES},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
				


			objeto.cargando_data=false;
				
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						respuesta=$.parseJSON(data);
						
						delay=0.2;
						for(var index in respuesta){


							if(!GL_INSTALACIONES[respuesta[index].id_noticia]){
								GL_INSTALACIONES[respuesta[index].id_noticia]=respuesta[index];
								GL_CONT_INSTALACIONES++;	

   								if(objeto.admin){
									html=objeto.get_html_instalacion(respuesta[index]);
									$('#content_instalaciones').append(html);
								}else{
										
									delay_aux=delay;
									numero='';
									if(delay_aux>=1){
										numero='_'+Math.floor(delay_aux);
										delay_aux=delay_aux%1;

									}
									if(delay_aux>0){
										delay_aux=Math.ceil(delay_aux*10);
										numero=numero+'_0'+delay_aux;
									}
									trans_delay='trans_delay'+numero;


									delay_aux=delay+0.4;

									numero='';
									if(delay_aux>=1){
										numero='_'+Math.floor(delay_aux);
										delay_aux=delay_aux%1;

									}
									if(delay_aux>0){
										delay_aux=Math.ceil(delay_aux*10);
										numero=numero+'_0'+delay_aux;
									}
									trans_delay_2='trans_delay'+numero;
								





									html_elemento='<elemento data-src="IMG/NOTICIAS/FONDOS/WEB/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" data-msrc="IMG/NOTICIAS/FONDOS/WEB/'+respuesta[index].id_img+'.'+respuesta[index].ext_img+'" data-espacio="1" data-titulo="" data-subtitulo="'+respuesta[index].titulo+'">'+

           								 '<ClassExtra DOMdestino="cg-elemento" class="trans_bezier_05 '+trans_delay+' anim-escala_0"></ClassExtra>'+
           								 '<AttrExtra DOMdestino="cg-elemento" atributos="data-id_noticia='+"'"+respuesta[index].id_noticia+"'"+ '"></AttrExtra>'+

								            '<ClassExtra DOMdestino="cg-elemento-titulo" class="responsive-fontsize trans_bezier_05 '+trans_delay_2+' anim-oculto-opacity anim-desplaza-arriba-50"></ClassExtra>'+
								            '<ClassExtra DOMdestino="cg-elemento-subtitulo" class="responsive-fontsize trans_bezier_05 '+trans_delay_2+' anim-oculto-opacity anim-desplaza-abajo-50"></ClassExtra>'+
																	'</elemento>';

									delay+=0.2;

           


									$('#portafolios .comp-galeria').append(html_elemento);/**/

								}						
								
							}					

						}
						if(typeof f == 'function'){
							f();
						}

						//al cargar un nuevo valor para la galería, se debe habilitr nuevamente el botón adelante
        				$('#home3 .control #adelante').removeClass('inhabilitado');

					}
					
				}
			}

		});
    };



    this.eliminar=function(id){
		objeto=this;

		$.ajax({
	        url: this.directorio+"/POST/eliminar.php",
	        type: "POST",
	        datatype:'json',
	        data:{id:id},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
			
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						
						
							GL_CONT_INSTALACIONES--;						
							delete(GL_INSTALACIONES[id]);
							
							$('#instalacion-'+id).remove();
						
					}
					
				}
			}

		});
    };




    this.get_html_instalacion=function(instalacion){


    	html_img='';

    	if(!fun_esblanco(instalacion.id_img)){

			html_img='<div class="seccion_izq">'+
				'<div class="trans_bezier_05 img_fondo"  onload="fun_accion_carga_img($(this))" style="background-image:url(IMG/NOTICIAS/FONDOS/WEB/'+instalacion.id_img+'.'+instalacion.ext_img+')" ></div>'+



			'</div>';

    	}
		


	  	html_instalacion= '<article id="instalacion-'+instalacion.id_noticia+'" data-id="'+instalacion.id_noticia+'" class="instalacion transition_04" data-item="-1">'+
			'<div class="sup">'+html_img+
			'</div>'+
			'<div class="info_nombre">'+
			instalacion.titulo+
			'</div>'+
			'<div class="info_desc">'+
			instalacion.descripcion+
			'</div>'+
			'<div class="inf">';

			if(this.admin){
				html_instalacion+='<input type="button" class="btn_eliminar" data-id_instalacion="'+instalacion.id_noticia+'" value="Eliminar"/><input type="button" class="btn_modificar" data-id_instalacion="'+instalacion.id_noticia+'" value="Modificar"/>';
			}

		html_instalacion+='</div></article>';
		
		return html_instalacion;
    };


    this.get_html_instalacion_web=function(instalacion,contador){

    	html_img='';    	

    	if(!fun_esblanco(instalacion.id_foto)){
    		if($(window).width()<600){

				html_img='<img class="trans_bezier_05" onload="fun_accion_carga_img($(this))" src="IMG/INSTALACIONES/'+instalacion.id_foto+'_m.'+instalacion.ext_foto+'">';
    		}else{

				html_img='<img class="trans_bezier_05" onload="fun_accion_carga_img($(this))" src="IMG/INSTALACIONES/'+instalacion.id_foto+'.'+instalacion.ext_foto+'">';

    		}
    	}
		
          
	  		html_instalacion= '<div id="imagen_'+contador+'" style="z-index:'+(301-contador)+';" class="imagen trans_bezier_1">'+html_img+'</div>';


		return html_instalacion;

    };

   
}

$(document).ready(function(){


	//if(mod_instalaciones.admin || $(window).width()<=500){
		
		mod_instalaciones=new OBJ_MOD_INSTALACIONES(false);

		mod_instalaciones.get();

	/*}else{
		mod_instalaciones.get(fun_define_catalogo);
	}*/

});


			
