  
      <section id="" class="columna_estadisticas" data-area="estadisticas">             
         <div class="sup">


		        <div class="comp-consultor-elemento" data-elemento="cuentas" data-condicion="consulta_1" data-conteo="1" data-recarga="false"  data-btns_elemento="false">		          
		          <!--
		          <condicion data-iddom="condicion_clasificacion" data-campo="id_profesor" data-valor="22"></condicion>-->		          
		          <estructura>

					<div class="izq">

		         		<div class="reglon">
		         			<h1 style="font-size: 16px; margin-bottom: 10px;">Resumen del Mes</h1>
		         			<div>Interacción con 0 estudiantes</div>
		         		</div>
		         		<div class="reglon plomo">
		         			<div class="texto">Clases aprobadas:</div>
		         			<div class="monto">0</div>
		         		</div>
					
		         	</div>
		         	
		         	<div class="cent">

		         		<div class="reglon">
		         			<h1 style="font-size: 16px; margin-bottom: 10px;">Resumen Total</h1>
		         			<div>Interacción con 0 estudiantes</div>
		         		</div>
		         		<div class="reglon plomo">
		         			<div class="texto">Clases aprobadas:</div>
		         			<div class="monto">0</div>
		         		</div>
					
		         	</div>
		         	<div class="der">
		         		<div class="fecha_limite" style="font-size: 14px">
		         			Pronto
		         		</div>
		         		<div class="btn_realizar_pago boton_invictos gris comp-btn-abrir-popup" style="padding-left: 20px; padding-right: 20px;">
		         			Quiero ser Premium
		         		</div>
		         	</div>

		          </estructura>
		          
		          <vacio>
		          <estructura>

					<div class="izq">

		         		<div class="reglon">
		         			<h1 style="font-size: 16px; margin-bottom: 10px;">Resumen del Mes</h1>
		         			<div>Interacción con 0 estudiantes</div>
		         		</div>
		         		<div class="reglon plomo">
		         			<div class="texto">Clases aprobadas:</div>
		         			<div class="monto">0</div>
		         		</div>
					
		         	</div>
		         	
		         	<div class="cent">

		         		<div class="reglon">
		         			<h1 style="font-size: 16px; margin-bottom: 10px;">Resumen Total</h1>
		         			<div>Interacción con 0 estudiantes</div>
		         		</div>
		         		<div class="reglon plomo">
		         			<div class="texto">Clases aprobadas:</div>
		         			<div class="monto">0</div>
		         		</div>
					
		         	</div>
		         	<div class="der">
		         		<div class="fecha_limite" style="font-size: 14px">
		         			Pronto
		         		</div>
		         		<div class="btn_realizar_pago boton_invictos gris comp-btn-abrir-popup" style="padding-left: 20px; padding-right: 20px;">
		         			Quiero ser Premium
		         		</div>
		         	</div>

		          </estructura>
		          </vacio>

		        </div>	

         </div>
         <div class="btns_control">
			<div class="bloque_control">					
	         	Estad&iacute;sticas del 
				<input type="text" id="rango_fechas" placeholder="Rango de fechas">
				<input type="hidden" id="fecha_ini">
				<input type="hidden" id="fecha_fin">
			</div>
			<div class="bloque_control">
				Acerca de
	         	<select name="" id="modo_objetivo">
	         		<option value="v">Visitas</option>
	         	</select>
	         	<select name="" id="modo_frecuencia">
	         		<option value="d">Diarias</option>
	         		<option value="m">Mensuales</option>
	         	</select>				
			</div>
         </div>

         <div class="inf">         	
      		<div id="container_estadisticas" style=""></div>
         </div>

      </section>


<?php
  include('VISTAS_PERFIL_PROFESOR/popup_pago.html');
