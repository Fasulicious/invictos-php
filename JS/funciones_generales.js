

//////////////////////////SE DEBE TENER IMPORTADO TAMBIEN EL ARCHIVO FUNCIONES_VARIABLES_GLOBALES.JS
var GLOBAL_VEL_FADE=400; // velocidad en la que aparecen los show, hide, fade in, fade out

var GLOBAL_BODY_WIDTH=1263;
var GLOBAL_BODY_HEIGHT=730;

////////////////////////////////////////////////////////////////////////////////
/////////////////OBTENEMOS LA FECHA ACTUAL DEL ORDENADOR//////////////////////// 

var GLOBAL_HOY= new Date();
var GLOBAL_HOY_DIA=GLOBAL_HOY.getDate();
var GLOBAL_HOY_MES=(GLOBAL_HOY.getMonth()+1);
var GLOBAL_HOY_ANIO=GLOBAL_HOY.getFullYear();

var GLOBAL_HORA=GLOBAL_HOY.getHours();
var GLOBAL_MINUTOS=GLOBAL_HOY.getMinutes();
var GLOBAL_SEGUNDOS=GLOBAL_HOY.getSeconds();


var GLOBAL_UTC_DIA=GLOBAL_HOY.getUTCDate();
var GLOBAL_UTC_MES=GLOBAL_HOY.getUTCMonth();
var GLOBAL_UTC_ANIO=GLOBAL_HOY.getUTCFullYear();

var GLOBAL_UTC_HORA=GLOBAL_HOY.getUTCHours();
var GLOBAL_UTC_MINUTOS=GLOBAL_HOY.getUTCMinutes();
var GLOBAL_UTC_SEGUNDOS=GLOBAL_HOY.getUTCSeconds();




var GL_DESPLAZAMIENTO_LISTA_CHAT="-215px";
var GL_RADIO_LOCAL='10px';

var GL_TOLERANCIA_BLOQUEO=50;


var GL_LINK_POSTEADO=new Array();
GL_LINK_POSTEADO='';


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Estas variables nos sirven al momento de trabajar con la funcion PREVIENE_PRESS. Dicha función sirve para verificar lo que se ingresa en un cuadro de texto
var GLOBAL_TECLA_APRETADA=false;
var GLOBAL_TCL_APRTD_LENGTH_APOYO=0;
////////////////////////////////////////////////////////////////////////////////

var GLOBAL_PAGINA_CARGADA=0;//VARIABLE USADA PARA SABER SI UNA PAGINA CARGO LOS DATOS DE LA BASE DE DATOS COMPLETAMENTE

////////////////////////////////////////////////////////////////////////////////
/////////////////////TITULOS PARA POP UPS DE AVISO//////////////////////////////

var GLOBAL_TTL_ACN_INC="Acci&oacute;n incompleta";
var GL_TTL_REGISTRO_EXITO="Registro exitoso";
var GL_TTL_ELIMINA_EXITO="Registro borrado con &eacute;xito";
var GL_TTL_DATO_RPT="Dato repetido";

var GL_TTL_CONFIRM="Confirmar Acción";
var GL_TTL_ERROR_GUARDANDO="Error al guardar los datos";


var GLOBAL_MARGEN_TOP_AVISO=23;


var GL_ERROR_UPLOAD_IMAGENES='Error: Solo se permiten imagenes de formatos JPG,PNG y GIF.';


var GL_DNS="http://www.invictos.la";
var GL_DNS_POST="http://www.invictos.la";
var GL_DNS_IMG="http://www.invictos.la";
var GL_IP_NODE_SOCKETS="http://192.168.0.10:8080";

/*

var GL_DNS="http://local.dantevidal.com/INVICTOS";
var GL_DNS_POST="http://local.dantevidal.com/INVICTOS";
var GL_DNS_IMG="http://local.dantevidal.com/INVICTOS";
var GL_IP_NODE_SOCKETS="http://local.dantevidal.com:8080";
*/




var GL_PORC_DESP_WHEEL=10;  //ESTO INDICA QUE EL PORCENTAJE DE DESPLAZAMIENTO ES DE 2% DEL CONTENIDO TOTAL QUE SE QUIERE DESPLAZAR USANDO EL WHEEL DEL RATON


/************SOBRE EL ZOOM*************/
/************SOBRE EL ZOOM*************/
/************SOBRE EL ZOOM*************/



$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

$(document).on("ready",function(){
	
$('body').on('click','#popup_aviso_aceptar',function(){
	fun_cerrar_aviso();	
});


$('body').on('click','#popup_pregunta_aceptar',function(){
	
	if($('#popup_pregunta #grupo_acciones').val()=='perfil_emp'){
		
		fun_realiza_accion_popup_pregunta_perfil_emp($('#popup_pregunta #pregunta_decision_opcion').val());
		
	}else{
		fun_realiza_accion_popup_pregunta($('#popup_pregunta #pregunta_decision_opcion').val());
		
	}	
});



$('body').on('click','#popup_pregunta_cerrar',function(){
	fun_realiza_accion_cerrar_pregunta("cerrar popup");
});

$('body').on('click','.content_menu .opcion',function(){
	id_menu=$(this).parent().data('menu');
	$('#'+id_menu+' .opcion').removeClass('opcion_selec');

	$(this).addClass('opcion_selec');

	abrir_contenido($(this).data('contenido'),$(this).data('area'));

});


});	


 



function fun_aviso_popup(arg_texto,arg_titulo,arg_ancho,arg_top){


	$("#popup_aviso #texto_aviso").html(arg_texto);
	$("#popup_aviso #titulo_aviso").html(arg_titulo);
	$("#popup_aviso").css("width","520px");	
	$("#protector_popup_aviso").fadeIn(GLOBAL_VEL_FADE);
	//$("#popup_aviso").fadeIn(GLOBAL_VEL_FADE);
	
	var delay=setInterval(function(){
		clearInterval(delay);
		$("#popup_aviso").removeClass('scaley_0');
	},200);
}

function fun_cerrar_aviso(){
	$("#protector_popup_aviso").fadeOut(GLOBAL_VEL_FADE);
	//$("#popup_aviso").fadeOut(GLOBAL_VEL_FADE);
	
	$("#popup_aviso").addClass('scaley_0');
}

function fun_pregunta_popup(arg_texto,arg_titulo,arg_accion,arg_ancho,arg_top,grupo){
	
	$("#popup_pregunta #texto_aviso").html(arg_texto);
	$("#popup_pregunta #titulo_aviso").html(arg_titulo);
	
	if($(window).width()<520){		
		$("#popup_pregunta").css("width",($(window).width()-15)+"px");
	}else{
		
		$("#popup_pregunta").css("width","520px");
	}
	
	/*$("#popup_pregunta").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_pregunta").css("top",arg_top+"%");*/
	
	$("#popup_pregunta #pregunta_decision_opcion").val(arg_accion);	
	$("#popup_pregunta #grupo_acciones").val(grupo);	
	
	
	$("#protector_popup_pregunta").fadeIn(GLOBAL_VEL_FADE);
	//$("#popup_pregunta").fadeIn(GLOBAL_VEL_FADE);
	var delay=setInterval(function(){
		clearInterval(delay);
		$("#popup_pregunta").removeClass('scaley_0');
	},200);
}


function fun_cerrar_popup_pregunta(){
	$("#protector_popup_pregunta").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_pregunta").addClass('scaley_0');
}

// se necesita de la funcion externa fun_limpiaarray en las funciones fecha_custom

///////////////////////////////////////FUNCION DE COMPARACIÓN ENTRE FECHAS
function fun_compara_fechas(arg_fecha1,arg_fecha2){
	//Las fechas están en formato STRING  y además están en formato normal  dia-mes-año
	//si retorna 1, fecha1>fecha2, si retorna 2, fecha2 > fecha1, si retorna 0, son iguales
	
	var vals=arg_fecha1.split("-");
	var dia1=parseFloat(vals[0]);
	var mes1=parseFloat(vals[1]);
	var anio1=parseFloat(vals[2]);
	
	vals=arg_fecha2.split("-");
	var dia2=parseFloat(vals[0]);
	var mes2=parseFloat(vals[1]);
	var anio2=parseFloat(vals[2]);
	
	if(anio2>anio1){
		return 2;
	}else{
		if(anio1>anio2){
			return 1;
		}else{ //anios iguales
			if(mes2>mes1){
				return 2;
			}else{
				if(mes1>mes2){
					return 1;
				}else{ // meses iguales
					if(dia2>dia1){
						return 2;
					}else{
						if(dia1>dia2){
							return 1;
						}else{ //fechas iguales
							return 0;
						}
					}
				}
			}
		}
	}
}

//////////////////////////////////////////FUNCION QUE OBTIENE EL NÚMERO DE AÑOS HASTA EL DÍA DE HOY.
/// SI LA FECHA QUE SE INGRESA EN EL ARGUMENTO ES MENOR QUE HOY SE OBTENDRÁ UN NÚMERO POSITIVO, SI ES MAYOR SE OBTENDRÁ UN NÚMERO NEGATIVO.

function fun_anios_hasta_hoy(arg_dia,arg_mes,arg_anio){ // los datos pueden ser numéricos o strings

	var _hoy= new Date();
	var _hoy_dia=_hoy.getDate();
	var _hoy_mes=(_hoy.getMonth()+1);
	var _hoy_anio=_hoy.getFullYear();
	
	var _dia=parseFloat(arg_dia);
	var _mes=parseFloat(arg_mes);
	var _anio=parseFloat(arg_anio);

	var edad=_hoy_anio-_anio;
	if(_hoy_mes>_mes){
		return edad;
	}else{
		if(_hoy_mes<_mes){
			return edad-1;
		}else{
			if(_hoy_dia>=_dia){
				return edad;
			}else{
				return edad-1;
			}
		}
		
	}
}/**/

//////////////////////////////////////////////////////////////////////

/////////////////////  LAS SIGUIENTES FUNCIONES SE ENCARGAN DE MANIPULAR LOS COMBOBOX DE FECHAS, DE MODO QUE SI CAMBIAMOS DE MESES Y AÑOS Y LOS NUMERO DE DÍAS EN DICHO MES SON MODIFICADOS, SIGUEN LAS REGLAS DE AÑOS BISIESTOS, MESES CON 30 DIAS, 31 DIAS, ETC.

