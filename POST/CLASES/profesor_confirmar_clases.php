<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");
require_once("../../DAO/RECOMENDACION/DAORecomendacion.php");


			
	$DAOClases=new DAOClases();
	$DAORecomendacion=new DAORecomendacion();

	$r = $DAOClases->profesor_confirmar_rechazar_clase($_POST['reporte']);

	print json_encode($r);
		
require_once("../../COMPONENTES/LOGIN/POST/config.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/PHPMailerAutoload.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.phpmailer.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.smtp.php");

	$reporte=$r['reporte'];

			$datos_profe=$DAORecomendacion->obtener_datos_profesor($_SESSION['id']);

			foreach($reporte as $clase){

				if($clase['confirmacion']==1){

				$datos_alumno=$DAOClases->obtener_datos_alumno($clase['cod_alumno']);



				if(filter_var($datos_alumno['data']->correo, FILTER_VALIDATE_EMAIL)){
				
				$config=new COMP_LOGIN_CONFIG();

				$mail=new PHPMailer();
				$mail->SMTPOptions = array(
					    'ssl' => array(
					        'verify_peer' => false,
					        'verify_peer_name' => false,
					        'allow_self_signed' => true
					    )
					);
				$mail->Mailer="smtp";
				$mail->IsSMTP();
				$mail->Helo = $config->dir_pagina; //Muy importante para que llegue a hotmail y otros
				$mail->SMTPAuth=true;
				$mail->Host = $config->host_mail;
				$mail->Port=25; //depende de lo que te indique tu ISP. El default es 25, pero nuestro ISP lo tiene puesto al 26
				$mail->Username = $config->user_mail;
				$mail->Password=$config->pass_user_mail;

				$mail->From=$config->dir_correo_emisor;
				$mail->FromName=$config->nombre_pagina;

				$mail->Timeout=60;
				$mail->IsHTML(true);
				//Enviamos el correo
				//$mail->AddAddress($GL_USER_MAIL); 
				$mail->AddAddress($datos_alumno['data']->correo); //direccion de destino

				$mail->Subject=$datos_alumno['data']->nombres.' '.$datos_alumno['data']->apellidos.', no olvides calificar a tu profesor';
				

				$foto_profesor=$datos_profe['data'][0]->foto;
				$nombre_profesor=$datos_profe['data'][0]->nombres.' '.$datos_profe['data'][0]->apellidos;
				$calificacion_profesor=$datos_profe['data'][0]->calificacion;

				if(empty($foto_profesor)){
					$foto_profesor='profesor_default.png';
				}


				$materias_profesor='';
				foreach ($datos_profe['data'] as $materia) {
					$materias_profesor.='<div style="display:inline-block; vertical-align:middle; margin-right:5px;">'.$materia->nombre_materia.'</div>';	                  
				}

				$fecha=explode('-',$clase['fecha']);

				$mes='';
				switch(intval($fecha[1])){
					case 1:
					$mes='Enero';
					break;
					case 2:					
					$mes='Febrero';
					break;
					case 3:			
					$mes='Marzo';
					break;
					case 4:		
					$mes='Abril';
					break;
					case 5:		
					$mes='Mayo';
					break;
					case 6:		
					$mes='Junio';
					break;
					case 7:		
					$mes='Julio';
					break;
					case 8:		
					$mes='Agosto';
					break;
					case 9:		
					$mes='Septiembre';
					break;
					case 10:		
					$mes='Octubre';
					break;
					case 11:		
					$mes='Noviembre';
					break;
					case 12:		
					$mes='Diciembre';
					break;

				}

				$fecha=$fecha[2].' de '.$mes.' del '.$fecha[0];
				$hora=explode(':',$clase['hora']);
				if($hora[0]<12){
					$hora.=$hora[0].':'.$hora[1].' am';
				}else{
					$hora.=($hora[0]-12).':'.$hora[1].' pm';
				}


				$tiempo=$clase['tiempo'];
				if($clase['tiempo']>1){
					$tiempo.=' horas';
				}else{
					$tiempo.=' hora';
				}


		$mail->Body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />      
                <html>
                
                <body>
                            
                <table style="min-width:500px;" width="100%" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td style="height:60px; text-align: center;"><img src="http://'.$config->dir_raiz.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
                  </tr>

                  <tr>
                    <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">No olvides calificar a tu profesor</h2>
                            No te olvides de calificar a tu profesor y seleccionar los criterios de evaluaci&oacute;n, o reportar si algo estuvo mal con tu experiencia.
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    min-height: 120px;    margin: auto;    margin-bottom: 25px;    margin-top: 25px;    padding: 15px 15px 30px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">
                          
                              
                              <a href="http://'.$config->dir_raiz.'/'.$_SESSION['id'].'" style="margin-left: 60px;">
                              <div style="display: inline-block; vertical-align: middle; width: 60px; height: 60px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">

                              <img width="60px" height="60px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/'.$foto_profesor.'"/>
                              </div>

                              <div style="display: inline-block; vertical-align: middle; color:gray;     width: 270px;    padding-left: 5px;" >
                                <div style="font-size: 18px; display: inline-block; border-bottom: 1px solid gray;">
                                  '.$nombre_profesor.'
                                </div>
                                <div style="font-size: 13px; padding-top: 4px;">
                                <div style="font-size: 12px;">
                                  '.$materias_profesor.'
                                </div>
                                <img style="display:inline-block; vertical-align:middle;" width="20px" height="20px" src="http://'.$config->dir_raiz.'/IMG/valoracion_activo.png">
                                <span style="display:inline-block; vertical-align:middle;">'.$calificacion_profesor.'</span>
                                </div>

                              </div>
                              </a>

                              <div style="border-top:1px solid #ddd; padding-top:10px; margin-top:10px; padding-left: 60px;">
                              <b>Fecha:</b> '.$fecha.'<br>
                              <b>Hora:</b> '.$hora.' <br>
                              <b>Tiempo:</b> '.$tiempo.' <br>

                              </div>
                          </div>


                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>
                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td>
<div style="background-color:rgb(223, 70, 70); border-radius:30px;  width: 200px;  margin:auto;     margin-bottom: 60px;">
                                  <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'" target="blank">
                                  <table style="text-align:center;  color: white; font-size: 18px;" align="center" height="50px" cellpadding="0" cellspacing="0">
                                  <tr> 
                                    <td>
                                      Ir a calificar
                                    </td>                                  
                                  </tr>
                                </table>

                              </a>

                              </div>
                          </td>
                          </tr>

                      </table>
                      
                    </td>
                </tr>
                
                <tr>
                  <td width="100%" style="background-color:rgb(223, 70, 70); height:15px; color:white; text-align:center;">
                    <table   width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td  height="35px">Copyright &copy; 2016 Invictos</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                </table>
                
                </body>
              </html>';
              $mail->Send();

				}
}
}

?>