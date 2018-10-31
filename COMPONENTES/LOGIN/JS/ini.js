function fun_cerrar_sesion(){

	$.ajax({
        url: "COMPONENTES/LOGIN/POST/close.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{},
        async:true,
        beforeSend: 
		function(objeto){
        			
        },
        
		success: function(data){
	
			parent.document.location=''; 
			
		}
		        
	});		

}


function fun_activar_cuenta(id,cod){


	$.ajax({
        url: "COMPONENTES/LOGIN/POST/activar_cuenta.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{id_user:id,codigo_activacion:cod},
        async:true,
        beforeSend: 
		function(objeto){        	
        			
        },
        
		success: function(data){
		


			parent.document.location=''; 
				
			
				
			
		}
		        
	});		

}




function fun_solicitar_codigo_activacion(){

	$.ajax({
        url: "COMPONENTES/LOGIN/POST/solicitar_codigo.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{},
        async:true,
        beforeSend: 
		function(objeto){        	
        			
        },
        
		success: function(data){
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();						
			}else{
				if(data=='enviado'){
					try{
						fun_accion_despues_solicitar_codigo();
					}catch(e){

					}
				}
			}
		}
		        
	});		

}











$(window).resize(function(){
	
	for(var index in GL_COMPONENTE_LOGIN.ARRAY_LOGINS){
		GL_COMPONENTE_LOGIN.ARRAY_LOGINS[index].resize();
	}
	
});

