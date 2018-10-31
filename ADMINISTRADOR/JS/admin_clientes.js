
var GL_IMG_TEMP_PREFORMA=new Array();
GL_IMG_TEMP_PREFORMA.id='';
GL_IMG_TEMP_PREFORMA.ext='';
GL_IMG_TEMP_PREFORMA.id_logo='';
GL_IMG_TEMP_PREFORMA.ext_logo='';


var GL_ID_PREFORMA_MODIF='';


$(document).ready(function(){

	$('#btn_subir_img_preforma').click(function(){

			var nombre_completo_temp_eliminar="";
					
					
			new AjaxUpload("div_subir_img_preforma", {
				
		        action: GL_DNS_POST+'/MOD/PREFORMAS/POST/subir_img_temp_preforma.php',
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
					$('#div_subir_img_preforma').css('pointer-events','none');
					$("#div_subir_img_preforma .cargando").show();										
				}
				},
		    	  onCancel: function(name, size, index, loaded, progress){
		            
		        },
				
				onComplete: function(file, response){
	
					$('#div_subir_img_preforma').css('pointer-events','auto');
					$("#div_subir_img_preforma .cargando").hide();	
					
					if(response!="error archivo" && response!="no extension" && response!="no tamano"){
						
						
						respuesta=$.parseJSON(response);
						GL_IMG_TEMP_PREFORMA.id=respuesta.id_img;
						GL_IMG_TEMP_PREFORMA.ext=respuesta.ext_img;

						$('#div_nueva_preforma #img_previa img').attr('src',GL_DNS_IMG+'/IMG/PREFORMAS/TEMP/'+respuesta.id_img+'.'+respuesta.ext_img);
						$('#div_nueva_preforma #btn_subir_img_preforma').addClass('btn_subir_img_minimizado');
						$('#div_nueva_preforma #div_subir_foto').addClass('div_subir_foto_reducido');
							
					}else{
						
					}
					
					
					
					
				}	
			});	
			
			$("#AjaxUpload_div_subir_img_preforma").click();
			
	});


	$('#btn_publicar_preforma').click(function(){

		preforma=new Array();
		preforma.titulo=$('#nueva_preforma-titulo').val();
		preforma.subtitulo=$('#nueva_preforma-subtitulo').val();
		preforma.texto=$('#nueva_preforma-texto').val();
		preforma.id_img=GL_IMG_TEMP_PREFORMA.id;
		preforma.ext_img=GL_IMG_TEMP_PREFORMA.ext;

		mod_preformas.agregar(preforma);
	});


	$('#btn_modificar_preforma').click(function(){
		preforma=new Array();
		preforma.id=GL_ID_PREFORMA_MODIF;
		preforma.titulo=$('#nueva_preforma-titulo').val();
		preforma.subtitulo=$('#nueva_preforma-subtitulo').val();
		preforma.texto=$('#nueva_preforma-texto').val();
		preforma.id_img=GL_IMG_TEMP_PREFORMA.id;
		preforma.ext_img=GL_IMG_TEMP_PREFORMA.ext;
		
		mod_preformas.modificar(preforma);
	});


	$('body').on('click','.preforma .btn_modificar',function(){
		id=$(this).data('id_preforma');
		GL_ID_PREFORMA_MODIF=id;

		$('#nueva_preforma-titulo').val(fun_invierte_tratamiento_carac_esp(GL_PREFORMAS[id].titulo));
		$('#nueva_preforma-subtitulo').val(fun_invierte_tratamiento_carac_esp(GL_PREFORMAS[id].subtitulo));
		$('#nueva_preforma-texto').val(fun_invierte_tratamiento_carac_esp(GL_PREFORMAS[id].texto));		

		GL_IMG_TEMP_PREFORMA.id=GL_PREFORMAS[id].id_img;
		GL_IMG_TEMP_PREFORMA.ext=GL_PREFORMAS[id].ext_img;	

		if(!fun_esblanco(GL_PREFORMAS[id].id_img)){

		
			$('#div_nueva_preforma #img_previa img').attr('src',GL_DNS_IMG+'/IMG/PREFORMAS/'+GL_PREFORMAS[id].id_img+'.'+GL_PREFORMAS[id].ext_img);
			$('#div_nueva_preforma #btn_subir_img_preforma').addClass('btn_subir_img_minimizado');
			$('#div_nueva_preforma #div_subir_foto').addClass('div_subir_foto_reducido');

		}
								
		$('html,body').animate({scrollTop: 0},'slow');

		$('#btn_publicar_preforma').hide();
		$('#btn_modificar_preforma').show();		
		$('#div_nueva_preforma #btn_cancelar_modificar').show();

		$('#ttl_nueva_preforma').hide();
		$('#ttl_modificar_preforma').show();
	});


	$('#div_nueva_preforma #btn_cancelar_modificar').click(function(){

		$('#btn_publicar_preforma').show();

		$('#btn_modificar_preforma').hide();
		$('#div_nueva_preforma #btn_cancelar_modificar').hide();

		$('#ttl_nueva_preforma').show();
		$('#ttl_modificar_preforma').hide();


			GL_IMG_TEMP_PREFORMA.id='';
			GL_IMG_TEMP_PREFORMA.ext='';

			$('#div_nueva_preforma #img_previa img').attr('src','');
			$('#div_nueva_preforma #btn_subir_img_preforma').removeClass('btn_subir_img_minimizado');

			$('#div_nueva_preforma #div_subir_foto').removeClass('div_subir_foto_reducido');

			$('#nueva_preforma-titulo').val('');
			$('#nueva_preforma-subtitulo').val('');
			$('#nueva_preforma-texto').val('');
	});



	$('body').on('click','.preforma .btn_eliminar',function(){
		mod_preformas.eliminar($(this).data('id_preforma'));
	});
});

