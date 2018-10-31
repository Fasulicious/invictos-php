
var GL_IMG_TEMP_OFRECEMOS=new Array();
GL_IMG_TEMP_OFRECEMOS.id='';
GL_IMG_TEMP_OFRECEMOS.ext='';
GL_IMG_TEMP_OFRECEMOS.id_logo='';
GL_IMG_TEMP_OFRECEMOS.ext_logo='';


var GL_DELAY_MSG;

var GL_ID_OFRECEMOS_MODIF='';


$(document).ready(function(){

	$('#btn_subir_img_ofrecemos').click(function(){

			var nombre_completo_temp_eliminar="";
								
			new AjaxUpload("div_subir_img_ofrecemos", {
				
		        action: GL_DNS_POST+'/MOD/OFRECEMOS/POST/subir_img_temp.php',
		        data:{nombre_completo_temp_eliminar:nombre_completo_temp_eliminar},
		        
			        type: "POST",
			        async:true,
			        datatype:'json',
		        
		        onSubmit : function(file , ext){

		        	//("hola");
				if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
					// extensiones permitidas
					
					// cancela upload
					return false;
				} else {
					$('#div_subir_img_ofrecemos').css('pointer-events','none');
					$("#div_subir_img_ofrecemos .cargando").show();										
				}
				},
		    	  onCancel: function(name, size, index, loaded, progress){
		            
		        },
				
				onComplete: function(file, response){
			
					$('#div_subir_img_ofrecemos').css('pointer-events','auto');
					$("#div_subir_img_ofrecemos .cargando").hide();	
					
					if(response!="error archivo" && response!="no extension" && response!="no tamano"){
						
						
						respuesta=$.parseJSON(response);
						GL_IMG_TEMP_OFRECEMOS.id=respuesta.id_img;
						GL_IMG_TEMP_OFRECEMOS.ext=respuesta.ext_img;

						$('#div_nueva_ofrecemos #img_previa img').attr('src',GL_DNS_IMG+'/IMG/OFRECEMOS/TEMP/'+respuesta.id_img+'.'+respuesta.ext_img);
						$('#div_nueva_ofrecemos #btn_subir_img_ofrecemos').addClass('btn_subir_img_minimizado');
						$('#div_nueva_ofrecemos #div_subir_foto').addClass('div_subir_foto_reducido');
							
					}else{
						
					}
					
					
					
					
				}	
			});	
			
			$("#AjaxUpload_div_subir_img_ofrecemos").click();
			
	});


	$('#btn_publicar_ofrecemos').click(function(){

		ofrecemos=new Array();
		/*ofrecemos.titulo=$('#nueva_ofrecemos-titulo').val();
		ofrecemos.subtitulo=$('#nueva_ofrecemos-subtitulo').val();*/
		ofrecemos.texto=$('#nueva_ofrecemos-texto').val();
		ofrecemos.id_foto=GL_IMG_TEMP_OFRECEMOS.id;
		ofrecemos.ext_foto=GL_IMG_TEMP_OFRECEMOS.ext;

		mod_ofrecemos.agregar(ofrecemos);
	});


	$('#btn_modificar_ofrecemos').click(function(){
		ofrecemos=new Array();
		ofrecemos.id=GL_ID_OFRECEMOS_MODIF;
		/*
		ofrecemos.subtitulo=$('#nueva_ofrecemos-subtitulo').val();*/
		ofrecemos.titulo=$('#nueva_ofrecemos-titulo').val();
		ofrecemos.texto=$('#nueva_ofrecemos-texto').val();
		ofrecemos.id_img=GL_IMG_TEMP_OFRECEMOS.id;
		ofrecemos.ext_img=GL_IMG_TEMP_OFRECEMOS.ext;
			

		texto_lista=$('#nueva_ofrecemos-lista').val();		
		array_parrafos=texto_lista.split('*');

		ofrecemos.lista='';
		if(array_parrafos.length>1){
			cont=1;
			while(array_parrafos[cont]){

				sub_parrafos=array_parrafos[cont].split('-');

					html_sub_parrafos='';
				if(sub_parrafos.length>1){
					cont2=1;

					while(cont2<sub_parrafos.length){
						if(sub_parrafos[cont2]){
							html_sub_parrafos+=sub_parrafos[cont2];	
						}		
						cont2++;				
					}
				}

				if(cont==1){
					ofrecemos.lista+=fun_tratamiento_caracteres_especiales(sub_parrafos[0])+'{'+fun_tratamiento_caracteres_especiales(html_sub_parrafos);
				}else{
					ofrecemos.lista+='}'+fun_tratamiento_caracteres_especiales(sub_parrafos[0])+'{'+fun_tratamiento_caracteres_especiales(html_sub_parrafos);
				}
				cont++;

			}
		}


		mod_ofrecemos.modificar(ofrecemos);
	});


	$('body').on('click','.ofrecemos .btn_modificar',function(){
		$('#div_nueva_ofrecemos').removeClass('oculto');

		clearInterval(GL_DELAY_MSG);
		$('#msg_datos_guardados').addClass('sin_mostrar');

		id=$(this).data('id_ofrecemos');
		GL_ID_OFRECEMOS_MODIF=id;
/*
		$('#nueva_ofrecemos-subtitulo').val(fun_invierte_tratamiento_carac_esp(GL_OFRECEMOS[id].subtitulo));*/
		$('#nueva_ofrecemos-titulo').val(fun_invierte_tratamiento_carac_esp(GL_OFRECEMOS[id].datos.titulo));
		$('#nueva_ofrecemos-texto').val(fun_invierte_tratamiento_carac_esp(GL_OFRECEMOS[id].datos.descripcion));		



	    lista='';
	    for(var index in GL_OFRECEMOS[id].caracteristicas){

	      	if(GL_OFRECEMOS[id].caracteristicas[index].item_titulo==1){
	      		
	        	lista+='* '+GL_OFRECEMOS[id].caracteristicas[index].texto;
	      	}else{
	        	lista+='- '+GL_OFRECEMOS[id].caracteristicas[index].texto;

	      	}
	    }

		$('#nueva_ofrecemos-lista').val(lista);	


		GL_IMG_TEMP_OFRECEMOS.id=GL_OFRECEMOS[id].datos.id_img;
		GL_IMG_TEMP_OFRECEMOS.ext=GL_OFRECEMOS[id].datos.ext_img;	

		if(!fun_esblanco(GL_OFRECEMOS[id].datos.id_img)){

		
			$('#div_nueva_ofrecemos #img_previa img').attr('src',GL_DNS_IMG+'/IMG/OFRECEMOS/'+GL_OFRECEMOS[id].datos.id_img+'.'+GL_OFRECEMOS[id].datos.ext_img);
			$('#div_nueva_ofrecemos #btn_subir_img_ofrecemos').addClass('btn_subir_img_minimizado');
			$('#div_nueva_ofrecemos #div_subir_foto').addClass('div_subir_foto_reducido');

		}
								
		$('html,body').animate({scrollTop: 0},'slow');

		$('#btn_publicar_ofrecemos').hide();
		$('#btn_modificar_ofrecemos').show();		
		$('#div_nueva_ofrecemos #btn_cancelar_modificar').show();

		$('#ttl_nueva_ofrecemos').hide();
		$('#ttl_modificar_ofrecemos').show();
	});


	$('#div_nueva_ofrecemos #btn_cancelar_modificar').click(function(){
$('#div_nueva_ofrecemos').addClass('oculto');
		$('#btn_publicar_ofrecemos').show();

		$('#btn_modificar_ofrecemos').hide();
		$('#div_nueva_ofrecemos #btn_cancelar_modificar').hide();

		$('#ttl_nueva_ofrecemos').show();
		$('#ttl_modificar_ofrecemos').hide();


			GL_IMG_TEMP_OFRECEMOS.id='';
			GL_IMG_TEMP_OFRECEMOS.ext='';

			$('#div_nueva_ofrecemos #img_previa img').remove('');
			$('#div_nueva_ofrecemos #img_previa').append('<img  class="trans_bezier_05" onload="fun_accion_carga_img($(this))" src="">');
			$('#div_nueva_ofrecemos #btn_subir_img_ofrecemos').removeClass('btn_subir_img_minimizado');

			$('#div_nueva_ofrecemos #div_subir_foto').removeClass('div_subir_foto_reducido');

			$('#nueva_ofrecemos-titulo').val('');
			$('#nueva_ofrecemos-subtitulo').val('');
			$('#nueva_ofrecemos-texto').val('');
	});



});