?>

      <style>
	
		#container_estadisticas{
			min-width: 250px; 
			height: 400px; 
			margin: 0 auto; 
			width:90%;
		}

      .columna_estadisticas{
		margin-top: 15px;
    	height: initial !important;
      }
      .columna_estadisticas .sup{
		font-size:12px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
		box-sizing: border-box; 
		margin: auto;
		max-width: 900px;
		margin-bottom: 25px;
		color: gray;
      }
      .columna_estadisticas .sup .izq,
      .columna_estadisticas .sup .cent,
      .columna_estadisticas .sup .izq .texto,
      .columna_estadisticas .sup .izq .monto,
      .columna_estadisticas .sup .cent .texto,
      .columna_estadisticas .sup .cent .monto,
      .columna_estadisticas .sup .der{
      	display: inline-block;
		vertical-align: middle;
      }

      .columna_estadisticas .sup .izq{
		width: 250px;
    	margin-right: 20px;
      }
      .columna_estadisticas .sup .cent{
		width: 250px;
    	margin-right: 20px;
      }
      .columna_estadisticas .sup .izq .reglon,
      .columna_estadisticas .sup .cent .reglon{
		padding: 3px 15px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
		box-sizing: border-box; 
    	margin-bottom: 5px;
      }
      .columna_estadisticas .sup .izq .reglon.plomo,
      .columna_estadisticas .sup .cent .reglon.plomo{
		background-color:rgb(242,242,242);
		border-radius: 10px;
      }

      .columna_estadisticas .sup .izq .texto,
      .columna_estadisticas .sup .cent .texto{
    	width: calc(100% - 55px);
      }

      .columna_estadisticas .sup .izq .monto{
      }
      .columna_estadisticas .sup .der{
      }
      
      .columna_estadisticas .sup .der .fecha_limite{      	
	    padding-bottom: 9px;
	    text-align: center;
	    font-size: 11px;
      }
      .columna_estadisticas .sup .der .btn_realizar_pago{
	    font-size: 12px;
	    padding: 3px 40px;
      }


.columna_estadisticas .btns_control	{

    margin-top: 50px;
    text-align: center;
}

.columna_estadisticas .btns_control .bloque_control{
	display: inline-block;
    margin-bottom: 10px;
}
.columna_estadisticas .btns_control select{

    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
}
.columna_estadisticas .btns_control input{
	padding: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    width: 200px;
}

      .columna_estadisticas .inf{
		border-top: 1px solid #ccc;
      }

	#container_estadisticas span{
		display: block;
		margin: auto;
		margin-top: 30px;
		text-align: center;
	}

        #popup_pago_comision .comp-contactenos .comp-content-enviar{
          background: #ff5757;
          color: white;
          border-radius: 20px;
          font-family: OpenSansLight !important;
          width: 100px;
          font-size: 13px;
          padding: 4px 10px 4px 10px;
        }

        #popup_pago_comision .comp-contactenos .comp-content-enviar:hover{
          background-color:rgb(199,62,62); 
        }
      </style>

  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>

      <script>
      	
var GL_ESTADISTICAS_VISITADO=false;




	$(document).ready(function(){


 	Highcharts.setOptions({  
            lang: {  
            loading: 'Cargando...',  
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],  
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],  
            shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],  
            exportButtonTitle: "Exportar",  
            printButtonTitle: "Importar",  
            rangeSelectorFrom: "De",  
            rangeSelectorTo: "A",  
            rangeSelectorZoom: "Periodo",  
            downloadPNG: 'Descargar gráfica PNG',  
            downloadJPEG: 'Descargar gráfica JPEG',  
            downloadPDF: 'Descargar gráfica PDF',  
            downloadSVG: 'Descargar gráfica SVG',  
            printChart: 'Imprimir Gráfica',  
            thousandsSep: ",",  
            decimalPoint: '.'  
        }   
    });  





		var fecha_final=fun_fecha_sumarDias(GLOBAL_HOY,-7);

		 $('.columna_estadisticas #rango_fechas').val((fecha_final.getDate()<10? '0'+fecha_final.getDate():fecha_final.getDate())+"/"+((fecha_final.getMonth()+1<10)? '0'+(fecha_final.getMonth()+1):fecha_final.getMonth()+1)+"/"+fecha_final.getFullYear()+' - '+(GLOBAL_HOY_DIA<10? '0'+GLOBAL_HOY_DIA: GLOBAL_HOY_DIA)+"/"+(GLOBAL_HOY_MES<10? '0'+GLOBAL_HOY_MES: GLOBAL_HOY_MES)+"/"+GLOBAL_HOY_ANIO);

		$('.columna_estadisticas #fecha_ini').val(fecha_final.getFullYear()+"-"+(fecha_final.getMonth()+1)+"-"+fecha_final.getDate());
		$('.columna_estadisticas #fecha_fin').val(GLOBAL_HOY_ANIO+"-"+GLOBAL_HOY_MES+"-"+GLOBAL_HOY_DIA);

		 $('.columna_estadisticas #rango_fechas').daterangepicker({
		      	autoUpdateInput: false,
		    	endDate: GLOBAL_HOY_DIA+"/"+GLOBAL_HOY_MES+"/"+GLOBAL_HOY_ANIO,
		    	startDate: fecha_final.getDate()+"/"+(fecha_final.getMonth()+1)+"/"+fecha_final.getFullYear(),
		    	maxDate: GLOBAL_HOY_DIA+"/"+GLOBAL_HOY_MES+"/"+GLOBAL_HOY_ANIO,

		      locale: {
		          cancelLabel: 'Clear',
		          format: 'DD-MM-YYYY'
		      }
		  });

		  $('.columna_estadisticas #rango_fechas').on('apply.daterangepicker', function(ev, picker) {
		  	
			$('.columna_estadisticas #fecha_ini').val(picker.startDate.format('YYYY-MM-DD'));			  	
			$('.columna_estadisticas #fecha_fin').val(picker.endDate.format('YYYY-MM-DD'));
	      	$(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
			
			fun_obtener_estadisticas();

		  });






		$('#dashboard_profesor').on('click','.comp-menu-celda-content[data-area="estadisticas"]',function(){
			
			if(!GL_ESTADISTICAS_VISITADO){
				var delay= setInterval(function(){
					clearInterval(delay);
					fun_obtener_estadisticas();
				},1000);
				GL_ESTADISTICAS_VISITADO=true;
				
			}
		});

		$('.columna_estadisticas #modo_objetivo').change(function(){
					fun_obtener_estadisticas();

		});
		$('.columna_estadisticas #modo_frecuencia').change(function(){
					fun_obtener_estadisticas();

		});


	});