function fun_carga_combobox_dia(arg_div_contenedor,arg_id_dia,arg_id_mes,arg_id_anio){
	
	//ejemplo div_contenedor="#AREA_COMPRAS"   id_mes="#mes_vencimiento" 
     // el div contenedor es cualquier combinacion embedida como por ejemplo "#div1 #div2"
 
 	var valor_combo=$(arg_div_contenedor+" "+arg_id_dia).val();
 	
	var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
				'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
				'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
				'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
				'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
				'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
				'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
				'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
			
	switch($(arg_div_contenedor+" "+arg_id_mes).val()){
		case "1":case "3":case "5":
		case "7":case "8":case "10":
		case "12":					
		$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option><option value="31" >31</option>');
		
		break;
		case "4":case "6":case "9":
		case "11": 
		$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option>');
		break;
		case "2":
		if(parseInt($(arg_div_contenedor+" "+arg_id_anio).val())%4==0){
		$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option>');
		}else{
			$(arg_div_contenedor+" "+arg_id_dia).html(cadena2);
		}
		break;
	}
	
	if(valor_combo){
		$(arg_div_contenedor+" "+arg_id_dia).val(valor_combo);
	}	
								
}



////////////////////////////////FUNCIONES QUE TIENEN QUE VER CON LOS FORMATOS DE FECHA, YA SEA DE ARMADO DE FECHAS, O DE CAMBIO DE FORMATO A SQL O NORMAL

function fun_arma_fecha_sql(arg_dia,arg_mes,arg_anio){ //los numeros pueden venir en STRING o enteros

	var _dia=parseFloat(arg_dia);
	var _mes=parseFloat(arg_mes);
	var _anio=parseFloat(arg_anio);

	var fecha=_anio;

	if(_mes<10){
	fecha=fecha+"-0"+_mes;	
	}
	else{	
	fecha=fecha+"-"+_mes;
	}

	if(_dia<10){	
	fecha=fecha+"-0"+_dia;
	}
	else{
		
	fecha=fecha+"-"+_dia;
	}
	return fecha;  //LA FECHA ES DEVUELTA EN FORMATO ANIO-MES-DIA
}
 

function fun_arma_hora(arg_segundos,arg_minutos,arg_hora){ //los numeros pueden venir en STRING o enteros

	var _segundos=parseFloat(arg_segundos);
	var _minutos=parseFloat(arg_minutos);
	var _horas=parseFloat(arg_hora);

	var hora=_horas;

	if(_minutos<10){
	hora=hora+":0"+_minutos;	
	}
	else{	
	hora=hora+":"+_minutos;
	}

	if(_segundos<10){	
	hora=hora+":0"+_segundos;
	}
	else{
		
	hora=hora+":"+_segundos;
	}
	return hora;  //LA FECHA ES DEVUELTA EN FORMATO ANIO-MES-DIA
}


