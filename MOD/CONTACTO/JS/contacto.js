
var GL_CONTACTO= new Array();
var GL_CONT_CONTACTO=0;
/*
$(window).on('scroll',function(){

	if( ($(window).scrollTop()>=$(document).height() - $(window).height() - $(window).height()/20) && ($(window).width()<=500  || $('#gl_admin').val()=='1' ) ){
	
		if($("#contenido-contacto-principal").css("display")=="block"){
			if(!mod_contacto.cargando_data){
				mod_contacto.get();
			}
		}
					
	}	
});*/

		
function OBJ_MOD_CONTACTO() {
 
    this.directorio=GL_DNS_POST+"/MOD/CONTACTO";

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
	        data:{},
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

						GL_CONTACTO[respuesta.id]=new Array();
						GL_CONTACTO[respuesta.id]=respuesta;
						
						GL_CONT_CONTACTO++;	

							if(objeto.admin){
							$('#edit-direccion').val(respuesta.direccion);
							$('#edit-telefono').val(respuesta.telefono);
							$('#edit-email').val(respuesta.email);
						}else{
							fun_llenar_info_contacto();
						}	
						if(typeof f == 'function'){
							f();
						}
					}
					
				}
			}

		});
    };


    this.modificar=function(contacto){


		$('#div_nuevo_contacto #campo-direccion').removeClass('campo_aviso');
		$('#div_nuevo_contacto #campo-telefono').removeClass('campo_aviso');
		$('#div_nuevo_contacto #campo-email').removeClass('campo_aviso');


		if(!fun_esblanco(contacto.direccion)  && !fun_esblanco(contacto.telefono) && !fun_esblanco(contacto.email) ){

			objeto=this;


			$.ajax({
		        url: this.directorio+"/POST/modificar.php",
		        type: "POST",
		        datatype:'json',
		        data:{direccion:fun_tratamiento_caracteres_especiales(contacto.direccion),telefono:fun_tratamiento_caracteres_especiales(contacto.telefono),email:fun_tratamiento_caracteres_especiales(contacto.email)},
		        async:true,
		        beforeSend: function(objeto){
		        	
		        },	        
				success: function(data){
			
					if(data=="mysql_no"){
						FMSG_ERROR_CONEXION();
					}else{

						if(data!='no data'){
							
							$('#msg_datos_contacto_guardados').removeClass('sin_mostrar');

							GL_DELAY_MSG_CONTACTO=setInterval(function(){
								clearInterval(GL_DELAY_MSG_CONTACTO);
								$('#msg_datos_contacto_guardados').addClass('sin_mostrar');
							},3000);

							
						
						}
						
					}
				}

			});
		}else{
			if(fun_esblanco(contacto.direccion)){
				$('#div_nuevo_contacto #campo-direccion').addClass('campo_aviso');
			}
			if(fun_esblanco(contacto.telefono)){
				$('#div_nuevo_contacto #campo-telefono').addClass('campo_aviso');
			}
			if(fun_esblanco(contacto.email)){
				$('#div_nuevo_contacto #campo-email').addClass('campo_aviso');
			}
		}
    };

   
}

$(document).ready(function(){

    if($('#gl_admin').val()=='1'){

		mod_contacto=new OBJ_MOD_CONTACTO(false);
		mod_contacto.get();
	}

});


			
