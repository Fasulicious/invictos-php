<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CORREO/DAOCorreo.php");
			
	$DAOCorreo=new DAOCorreo();

	print json_encode($r);
		
require_once("../../COMPONENTES/LOGIN/POST/config.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/PHPMailerAutoload.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.phpmailer.php");
require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.smtp.php");

    $teacher = $_POST['teacher'];
    $student = $_POST['student'];

			for ($i = 68; $i<580; $i++){

                if($teacher == True || $student == True) {
                    if($teacher == True) {
    
                        $datos_alumno=$DAOCorreo->obtener_datos_profesor($i);
                    } else if($student == True) {

                        $datos_alumno=$DAOCorreo->obtener_datos_alumno($i);
                    }
                } else if($teacher == True && $student == True) {

                    $datos_alumno=$DAOCorreo->obtener_datos($i);
                }

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

                $asunto = $_POST['asunto'];

				$mail->Subject= $asunto;

                //Dar valores
                $titulo = $_POST['titulo'];
				$mensaje = $_POST['mensaje'];


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
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">'.$titulo.'</h2>
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    min-height: 120px;    margin: auto;    margin-bottom: 25px;    margin-top: 25px;    padding: 15px 15px 30px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">                                                                                    

                              <div style="display: inline-block; vertical-align: middle; color:gray;     width: 270px;    padding-left: 5px;" >

                              </div>
                              </a>

                              <div style="border-top:1px solid #ddd; padding-top:10px; margin-top:10px; padding-left: 60px;">
                              <b></b> '.$mensaje.'<br>

                              </div>
                          </div>


                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>                      
                      
                    </td>
                </tr>
                
                <tr>
                  <td width="100%" style="background-color:rgb(223, 70, 70); height:15px; color:white; text-align:center;">
                    <table   width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td  height="35px">Copyright &copy; 2017 Invictos</td>
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

?>