function fun_arma_hora_HM(arg_hora,arg_minutos){ //los numeros pueden venir en STRING o enteros

	var _minutos=parseFloat(arg_minutos);
	var _horas=parseFloat(arg_hora);

	var hora=_horas;

	if(_minutos<10){
	hora=hora+":0"+_minutos;	
	}
	else{	
	hora=hora+":"+_minutos;
	}

	return hora; 
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_fecha_invierte_formato(arg_fecha){ // el dato debe estar en formato string
	
	//esta funcion solo invierte el formato de una fecha  si es ANIO-MES-DIA ->DIA-MES-ANIO Y viceversa
	
	var valores_f=arg_fecha.split("-");
	return valores_f[2]+"-"+valores_f[1]+"-"+valores_f[0]; 
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_oracion_fecha(arg_fecha){ //formato string dd-mm-aaaa
	var valores=arg_fecha.split("-");
	var anio=valores[2];
	// se hace una llamada a la funcion nombre_mes
	var mes=fun_nombre_mes(valores[1]);
	var dia=parseFloat(valores[0]);
	
	return dia+" de "+mes+" del "+anio;
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_oracion_fecha_DM(arg_fecha){ //formato string dd-mm-aaaa   
	var valores=arg_fecha.split("-");
	var anio=valores[2];
	// se hace una llamada a la funcion nombre_mes
	var mes=fun_nombre_mes(valores[1]);
	var dia=parseFloat(valores[0]);
	
	return dia+" de "+mes;  //pero solo devuelve DIA Y MES
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_nombre_mes(arg_numero){
	var _num=parseFloat(arg_numero);
	switch(_num){
		case 1:return "Enero";break;
		case 2:return "Febrero";break;
		case 3:return "Marzo";break;
		case 4:return "Abril";break;
		case 5:return "Mayo";break;
		case 6:return "Junio";break;
		case 7:return "Julio";break;
		case 8:return "Agosto";break;
		case 9:return "Septiembre";break;
		case 10:return "Octubre";break;
		case 11:return "Noviembre";break;
		case 12:return "Diciembre";break;		
	}
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_nombre_dia(arg_numero){
	var _num=parseFloat(arg_numero);
	switch(_num){
		case 1:return "Lunes";break;
		case 2:return "Martes";break;
		case 3:return "Miércoles";break;
		case 4:return "Jueves";break;
		case 5:return "Viernes";break;
		case 6:return "Sábado";break;
		case 7:return "Domingo";break;
	}
}



function fun_carga_combobox_anio_personalizado(arg_div_contenedor,arg_id_anio,arg_inicio,arg_fin,arg_tipo){//esta funcion nos servirá para tener valores de un año a otro y pasarlo a un combo box ya sea de tipo ascendente o descendente.
	
	var _hoy= new Date();
	var _hoy_anio=_hoy.getFullYear();
	
	var _inicio=parseFloat(arg_inicio);
	var _fin=parseFloat(arg_fin);
	
	var cadena="";
	
	var detecta_hoy=0;
	
	if(arg_tipo=="asc" || arg_tipo=="ASC"){
		for(var i=_inicio;i<=_fin;i++){
			if(i==_hoy_anio){
				detecta_hoy=1;
			}
			cadena=cadena+'<option value="'+i+'">'+i+'</option>';		
		}	
	}else{
		for(var i=_fin;i>=_inicio;i--){
			if(i==_hoy_anio){
				detecta_hoy=1;
			}
			cadena=cadena+'<option value="'+i+'">'+i+'</option>';
		}
	}
	$(arg_div_contenedor+" "+arg_id_anio).html(cadena);
	
	if(detecta_hoy==1){
		$(arg_div_contenedor+" "+arg_id_anio).val(_hoy_anio);		
	}
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


function fun_oracion_hora(arg_hora){  // se le ingresa una hora, puede ser un entero o un string

	var hora=parseFloat(arg_hora);
	var _hora=parseFloat(hora);
	if(_hora==0){
		return "Media noche";
	}else{
		
		if(_hora==12){
			return "Medio d&iacute;a";
		}else{
			
			if(_hora>11){
				_hora-=12;
				return _hora+" pm";
			}else{
				return _hora+" am";
			}
			
		}
	}
}

function fun_oracion_hora_minutos(arg_hora_sql){  // se le ingresa una hora en formato SQL

	var hora=arg_hora_sql.split(":");
	var _hora=parseFloat(hora[0]);
	var _minutos=parseFloat(hora[1]);
	
		
		if(_hora>11){
			_hora-=12;
			return _hora+":"+hora[1]+" pm";
		}else{
			return _hora+":"+hora[1]+" am";
		}		
}

function fun_actualiza_variables_fecha(){
	
	GLOBAL_HOY= new Date();
	GLOBAL_HOY_DIA=GLOBAL_HOY.getDate();
	GLOBAL_HOY_MES=(GLOBAL_HOY.getMonth()+1);
	GLOBAL_HOY_ANIO=GLOBAL_HOY.getFullYear();

	GLOBAL_HORA=GLOBAL_HOY.getHours();
	GLOBAL_MINUTOS=GLOBAL_HOY.getMinutes();
	GLOBAL_SEGUNDOS=GLOBAL_HOY.getSeconds();
		 
	GLOBAL_UTC_DIA=GLOBAL_HOY.getUTCDate();
	GLOBAL_UTC_MES=GLOBAL_HOY.getUTCMonth()+1;
	GLOBAL_UTC_ANIO=GLOBAL_HOY.getUTCFullYear();
	
	GLOBAL_UTC_HORA=GLOBAL_HOY.getUTCHours();
	GLOBAL_UTC_MINUTOS=GLOBAL_HOY.getUTCMinutes();
	GLOBAL_UTC_SEGUNDOS=GLOBAL_HOY.getUTCSeconds();
	
}

function fun_fecha_sql_ahora(){
	fun_actualiza_variables_fecha();
	return fun_arma_fecha_sql(GLOBAL_HOY_DIA,GLOBAL_HOY_MES,GLOBAL_HOY_ANIO);
}

function fun_fecha_sql_ahora_utc(){
	fun_actualiza_variables_fecha();
	return fun_arma_fecha_sql(GLOBAL_UTC_DIA,GLOBAL_UTC_MES,GLOBAL_UTC_ANIO);
}

function fun_hora_ahora(){
	fun_actualiza_variables_fecha();
	return fun_arma_hora_HM(GLOBAL_HORA,GLOBAL_MINUTOS);
}

function fun_hora_ahora_utc(){
	fun_actualiza_variables_fecha();
	return fun_arma_hora_HM(GLOBAL_UTC_HORA,GLOBAL_UTC_MINUTOS);
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


function fun_calcula_tiempo_hasta_ahora(fecha,hora,utc){ // fecha esta en formado MYSQL //esta funcion calcula el tiempo que ha pasado hasta el preciso momento en que es llamada, servira para hacer el calculo del momento en que se recibio una notificacion.
//si el tiempo transcurrido es de solo minutos u horas, devolvera esos valores, si pasa de un dia, se pondra AYER, y si pasa de mas de un dia se pondra la fecha con el nombre del dia 
//la variable utc nos dirá si es que se quiere hacer el transporte de horario UTC

	fun_actualiza_variables_fecha();
	if(utc){
		dif_hora=fun_diferencia_horaria(fecha,hora);
		fecha=dif_hora.fecha;
		hora=dif_hora.hora;
						
				
	}
	
	if(fun_compara_fechas(fun_fecha_invierte_formato(fecha),fun_fecha_invierte_formato(fun_arma_fecha_sql(GLOBAL_HOY_DIA,GLOBAL_HOY_MES,GLOBAL_HOY_ANIO)))==0){
	
		//es hoy
		//hallaremos entonces la diferencia en minutos
		
		var vals_hora=hora.split(":");
	
		var num_minutos_hora=parseFloat(vals_hora[0])*60+parseFloat(vals_hora[1]);//tengo el num de minutos transcurridos hasta la hora del parametro
	
		var num_minutos_ahora=GLOBAL_HORA*60+GLOBAL_MINUTOS;
		
		
		var minutos_diferencia=num_minutos_ahora-num_minutos_hora;
		
		if(minutos_diferencia>=60){
		
			if(parseInt(minutos_diferencia/60)==1){
				
				return "Hace "+parseInt(minutos_diferencia/60)+" hora";
			}else{
				
				return "Hace "+parseInt(minutos_diferencia/60)+" horas";
			}
		
		}else{
			
			if(minutos_diferencia<=0){
				return "Hace 1 minuto";
			}else{
				
				return "Hace "+minutos_diferencia+" minutos";
			}
		
		}
	}else{
		var vals_fecha=fecha.split("-");
		
		var fecha=new Date(vals_fecha[0],parseFloat(vals_fecha[1])-1,parseFloat(vals_fecha[2]));
		
		var dia=fecha.getDay();
		if(dia==0){
			dia=7;
		}
		
		return fun_nombre_dia(dia)+", "+parseFloat(vals_fecha[2])+" "+fun_nombre_mes(parseFloat(vals_fecha[1])).substring(0,3);
		
	}
	
}


/*
$(document).ready(function(){
	
	fun_calcula_tiempo_hasta_ahora_no_fechas('2013-06-24','23:50');
	
});*/

function fun_calcula_tiempo_hasta_ahora_no_fechas(fecha,hora,utc){ // Esta funcion tambien calcula un tiempo transcurrido, con la diferencia que no coloca la fecha cuando ya ha pasado días, sino que coloca terminos como Ayer, hace 2 días, hace 3 días, hace una semana, hace un mes, etc.

	if(utc){
		dif_hora=fun_diferencia_horaria(fecha,hora);
		fecha=dif_hora.fecha;
		hora=dif_hora.hora;
	}
	
	var vals_hora=hora.split(":");
	var vals_fecha=fecha.split("-");
		
	var fecha_dato=new Date();
	
	fecha_dato.setFullYear(parseFloat(vals_fecha[0]));
	fecha_dato.setMonth(parseFloat(vals_fecha[1])-1);
	fecha_dato.setDate(parseFloat(vals_fecha[2]));
	
	fecha_dato.setHours(parseFloat(vals_hora[0]));
	fecha_dato.setMinutes(parseFloat(vals_hora[1]));
	
	fecha_hoy=new Date();
	
	time1=fecha_dato.getTime()/60000;
	
	time2=fecha_hoy.getTime()/60000;
	
	//verificamos si el tiempo de la publicacion es mayor o menor al tiempo de hoy a las 0 0 horas
	
	fecha_hoy2=new Date();
	fecha_hoy2.setHours(0);				
	fecha_hoy2.setMinutes(0);
	
	time3=fecha_hoy2.getTime()/60000;
	
	if(time3<=time1){
		//osea que la publicación que analizamos se hizo hoy, entonces podemos hallar si se hizo hace horas o minutos
		
		minutos_diferencia=parseInt(time2-time1);
	
		if(minutos_diferencia>=60){
			
				//aquí podemos verificar si el número de horas sobre pasa al número de horas transcurridas en el día
				
				if(parseInt(minutos_diferencia/60)==1){
					
					retorno= "Hace "+parseInt(minutos_diferencia/60)+" hora";
				}else{
					
					retorno= "Hace "+parseInt(minutos_diferencia/60)+" horas";
				}
		
		}else{
			if(minutos_diferencia<=0){
				retorno= "Hace 1 minuto";
			}else{
				
				retorno= "Hace "+minutos_diferencia+" minutos";
			}
		}
	}else{
		//significa que la publicacion se hizo el día anterior, por lo que la referencia de tiempo la cambiamos a time3, para que se calculen los días correspondientes
	
		time2=time3;
		
		minutos_diferencia=parseInt(time2-time1);
		
		minutos_diferencia+=1440; //le aumentamos la cantidad de minutos de 1 día para poder hacer cálculos referenciales correctos
		
				horas_diferencia=minutos_diferencia/60;
				
				if(parseInt(horas_diferencia/24)==1){
					
					retorno= "Ayer";
				}else{
							
					//ahora veremos si han pasado semanas
					
					if(parseInt(horas_diferencia/24)>=7){
						
						dias_diferencia=parseInt(horas_diferencia/24);
						
						if(parseInt(dias_diferencia/7)==1){
							
							retorno= "Hace 1 semana";
						
						}else{
							
							//veremos aca si pasa del mes
							if(parseInt(dias_diferencia/7)>=4){
								
								meses_diferencia=dias_diferencia/30;
								
								if(parseInt(meses_diferencia)==1){
									retorno= "Hace 1 mes";
								
								}else{
									if(parseInt(meses_diferencia)==0){ //si sale sero es pq los días de diferencia son 28 o 29
										retorno= "Hace 1 mes";
									}else{
										retorno= "Hace "+parseInt(meses_diferencia)+" meses";
										
									}
								
								}
								
							}else{
								retorno= "Hace "+parseInt(dias_diferencia/7)+" semanas";
							}
						}
						
					}else{
						
						retorno= "Hace "+parseInt(horas_diferencia/24)+" días";
						
					}				
				}
	}
	
	
	return retorno;
			
	
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


function fun_calcula_minutos_entre_horas(hora1,hora2){ //hora1 - hora2
	
	if(fun_esblanco(hora2) || fun_esblanco(hora1)){
		return 0;
	}else{
	
		//es hoy
			//hallaremos entonces la diferencia en minutos
			
		var vals_hora1=hora1.split(":");
	
		var vals_hora2=hora2.split(":");
	
		var num_minutos_hora1=parseFloat(vals_hora1[0])*60+parseFloat(vals_hora1[1]);//tengo el num de minutos transcurridos hasta la hora del parametro
	
		var num_minutos_hora2=parseFloat(vals_hora2[0])*60+parseFloat(vals_hora2[1]);
		
		return num_minutos_hora1-num_minutos_hora2;

	}
}



/*
function fun_refresca_combo_box_con_tabla(arg_combo_box,arg_matriz,arg_cont_matriz,arg_indice1,arg_indice2){  //Esta función se encarga de refrescar cualquier combo box con información de una matriz, para esto debemos indicar que indices de cada registro queremos insertar en los values y options del combo box
	var fila="";
	var codigo_html="";
	for(var i=0;i<arg_cont_matriz;i++){
		fila='<option value="'+arg_matriz[i][arg_indice1]+'">'+arg_matriz[i][arg_indice2]+'</option>';
		codigo_html=codigo_html+fila;
	}
	$(arg_combo_box).html(codigo_html);
}*/
function fun_combobox_opcion_elegida(arg_combo_box){  //devuelve la opcion elegida en el combo box, no el ID del option, sino el HTML
	
	return $(arg_combo_box+' option[value="'+$(arg_combo_box).val()+'"]').html();
}


function fun_oculta_avisos_span(){
	$(".aviso_span_tipo1").hide();
}

///////////////funcion que verifica si una cadena está en blanco.

function fun_esblanco(arg_cadena){

	var valores= arg_cadena.split(" ");
	var blanco=true;

	for(var i=0;i<valores.length;i++){
		if(valores[i]){
			blanco=false;
		}
	}	
	return blanco;
	
}

function fun_esblanco_saltos(arg_cadena){ //revisa que sea blanco y que solo contiene saltos de linea y espacios
	
	var valores_saltos=arg_cadena.split("\n");
	var valores,blanco=true;
	
	for(var i=0;i<valores_saltos.length;i++){
		
		if(valores_saltos[i]){
			
			valores= valores_saltos[i].split(" ");
				
			for(var j=0;j<valores.length;j++){
				if(valores[j]){
					blanco=false;
				}
			}	
		}
		
	}
	
	return blanco;
	
}

function fun_es_cifra_hex(cifra){
	cifra=cifra+"";
	
	if(cifra=="0" || cifra=="1" || cifra=="2" || cifra=="3" || cifra=="4" || cifra=="5" || cifra=="6" || cifra=="7" || cifra=="8" || cifra=="9" || cifra=="A" || cifra=="a" || cifra=="B" ||  cifra=="b" ||  cifra=="C" ||  cifra=="c" ||  cifra=="D" ||  cifra=="d" ||  cifra=="E" ||  cifra=="e" ||  cifra=="F" ||  cifra=="f"  ){
		
		return true;		
		
	}else{
		
		return false;
	}
}


function fun_limpia_array(arg_arreglo){  //me devuelve el arreglo pero sin elementos repetidos

	var nuevo_arreglo=new Array();
	var cont=0;
	var valor;
	var existe;
	for(var i=0;i<arg_arreglo.length;i++){
			
		valor=arg_arreglo[i];
		existe=0;
		for(var j=0;j<cont;j++){
			if(nuevo_arreglo[j]==valor){
				existe=1;
			}
		}
		if(existe==0){
			nuevo_arreglo[cont]=valor;
			cont++;
		}
	}
	return nuevo_arreglo;
}



////////////////////////////////////////////////

function fun_get_objeto(arg_arreglo,arg_id,arg_celda){ /// Se harán comparaciones del objeto arg_id en los objetos del arreglo arg_arreglo, pero en el campo de cada objeto en la celda arg_celda (este es un indice secundario, ya que se supone que estamos tratando de un array de estructuras o mejor dicho, de objetos.) Si en caso hay varias concurrencias en el array, solo devolverá el objeto encontrado por primera vez.
	var objeto;
	var fin=0;

	for(var i=0;i<arg_arreglo.length && fin!=1;i++){
	//	("compara  "+arreglo[i][0]+"   "+id);
	
		if(arg_arreglo[i][arg_celda]==arg_id){
		//	("hola");
			fin=1;
			objeto=arg_arreglo[i];
		}
		
	}
	
	
	
	return objeto;
}

	
function fun_caracter_equiv(arg_codigo){

	switch(arg_codigo){
		case "&aacute;":return "á"; break;
		case "&eacute;":return "é"; break;
		case "&iacute;":return "í"; break;
		case "&oacute;":return "ó"; break;
		case "&uacute;":return "ú"; break;
		case "&Aacute;":return "Á"; break;
		case "&Eacute;":return "É"; break;
		case "&Iacute;":return "Í"; break;
		case "&Oacute;":return "Ó"; break;
		case "&Uacute;":return "Ú"; break;
		case "&ntilde;":return "ñ"; break;
		case "&Ntilde;":return "Ñ"; break;
		case "&uuml;":return "ü"; break;
		case "&Uuml;":return "Ü"; break;
		case "&#34;":return '"'; break;
		case "&#39;":return "'"; break;
		default: return 'none'; break;
	}
	

	}	

function fun_ignora_tildes(arg_palabra){  // ESTA FUNCION IGNORA LAS TILDES USADAS EN VOCALES, A MODO DE TRANSFORMARLAS A UNA REPRESENTACION "INCORRECTA" PERO QUE PUEDE SER USADA COMO UN ID DE ALGUNA OPERACION 
		
		
		
	arg_palabra=fun_replaceAll(arg_palabra,'á','a');

	arg_palabra=fun_replaceAll(arg_palabra,'é','e');

	arg_palabra=fun_replaceAll(arg_palabra,'í','i');

	arg_palabra=fun_replaceAll(arg_palabra,'ó','o');

	arg_palabra=fun_replaceAll(arg_palabra,'ú','u');

	arg_palabra=fun_replaceAll(arg_palabra,'Á','A');

	arg_palabra=fun_replaceAll(arg_palabra,'É','E');

	arg_palabra=fun_replaceAll(arg_palabra,'Í','I');

	arg_palabra=fun_replaceAll(arg_palabra,'Ó','O');

	arg_palabra=fun_replaceAll(arg_palabra,'Ú','U');

	arg_palabra=fun_replaceAll(arg_palabra,'ü','u');

	arg_palabra=fun_replaceAll(arg_palabra,'Ü','U');

	arg_palabra=fun_replaceAll(arg_palabra,'à','a');

	arg_palabra=fun_replaceAll(arg_palabra,'è','e');

	arg_palabra=fun_replaceAll(arg_palabra,'ì','i');

	arg_palabra=fun_replaceAll(arg_palabra,'ò','o');

	arg_palabra=fun_replaceAll(arg_palabra,'ù','u');

	arg_palabra=fun_replaceAll(arg_palabra,'À','A');

	arg_palabra=fun_replaceAll(arg_palabra,'È','E');

	arg_palabra=fun_replaceAll(arg_palabra,'Ì','I');


	arg_palabra=fun_replaceAll(arg_palabra,'Ò','O');

	arg_palabra=fun_replaceAll(arg_palabra,'Ù','U');


	
	return arg_palabra;
	
}



function fun_filtra_solo_letras_y_numeros(arg_palabra){


	i=0;
	nueva_palabra='';
	arg_palabra=fun_replaceAll(arg_palabra,'  ',' ');
	arg_palabra=fun_replaceAll(arg_palabra,' ','_');
	arg_palabra=fun_replaceAll(arg_palabra,'-','_');
	arg_palabra=fun_replaceAll(arg_palabra,'__','_');
	arg_palabra=fun_replaceAll(arg_palabra,'ñ','n');
	arg_palabra=fun_replaceAll(arg_palabra,'Ñ','n');



	while(arg_palabra[i]){
		if(fun_es_letra_cifra_guion_bajo(arg_palabra[i])){
			nueva_palabra+=arg_palabra[i];
		}
		i++;

	}
	return nueva_palabra;
}


function fun_tratamiento_caracteres_especiales(arg_palabra){   //esta funcion trata las comillas
		
	return fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(fun_replaceAll(arg_palabra,'(',"&#40;"),')',"&#41;"),'{',"&#123;"),'}',"&#125;"),'\\',"&#92;"),'>',"&gt;"),'<',"&lt;"),"'","&#39;"),'"',"&#34;");
	
}



function fun_invierte_tratamiento_carac_esp(arg_palabra){  

	var indice_ini=1,indice_fin;
	letra_equivalente='';
	while(indice_ini!=-1 && letra_equivalente!='none'){
		indice_ini=arg_palabra.indexOf("&");
		indice_fin=arg_palabra.indexOf(";");
		
		if(indice_ini!=-1){
		
			letra_equivalente=fun_caracter_equiv(arg_palabra.substring(indice_ini,indice_fin+1));	
			arg_palabra=arg_palabra.substring(0,indice_ini)+letra_equivalente+arg_palabra.substring(indice_fin+1,arg_palabra.length);
			
		}
	}
	return arg_palabra;
}

function fun_replaceAll(text,busca,reemplaza){
	
	while (text.toString().indexOf(busca)!=-1){
		
		text=text.toString().replace(busca,reemplaza);
		
	}
	return text;
}

function fun_getUrlVars() {
    var vars = {};
        
    
    if($("#get_id").val()){
    
    	vars['id'] = $("#get_id").val();
    }    
    
    if($("#gl_view").val()){
    
    	vars['view'] = $("#gl_view").val();
    }    
       
    if($("#get_id_album").val()){
    
    	vars['id_album'] = $("#get_id_album").val();
    }    
    
    if($("#get_id_foto").val()){
    
    	vars['id_foto'] = $("#get_id_foto").val();
    }    
    
    if($("#ver_rtr_alm").val()){
    
    	vars['ver_rtr_alm'] = $("#ver_rtr_alm").val();
    }    
    
    if($("#ref").val()){
    
    	vars['ref'] = $("#ref").val();
    }    
    
    if($("#id_pagina").val()){
    
    	vars['id'] = $("#id_pagina").val();
    }    
    
    
    
    return vars;
}


//limpia un parrafo quitando espacios en blanco iniciales, finales y dobles espacios y dobles saltos de linea

function fun_limpieza_parrafo(cadena){
	
	while(cadena.toString().indexOf("\n\n\n")!=-1){
		cadena=cadena.replace("\n\n\n","\n\n");
	}
	
	if(cadena.toString().indexOf("\n\n")==0){
		cadena=cadena.substring(2,cadena.length);
	}
	if(cadena.toString().indexOf("\n")==0){
		cadena=cadena.substring(1,cadena.length);
	}
	
	if(cadena.substring(cadena.length-1,cadena.length)=='\n\n'){		
		cadena=cadena.substring(0,cadena.length-2);
	}	
	if(cadena.substring(cadena.length-1,cadena.length)=='\n'){		
		cadena=cadena.substring(0,cadena.length-1);
	}
	
	
	while(cadena.toString().indexOf("\ \ ")!=-1){
		cadena=cadena.replace("\ \ "," ");
	}
	
	if(cadena.toString().indexOf(" ")==0){
		cadena=cadena.substring(1,cadena.length);
	}
	
	if(cadena.substring(cadena.length-1,cadena.length)==' '){
		
		cadena=cadena.substring(0,cadena.length-1);
	}	
	
	return cadena;	
}

function fun_convierte_cadena_parrafos_li(cadena){
	//convierte la cadena que viene con caracteres \n  a parrafos separados por tags de tipo <li>

	var cadena_html="";
	if(!fun_esblanco(cadena)){
	
		
		var parrafos=cadena.split("\n");
		
		for(var index in parrafos){
			cadena_html+="<li>"+parrafos[index]+"</li>";
		}	
	}
	
	return cadena_html;
					
}
function fun_convierte_cadena_parrafos_p(cadena){
	//convierte la cadena que viene con caracteres \n  a parrafos separados por tags de tipo <li>

	var cadena_html="";
	if(!fun_esblanco(cadena)){
	
		
		var parrafos=cadena.split("\n");
		
		for(var index in parrafos){
			cadena_html+="<p>"+parrafos[index]+"</p>";
		}	
	}
	
	return cadena_html;
					
}

function fun_convierte_cadena_parrafos_br(cadena){
	//convierte la cadena que viene con caracteres \n  a parrafos separados por tags de tipo <li>

	if(!fun_esblanco(cadena)){
	
		cadena=fun_replaceAll(cadena,'\n','<br/>');
	
		
	}
	
	return cadena;
					
}



function fun_convierte_tags_enlaces(cadena){
	//Esta funcion se encarga de buscar tags de nomenclatura  [@ALIAS@NOMBRE] para volverlos un enlace externo
	var nueva_cadena='';

	if(!fun_esblanco(cadena)){
		
		var valores=cadena.split('[');
		//los que me interesan revisar son todos los valores desde el indice 1 hasta el final
		var tag,valores2,resto_de_cadena;
		
		nueva_cadena=valores[0];
		
		for(var i=1;valores[i];i++){
			
			if(valores[i].indexOf(']')!=-1){//significa que sí hay cierre y se sigue el análisis
				
				//hay que dividir valores[i]  en 2 partes, una es resto de cadena, se debe encontrar la primera incidencia del corchete cerrado para luego jalar todos los valroes hasta el final de valores[i]. Y lo que esté antes del corchete cerrado se guarda en tag, que será analizado para ver si es un tag valido
				resto_de_cadena=valores[i].substring(valores[i].indexOf(']')+1,valores[i].length);
				
				tag=valores[i].substring(0,valores[i].indexOf(']'));
				
				//ahora analizaremos el tag
				
				if(tag.indexOf(':')!=-1){
				
					//ahora debemos comprobar que tag tenga la forma correcta  es decir   :palabras:blablabla
					
					valores2=tag.split(':');
					
					if(valores2.length==3 && tag.substring(0,1)==':' && valores2[1] && !fun_esblanco(valores2[1]) && valores2[2] &&  !fun_esblanco(valores2[2])){
							
						//el tag está conformado por el alias en valores2[1]  y el nombre en valores [2]
						
						nueva_cadena+='<a href="'+GL_DNS+'/'+valores2[1]+'">'+valores2[2]+'</a>';			
						nueva_cadena+=resto_de_cadena;
						
					}else{
						//no cumple con la nomenclatura
						
						nueva_cadena+='['+valores[i];
					}
					
					
					
				}else{ // si no hay 2 puntos, entonces no hay tag
				
					nueva_cadena+='['+valores[i];
					
					
				}
				
			}else{ //si no hay cierre entonces solo se agrega la cadena normalmente
				
				nueva_cadena+='['+valores[i];
				
			}
		}
	
	}
	
	return nueva_cadena;
					
}

 ////////////////////////// MENSAJES POP UP PERSONALIZADOS

function FMSG_CAMPOS_OBLIGATORIOS(){
	fun_aviso_popup("Debe llenar todos los campos de caracter obligatorio.","Campos obligatorios no llenados",30,22);
}


function FMSG_ERROR_CONEXION(){
	alert("Hubo un problema en la conexi&oacute;n a la base de datos.<br>Consulte con el &Aacute;rea de Soporte<br>para encontrar una soluci&oacute;n al problema.","Error de conexi&oacute;n",30,22);
} 

function FMSG_DEBE_SELEC_OBJETO(arg_objeto){
	fun_aviso_popup("Debe seleccionar un "+arg_objeto+" de la lista.","Requisito",28,22);
}



function FMSG_NO_PERMITIDO(){
	fun_aviso_popup("Ocurri&oacute; un error al guardar los datos.<br/>Int&eacute;ntelo de nuevo.","Error",28,22);
}






var GL_CONSULTA_URL_ANTERIOR=new Array();
GL_CONSULTA_URL_ANTERIOR='';

var GL_ARRAY_OG_CONTENTS=new Array();
		

function fun_insert_http_url(text,id,f){
 
 		var url_pagina='ninguna';
		
		var pattern = new RegExp(GL_PATTERN); // fragment locater

					
		  	if((text.indexOf('http')!=-1 && pattern.test(text)) || text.indexOf('www.')==0  ){
		  		/*if(GL_LINK_POSTEADO==text){  //con esto no permitiremos que se hagan 2 consultas simultáneas si la url que se consulta es la misma
			  		url_pagina='repeat';
			  	}else{*/
			    	url_pagina=text;
			  //	}
	  		}else{
	  			 url_pagina='ninguna';
	  		}
		  		
		  		
			if(url_pagina!='ninguna' && url_pagina!='repeat'){
		
				var url_raiz;
					if(url_pagina.indexOf('/\/')!=-1){
						
						url_pagina=url_pagina.substring(url_pagina.indexOf('/\/')+2,url_pagina.length);
						
					}
					
					url_raiz=url_pagina.substring(0,url_pagina.indexOf('/'));
					
					
				if(!fun_es_link_de_imagen(url_pagina)){ //esto lo que hace es comprobar que el enlace no termine en .png, o .jpg, o .jpeg o .gif, de ser así entonces se hace otra acción
		
				$.ajax({
			        url: GL_DNS_POST+"/POST/lectura_curl.php",
			        type: "POST",
			        data:{url_pagina:url_pagina},
			        async:true,
			        beforeSend: function(objeto){			
			        },
			        
				success: function(data){
				
					if(!fun_esblanco(data)){
						
						/*if(data.substring(0,4)=='sql{'){
							
							var valores=data.substring(4,data.length).split('{');
							
					
							GL_LINK_POSTEADO=url_pagina;
							GL_ARRAY_OG_CONTENTS[id]=new Array();
							GL_ARRAY_OG_CONTENTS[id]['og_title']=valores[0];
							GL_ARRAY_OG_CONTENTS[id]['og_description']=valores[1];
							GL_ARRAY_OG_CONTENTS[id]['og_site_name']=valores[2];
							GL_ARRAY_OG_CONTENTS[id]['og_image']=valores[3];						
							GL_ARRAY_OG_CONTENTS[id]['og_image_bd']=valores[3];
							GL_ARRAY_OG_CONTENTS[id]['og_video_width']=valores[4];
							GL_ARRAY_OG_CONTENTS[id]['og_video_height']=valores[5];
							GL_ARRAY_OG_CONTENTS[id]['og_video']=valores[6];
							GL_ARRAY_OG_CONTENTS[id]['od']='bd'; //origen de la data = BASE DE DATOS
							
						}else{*/
						
							//antes de empezar, calculemos la url desnuda (sin parámetros o directorioS)
							
						
							//significa que es una página en html5
							
							pagina=data.substring(data.toLowerCase().indexOf('<head'),data.length);
							cabecera_pagina=pagina.substring(0,pagina.toLowerCase().indexOf('</head'));
							cabecera_pagina2=pagina.substring(0,pagina.toLowerCase().indexOf('</head'));
												
							array_metas=new Array();
							
							if(cabecera_pagina.toLowerCase()){
								while(cabecera_pagina.toLowerCase().indexOf('<meta')!=-1){
									
									cabecera_pagina=cabecera_pagina.substring(cabecera_pagina.toLowerCase().indexOf('<meta'),cabecera_pagina.length);				
									array_metas.push(cabecera_pagina.substring(0,cabecera_pagina.indexOf('>')+1));
									cabecera_pagina=cabecera_pagina.substring(cabecera_pagina.indexOf('>')+1,cabecera_pagina.length);
									
								}
							}
								
							if(cabecera_pagina2.toLowerCase()){
									
								while(cabecera_pagina2.toLowerCase().indexOf('<link')!=-1){
									
									cabecera_pagina2=cabecera_pagina2.substring(cabecera_pagina2.toLowerCase().indexOf('<link'),cabecera_pagina2.length);				
									array_metas.push(cabecera_pagina2.substring(0,cabecera_pagina2.indexOf('>')+1));
									cabecera_pagina2=cabecera_pagina2.substring(cabecera_pagina2.indexOf('>')+1,cabecera_pagina2.length);
									
								}
							}
													
							GL_ARRAY_OG_CONTENTS[id]=new Array();
							GL_ARRAY_OG_CONTENTS[id]['og_title']='';
							GL_ARRAY_OG_CONTENTS[id]['og_image']='';
							GL_ARRAY_OG_CONTENTS[id]['og_image_bd']='';
							GL_ARRAY_OG_CONTENTS[id]['og_description']='';
							GL_ARRAY_OG_CONTENTS[id]['og_video']='';
							for(var indice in array_metas){
							//	lower_case=array_metas[indice].toLowerCase();
								
									
								if(array_metas[indice].toLowerCase().indexOf('og:title')!=-1){
								//	("hola");
									GL_ARRAY_OG_CONTENTS[id]['og_title']=$(array_metas[indice]).attr('content');
									
								}/*else{
									
									if(array_metas[indice].indexOf('name="title"')!=-1 || array_metas[indice].indexOf("name='title'")!=-1){
									
										GL_ARRAY_OG_CONTENTS[id]['og_title']=$(array_metas[indice]).attr('content');
										
									}else{
										GL_ARRAY_OG_CONTENTS[id]['og_title']='';	
									}
								}*/
								
								
								if(array_metas[indice].toLowerCase().indexOf('og:description')!=-1){
									
									GL_ARRAY_OG_CONTENTS[id]['og_description']=$(array_metas[indice]).attr('content');
									
								}else{ //si no hay buscaremos de otra forma el contenido en otra meta
									
									if( fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_description']) && (array_metas[indice].toLowerCase().toLowerCase().indexOf('name="description"')!=-1 || array_metas[indice].toLowerCase().toLowerCase().indexOf("name='description'")!=-1)){
									
										GL_ARRAY_OG_CONTENTS[id]['og_description']=$(array_metas[indice]).attr('content');
										
									}
								
									
								}
								
								
									
									
								/*else{
										GL_ARRAY_OG_CONTENTS[id]['og_site_name']='';	
									}*/
								
								if(array_metas[indice].toLowerCase().indexOf('og:video:width')!=-1){
									
									GL_ARRAY_OG_CONTENTS[id]['og_video_width']=$(array_metas[indice]).attr('content');
									
								}
								
								if(array_metas[indice].toLowerCase().indexOf('og:video:height')!=-1){
									
									GL_ARRAY_OG_CONTENTS[id]['og_video_height']=$(array_metas[indice]).attr('content');
									
								}/*else{
										GL_ARRAY_OG_CONTENTS[id]['og_video_height']='';	
									}*/
								
												
									if(array_metas[indice].toLowerCase().indexOf('og:image')!=-1 && array_metas[indice].toLowerCase().indexOf('og:image:width')==-1 && array_metas[indice].toLowerCase().indexOf('og:image:height')==-1){
											
									GL_ARRAY_OG_CONTENTS[id]['og_image']=$(array_metas[indice]).attr('content');
									
									
									
									if(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/\/')==-1 ){
										
										GL_ARRAY_OG_CONTENTS[id]['og_image']='http:/\/'+url_raiz+GL_ARRAY_OG_CONTENTS[id]['og_image'].substring(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/'),GL_ARRAY_OG_CONTENTS[id]['og_image'].length);
										
									}else{
										
											if(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/\/')==0){
											
												GL_ARRAY_OG_CONTENTS[id]['og_image']='http:'+GL_ARRAY_OG_CONTENTS[id]['og_image'];
											
											}	
										}
									
									
									
								}else{
									if( fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_image']) && ( array_metas[indice].toLowerCase().indexOf("'image'")!=-1 || array_metas[indice].toLowerCase().indexOf('"image"')!=-1 || array_metas[indice].toLowerCase().indexOf('image_src')!=-1 )){
													
													if(array_metas[indice].toLowerCase().indexOf('content')!=-1 ){
														GL_ARRAY_OG_CONTENTS[id]['og_image']=$(array_metas[indice]).attr('content');
														
													}else{
														GL_ARRAY_OG_CONTENTS[id]['og_image']=$(array_metas[indice]).attr('href');
														
													}
														
															
													if(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/\/')==-1 ){
														
														GL_ARRAY_OG_CONTENTS[id]['og_image']='http:/\/'+url_raiz+GL_ARRAY_OG_CONTENTS[id]['og_image'].substring(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/'),GL_ARRAY_OG_CONTENTS[id]['og_image'].length);
														
													}else{
													
														if(GL_ARRAY_OG_CONTENTS[id]['og_image'].indexOf('/\/')==0){
														
															GL_ARRAY_OG_CONTENTS[id]['og_image']='http:'+GL_ARRAY_OG_CONTENTS[id]['og_image'];
														
														}	
													}
												}
								}
								
								if(array_metas[indice].toLowerCase().indexOf('"og:video"')!=-1 || array_metas[indice].toLowerCase().indexOf("'og:video'")!=-1){
												
									GL_ARRAY_OG_CONTENTS[id]['og_video']=$(array_metas[indice]).attr('content');
									
								}else{
									
									if(array_metas[indice].toLowerCase().indexOf("/embed/")!=-1  ){
										
							    		GL_ARRAY_OG_CONTENTS[id]['og_video']=$(array_metas[indice]).attr('content');
										  									
									}
								}
												
								/*else{ //si no hay buscaremos de otra forma el contenido en otra meta
									
									GL_ARRAY_OG_CONTENTS[id]['og_image']='';	
									
								}*/
								       			       
							}
						
						
							//Si despues del análisis de metas no encontramos title extraeremos el <title>
						
							if(fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_title'])){
								title=data.substring(data.toLowerCase().indexOf('<title'),data.toLowerCase().indexOf('</title>')+8);
								
								
								GL_ARRAY_OG_CONTENTS[id]['og_title']=$(title).html();
							}
							
							
							if(fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_description'])){
								
								body_pagina=data.substring(data.toLowerCase().indexOf('<body'),data.length);
								body_pagina=body_pagina.substring(0,body_pagina.toLowerCase().indexOf('</body'));
								
								parrafos_pagina="";
								parrafo_mas_largo='';
								
								while(body_pagina.toLowerCase().indexOf('<p ')!=-1 || body_pagina.toLowerCase().indexOf('<p>')!=-1){
									
									if(body_pagina.toLowerCase().indexOf('<p ')==-1){
										
										body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('<p>'),body_pagina.length);
										
									}else{
										
										if(body_pagina.toLowerCase().indexOf('<p>')==-1){
										
											body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('<p '),body_pagina.length);
											
										}else{
											
											if(body_pagina.toLowerCase().indexOf('<p>')<body_pagina.toLowerCase().indexOf('<p ')){
												body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('<p>'),body_pagina.length);
											}else{
												body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('<p '),body_pagina.length);
											}
											
										}
										
										
									}
									
											
									
									parrafo=body_pagina.substring(0,body_pagina.toLowerCase().indexOf('</p>')+4);
									
								
										//ahora que tenemos el parrafo, hacemos un bucle para eliminar todas las etiquetas y solo quedarnos con texto plano.
										
									parrafo=$(parrafo).text();
								
										if(parrafo_mas_largo.length<parrafo.length){
											parrafo_mas_largo=parrafo;
										}					
										
									
									body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('</p>')+4,body_pagina.length);
								
								}
								
								
								
								
								GL_ARRAY_OG_CONTENTS[id]['og_description']=parrafo_mas_largo;
								
							}
							
							
							
							
							
							
								
							if(fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_image'])){
								
								body_pagina=data.substring(data.toLowerCase().indexOf('<body'),data.length);
								body_pagina=body_pagina.substring(0,body_pagina.toLowerCase().indexOf('</body'));
								
								imgs_pagina="";
								url_mas_largo='';
								
								while(body_pagina.toLowerCase().indexOf('<img ')!=-1 ){
									
									body_pagina=body_pagina.substring(body_pagina.toLowerCase().indexOf('<img '),body_pagina.length);
																	
									
									img_pagina=body_pagina.substring(0,body_pagina.indexOf('>')+1);
								
								
										//ahora que tenemos el parrafo, hacemos un bucle para eliminar todas las etiquetas y solo quedarnos con texto plano.
									url_imagen='';
									if($(img_pagina).attr('src')){
									
										if($(img_pagina).attr('src').indexOf('/\/')==-1){
											
											url_imagen='http:/\/'+url_raiz+$(img_pagina).attr('src').substring($(img_pagina).attr('src').indexOf('/'),$(img_pagina).attr('src').length);
											
										}else{
											if($(img_pagina).attr('src').indexOf('/\/')==0){
												
												url_imagen='http:'+$(img_pagina).attr('src');
												
											}else{
												
												url_imagen=$(img_pagina).attr('src');
												
											}				
											
										}
										
									}
										
								
										if(url_mas_largo.length<url_imagen.length && (url_imagen.toLowerCase().indexOf('.jpg')!=-1 || url_imagen.toLowerCase().indexOf('.jpeg')!=-1)){
											url_mas_largo=url_imagen;
										}
										
									
									body_pagina=body_pagina.substring(body_pagina.indexOf('>')+1,body_pagina.length);
								
								}
								
								
								
								
								GL_ARRAY_OG_CONTENTS[id]['og_image']=url_mas_largo;
								
							}
							
								
							
						
						
								GL_ARRAY_OG_CONTENTS[id]['od']='page'; //origen de la data = VISITA A LA PAGINA
								
								
								if(!fun_esblanco(GL_ARRAY_OG_CONTENTS[id]['og_title'])){
									
									
									link=url_pagina;
								
									if(url_pagina.indexOf('/\/')==-1 ){
											
										link='http:/\/'+url_pagina;
											
									}else{
										
										if(url_pagina.indexOf('/\/')==0 ){
											
											link='http:'+url_pagina;
											
										}
									}
										
									GL_ARRAY_OG_CONTENTS[id]['og_url']=link;
										
									GL_ARRAY_OG_CONTENTS[id]['og_site_name']=url_raiz;
									GL_ARRAY_OG_CONTENTS[id]['og_image_bd']='';
									
									
								//	fun_guardar_datos_link_post(GL_LINK_POSTEADO,GL_ARRAY_OG_CONTENTS[id]['og_title'],GL_ARRAY_OG_CONTENTS[id]['og_description'],GL_ARRAY_OG_CONTENTS[id]['og_site_name'],GL_ARRAY_OG_CONTENTS[id]['og_image'],GL_ARRAY_OG_CONTENTS[id]['og_video_width'],GL_ARRAY_OG_CONTENTS[id]['og_video_height'],GL_ARRAY_OG_CONTENTS[id]['og_video'],id_vozeo);	
									
								}
								
								
							if(typeof f == 'function'){
								f();
							}
					
				
							
							
								
						/*}*/

							

					}
				}	
				
				});	
				
				}else{
							
							
									
							link=url_pagina;
							if(url_pagina.indexOf('/\/')==-1 ){
									
								link='http:/\/'+url_pagina;
									
							}else{
								
								if(url_pagina.indexOf('/\/')==0 ){
									
									link='http:'+url_pagina;
									
								}
							}
								
							GL_ARRAY_OG_CONTENTS[id]['og_url']=link;
							GL_ARRAY_OG_CONTENTS[id]['og_title']=link;
							GL_ARRAY_OG_CONTENTS[id]['og_image']=link;
							GL_ARRAY_OG_CONTENTS[id]['og_description']='';
							GL_ARRAY_OG_CONTENTS[id]['og_video']='';
							GL_ARRAY_OG_CONTENTS[id]['og_video_width']='';
							GL_ARRAY_OG_CONTENTS[id]['og_video_height']='';
							
									
								
							GL_ARRAY_OG_CONTENTS[id]['og_site_name']=url_raiz;
							GL_ARRAY_OG_CONTENTS[id]['og_image_bd']='';
								
									//fun_guardar_datos_link_post(GL_LINK_POSTEADO,GL_ARRAY_OG_CONTENTS[id]['og_title'],GL_ARRAY_OG_CONTENTS[id]['og_description'],GL_ARRAY_OG_CONTENTS[id]['og_site_name'],GL_ARRAY_OG_CONTENTS[id]['og_image'],GL_ARRAY_OG_CONTENTS[id]['og_video_width'],GL_ARRAY_OG_CONTENTS[id]['og_video_height'],GL_ARRAY_OG_CONTENTS[id]['og_video'],id_vozeo);	
							if(typeof f == 'function'){
								f();
							}					
						}
				
			
			}else{
				if(url_pagina=='ninguna'){
				
					link='';
					GL_ARRAY_OG_CONTENTS[id]=new Array();
					GL_ARRAY_OG_CONTENTS[id]['og_title']='';
					GL_ARRAY_OG_CONTENTS[id]['og_image']='';
					GL_ARRAY_OG_CONTENTS[id]['og_image_bd']='';
					GL_ARRAY_OG_CONTENTS[id]['og_description']='';
					GL_ARRAY_OG_CONTENTS[id]['og_video']='';
				}
			
			}
			
			
		
}








