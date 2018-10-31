
var GL_ID_USUARIO_MODIF='';


$(document).ready(function(){




	$('#btn_agregar_usuario').click(function(){
		usuario=new Array();
		usuario.username=$('#nuevo_usuario-username').val();
		usuario.password=$('#nuevo_usuario-password').val();

		mod_usuarios.agregar_usuario(usuario);
	});


	$('#btn_modificar_usuario').click(function(){
		usuario=new Array();
		usuario.username=$('#nuevo_usuario-username').val();
		usuario.password=$('#nuevo_usuario-password').val();

		mod_usuarios.modificar_usuario(usuario);
	});


	$('body').on('click','.usuario .btn_modificar',function(){
		id=$(this).data('id_usuario');
		GL_ID_USUARIO_MODIF=id;
		$('#nuevo_usuario-username').val(GL_USUARIOS[id].username);
		$('#nuevo_usuario-username').attr('disabled','disabled');
		$('#nuevo_usuario-password').val(GL_USUARIOS[id].password);

		//$('html,body').animate({scrollTop: divTag.offset().top},'slow');
		$('html,body').animate({scrollTop: 0},'slow');

		$('#btn_agregar_usuario').hide();

		$('#btn_modificar_usuario').show();
		$('#div_nuevo_usuario #btn_cancelar_modificar').show();

		$('#ttl_nuevo_usuario').hide();
		$('#ttl_modificar_usuario').show();
	});


	$('#div_nuevo_usuario #btn_cancelar_modificar').click(function(){

		$('#nuevo_usuario-username').attr('disabled',false);
		$('#nuevo_usuario-username').val('');
		$('#nuevo_usuario-password').val('');

		$('#btn_agregar_usuario').show();

		$('#btn_modificar_usuario').hide();
		$('#div_nuevo_usuario #btn_cancelar_modificar').hide();

		$('#ttl_nuevo_usuario').show();
		$('#ttl_modificar_usuario').hide();
		 
	});


	$('body').on('click','.usuario .btn_eliminar',function(){
		mod_usuarios.eliminar_usuario($(this).data('id_usuario'));
	});
});

