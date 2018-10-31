


$(document).ready(function(){

	$('body').on('click','.enlace_cerrar_sesion',function(){
			
			$.ajax({
				url:"POST/close.php",
				success:function(data){
					
					document.location=GL_DNS;
				}
			});
		
	});

	$('body').on('click','.caja_user .ver_mas',function(e){
		fun_cancel_buble_event(e);
		$('.menu_ver_mas').slideDown(300);
	});

	$('body').on('click','.menu_ver_mas',function(e){
		fun_cancel_buble_event(e);
	});
	$('body').click(function(){

		$('.menu_ver_mas').slideUp(300);
	});

});