function fun_es_link_de_imagen(url){
	
	if(url.substring(url.length-4,url.length).toLowerCase()=='.png' || url.substring(url.length-4,url.length).toLowerCase()=='.jpg' || url.substring(url.length-5,url.length).toLowerCase()=='.jpeg' || url.substring(url.length-4,url.length).toLowerCase()=='.gif'){
		return true;
	}else{
		return false;
	}
}


function fun_guardar_datos_link_post(link_name,titulo,descripcion,sitio_web,nombre_imagen,width_video,height_video,video,id_vozeo){

	$.ajax({
        url: GL_DNS_POST+"/POST/GRL/guardar_link_posteado.php",
        type: "POST",
        data:{link_name:link_name,titulo:fun_tratamiento_caracteres_especiales(titulo),descripcion:fun_tratamiento_caracteres_especiales(descripcion),sitio_web:sitio_web,nombre_imagen:nombre_imagen,width_video:width_video,height_video:height_video,video:video},
        async:true,
        beforeSend: function(objeto){			
        },
        
	success: function(data){
	//	
		GL_ARRAY_OG_CONTENTS[id][id_vozeo]['og_image_bd']=data;
										
	}	
	
	});	
	
}



var GL_TIEMPO_INTERVAL_HIDE_POPUP_GEOCOMENT=500;

