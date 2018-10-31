<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");
require_once("../../DAO/RECOMENDACION/DAORecomendacion.php");


			
	$DAOClases=new DAOClases();
	$DAORecomendacion=new DAORecomendacion();

			$recordatorios=$DAOClases->get_recordatorios();

			foreach($recordatorios['data'] as $clase){

				$datos_profe=$DAORecomendacion->obtener_datos_profesor($clase->profesor);

				$datos_alumno=$DAOClases->obtener_datos_alumno($clase->alumno);



				if(filter_var($datos_alumno['data']->correo, FILTER_VALIDATE_EMAIL)){
				


require_once("../../COMPONENTES/LOGIN/POST/config.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/PHPMailerAutoload.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.phpmailer.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.smtp.php");


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

				$mail->Subject=$datos_alumno['data']->nombres.' '.$datos_alumno['data']->apellidos.', no olvides que tienes una clase programada';
				

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


				$tiempo=$clase->tiempo;				
				if($clase->tiempo>1){
					$tiempo.=' horas';
				}else{
					$tiempo.=' hora';
				}

				$fecha=explode('-',$clase->fecha);
				$fecha=$fecha[2].'-'.$fecha[1].'-'.$fecha[0];
			
				$precio_total=$clase->costo_hora*$tiempo;


				$hora=explode(':',$clase->hora);
				$hora=$hora[0].':'.$hora[1];


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
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">(Recordatorio) Pr&oacute;xima clase</h2>
                            El d&iacute;a de ma&ntilde;ana tienes una clase pactada con <b>'.$nombre_profesor.'</b>, no olvide asistir a su clase. Gracias.
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    min-height: 60px;    margin: auto;    margin-bottom: 5px;    margin-top: 25px;    padding: 15px 15px 13px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">
                          
                              
                              <a href="http://'.$config->dir_raiz.'/'.$clase->profesor.'" target="blank" style="">
                              <div style="display: inline-block; vertical-align: middle; width: 60px; height: 60px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">

                              <img width="60px" height="60px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/'.$foto_profesor.'"/>
                              </div>

                              <div style="display: inline-block; vertical-align: top; color:gray;     width: 270px;    padding-left: 5px;     padding-top: 3px;" >
                                <div style="font-size: 18px; display: inline-block; border-bottom: 1px solid gray;">
                                  '.$nombre_profesor.'
                                </div>
                                <div style="font-size: 13px; padding-top: 4px;">
                                <div style="font-size: 12px;">
                                  '.$materias_profesor.'
                                </div>
                                <img style="display:inline-block; vertical-align:middle;" width="20px" height="20px" src="http://'.$config->dir_raiz.'/IMG/valoracion_activo.png">
                                <span style="display:inline-block; vertical-align:middle;">'.$calificacion_profesor.'</span>

                                <div>

                                </div>
                                </div>

                              </div>
                          

                              </a>

                          </div>

                              <div style=" padding-top:10px;  width: 440px; text-align: right; margin: auto; margin-bottom:20px;">
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;    margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Tiempo
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>'.$tiempo.'</b>
                                  </div>
                                </div>
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;    margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Precio total
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>S/. '.$precio_total.'</b>
                                  </div>
                                </div>
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;     margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Fecha
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>'.$fecha.'</b>
                                  </div>
                                </div>

                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;     margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Hora
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>'.$hora.'</b>
                                  </div>
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
                                  <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'/mensajes/'.$clase->profesor.'" target="blank">
                                  <table style="text-align:center;  color: white; font-size: 18px;" align="center" height="50px" cellpadding="0" cellspacing="0">
                                  <tr> 
                                    <td>
                                      Revisar conversaci&oacute;n
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
              //$mail->Send();
               if(!$mail->Send()) {
        echo 'Message was not sent.';
        echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent.';
    }


}
}

?>