function fun_obtener_estadisticas(){

	if($('.columna_estadisticas #modo_objetivo').val()=='v'){

		if($('.columna_estadisticas #modo_frecuencia').val()=='d'){
			fun_get_estadisticas_visitas_diarias();

		}else{
			fun_get_estadisticas_visitas_mensuales();

		}
	}else{
		if($('.columna_estadisticas #modo_frecuencia').val()=='d'){						
			fun_get_estadisticas_ganancias_diarias();

		}else{
			fun_get_estadisticas_ganancias_mensuales();

		}
	}
}

function fun_get_estadisticas_visitas_diarias (){


	$.ajax({
        url: "POST/ESTADISTICAS/get_estadisticas_visitas_diarias.php",
        type: "POST",
        datatype:'json',
        data:{fecha_ini:$('.columna_estadisticas #fecha_ini').val(),fecha_fin:$('.columna_estadisticas #fecha_fin').val()},
        async:true,
        beforeSend: function(objeto){
        	
        },	        
		success: function(data){
			console.log(data);
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

				if(data!='no data'){
					

					var datos=new Array();
					respuesta=$.parseJSON(data);

					var fecha;
					var fecha_conteo='';

					for(var index in respuesta){

						partes=respuesta[index].fecha.split('-');

						fecha= new Date(partes[0],partes[1]-1,partes[2]);
						if(fecha_conteo==''){
							fecha_ini_partes=$('.columna_estadisticas #fecha_ini').val().split('-');
							fecha_conteo=new Date(fecha_ini_partes[0],fecha_ini_partes[1]-1,fecha_ini_partes[2]);
						}

						while(fecha_conteo<=fecha){

							if(fecha_conteo.getTime()==fecha.getTime()){
								visitas=parseInt(respuesta[index].visitas);
							}else{
								visitas=0;
							}

							punto={x:Date.UTC(fecha_conteo.getFullYear(), fecha_conteo.getMonth(), fecha_conteo.getDate()),
						    y: visitas,
						    name: fun_nombre_dia(fecha_conteo.getDay()),
						    };

							datos.push(punto);

							fecha_conteo=fecha_conteo.addDays(1);				

						}


					}


					//si es que faltan dias hasta llegar al maximo dia debemos completarlos

					fecha_fin_partes=$('.columna_estadisticas #fecha_fin').val().split('-');
					fecha_fin=new Date(fecha_fin_partes[0],fecha_fin_partes[1]-1,fecha_fin_partes[2]);

					while(fecha_conteo<=fecha_fin){

						punto={x:Date.UTC(fecha_conteo.getFullYear(), fecha_conteo.getMonth(), fecha_conteo.getDate()),
					    y: 0,
					    name: fun_nombre_dia(fecha_conteo.getDay()),
					    };

						datos.push(punto);
						//aumentamos en 1 para evitar la repeticion con el extremo superior

						fecha_conteo=fecha_conteo.addDays(1);	


					}


					fun_graficar('Visitas diarias de usuarios a tu perfil','N&uacute;mero de visitas','Visitas','datetime',null,datos,'');

					
		
				}else{

    				$('#container_estadisticas').html('<span>No se han encontrado datos para graficar.</span>');

				}
				
			}
		}

	});

}




