

var GL_INICIA_DESDE_MOVIL=false;
var GL_COMPONENTE_SLIDERS;
var GL_COMPONENTE_VISOR_FOTOS;
var GL_COMPONENTE_LINEAS_TIEMPO;
var GL_COMPONENTE_CONTACTENOS;
var GL_COMPONENTE_MENU_FIJO;
var GL_COMPONENTE_CARGANDO;
var GL_COMPONENTE_LOGIN;
var GL_COMPONENTE_GALERIA;
var GL_COMPONENTE_ANIMACION;
var GL_COMPONENTE_INFORMACION;
var GL_COMPONENTE_CONSULTOR_ELEMENTOS;
var GL_COMPONENTE_GESTOR_ELEMENTOS;



/*
		GL_COMPONENTE_CARGANDO.elementos_a_cargar+= $(obj.ID_DOM+' img').length;


		$(obj.ID_DOM+' img').each(function(){
			if(!$(this).attr('src') || $(this).attr('src')==''){	

			
				$(this).attr('onload',function(){
					
				});
				$(this).attr('src',$(this).data('src'));
			}
		});
*/

$(document).ready(function(){

	if($(window).width()<700 ){
		GL_INICIA_DESDE_MOVIL=true;
	}

	var comp=new OBJ_COMPONENTES();

	comp.loadCSS('COMPONENTES/estilo.css');



comp.loadCSS('COMPONENTES/CARGANDO/CSS/estilos.css',function(){
comp.loadCSS('COMPONENTES/ANIMACION/CSS/estilos.css',function(){
	
comp.loadScript('COMPONENTES/ANIMACION/JS/ini.js',function(){

	comp.loadScript('COMPONENTES/CARGANDO/JS/ini.js',function(){

			GL_COMPONENTE_CARGANDO=new OBJ_INICIALIZA_CARGANDO(2);
			GL_COMPONENTE_CARGANDO.ini();
		

				comp.loadScript('COMPONENTES/MENU_FIJO/JS/ini.js',function(){
					comp.loadCSS('COMPONENTES/MENU_FIJO/CSS/estilos.css',function(){

							GL_COMPONENTE_MENU_FIJO=new OBJ_INICIALIZA_MENUS_FIJOS();
							GL_COMPONENTE_MENU_FIJO.ini();
					});
				});

				comp.loadScript('COMPONENTES/LOGIN/JS/ini.js',function(){
					comp.loadCSS('COMPONENTES/LOGIN/CSS/estilos.css',function(){

						GL_COMPONENTE_LOGIN=new OBJ_INICIALIZA_LOGIN();
						GL_COMPONENTE_LOGIN.ini();
						
					});
				});


				

				});
			});
		});
	});


	
});



function OBJ_COMPONENTES(){
	this.loadScript=function(src,f){
		if(src=='https://maps.googleapis.com/maps/api/js?v=3.exp'){
			alert('hola');
			alert(src);
		}
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.type = 'text/javascript';
		script.src = src;
		var done = false;
		script.onload = script.onreadystatechange = function() { 
			if(src=='https://maps.googleapis.com/maps/api/js?v=3.exp'){
			alert(this.readyState);
			}
		// attach to both events for cross browser finish detection:
		if ( !done && (!this.readyState ||
		  this.readyState == "loaded" || this.readyState == "complete") ) {
		  done = true;
		  if (typeof f == 'function') f();
		  // cleans up a little memory:
		  script.onload = script.onreadystatechange = null;
		  head.removeChild(script);
		}
		};
		head.appendChild(script);
	};

	this.loadCSS=function(href, f){

		var css_link = $("<link>", {
		  rel: "stylesheet",
		  type: "text/css",
		  href: href
		});
		css_link.appendTo('head');
		if(typeof f == 'function'){ f() };

	};
}

