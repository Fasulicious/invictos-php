
function fun_inicia_cargando(){
	var delay=setInterval(function(){
		clearInterval(delay);
		$('body').removeClass('sin_scroll');

		$('.comp-cargando #imagen').addClass('mostrado');
		$('.comp-cargando #comp-cargando-barra').addClass('mostrado');

	},100);

}




function fun_comp_cargando_retirado(){
	fun_inicia_vistas();

}

function fun_inicia_vistas(){

	if($('#ss_usuario_activo').val()==0 && $('#ss_id').val()!=''){

		$('.columna-pagina[data-columna="activar_cuenta"]').removeClass('none oculto');
		$('.columna-pagina[data-columna="activar_cuenta"]').addClass('mostrado');

	}else{

		fun_cambio_vista($('#gl_get_user').val(),$('#gl_get_view').val(),$('#gl_get_subview').val());
		
	}
}


function fun_cambio_vista(gl_get_user, gl_get_view, gl_get_subview){
	if(gl_get_user!=''){
			$('body').append('<div id="aux_element" class="comp-menu-celda-content" data-rol="principal" data-columna="perfil" data-area="perfil" data-href="'+gl_get_user+'" style="">h</div>');

			$('.comp-menu-celda-content[data-rol="principal"][data-columna="perfil"][data-area="perfil"][data-href="'+gl_get_user+'"]').trigger('click');

			var delay=setInterval(function(){
				clearInterval(delay);		
				$('#aux_element').remove();

			},1000);

		}else{

			switch(gl_get_view.toLowerCase()){
				case '':
				case 'inicio':
				case 'home':
					/*$('.columna-pagina[data-columna="home"]').removeClass('none oculto');
					$('.columna-pagina[data-columna="home"]').addClass('mostrado');*/

					$('.comp-menu-celda-content[data-rol="principal"][data-columna="home"][data-area="inicio"]').click();

					$('body,html').scrollTop($('#inicio').offset().top);
				break;

				case 'error':

					$('body').append('<div id="aux_element" class="comp-menu-celda-content" data-rol="principal" data-columna="error" data-area="error" style="">h</div>');

					$('.comp-menu-celda-content[data-rol="principal"][data-columna="error"][data-area="error"]').trigger('click');

					var delay=setInterval(function(){
						clearInterval(delay);		
						$('#aux_element').remove();

					},1000);


				break;

				case 'biblioteca':

					$('.comp-menu-celda-content[data-rol="principal"][data-columna="biblioteca"][data-area="biblio"]').click();
				break;
				case 'nosotros':

					$('.comp-menu-celda-content[data-rol="principal"][data-columna="nosotros"][data-area="nosotros"]').click();
				break;
				case 'terminos':

					$('.comp-menu-celda-content[data-rol="principal"][data-columna="terminos"][data-area="terminos"]').click();
				break;
				case 'password':
					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{

						$('.comp-submenu-celda-content[data-rol="principal"][data-columna="cambiar_pass"][data-area="cambiar_pass"]').click();
					}
				break;
				case 'mis_zonas':
					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="mis_zonas"][data-area="mis_zonas"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'mis_conocimientos':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="conocimientos"][data-area="conocimientos"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'historial':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="historial"][data-area="historial"]').addClass('activo');
	
						switch(gl_get_subview.toLowerCase()){
							case 'profesores':
							case 'alumnos':		
								$('.comp-menu-celda-content[data-rol="historial"]').removeClass('activo');
								$('.comp-menu-celda-content[data-rol="historial"][data-columna="valoraciones"][data-area="valoraciones"]').addClass('activo');
							break;
							case 'clases':
								$('.comp-menu-celda-content[data-rol="historial"]').removeClass('activo');
								$('.comp-menu-celda-content[data-rol="historial"][data-columna="mis_alumnos"][data-area="mis_alumnos"]').addClass('activo');								
							break;
						}
		
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'estadisticas':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="estadisticas"][data-area="estadisticas"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'mensajes':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="mensajes"][data-area="mensajes"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
	
						if($.trim(gl_get_subview.toLowerCase())!=''){
	
							if($('.columna_mensajes .area-der .lista_mensajes .resultado[data-id_usuario="'+gl_get_subview+'"]').length){
								var delay=setInterval(function(){
									clearInterval(delay);
									fun_get_conversacion(gl_get_subview,0);
								},1000);
								
							}else{
	
							}
							
	
						}
					}
				break;
				case 'mi_biblioteca':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="biblioteca"][data-area="biblioteca"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'user_contacto':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="contacto"][data-area="contacto"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;
				case 'contacto':
					$('.comp-menu-celda-content[data-rol="principal"]').removeClass('activo');
					$('.comp-menu-celda-content[data-area="contacto"][data-rol="principal"][data-columna="contacto"]').click();
				break;
				case 'editar_perfil':

					if($('#ss_id').val()==''){
						fun_mostrar_vista_login();
					}else{
						$('.comp-menu-celda-content[data-rol="dashboard"]').removeClass('activo');
						$('.comp-menu-celda-content[data-rol="dashboard"][data-columna="editar_perfil"][data-area="editar_perfil"]').addClass('activo');
						$('.comp-submenu-celda-content[data-area="dashboard"][data-rol="principal"][data-columna="dashboard"]').click();
					}
				break;

				case 'login':
					fun_mostrar_vista_login();
				break;	

				

			}
		}

}


function fun_mostrar_vista_login(){

	$('body').append('<div id="aux_element" class="comp-menu-celda-content" data-rol="principal" data-columna="login" data-area="login" style="">h</div>');

	$('.comp-menu-celda-content[data-rol="principal"][data-columna="login"][data-area="login"]').trigger('click');


	var delay=setInterval(function(){
		clearInterval(delay);		
		
		$('#pagina-login .comp-login #campo-login-correo').focus();

	},100);

	var delay2=setInterval(function(){
		clearInterval(delay2);		
		$('#aux_element').remove();


	},1000);

}


var GL_POP_STATE=false;
window.onpopstate = function(event) {
	GL_POP_STATE=true;
	fun_cambio_vista(event.state['gl_get_user'], event.state['gl_get_view'], event.state['gl_get_subview']);
	var delay=setInterval(function(){
		clearInterval(delay);
		GL_POP_STATE=false;

	},1100);
};