function OBJ_INICIALIZA_LOGIN(){


	this.CONT_LOGINS=0;
	this.ARRAY_LOGINS=new Array();


	this.ini=function(){
		var obj_login=this;

		$('.comp-login').each(function(){
			
				html_login_fb='';
				btn_atras_seleccion='';
				ocultar_formulario='';

				var html_componente=
				'<div class="comp-login-contenedor_secciones">'+
					
					'<div class="comp-login-seccion" data-seccion="login">'+
						'<div class="comp-login-titulo">'+
							$(this).find('seccion[id="login"]').attr('titulo')+
						'</div>'+
						'<div class="comp-login-descripcion">'+
							$(this).find('seccion[id="login"]').attr('descripcion')+
						'</div>'+
						'<div class="comp-login-formulario">'+
							'<div class="comp-login-btn_ingresar_facebook">'+
								'Ingresa con Facebook'+
							'</div>'+
							'<div class="div_o">o</div>'+
							'<div class="comp-login-text">Ingresa con tu cuenta de Email</div>'+

							'<form method="post"  enctype="multipart/form-data" accept-charset="UTF-8">'+

								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="text" id="campo-login-correo" name="correo" value="" placeholder="Correo electr&oacute;nico" />'+	
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+

								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="password" id="campo-login-password" name="password" value="" placeholder="Contrase&ntilde;a" />'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+

							'</form>'+
							'<div class="comp-login-div-switch"><div class="comp-login-btn-switch" data-seccion="recuperacion">&iquest;Olvidaste tu contrase&ntilde;a?'+
							'</div></div>'+
							'<div class="comp-login-btn-enviar">'+
								'Ingresar'+
							'</div>'+

							'<div class="comp-login-div-switch">&iquest;No tienes una cuenta? <span class="comp-login-btn-switch" data-seccion="registro">Reg&iacute;strate</span>'+
							'</div>'+
						'</div>'+
					'</div>'+

					'<div class="comp-login-seccion" data-seccion="registro">'+
						
						'<div class="comp-login-titulo">'+
							$(this).find('seccion[id="registro"]').attr('titulo')+
						'</div>'+
						'<div class="comp-login-descripcion">'+
							$(this).find('seccion[id="registro"]').attr('descripcion')+
						'</div>'+
						'<div class="comp-login-formulario">'+
							'<div class="comp-login-btn_ingresar_facebook">'+
								'Reg&iacute;strate con Facebook'+
							'</div>'+
							'<div class="div_o" style="margin: 3px;">o</div>'+
							'<div class="comp-login-text">Reg&iacute;strate usando tu cuenta de Email</div>'+
							'<form method="post"  enctype="multipart/form-data" accept-charset="UTF-8">'+

								'<div class="comp-login-campo comp-login-campo_input comp-login-campo-checks">'+
									'<div class="comp-login-campo_radio prof"><span class="comp-login-radiobutton select"></span> <span class="texto">Profesor</span><input style="display:none;" type="radio" name="tipo" value="P" checked/></div>'+
									'<div class="comp-login-campo_radio alumn"><span class="comp-login-radiobutton"></span> <span class="texto">Estudiante</span><input style="display:none;" type="radio" name="tipo" value="A"/></div>'+
								'</div>'+
								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="text" name="nombres" value="" placeholder="Nombres"/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+
								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="text" name="apellidos" value="" placeholder="Apellidos"/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+

								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="text" name="correo" value="" placeholder="Correo electr&oacute;nico"/>'+				
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+
								
								'<div class="comp-gestion-elemento comp-login-campo comp-login-campo_input know norm" data-titulo="" data-titulo_update="Editar conocimiento" data-elemento="conocimiento" data-accion="insert" data-gestion="todo" data-espaciototal="9" style="border: 0px;">' +
					
					'<bloque data-espacio="9">' +
					'<campo data-iddom="skill_id" data-nombre="ID Skill:"  data-campo="skill_id" data-tipo="hidden">' +  
		            
		          '</campo>' +
		          '<campo data-nombre="¿Qué enseñas?" data-iddom="input_mostrar_conocimiento" data-update="true" data-espacio="6" data-campo="skill" data-tipo="text">' +		            
		          '</campo>' +

		          '<campo data-campo="skill_level" data-nombre="Nivel:" data-tipo="select" data-espacio="3" data-select="1">' +
		            '<div data-opcion="1"  data-value="1"></div>' +
 		            '<div data-opcion="2"  data-value="2"></div>' +  
		            '<div data-opcion="3"  data-value="3"></div>' +  
		            '<div data-opcion="4"  data-value="4"></div>' +  
		            '<div data-opcion="5"  data-value="5"></div>' +  
		            '<div data-opcion="6"  data-value="6"></div>' +  
		            '<div data-opcion="7"  data-value="7"></div>' +  
		            '<div data-opcion="8"  data-value="8"></div>' +  
		            '<div data-opcion="9"  data-value="9"></div>' +  
		            '<div data-opcion="10"  data-value="10"></div>' +     
		          '</campo>' +

					'</bloque>' +
		          
		        '</div>' +
																
								'<div class="comp-login-campo comp-login-campo_input nivel oculto" style="border: 0px;">' +
						         	'<select id="nivel" name="ed_level" class="comp-login-campo comp-login-campo_input nivel oculto" style="font-size: 12px; width: 100%; margin-bottom: 0px; font-family: OpenSansRegular; color: rgba(0, 0, 0, 0.63); height: 35px;">' +
						         		'<option value="0">¿Qué estudias? (Grado de estudios)</option>' +					         		
						         		'<option value="2">Escuela</option>' +
						         		'<option value="3">Preparatoria</option>' +
						         		'<option value="4">Instituto</option>' +
						         		'<option value="5">Universidad</option>' +
						         	'</select>' +	
						         	'<span class="error-texto oculto"></span>'+
								'</div>' +
								
								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input id="comp-login-ciudad" type="text" name="ciudad" value="" placeholder="¿Dónde? (Ciudad o distrito)"/>'+
				                  	
									'<input class="comp-login-input-ciudad" type="hidden" name="longitud" value=""/>'+
									'<input class="comp-login-input-ciudad" type="hidden" name="latitud" value=""/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+

								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="password" name="password" value="" placeholder="Contrase&ntilde;a"/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+
								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="password" name="confirm" value="" placeholder="Confirmar Contrase&ntilde;a"/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+ 
								'<div class="comp-login-campo comp-login-campo_input" style="font-size: 13px; border: 0px;">'+
								'<input type="checkbox" name="terms" value="true" style="width: 20px;">'+ 
 									'<a href="http://www.invictos.la/terminos" target="_blank">Acepto los Términos y Condiciones</a><br>'+
 							'<span class="error-texto oculto"></span>'+
								'</div>'+

							'</form>'+

							'<div class="comp-login-btn-enviar">'+
								'Reg&iacute;strate'+
							'</div>'+

							'<div class="comp-login-div-switch">&iquest;Ya tienes una cuenta? <span class="comp-login-btn-switch" data-seccion="login">Inicia sesi&oacute;n</span>'+
							'</div>'+
						'</div>'+

					'</div>'+

					'<div class="comp-login-seccion" data-seccion="recuperacion">'+
						'<div class="comp-login-titulo">'+
							$(this).find('seccion[id="recuperacion"]').attr('titulo')+
						'</div>'+
						'<div class="comp-login-descripcion">'+
							$(this).find('seccion[id="recuperacion"]').attr('descripcion')+
						'</div>'+
						'<div class="comp-login-formulario">'+

							'<form method="post"  enctype="multipart/form-data" accept-charset="UTF-8">'+


								'<div class="comp-login-campo comp-login-campo_input">'+
									'<input type="text" name="correo" value="" placeholder="Correo electr&oacute;nico"/>'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+

								'<div class="comp-login-campo comp-login-campo_input oculto">'+
									'<input type="text" />'+
				                  	'<span class="error-texto oculto"></span>'+
								'</div>'+


							'</form>'+

							'<div  class="comp-login-btn-enviar">'+
								'Recuperar Contrase&ntilde;a'+
							'</div>'+

							'<div class="comp-login-div-switch">&iquest;Recordaste tu contrase&ntilde;a? <span class="comp-login-btn-switch" data-seccion="login">Inicia Sesi&oacute;n</span>'+
							'</div>'+
						'</div>'+
					'</div>'+

				'</div>';



				html_login='<div id="comp-login-'+obj_login.CONT_LOGINS+'" class="comp-login-content" data-id="'+obj_login.CONT_LOGINS+'">'+
						html_componente+						
		                '</div>'+
		              '</div>';



				$(this).html(html_login);

				obj_login.ARRAY_LOGINS[obj_login.CONT_LOGINS]=new OBJ_LOGIN('#comp-login-'+obj_login.CONT_LOGINS);

				obj_login.ARRAY_LOGINS[obj_login.CONT_LOGINS].url_login=$(this).data('urllogin');
					
			
			obj_login.CONT_LOGINS++;
		});

			
		for(var i=0;i<obj_login.CONT_LOGINS;i++){	
			obj_login.ARRAY_LOGINS[i].inicia();	
		}

				
		//inicializa imagenes
		//inicializa imagenes
		//inicializa imagenes
		if(GL_COMPONENTE_CARGANDO){

			GL_COMPONENTE_CARGANDO.carga_imagenes('login',this);
			GL_COMPONENTE_CARGANDO.asignar_fondos_css_img();
		}
	};



	this.domready=function(){
		
		if(GL_URL_PARAMS['id'] && GL_URL_PARAMS['cod']){
			fun_activar_cuenta(GL_URL_PARAMS['id'],GL_URL_PARAMS['cod']);
		}


		$('body').on('click','.comp-login .comp-login-btn-switch',function(){			
			$(this).parents('.comp-login').attr('data-estado',$(this).data('seccion'));			
		});


		$('body').on('click','.comp-login .comp-login-btn_ingresar_facebook',function(){
			callMetodoFbLogin();
		});


		$('body').on('click','.comp-login .prof',function(){
			
			$(this).parents('.comp-login-campo').find('.comp-login-radiobutton').removeClass('select');
			$(this).find('.comp-login-radiobutton').addClass('select');
			if ($('body').find('.know').hasClass('oculto')){
				$('body').find('.know').addClass('norm');
				$('body').find('.nivel').addClass('oculto');
				$('body').find('.know').removeClass('oculto');
			}
			$(this).find('input').prop('checked',true);
		});
		
		$('body').on('click','.comp-login .alumn',function(){
			
			$(this).parents('.comp-login-campo').find('.comp-login-radiobutton').removeClass('select');
			$(this).find('.comp-login-radiobutton').addClass('select');
			if ($('body').find('.nivel').hasClass('oculto')){
				$('body').find('.know').removeClass('norm');
				$('body').find('.know').addClass('oculto');
				$('body').find('.nivel').removeClass('oculto');
			}
			$(this).find('input').prop('checked',true);
		});

		$('body').on('keyup','.comp-login .comp-login-seccion .comp-login-campo input',function(event){
			if(event.keyCode==13){
				$(this).parents('.comp-login-seccion').find('.comp-login-btn-enviar').click();	
			}
			
		});



		$('body').on('click','.comp-login-btn-enviar',function(){

			url_login=GL_COMPONENTE_LOGIN.ARRAY_LOGINS[parseInt($(this).parents('.comp-login-content').data('id'))].url_login;

			var estado=$(this).parents('.comp-login').attr('data-estado');

			switch(estado){
				case 'login': 
					dir_post="COMPONENTES/LOGIN/POST/logear.php";
				break;
				case 'recuperacion':
					dir_post="COMPONENTES/LOGIN/POST/solicitar_password.php";
				break;
				case 'registro':
					dir_post="COMPONENTES/LOGIN/POST/registrar_usuario.php";

				break;
			}
/*
		  $('.comp-login .comp-login-campo .campo-vacio').addClass('oculto');

		  $('#comp-login-correo').parent().removeClass('comp-login-alerta');
		  $('#comp-login-password').parent().removeClass('comp-login-alerta');*/
		  

			$(this).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('.error-texto').addClass('oculto');
			$(this).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('.comp-login-campo').removeClass('comp-login-alerta');

			DOM_btn=$(this);
			data_formulario=new FormData($(this).parents('.comp-login').find('.comp-login-seccion[data-seccion="'+estado+'"] form')[0]);

		  		$.ajax({
		  			data: data_formulario,
		  			async: true,
		  			cache: false,
		  			processData: false,
		  			contentType: false,
		  			url:dir_post,
		  			type:'POST',
		  			beforeSend: function(objeto){
		  				
		  			},
		  			success: function(data){
		  				
		  				console.log(data);
						data=$.parseJSON(data);

						$('.comp-login').css('pointer-events','initial');
				   
				   		if(data.error){
		  				console.log(estado);

				   			switch(estado){
				   				case 'login':

					   				switch(data.detalle){
						   				case 'sin_user':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_password':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').addClass('comp-login-alerta');
					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');
					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'no_user':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Usuario no encontrado');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'no_pass':
											$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').addClass('comp-login-alerta');
					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').html('Contrase&ntilde;a Incorrecta');
					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   			}

				   				break;
				   				case 'registro':
					   				switch(data.detalle){

						   				case 'sin_nombres':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="nombres"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="nombres"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="nombres"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_apellidos':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="apellidos"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="apellidos"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="apellidos"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_correo':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'no_es_correo':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Escriba un correo electr&oacute;nico');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;

						   				case 'sin_fecha':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="fecha_nacimiento"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="fecha_nacimiento"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="fecha_nacimiento"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_ciudad':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="ciudad"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="ciudad"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="ciudad"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_password':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').html('Campo Obligatorio');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="password"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				
						   				case 'diff':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="confirm"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="confirm"]').parents('.comp-login-campo').find('.error-texto').html('Contraseñas no coinciden');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="confirm"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;

						   				case 'existe_user':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Este correo ya est&aacute; registrado');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				
						   				case 'terms':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').html('Acepte los Términos y Condiciones');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_skill':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').html('Complete los espacios');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'sin_ed':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').html('Complete los espacios');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="terms"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   			}

				   				break;
				   				case 'recuperacion':

					   				switch(data.detalle){
						   				case 'sin_correo':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Campo obligatorio');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'no_es_correo':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Escriba un correo electr&oacute;nico');

					          				$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;
						   				case 'no_user':
						   					$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').addClass('comp-login-alerta');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').html('Usuario no encontrado');
						          			$(DOM_btn).parents('.comp-login-seccion[data-seccion="'+estado+'"]').find('input[name="correo"]').parents('.comp-login-campo').find('.error-texto').removeClass('oculto');
						   				break;						   			
						   			}
				   				break;
				   			}


				   		}else{

							switch(data.detalle){

								case 'ok_sesion': 
									if($.trim(url_login)==''){
										if (data.tipo == 'P'){
											parent.document.location="http://www.invictos.la/"+data.id;		
									        }else if (data.tipo == 'A'){
											parent.document.location=url_login;
										}
									}else{
										parent.document.location=url_login;	
									}											
								break;
								case 'ok_registro':
									if($.trim(url_login)==''){
										if (data.tipo == 'P'){
											parent.document.location="http://www.invictos.la/"+data.id;		
									        }else if (data.tipo == 'A'){
											parent.document.location=url_login;
										}
									}else{
										parent.document.location=url_login;		
									}		
								break;
								case 'ok_recuperacion':
									$(DOM_btn).html('Contrase&ntilde;a Enviada');
									$(DOM_btn).addClass('no_events');
								break;

							}

				   		}

		  			}
		  		});
		          