var GL_WIDTH_IFRAME_VIDEO=500;
var GL_HEIGHT_IFRAME_VIDEO=280;


$(document).ready(function(){
	

	if($(window).width()<=500){
		GL_WIDTH_IFRAME_VIDEO=$(window).width()-20;
		GL_HEIGHT_IFRAME_VIDEO=GL_HEIGHT_IFRAME_VIDEO*GL_WIDTH_IFRAME_VIDEO/500;
	}



	$('body').on('click','.http_embed_video',function(){

		html_video=fun_genera_iframe_object_video($(this).data('url_video'));

		$(this).html(html_video);
		$(this).removeClass('http_embed_video');
		$(this).find('iframe').click();
	});

	
});

//GL_HEIGHT_IFRAME_VIDEO=GL_HEIGHT_IFRAME_VIDEO*(423)/GL_WIDTH_IFRAME_VIDEO;


	function fun_muestra_iframe_video(object,video,arg_origen){
		
		var object_replace;
		var class_busca="";
		while(class_busca.indexOf('http_external')==-1){
			object_replace=$(object).parent();
			class_busca=$(object_replace).attr("class");			
		}
		
		var object_padre_replace=$(object_replace).parent(); //necesitamos al padre para insertar el html que pertenece al iframe
		/*
		var nuevo_width=400;
		
		var nuevo_height=nuevo_width*height/width;*/
		var html_video;
		
		
		if(!$(object).data('u')){
		
			html_video=fun_genera_iframe_object_video(video);
			//(html_video);
			$(object_padre_replace).html(html_video);
		
		}else{
			
			html_video=fun_genera_iframe_object_video(video);
			//(html_video);
			$(object_padre_replace).html(html_video);
			
			area='';
			switch(arg_origen){
				case 'entorno': area='.div_muro_contenido'; break;
				case 'entorno_perfil': area='#content_hor';break;
				case 'popup_mapa':
				case 'popup':
				 area='#popup_coment_senalado_mapa';break;
			}	
			
			id=	GL_MENSAJES_GEOUBICADOS[$(object).data('u')][$(object).data('f')][$(object).data('h')]['id'];
					
			
		}
				
		$(object_padre_replace).find('iframe').click();
		
	}
	


	function fun_genera_iframe_object_video(video){
		
		if(video.indexOf('youtube')!=-1){
				
			video=video.replace('/embed/','/v/');
			
				html_video='<object type="application/x-shockwave-flash" data="'+video+'?autohide=1&amp;version=3&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;showsearch=0" height="'+Math.round(GL_HEIGHT_IFRAME_VIDEO,0)+'" width="'+Math.round(GL_WIDTH_IFRAME_VIDEO,0)+'" id="ff41e1c08">'+
					'<param name="allowscriptaccess" value="never">'+
					'<param name="flashvars" value="height='+Math.round(GL_HEIGHT_IFRAME_VIDEO,0)+'&amp;width='+Math.round(GL_WIDTH_IFRAME_VIDEO,0)+'">'+
					'<param name="movie" value="'+video+'?autohide=1&amp;version=3&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;showsearch=0">'+
					'<param name="swf" value="'+video+'?autohide=1&amp;version=3&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;showsearch=0">'+
					'<param name="color" value="#FFFFFF">'+
					'<param name="width" value="'+Math.round(GL_WIDTH_IFRAME_VIDEO,0)+'">'+
					'<param name="height" value="'+Math.round(GL_HEIGHT_IFRAME_VIDEO,0)+'">'+
					'<param name="version" value="0">'+
					'<param name="scale" value="scale">'+
					'<param name="allowFullScreen" value="true">'+
					'<param name="salign" value="tl">'+
					'<param name="wmode" value="opaque">'+
					'</object>';
		}else{
			if(video.indexOf("?")==-1 ){
				html_video='<iframe width="'+Math.round(GL_WIDTH_IFRAME_VIDEO,0)+'" height="'+Math.round(GL_HEIGHT_IFRAME_VIDEO,0)+'" src="'+video+'?autoplay=1" frameborder="0" ></iframe>';
				
			}else{
				html_video='<iframe width="'+Math.round(GL_WIDTH_IFRAME_VIDEO,0)+'" height="'+Math.round(GL_HEIGHT_IFRAME_VIDEO,0)+'" src="'+video+'&autoplay=1" frameborder="0" ></iframe>';
			
			}
		}
		return html_video;
	}
	
	function fun_texto_habilita_enlaces(mensaje){  //esta funcion se encarga de tomar un mensaje X y descrubre si hay enlaces dentro agregándo las etiquetas <a> correspondientes.

		 var pattern = new RegExp(GL_PATTERN); // fragment locater
			
 		 var supvalores=mensaje.split('\n');
 		 var valores;
 		 var nuevo_mensaje='';
 		 
 		 for(var j=0;j<supvalores.length;j++){
 		 	
 			valores=supvalores[j].split(' ');
	  
			
			  
	  
			  for(var i=0;i<valores.length;i++){
			/*  	
 		 if(valores[i].indexOf('https://www.youtube.com/watch?v=Ychm-SpvH3M')!=-1){
 		 	alert((valores[i].indexOf('http')!=-1 && pattern.test(valores[i])) || valores[i].indexOf('www.')==0  );		 	
 		 }*/
			  	if((valores[i].indexOf('http')!=-1 && pattern.test(valores[i])) || valores[i].indexOf('www.')==0){
			  	
			  	
				  	//se debe revisar que el último caracter debe ser una letra, o un número o un guion bajo
			  		
			  		resto='';
			  		cont=valores[i].length;
			  		while(!fun_es_letra_cifra_guion_bajo(valores[i].substring(cont-1,cont))){
			  			resto=valores[i].substring(cont-1,cont)+resto;
			  			cont--;
			  		}
			  		
			  		valores[i]=valores[i].substring(0,cont);
			  		
			  		if(valores[i].indexOf('/\/')==-1){
			  			nuevo_mensaje+='<a target="_blank" href="http:/\/'+valores[i]+'">'+valores[i]+'</a>'+resto;
			  		}else{
			  			if(valores[i].indexOf('/\/')==0){
			  				nuevo_mensaje+='<a target="_blank" href="http:'+valores[i]+'">'+valores[i]+'</a>'+resto;
			  			}else{
			  				nuevo_mensaje+='<a target="_blank" href="'+valores[i]+'">'+valores[i]+'</a>'+resto;
			  			}
			  		}			  		
			  		
			  	}else{
			  	  	
				  	if((valores[i].indexOf('http')!=-1 && pattern.test(valores[i])) || valores[i].indexOf('www.')==0){
				  	
				  	
					  	//se debe revisar que el último caracter debe ser una letra, o un número o un guion bajo
				  		
				  		resto='';
				  		cont=valores[i].length;
				  		while(!fun_es_letra_cifra_guion_bajo(valores[i].substring(cont-1,cont))){
				  			resto=valores[i].substring(cont-1,cont)+resto;
				  			cont--;
				  		}
				  		
				  		valores[i]=valores[i].substring(0,cont);
				  		
				  		if(valores[i].indexOf('/\/')==-1){
				  			nuevo_mensaje+='<a target="_blank" href="http:/\/'+valores[i]+'">'+valores[i]+'</a>'+resto;
				  		}else{
				  			if(valores[i].indexOf('/\/')==0){
				  				nuevo_mensaje+='<a target="_blank" href="http:'+valores[i]+'">'+valores[i]+'</a>'+resto;
				  			}else{
				  				nuevo_mensaje+='<a target="_blank" href="'+valores[i]+'">'+valores[i]+'</a>'+resto;
				  			}
				  		}			  		
				  		
				  	}else{
				  		
				  		nuevo_mensaje+=valores[i];
				  	}		
			  	
			  		
			  	}
			  	if(i+1<valores.length){			  		
			  		nuevo_mensaje+=' '; 
			  	}			  
			  }
 		 	
			  	nuevo_mensaje+='\n';
 		 }
 		 
		    //debemos quitar el último salto de línea que se ha agregado
		    nuevo_mensaje=nuevo_mensaje.substring(0,nuevo_mensaje.length-1);
	
	
		return nuevo_mensaje;
		  
	}
	
