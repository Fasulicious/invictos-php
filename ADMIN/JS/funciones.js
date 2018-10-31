

function fun_inicia_cargando(){
	var delay=setInterval(function(){
		clearInterval(delay);
		$('body').removeClass('sin_scroll');

		$('.comp-cargando #imagen').addClass('mostrado');
		$('.comp-cargando #comp-cargando-barra').addClass('mostrado');

	},100);

}