function fun_get_estadisticas_visitas_mensuales (){


	$.ajax({
        url: "POST/ESTADISTICAS/get_estadisticas_visitas_mensuales.php",
        type: "POST",
        datatype:'json',
        data:{fecha_ini:$('.columna_estadisticas #fecha_ini').val(),fecha_fin:$('.columna_estadisticas #fecha_fin').val()},
        async:true,
        beforeSend: function(objeto){
        	
        },	        
		success: function(data){
			console.log(data);
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

				if(data!='no data'){
					

					var datos=new Array();
					var categories=new Array();
					respuesta=$.parseJSON(data);

					var mes;
					var anio;
					var mes_conteo=0;
					var anio_conteo=0;
					for(var index in respuesta){
					
						if(mes_conteo==0){
							mes_conteo=$('.columna_estadisticas #fecha_ini').val().split('-')[1];
							anio_conteo=$('.columna_estadisticas #fecha_ini').val().split('-')[0];
						}
						mes=respuesta[index].mes;
						anio=respuesta[index].anio;

						while(parseInt(mes_conteo)<=parseInt(mes) && parseInt(anio_conteo)<=parseInt(anio)){

							categories.push(fun_nombre_mes(parseInt(mes_conteo)).substring(0,3)+', '+anio_conteo);
							
							if(parseInt(mes_conteo)==parseInt(mes) && parseInt(anio_conteo)==parseInt(anio)){
								datos.push( parseInt(respuesta[index].visitas));
							}else{
								datos.push(0);
							}



							mes_conteo++;
							if(mes_conteo>12){
								mes_conteo=1;
								anio_conteo++;
								break;
							}
						}
						
/*
						punto={x:Date.UTC(parseInt(respuesta[index].dia), parseInt(respuesta[index].mes)-1, parseInt(1)),
							    y: parseInt(respuesta[index].visitas),
							    name: fun_nombre_mes(parseInt(respuesta[index].mes)-1)
							    };*/


					}
					var mes_fin=$('.columna_estadisticas #fecha_fin').val().split('-')[1];
					var anio_fin=$('.columna_estadisticas #fecha_fin').val().split('-')[0];
					while(parseInt(mes_conteo)<=parseInt(mes_fin) && parseInt(anio_conteo)<=parseInt(anio_fin)){

						categories.push(fun_nombre_mes(parseInt(mes_conteo)).substring(0,3)+', '+anio_conteo);		

						datos.push(0);

						mes_conteo++;
						if(mes_conteo>12){
							mes_conteo=1;
							anio_conteo++;
							break;
						}
					}



					fun_graficar('Visitas mensuales de usuarios a tu perfil','N&uacute;mero de visitas','Visitas',null,categories,datos,'');



					
		
				}else{
    				$('#container_estadisticas').html('<span>No se han encontrado datos para graficar.</span>');
				}
				
			}
		}

	});

}



function fun_get_estadisticas_ganancias_diarias (){


	$.ajax({
        url: "POST/ESTADISTICAS/get_estadisticas_ganancias_diarias.php",
        type: "POST",
        datatype:'json',
        data:{fecha_ini:$('.columna_estadisticas #fecha_ini').val(),fecha_fin:$('.columna_estadisticas #fecha_fin').val()},
        async:true,
        beforeSend: function(objeto){
        	
        },	        
		success: function(data){
			console.log(data);
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

				if(data!='no data'){
					

					var datos=new Array();
					respuesta=$.parseJSON(data);

					var fecha;
					var fecha_conteo='';

					for(var index in respuesta){

						partes=respuesta[index].fecha.split('-');

						fecha= new Date(partes[0],partes[1]-1,partes[2]);
						if(fecha_conteo==''){
							fecha_ini_partes=$('.columna_estadisticas #fecha_ini').val().split('-');
							fecha_conteo=new Date(fecha_ini_partes[0],fecha_ini_partes[1]-1,fecha_ini_partes[2]);
						}

						while(fecha_conteo<=fecha){


							if(fecha_conteo.getTime()==fecha.getTime()){
								ganancia=parseInt(respuesta[index].ganancia);
							}else{
								ganancia=0;
							}

							punto={x:Date.UTC(fecha_conteo.getFullYear(), fecha_conteo.getMonth(), fecha_conteo.getDate()),
						    y: ganancia,
						    name: fun_nombre_dia(fecha_conteo.getDay()),
						    };

							datos.push(punto);

							fecha_conteo=fecha_conteo.addDays(1);				

						}


					}
					//si es que faltan dias hasta llegar al maximo dia debemos completarlos

					fecha_fin_partes=$('.columna_estadisticas #fecha_fin').val().split('-');
					fecha_fin=new Date(fecha_fin_partes[0],fecha_fin_partes[1]-1,fecha_fin_partes[2]);

					while(fecha_conteo<=fecha_fin){

						punto={x:Date.UTC(fecha_conteo.getFullYear(), fecha_conteo.getMonth(), fecha_conteo.getDate()),
					    y: 0,
					    name: fun_nombre_dia(fecha_conteo.getDay()),
					    };

						datos.push(punto);

						//aumentamos en 1 para evitar la repeticion con el extremo superior
						fecha_conteo=fecha_conteo.addDays(1);	

					}


					fun_graficar('Ganancias diarias obtenidas','Ganancias','Ganancia','datetime',null,datos,'soles');

					
		
				}else{
    				$('#container_estadisticas').html('<span>No se han encontrado datos para graficar.</span>');
				}
				
			}
		}

	});

}



