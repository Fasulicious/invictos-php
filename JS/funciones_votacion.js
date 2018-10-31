//este script solo debe cargar si el usuario ha iniciado sesion


$(document).ready(function(){
	/*$('body').on('click','.btn_votar_profesor',function(){
		if($('#ss_id').val()!=''){

			var id_usuario=$(this).parents('.resultado').data('id_usuario');
			fun_pulsa_voto_profesor(id_usuario);
			if($(this).hasClass('activo')){
				$('.resultado[data-id_usuario="'+id_usuario+'"] .btn_votar_profesor').removeClass('activo');
				$('.resultado[data-id_usuario="'+id_usuario+'"] .btn_votar_profesor').find('.numero').html(parseInt($(this).find('.numero').html())-1);

				//para soportar el boton de de perfil
				$('.resultado[data-id_usuario="'+id_usuario+'"] .info_portada .valoracion').find('.numero').html(parseInt($('.resultado[data-id_usuario="'+id_usuario+'"] .info_portada .valoracion').find('.numero').html())-1);

			}else{				
				$('.resultado[data-id_usuario="'+id_usuario+'"] .btn_votar_profesor').addClass('activo');
				$('.resultado[data-id_usuario="'+id_usuario+'"] .btn_votar_profesor').find('.numero').html(parseInt($(this).find('.numero').html())+1);

				//para soportar el boton de de perfil				
				$('.resultado[data-id_usuario="'+id_usuario+'"] .info_portada .valoracion').find('.numero').html(parseInt($('.resultado[data-id_usuario="'+id_usuario+'"] .info_portada .valoracion').find('.numero').html())+1);
			}
		}
	});*/
});


function fun_pulsa_voto_profesor(id_profesor){
	$.ajax({
		url:'POST/VOTACIONES/pulsa_voto_profesor.php',
		type:'POST',
		data:{id_profesor:id_profesor},
		async:true,
		beforeSend: function(objeto){

		},
		success: function(data){
		}

	});
}






$(document).ready(function(){
	$('body').on('click','.btn_votar_recurso',function(){
		fun_pulsa_voto_recurso($(this).parents('.resultado').data('id_elemento'));
		if($(this).hasClass('activo')){
			$(this).removeClass('activo');
			$(this).find('.numero').html(parseInt($(this).find('.numero').html())-1);
		}else{
			$(this).addClass('activo');
			$(this).find('.numero').html(parseInt($(this).find('.numero').html())+1);
		}
	});
});


function fun_pulsa_voto_recurso(id_recurso){
	$.ajax({
		url:'POST/VOTACIONES/pulsa_voto_libro.php',
		type:'POST',
		data:{id_recurso:id_recurso},
		async:true,
		beforeSend: function(objeto){

		},
		success: function(data){
			console.log(data);
		}

	});
}