/*
			fun_accion_login($("#comp-login-campo-user").val(),$("#comp-login-campo-password").val(),$(this).data('accion'), GL_COMPONENTE_LOGIN.ARRAY_LOGINS[parseInt($(this).data('id'))].url_login);
			*/
		});

		/*$('body').on('keyup','#comp-login-campo-password',function(event){

			tecla=(document.all) ? event.keyCode : event.which;	
			
			if(tecla == 13 ){
				$('#comp-login-btn-accion').click();
			}
		});

		$('body').on('keyup','#comp-login-campo-user',function(event){

			tecla=(document.all) ? event.keyCode : event.which;	
			
			if(tecla == 13 ){
				$('#comp-login-btn-accion').click();
			}
		});*/

		$('body').on('click','.comp-login-cerrar_sesion',function(){
			fun_cerrar_sesion();
		});
	};

}

//For autocomplete
var GL_DELAY_KEYUP_CURSOTEMA;
		$(document).ready(function(){
		
		var className = $('#tag_page').attr('class');
		console.log($('#tag_page').hasClass('columna-pagina none oculto'));
		
		
	    		$('#lista_academ_autocom').css('height', '170px');
	    		
			$('body').click(function(){				
	    		$('#lista_academ_autocom').hide();
			});

		    $('body').on('keyup','#input_mostrar_academ',function(event){

		      if (event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13){

		      	fun_mostrar_academ_keyup($(this));

		      }else{

		      	if (event.keyCode==13){ 
		      		if($('#lista_academ_autocom .tema_academ').length==0){
		      			//$('#crear_nuevo_curso_tema.hover').click();
		      		}else{

			    		$('#lista_academ_autocom').hide();

			      		$('.columna_editar_perfil #id_academ').val($('#lista_academ_autocom .tema_academ.hover').data('id_elemento'));

		      		}
		      	}else{

		      		if($('#lista_academ_autocom .tema_academ').length==0){
		      			$('#crear_nuevo_curso_tema').addClass('hover');
		      		}else{


				      	if(event.keyCode==38){ //UP ARROW
				      		if($('#lista_academ_autocom .tema_academ.hover').length>0){
				      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
				      			if($('#lista_academ_autocom .tema_academ').index($('#lista_academ_autocom .tema_academ.hover'))==0){
				      				//esto significa que hemos hecho up en el item que está mas arriba
				      				$('#lista_academ_autocom .tema_academ.hover').removeClass('hover');

				      				$('#lista_academ_autocom .tema_academ').last().addClass('hover');
				      				
				      			}else{
				      				var obj=$('#lista_academ_autocom .tema_academ.hover');
				      				$('#lista_academ_autocom .tema_academ.hover').removeClass('hover');
				      				$(obj).prev().addClass('hover');
				      			}
				      		}else{
				      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de abajo
				      			$('#lista_academ_autocom .tema_academ').last().addClass('hover');
				      		}
				      	}else{
				      		//DOWN ARROW

				      		if($('#lista_academ_autocom .tema_academ.hover').length>0){
				      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
				      			if($('#lista_academ_autocom .tema_academ').index($('#lista_academ_autocom .tema_academ.hover'))==$('#lista_academ_autocom .tema_academ').length-1){
				      				//esto significa que hemos hecho up en el item que está mas arriba
				      				$('#lista_academ_autocom .tema_academ.hover').removeClass('hover');

				      				$('#lista_academ_autocom .tema_academ').first().addClass('hover');
				      				
				      			}else{
				      				var obj=$('#lista_academ_autocom .tema_academ.hover');
				      				$('#lista_academ_autocom .tema_academ.hover').removeClass('hover');
				      				$(obj).next().addClass('hover');
				      			}
				      		}else{
				      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de arriba

				      			$('#lista_academ_autocom .tema_academ').first().addClass('hover');
				      		}


			      		}

			      	$(this).val($('#lista_academ_autocom .tema_academ.hover').data('nombre'));
			      	}


		      	}
		      }

		    });



		    $('body').on('click','#lista_academ_autocom .tema_academ',function(){
		   
		    	
				$('#lista_academ_autocom').hide();


		      	$('.columna_editar_perfil #id_academ').val($(this).data('id_elemento'));
		      	$('.columna_editar_perfil #input_mostrar_academ').val($(this).data('nombre'));



		    });

		   

		    $('body').on('click','#crear_nuevo_curso_tema',function(){
		    	
		    		$('#nombre_nuevo_tema_curso').val($('#input_mostrar_academ').val());
		    		$('#nombre_busqueda_nuevo_tema_curso').val($('#input_mostrar_academ').val());
		    	$('#lista_academ_autocom .comp-gestion-elemento .comp-ge-form .comp-ge-btn-accion[data-accion="insert"]').click();
				fun_cancel_buble_event(event);

		    });

		    $('.columna_editar_perfil').on('click','.elemento .btn_editar',function(){
		    	$('.columna_editar_perfil .lista_conocimientos .elemento').show();
		    	var id=$(this).parents('.elemento').data('id_elemento');
		    	
		    	var objeto= $('.columna_editar_perfil .content .comp-gestion-elemento[data-elemento="academ"]');
		    	$(objeto).appendTo('.form_gestion[data-id_elemento="'+id+'"]');
		    	$('.columna_editar_perfil .form_gestion[data-id_elemento="'+id+'"]').show();
				$(this).parents('.elemento').hide();
				$('.btn_mostrar_agregar').show();
		    });

		    $('.columna_editar_perfil').on('click','.elemento .btn_eliminar',function(){
		    	$('.columna_editar_perfil .lista_conocimientos .elemento').show();
		    	var id=$(this).parents('.elemento').data('id_elemento');
		    	
		    	var objeto= $('.columna_editar_perfil .content .comp-gestion-elemento[data-elemento="academ"]');
		    	$(objeto).appendTo('.form_gestion[data-id_elemento="'+id+'"]');
		    	$('.columna_editar_perfil .form_gestion[data-id_elemento="'+id+'"]').show();

		    	$('.columna_editar_perfil .form_gestion[data-id_elemento="'+id+'"] .comp-ge-btn-accion[data-accion="preguntar_delete"]').click();
				$(this).parents('.elemento').hide();
				$('.btn_mostrar_agregar').show();
		    });

		
		
		$('#lista_conocimientos_autocom').addClass('comp-popup');
		$('#crear_nuevo_curso_tema').addClass('oculto');
			$('body').click(function(){				
	    		$('#lista_conocimientos_autocom').hide();
	    		$('#lista_conocimientos_autocom').prependTo('#popup_grl');  	
	    		$('#lista_conocimientos_autocom').css('height', '170px');		    		
			});
			
			$('#popup_grl').click(function(){			
			if ($('#lista_conocimientos_autocom').css('display') != 'none' ) { 
			
		    		$('#lista_conocimientos_autocom').hide();
		    	}		    		
			});


		    $('body').on('keyup','#input_mostrar_conocimiento',function(event){

		      if(event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13){
		      
		      	if($('#tag_page').css('display') != 'none') {
	      	
	      			fun_mostrar_conocimiento_keyup($(this));
	      		} else if($('#popup_grl').css('display') != 'none') {
	      		
	      			fun_mostrar_conocimiento_keyup_regist($(this));
	      		}
		      	

		      }else{

		      	if(event.keyCode==13){ 
		      		if($('#lista_conocimientos_autocom .tema_curso').length==0){
		      			//$('#crear_nuevo_curso_tema.hover').click();
		      		}else{

			    		$('#lista_conocimientos_autocom').hide();

			      		$('.columna_conocimientos .formulario #id_skill').val($('#lista_conocimientos_autocom .tema_curso.hover').data('id_elemento'));

		      		}
		      	}else{

		      		if($('#lista_conocimientos_autocom .tema_curso').length==0){
		      			$('#crear_nuevo_curso_tema').addClass('hover');
		      		}else{


				      	if(event.keyCode==38){ //UP ARROW
				      		if($('#lista_conocimientos_autocom .tema_curso.hover').length>0){
				      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
				      			if($('#lista_conocimientos_autocom .tema_curso').index($('#lista_conocimientos_autocom .tema_curso.hover'))==0){
				      				//esto significa que hemos hecho up en el item que está mas arriba
				      				$('#lista_conocimientos_autocom .tema_curso.hover').removeClass('hover');

				      				$('#lista_conocimientos_autocom .tema_curso').last().addClass('hover');
				      				
				      			}else{
				      				var obj=$('#lista_conocimientos_autocom .tema_curso.hover');
				      				$('#lista_conocimientos_autocom .tema_curso.hover').removeClass('hover');
				      				$(obj).prev().addClass('hover');
				      			}
				      		}else{
				      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de abajo
				      			$('#lista_conocimientos_autocom .tema_curso').last().addClass('hover');
				      		}
				      	}else{
				      		//DOWN ARROW

				      		if($('#lista_conocimientos_autocom .tema_curso.hover').length>0){
				      			//significa que ya existe un hover seleccionado entonces debemos decidir apuntar al siguiente
				      			if($('#lista_conocimientos_autocom .tema_curso').index($('#lista_conocimientos_autocom .tema_curso.hover'))==$('#lista_conocimientos_autocom .tema_curso').length-1){
				      				//esto significa que hemos hecho up en el item que está mas arriba
				      				$('#lista_conocimientos_autocom .tema_curso.hover').removeClass('hover');

				      				$('#lista_conocimientos_autocom .tema_curso').first().addClass('hover');
				      				
				      			}else{
				      				var obj=$('#lista_conocimientos_autocom .tema_curso.hover');
				      				$('#lista_conocimientos_autocom .tema_curso.hover').removeClass('hover');
				      				$(obj).next().addClass('hover');
				      			}
				      		}else{
				      			//significa que no hay hover apuntado aun, entonces debemos apuntar al primero de arriba

				      			$('#lista_conocimientos_autocom .tema_curso').first().addClass('hover');
				      		}


			      		}

			      	$(this).val($('#lista_conocimientos_autocom .tema_curso.hover').data('nombre'));
			      	}


		      	}
		      }

		    });



		    $('body').on('click','#lista_conocimientos_autocom .tema_curso',function(){
		   
		    	
				$('#lista_conocimientos_autocom').hide();


		      	$('.area_derecha #skill_id').val($(this).data('id_elemento'));
		      	$('.area_derecha #input_mostrar_conocimiento').val($(this).data('nombre'));



		    });
		 

		    /*$('body').on('click','#crear_nuevo_curso_tema',function(){
		    	
		    		$('#nombre_nuevo_tema_curso').val($('#input_mostrar_conocimiento').val());
		    		$('#nombre_busqueda_nuevo_tema_curso').val($('#input_mostrar_conocimiento').val());
		    	//$('#lista_conocimientos_autocom .comp-gestion-elemento .comp-ge-form .comp-ge-btn-accion[data-accion="insert"]').click();
				fun_cancel_buble_event(event);

		    });*/

		    
		});


	function fun_mostrar_conocimiento_keyup(obj_dom){

      	var valor=$(obj_dom).val();

      	clearInterval(GL_DELAY_KEYUP_CURSOTEMA);
		GL_DELAY_KEYUP_CURSOTEMA=setInterval(function(){
			clearInterval(GL_DELAY_KEYUP_CURSOTEMA);

	      	$('#lista_conocimientos_autocom').removeClass('lateral');
	      	$('#lista_conocimientos_autocom').addClass('horizontal');
	      	
	      	$('#lista_conocimientos_autocom').css('top', ($(obj_dom).offset().top+30) +'px' );
	      	$('#lista_conocimientos_autocom').css('left',$(obj_dom).offset().left);
	      

	      ancho = parseInt($(obj_dom).css('width').replace('px',''));

	      	$('#lista_conocimientos_autocom').css('width',ancho+'px');

  			//$('#crear_nuevo_curso_tema').removeClass('hover');

			$('#lista_conocimientos_autocom').show();
			
			$('#lista_conocimientos_autocom #lugar_buscador').val($('.comp-menu-opcion.seleccionado').data('opcion'));
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_conocimientos'].reset();

			$('#lista_conocimientos_autocom #condicion_temas_cursos').val(valor);

			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_conocimientos'].consultar();
			
		},200);
}