function fun_get_estadisticas_ganancias_mensuales (){


	$.ajax({
        url: "POST/ESTADISTICAS/get_estadisticas_ganancias_mensuales.php",
        type: "POST",
        datatype:'json',
        data:{fecha_ini:$('.columna_estadisticas #fecha_ini').val(),fecha_fin:$('.columna_estadisticas #fecha_fin').val()},
        async:true,
        beforeSend: function(objeto){
        	
        },	        
		success: function(data){
			console.log(data);
			if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();
			}else{

				if(data!='no data'){
					

					var datos=new Array();
					var categories=new Array();
					respuesta=$.parseJSON(data);

					var mes;
					var anio;
					var mes_conteo=0;
					var anio_conteo=0;
					for(var index in respuesta){
					
						if(mes_conteo==0){
							mes_conteo=$('.columna_estadisticas #fecha_ini').val().split('-')[1];
							anio_conteo=$('.columna_estadisticas #fecha_ini').val().split('-')[0];
						}
						mes=respuesta[index].mes;
						anio=respuesta[index].anio;

						while(parseInt(mes_conteo)<=parseInt(mes) && parseInt(anio_conteo)<=parseInt(anio)){

							categories.push(fun_nombre_mes(parseInt(mes_conteo)).substring(0,3)+', '+anio_conteo);
							
							if(parseInt(mes_conteo)==parseInt(mes) && parseInt(anio_conteo)==parseInt(anio)){
								datos.push( parseInt(respuesta[index].ganancia));
							}else{
								datos.push(0);
							}



							mes_conteo++;
							if(mes_conteo>12){
								mes_conteo=1;
								break;
							}
						}
						
/*
						punto={x:Date.UTC(parseInt(respuesta[index].dia), parseInt(respuesta[index].mes)-1, parseInt(1)),
							    y: parseInt(respuesta[index].visitas),
							    name: fun_nombre_mes(parseInt(respuesta[index].mes)-1)
							    };*/


					}

					var mes_fin=$('.columna_estadisticas #fecha_fin').val().split('-')[1];
					var anio_fin=$('.columna_estadisticas #fecha_fin').val().split('-')[0];
					while(parseInt(mes_conteo)<=parseInt(mes_fin) && parseInt(anio_conteo)<=parseInt(anio_fin)){

						categories.push(fun_nombre_mes(parseInt(mes_conteo)).substring(0,3)+', '+anio_conteo);		
						
						datos.push(0);

						mes_conteo++;
						if(mes_conteo>12){
							mes_conteo=1;
							anio_conteo++;
							break;
						}
					}


					fun_graficar('Ganancias mensuales obtenidas','Ganancias','Ganancia',null,categories,datos,'soles');


				}else{
    				$('#container_estadisticas').html('<span>No se han encontrado datos para graficar.</span>');
				}
				
			}
		}

	});

}

function fun_graficar(titulo,titulo_y,nombre_dato,type,categories,datos,sufijo){

    $('#container_estadisticas').highcharts({

        chart: {
            zoomType: 'x'
        },
    	 title: {
            text: titulo
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Haga click y arrastre para hacer zoom' : 'Haga touch en un punto para hacer zoom'
        },
        xAxis: {
            categories: categories,
			type: type
        },
        yAxis: {
        	min:0,

            title: {
                text: titulo_y
            }/*,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]*/
        },
        tooltip: {
            valueSuffix: sufijo
        },

        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[2]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        legend: {
            /*layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0*/
            enabled: false

        },
        series: [{
            type: 'area',				        	
            name: nombre_dato,
            data: datos
        }]


    });
}


      </script>


