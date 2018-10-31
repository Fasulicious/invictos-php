var GL_USUARIOS= new Array();


function OBJ_MOD_USUARIOS() {
 
    this.directorio=GL_DNS_POST+"/MOD/USUARIOS";

    this.get_usuarios=function(){
		var objeto=this;


		$.ajax({
	        url: this.directorio+"/POST/get_usuarios.php",
	        type: "POST",
	        datatype:'json',
	        data:{},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
			
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						respuesta=$.parseJSON(data);
						for(var index in respuesta){
							GL_USUARIOS[respuesta[index].username]=respuesta[index];
							html_usuario=objeto.get_html_usuario(respuesta[index]);	
							
							$('#content_usuarios').append(html_usuario);
						}
					}
					
				}
			}

		});
    };

    this.agregar_usuario=function(usuario){


    	$('#div_nuevo_usuario #campo-username').removeClass('campo_aviso');
    	$('#div_nuevo_usuario #campo-password').removeClass('campo_aviso');


		if(!fun_esblanco(usuario.username) && !fun_esblanco(usuario.password)){

		objeto=this;

		$.ajax({
	        url: this.directorio+"/POST/set_usuario.php",
	        type: "POST",
	        datatype:'json',
	        data:{username:usuario.username,password:usuario.password},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
			
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						
							GL_USUARIOS[usuario.username]=usuario;
							html_usuario=objeto.get_html_usuario(usuario);	
							
							$('#content_usuarios').prepend(html_usuario);

							
							$('#div_nuevo_usuario #btn_cancelar_modificar').click();

																			
						
					}
					
				}
			}

		});
	}else{

			if(fun_esblanco(usuario.username)){
    			$('#div_nuevo_usuario #campo-username').addClass('campo_aviso');
			}
			if(fun_esblanco(usuario.password)){
    			$('#div_nuevo_usuario #campo-password').addClass('campo_aviso');
			}
	}
    };


    this.modificar_usuario=function(usuario){

    	$('#div_nuevo_usuario #campo-username').removeClass('campo_aviso');
    	$('#div_nuevo_usuario #campo-password').removeClass('campo_aviso');


		if(!fun_esblanco(usuario.username) && !fun_esblanco(usuario.password)){

		objeto=this;

		$.ajax({
	        url: this.directorio+"/POST/modificar_usuario.php",
	        type: "POST",
	        datatype:'json',
	        data:{username:usuario.username,password:usuario.password},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
			
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						
						
							GL_USUARIOS[GL_ID_USUARIO_MODIF]=usuario;
							html_usuario=objeto.get_html_usuario(usuario);	
							
							$('#usuario-'+GL_ID_USUARIO_MODIF).replaceWith(html_usuario);

							GL_ID_USUARIO_MODIF='';
														
							$('#div_nuevo_usuario #btn_cancelar_modificar').click();
						
					}
					
				}
			}

		});
	}else{

			if(fun_esblanco(usuario.username)){
    			$('#div_nuevo_usuario #campo-username').addClass('campo_aviso');
			}
			if(fun_esblanco(usuario.password)){
    			$('#div_nuevo_usuario #campo-password').addClass('campo_aviso');
			}
	}
    };

    this.eliminar_usuario=function(username){
		objeto=this;

		$.ajax({
	        url: this.directorio+"/POST/eliminar_usuario.php",
	        type: "POST",
	        datatype:'json',
	        data:{username:username},
	        async:true,
	        beforeSend: function(objeto){
	        	
	        },	        
			success: function(data){
			
				if(data=="mysql_no"){
					FMSG_ERROR_CONEXION();
				}else{

					if(data!='no data'){
						
						
							delete(GL_USUARIOS[username]);
							
							$('#usuario-'+username).slideUp(400);

							var delay=setInterval(function(){

								$('#usuario-'+username).remove();
							},500);

						
					}
					
				}
			}

		});
    };

    this.get_html_usuario=function(usuario){
    	

	  	html_usuario= '<div id="usuario-'+usuario.username+'" class="usuario transition_04">'+
						
				'<div class="def">'+
					'<div class="username">'+usuario.username+'</div>'+
					'<div class="password">'+usuario.password+'</div>'+
				'</div>'+
			'<div class="inf">'+
			'<input type="button" class="btn_eliminar" data-id_usuario="'+usuario.username+'" value="Eliminar"/><input type="button" class="btn_modificar" data-id_usuario="'+usuario.username+'" value="Modificar"/>'+
			'</div></div>';
		return html_usuario;

    };
}

$(document).ready(function(){

	mod_usuarios=new OBJ_MOD_USUARIOS(false);
	mod_usuarios.get_usuarios();



});


			