function fun_es_letra_cifra_guion_bajo(caracter){ //comprueba que es una letra o un número o un guion bajo

	caracter=caracter.toLowerCase();
	
	
	if(caracter=="0" || caracter=="1" || caracter=="2" || caracter=="3" || caracter=="4" || caracter=="5" || caracter=="6" || caracter=="7" || caracter=="8" || caracter=="9" || caracter=="a" || caracter=="b" || caracter=="c" ||  caracter=="d" ||  caracter=="e" ||  caracter=="f" ||  caracter=="g" ||  caracter=="h" ||  caracter=="i" ||  caracter=="j" ||  caracter=="k" ||  caracter=="l" ||  caracter=="m" ||  caracter=="n" ||  caracter=="ñ" ||  caracter=="o" ||  caracter=="p" ||  caracter=="q" ||  caracter=="r" ||  caracter=="s" ||  caracter=="t" ||  caracter=="u" ||  caracter=="v" ||  caracter=="w" ||  caracter=="x" ||  caracter=="y" ||  caracter=="z"  ||  caracter=="_" ||  caracter=="-"  ){
		
		return true;		
		
	}else{
		
		return false;
	}
	
}
	
	
function fun_distancia_long_lat_km(lat1, lon1, lat2, lon2)
  {
  rad = function(x) {return x*Math.PI/180;};

  var R     = 6378.137;                          //Radio de la tierra en km
  var dLat  = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;

  return d.toFixed(1);                      //Retorna tres decimales
}