function fun_mostrar_conocimiento_keyup_regist(obj_dom){

      	var valor=$(obj_dom).val();

      	clearInterval(GL_DELAY_KEYUP_CURSOTEMA);
		GL_DELAY_KEYUP_CURSOTEMA=setInterval(function(){
			clearInterval(GL_DELAY_KEYUP_CURSOTEMA);

	      	$('#lista_conocimientos_autocom').removeClass('lateral');
	      	$('#lista_conocimientos_autocom').addClass('horizontal');
	      	
	      	$('#lista_conocimientos_autocom').css('top', ($(obj_dom).offset().top+110) +'px' );
	      	$('#lista_conocimientos_autocom').css('left',$(obj_dom).offset().left+74);
	      	
	      ancho = parseInt($(obj_dom).css('width').replace('px',''));

	      	$('#lista_conocimientos_autocom').css('width',ancho+'px');

  			//$('#crear_nuevo_curso_tema').removeClass('hover');

			$('#lista_conocimientos_autocom').show();
			
			$('#lista_conocimientos_autocom #lugar_buscador').val($('.comp-menu-opcion.seleccionado').data('opcion'));
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_conocimientos'].reset();

			$('#lista_conocimientos_autocom #condicion_temas_cursos').val(valor);

			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_conocimientos'].consultar();
			
		},200);
}

