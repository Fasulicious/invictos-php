var GL_COMPONENTE_SLIDERS;
var GL_COMPONENTE_LINEAS_TIEMPO;
var GL_COMPONENTE_CONTACTENOS;
var GL_COMPONENTE_MENU_FIJO;


$(document).ready(function(){

	var comp=new OBJ_COMPONENTES();

	/*
	comp.loadScript('COMPONENTES/MENU_FIJO/JS/ini.js',function(){
		comp.loadCSS('COMPONENTES/MENU_FIJO/CSS/estilos.css',function(){

			GL_COMPONENTE_MENU_FIJO=new OBJ_INICIALIZA_MENUS_FIJOS();
			GL_COMPONENTE_MENU_FIJO.ini();
			
		});
	});
*/
	comp.loadScript('COMPONENTES/SLIDER_FULL/JS/ini.js',function(){
		comp.loadCSS('COMPONENTES/SLIDER_FULL/CSS/estilos.css',function(){

			GL_COMPONENTE_SLIDERS=new OBJ_INICIALIZA_SLIDERS();
			GL_COMPONENTE_SLIDERS.ini();
			
		});
	});
/*

	comp.loadScript('COMPONENTES/LINEA_TIEMPO/JS/ini.js',function(){
		comp.loadCSS('COMPONENTES/LINEA_TIEMPO/CSS/estilos.css',function(){

			GL_COMPONENTE_LINEAS_TIEMPO=new OBJ_INICIALIZA_LINEAS_DE_TIEMPO();
			GL_COMPONENTE_LINEAS_TIEMPO.ini();
			
		});
	});
*/
	comp.loadScript('COMPONENTES/CONTACTENOS/JS/ini.js',function(){
		comp.loadCSS('COMPONENTES/CONTACTENOS/CSS/estilos.css',function(){

			GL_COMPONENTE_CONTACTENOS=new OBJ_INICIALIZA_CONTACTENOS();
			GL_COMPONENTE_CONTACTENOS.ini();
			
		});
	});


});




function OBJ_COMPONENTES(){
	this.loadScript=function(src,f){
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.src = src;
		var done = false;
		script.onload = script.onreadystatechange = function() { 
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