function fun_carga_completa_img(img){
	$(img).css('opacity','1');
	$(img).css('filter','alpha(opacity=100)');
}



var GL_SONIDO_ACTIVADO;
$(document).ready(function(){
	
/*
setInterval(function(){
	
	$(".txt_hora_entrada").each(function(){
		
		var txt_hora=$(this).html();
		
		if(txt_hora.indexOf('minuto')!=-1){
			vals=txt_hora.split(' ');
			txt_minutos=vals[1];
			txt_minutos=parseInt(txt_minutos)+1;
			
			if(txt_minutos==60){
				txt_minutos='Hace 1 hora';
			}else{
				txt_minutos='Hace '+txt_minutos+' minutos';
			}
			$(this).html(txt_minutos);
		}
		
		
	});
		
	
	$(".fecha_coment").each(function(){
		
		var txt_hora=$(this).html();
		
		if(txt_hora.indexOf('minuto')!=-1){
			vals=txt_hora.split(' ');
			txt_minutos=vals[1];
			txt_minutos=parseInt(txt_minutos)+1;
			
			if(txt_minutos==60){
				txt_minutos='Hace 1 hora';
			}else{
				txt_minutos='Hace '+txt_minutos+' minutos';
			}
			$(this).html(txt_minutos);
		}
		
	});
	
	
	$(".fecha_resumen_notif").each(function(){
		
		var txt_hora=$(this).html();
		
		if(txt_hora.indexOf('minuto')!=-1){
			vals=txt_hora.split(' ');
			txt_minutos=vals[1];
			txt_minutos=parseInt(txt_minutos)+1;
			
			if(txt_minutos==60){
				txt_minutos='Hace 1 hora';
			}else{
				txt_minutos='Hace '+txt_minutos+' minutos';
			}
			$(this).html(txt_minutos);
		}
		
	});
	
	
},60000);
*/
});		