function fun_mostrar_academ_keyup(obj_dom){

      	var valor=$(obj_dom).val();

      	clearInterval(GL_DELAY_KEYUP_CURSOTEMA);
		GL_DELAY_KEYUP_CURSOTEMA=setInterval(function(){
			clearInterval(GL_DELAY_KEYUP_CURSOTEMA);

	      	$('#lista_academ_autocom').removeClass('lateral');
	      	$('#lista_academ_autocom').addClass('horizontal');

	      	$('#lista_academ_autocom').css('top', ($(obj_dom).offset().top+30) +'px' );

	      $('#lista_academ_autocom').css('left',$(obj_dom).offset().left);


	      ancho = parseInt($(obj_dom).css('width').replace('px',''));

	      	$('#lista_academ_autocom').css('width',ancho+'px');

  			$('#crear_nuevo_curso_tema').removeClass('hover');

			$('#lista_academ_autocom').show();
			
			$('#lista_academ_autocom #lugar_buscador').val($('.comp-menu-opcion.seleccionado').data('opcion'));
			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_academ'].reset();

			$('#lista_academ_autocom #condicion_temas_academ').val(valor);

			GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['buscar_academ'].consultar();
			
		},200);
	}


function OBJ_LOGIN(id){

	this.ID_DOM=id;
	this.url_login='';
	this.estado='';


	this.inicia=function(){

		this.resize();	

/*
		var GLOBAL_HOY= new Date();

		var GLOBAL_HOY_DIA=GLOBAL_HOY.getDate();
		var GLOBAL_HOY_MES=(GLOBAL_HOY.getMonth()+1);
		var GLOBAL_HOY_ANIO=GLOBAL_HOY.getFullYear();*/
		

		try{
		    $(this.ID_DOM+' .comp-login-date').daterangepicker({
		        singleDatePicker: true,
			//	"minDate": GLOBAL_HOY_DIA+"/"+GLOBAL_HOY_MES+"/"+GLOBAL_HOY_ANIO,
		        locale: {
		            format: 'DD/MM/YYYY'
		        }
		    });	

			$(this.ID_DOM+' .comp-login-date').on('apply.daterangepicker', function(ev, picker) {
			  $(this).parents('.comp-login-campo_input').find('.comp-login-input-date').val(picker.startDate.format('YYYY-MM-DD'));
			});

			fun_inicia_login();

		}catch(e){
		}

	};

	



	this.resize=function(){
		
/*		var obj=this;
		//$(this.ID_DOM+' .comp-login-content').css('width',$(window).width()+'px');
		

		if($(window).width()<500){
			$(this.ID_DOM+' .comp-login-alineador').addClass('responsive');

		}else{
			$(this.ID_DOM+' .comp-login-alineador').removeClass('responsive');			
		}
*/


	};


	
}






 // This is called with the results from from FB.getLoginStatus().
 /* function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
    //  testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';

    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }*/

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
 
      
  function fun_logear_con_fb(){ 
    
    FB.getLoginStatus(function(response) {
    
      if (response.status === 'connected') {         
        fun_setSession();
      } 
      else if (response.status === 'not_authorized') {
        callMetodoFbLogin(); 
      } 
      else {
        callMetodoFbLogin(); 
      }     
     });  
  } 

  function callMetodoFbLogin(){
    FB.login(function(response) {


      if (response.status === 'connected') {     
      
            fun_setSession();
      } 
      else if (response.status === 'not_authorized') {
        
      } 
      else {
        
      }     


/*
      if (response.authResponse) {
          //callMetodoFbAPI();
         
          fun_setSession();
          //$('#ajax-modal').modal('show');
       } else {
         //User cancelled login or did not fully authorize.
       }*/
     }, {scope:'email'}); 
  } 


   window.fbAsyncInit = function() {
    FB.init({
      appId      : '1196708610389793',
      //appId      : '1529666487049134',
      xfbml      : true,
      oauth   : true,
    status  : true, // check login status
    cookie  : true, // enable cookies to allow the server to access the session
      version    : 'v2.8'
    });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  };








  // Load the SDK asynchronously


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function fun_setSession() {
  //  console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
     /* console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';*/

          $.ajax({
              url: "COMPONENTES/LOGIN/POST/iniciar_sesion_fb.php",
              type: "POST",
              data:{user:response.id,nombre:response.name,correo:response.email},
              
              async:true,
              beforeSend: function(objeto){
                
              },
              
        success: function(data){
        	console.log(data);


        	if(data=='registro_fb'){

				$('.protector_fondo_popup[data-id_popup="update_tipo"]').fadeIn(300);
				$('body').addClass('sin_scroll');				
        	}else if(data != 'registro_fb' && data != ''){

            		parent.document.location='http://www.invictos.la/' + data;
        	} else{

            		parent.document.location=''; 
        	}
      
        }
      });


    });
  }

