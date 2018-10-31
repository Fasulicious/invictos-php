<?php
session_start();

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");
require_once("../../UTIL_PHP/verificacion.php");
require_once("../../UTIL_PHP/variables_globales.php");
require('config.php');


$logeo=new DAOLogin();

if(empty($_POST['mail'])){
	$resultado=array("error"=>true,'detalle'=>'sin_user');
}else{
	$mail = $_POST['mail'];
	$consulta=$logeo->es_usuario($mail);
	if(empty($_POST['password'])){
		$resultado=array("error"=>true,'detalle'=>'sin_password');
	}else if ($consulta=='no') {
	
		$config=new COMP_LOGIN_CONFIG();

		if($config->activar_usuario){
					
			$codigo_activacion=mt_rand(10000,90000).mt_rand(10000,90000).mt_rand(10000,90000);
		}else{
			$codigo_activacion=0;
		}
			
									
		$resultado=$logeo->registrar_usuario($_POST['type'], $_POST['name'], $_POST['last_name'], $_POST['mail'], $_POST['city'], "", $_POST['latitude'], $_POST['longitude'], $_POST['password'], $codigo_activacion, $config->activar_usuario);
		if($resultado!=null && $resultado!='mysql_no'){
			
			if($config->activar_usuario){ //se tiene que activar al usuario, entonces se el valor de la variable de sesión se inicializa en falso para que sea activada luego

					require_once("../../UTIL_PHP/phpmailer/PHPMailerAutoload.php");

					require_once("../../UTIL_PHP/phpmailer/class.phpmailer.php");
					require_once("../../UTIL_PHP/phpmailer/class.smtp.php");
									
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
					$mail->AddAddress($_POST['mail']); //direccion de destino
					$mail->Subject= $config->nombre_pagina.' - Validar tu cuenta';
					
					
					$mail->Body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                      
                <html>
                
                <body>
                            
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td style="height:60px; text-align: center;"><img src="http://'.$config->dir_raiz.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
                  </tr>

                  <tr>
                    <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
                      <table width="90%" height="400px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Confirmar tu cuenta</h2><br>
                          '.$config->mensaje_registro.'<br><br>
                          Para completar tu registro haz click en el siguiente enlace para confirmar tu cuenta:
                          <br>
                          <br>
                          <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'/index.php?id='.$respuesta.'&cod='.$codigo_activacion.' " target="blank"><table style="text-align:center; background-color:rgb(223, 70, 70); color: white; border-radius:30px; font-size: 18px;" align="center" width="200px" height="50px" cellpadding="0" cellspacing="0">
                            <tr> 
                              <td>
                                Confirmar Cuenta
                              </td>
                              
                            </tr>
                          </table>
                          </a>
                          </td>
                          <td width="5%"></td>
                          </tr>

                          <tr>
                          <td height="250px"> </td>
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

					

					
					//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
					$mail->Send();	
					 
				}
				

				$resultado=array("error"=>false,'detalle'=>'ok_registro');
				echo json_encode($resultado);
			}else{

				$resultado=array("error"=>true,'detalle'=>'mysql_no');
				echo json_encode($resultado);
			}


			
		}else{
			
			$resultado=array("error"=>true,'detalle'=>'existe_user');
			echo json_encode($resultado);
		}
	}
	echo json_encode($resultado);
?>