function fun_diferencia_horaria(fecha,hora,modo){ //fecha en formato aaaa-mm-dd
	
	//Lo que hace esta funciön es recibir una fecha y hora en UTC y la transforma a nuestra franja horaria.
// si por decir viene una fecha y hora tipo 1 de noviembre a las 15, esta funcion va a retornar 1 de noviembre a las 10, ya que hay 5 horas de diferencia entre UTC y nuestra franja horaria
	
	var diferencia_horaria=0;
	if(GLOBAL_HOY_DIA==GLOBAL_UTC_DIA){
		diferencia_horaria=GLOBAL_HORA -GLOBAL_UTC_HORA;
	}else{
		if(GLOBAL_HOY_DIA<GLOBAL_UTC_DIA){
			 //si mi dia es menor que el dia utc entonces hallamos la distancia de las horas (diferencia de cada una con su propio día) y le pondremos valor negativo, puesto que mi día está atrasado con respecto a UTC
			 
			 //hay que verificar si la diferencia es de 1 día o si se trata de una diferencia mayor, porque en ese caso se trataría de que hoy día es día 1 y el dia utc es día 30
			 if(GLOBAL_HOY_DIA==GLOBAL_UTC_DIA-1){
				diferencia_horaria=-1*(GLOBAL_UTC_HORA+(24-GLOBAL_HORA));
			 	
			 }else{
			 	//si no es esta la diferencia entonces hay que considerar que el día de hoy es 1 y el global utc es 30, significa que estamos adelantados y no atrasados
			 	
				diferencia_horaria=(GLOBAL_HORA+(24-GLOBAL_UTC_HORA));
			 }
		}else{
			if(GLOBAL_HOY_DIA==GLOBAL_UTC_DIA+1){//si es un dia mayor entonces hay que verificar que solo sea 1 día mayor, ya que si es más significa que la diferencia no es de dias sino de un mes
				
				diferencia_horaria=(GLOBAL_HORA+(24-GLOBAL_UTC_HORA));
			}else{
				//si es mayor por más de 1 día entonces es probable que la diferencia sea por que el global hoy día es un día 30 y el dia UTC es un día 1
				//para este caso la diferencia es por meses, entocnes significa que estamos atrasados y no adelantados
				
				diferencia_horaria=-1*(GLOBAL_UTC_HORA+(24-GLOBAL_HORA));
			}
			
		}
	}
	
	vals_hora=hora.split(':');
	hora=vals_hora[0];
	minutos=vals_hora[1];
	
	segundos=vals_hora[2];
	if(!segundos){
		segundos='00';
	}
	
	vals_fecha=fecha.split('-');
	dia=vals_fecha[2];
	mes=vals_fecha[1];
	anio=vals_fecha[0];
	
	
	if(modo=='normal-UTC'){
		//Esto significa que la conversión se hace desde una hora normal hacia UTC

		var date = new Date(anio,mes-1,dia,parseFloat(hora)-diferencia_horaria,minutos,segundos);
	}else{
		//UTC-norma, esto significa que la conversión se hace desde UTC a Normal
		var date = new Date(anio,mes-1,dia,parseFloat(hora)+diferencia_horaria,minutos,segundos);
	}
	
	
	var objeto=new Object();
	objeto.fecha=date.getFullYear()+'-'+((date.getMonth()+1<10)? '0'+(date.getMonth()+1):date.getMonth()+1)+'-'+((date.getDate()<10)? '0'+date.getDate():date.getDate());
	objeto.hora=date.getHours()+':'+((date.getMinutes()<10)? '0'+date.getMinutes():date.getMinutes())+':'+((date.getSeconds()<10)? '0'+date.getSeconds():date.getSeconds());
	return objeto;
}
	
	


var GL_MAX_POSIBLS_USER_MENCIONES=3;

function fun_expandtext(textArea){

	while (textArea.rows > 2 &&	textArea.scrollHeight < textArea.offsetHeight){
		textArea.rows--;
	}
	
	var h=0;	
	while (textArea.scrollHeight > textArea.offsetHeight && h!==textArea.offsetHeight)
	{
		h=textArea.offsetHeight;
		textArea.rows++;
	}
//	textArea.rows++;
	if($('#content_hor').css('display')=='block'){
		fun_ordena_publicaciones_horizontales();
	}
}


var GL_ARRAY_AMIGOS_RELEVANTES=new Array();
var GL_ARRAY_AMIGOS_RELEVANTES_DATA=new Array();
var GL_NUM_AMIGOS_RELEVANTES=0;





		
	function callEvaluateUserIDFb(id){
			
		$.ajax({
			url:GL_DNS+"/POST/GRL/set_open_knawer.php",
			success:function(data){
					
				document.location='';
			}
		});
	  
	}
	
	
	function fun_accion_carga_img(obj){
		$(obj).css('opacity','1');
		$(obj).css('filter','alpha(opacity=100)');
	}
	
	function fun_accion_parent_carga_img(obj,num_parents){
		
		for(var i=0;i<num_parents;i++){
			obj=$(obj).parent();
		}
		
		$(obj).css('opacity','1');
		$(obj).css('filter','alpha(opacity=100)');
		
	}
	
	function fun_accion_circular_carga_img(obj){
				
		$(obj).css('transform','scale(1) rotate(0deg)');
		$(obj).css('-ms-transform','scale(1) rotate(0deg)');
		$(obj).css('-moz-transform','scale(1) rotate(0deg)');
		$(obj).css('-webkit-transform','scale(1) rotate(0deg)');
		$(obj).css('-o-transform','scale(1) rotate(0deg)');
		
	}
	
	
	function fun_accion_crece_carga_img(obj){
				
		$(obj).css('transform','scale(1)');
		$(obj).css('-ms-transform','scale(1)');
		$(obj).css('-moz-transform','scale(1)');
		$(obj).css('-webkit-transform','scale(1)');
		$(obj).css('-o-transform','scale(1)');
		
	}
	
	
	
	

$(document).on("ready",function(){
			

	
var	$GL_CLICK_DIV_CONFIG=false;

$('body').on('click','#menu_cabecera',function(){
	$('#div_menu_sesion').slideDown(300);
	$GL_CLICK_DIV_CONFIG=true;
});


$('html').click(function(){
	if(!$GL_CLICK_DIV_CONFIG){	
		$('#div_menu_sesion').slideUp(300);	
	}
	$GL_CLICK_DIV_CONFIG=false;
});
	
/*
$('body').on('click','.enlace_cerrar_sesion',function(){
		
	if(GL_DISPOSITIVO=='web'){
		$.ajax({
			url:"POST/close.php",
			success:function(data){
				
					
				document.location=GL_DNS;
			}
		});
	}else{
	
	}	
});*/

	
	
$('body').on('click','.popup_auto_centrado',function(event){
	fun_detener_onclick(event);	
});	

$('body').on('click','.protector_popup_auto_centrado',function(){
	if($(this).data('bloquea_fadeout')!='si'){
		
		$(this).fadeOut(300);	
	}
});


});

	
	var GL_CLICK_POPUP_HELP=false;
	
	
function fun_efecto_escribir(texto,div,velocidad){  //velocidad está dada en milisegundos
	
			var cont=0;
			var intervalo=setInterval(function(){
				
				if(cont==texto.length){					
					clearInterval(intervalo);
				}else{
					
					$(div).append(texto.substring(cont,cont+1));
					cont++;
				}
				
			},velocidad);
}





function fun_cancel_buble_event(e)
{
    if (!e)
      e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
    
      e.stopPropagation();
    }
    //IE8 and Lower
    else {
    
      e.cancelBubble = true;
    }
}


function fun_height_document(){
	var B = document.body,
    H = document.documentElement,height;

	if (typeof document.height !== 'undefined') {
	    height = document.height // For webkit browsers
	} else {
	    height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
	}
	return height;
}




var GL_URL_PARAMS;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    GL_URL_PARAMS = {};
    while (match = search.exec(query))
       GL_URL_PARAMS[decode(match[1])] = decode(match[2]);
})();



function fun_max_scrolltop(obj){
	elem = $(obj);	
	maxScrollTop = elem[0].scrollHeight - elem.outerHeight();							
	return maxScrollTop;
					
}



function fun_formatear_fecha(fecha,tipo){
	// dia/mes/anio
	switch(tipo){

		case '--?':
			var partes =fecha.split('-');
			return partes[2]+'-'+partes[1]+'-'+partes[0];
		break;

		case '//?':
			var partes =fecha.split('/');
			return partes[2]+'/'+partes[1]+'/'+partes[0];
		break;

		case '/-?':
			var partes =fecha.split('/');
			return partes[2]+'-'+partes[1]+'-'+partes[0];
		break;
		case '-/?':
	// anio/mes/dia

			var partes =fecha.split('-');
			return partes[2]+'/'+partes[1]+'/'+partes[0];
		break;
	}
} 


function fun_fecha_sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}