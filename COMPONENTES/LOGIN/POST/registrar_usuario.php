<?php

	session_start();


$no_entra=true;

	if(!isset($_SESSION['id'])){

if(empty($_POST['nombres'])){
	$resultado=array("error"=>true,'detalle'=>'sin_nombres');
}else{
	if(empty($_POST['apellidos'])){
		$resultado=array("error"=>true,'detalle'=>'sin_apellidos');
	}else{

	if((($_POST['skill_id']=='undefined') || empty($_POST['skill_level'])) && ($_POST['tipo']=='P')){
		$resultado=array("error"=>true,'detalle'=>'sin_skill');
	}else{
			
		if(empty($_POST['correo'])){
			$resultado=array("error"=>true,'detalle'=>'sin_correo');
		}else{

			if(!filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)){
				
				$resultado=array("error"=>true,'detalle'=>'no_es_correo');
			}else{

				if(empty($_POST['ciudad']) || empty($_POST['latitud']) || empty($_POST['longitud'])){
					$resultado=array("error"=>true,'detalle'=>'sin_ciudad');
				}else{

					if(empty($_POST['password'])){
						$resultado=array("error"=>true,'detalle'=>'sin_password');
					}else{
						if($_POST['password']!=$_POST['confirm']) {
							$resultado=array("error"=>true,'detalle'=>'diff');
						}else {
					
						if(empty($_POST['terms'])) {
							$resultado=array("error"=>true,'detalle'=>'terms');
						}else {
						
							if((empty($_POST['ed_level'])||($_POST['ed_level']=='0')) && ($_POST['tipo']=='A')) {
							$resultado=array("error"=>true,'detalle'=>'sin_ed');
						}else {
		$no_entra=false;

		header('Access-Control-Allow-Origin: *');
		require('../../CONEXION/Conexion.php');
		require('../DAO/DAOLogin.php');
		require('config.php');

		$DAOLogin=new DAOLogin();

		$consulta=$DAOLogin->es_usuario($_POST['correo']);

		if($consulta=='no'){

			$config=new COMP_LOGIN_CONFIG();

			if($config->activar_usuario){ 				
				$codigo_activacion=mt_rand(10000,90000).mt_rand(10000,90000).mt_rand(10000,90000);
			}else{
				$codigo_activacion=0;
			}
			
			if($_POST['tipo']=='P'){
				$respuesta=$DAOLogin->registrar_usuario('P',$_POST['nombres'],$_POST['apellidos'],$_POST['correo'],$_POST['ciudad'],null,$_POST['latitud'],$_POST['longitud'],$_POST['password'],$codigo_activacion,$config->activar_usuario, $_POST['skill_id'], $_POST['skill_level']);
			} else{
				$respuesta=$DAOLogin->registrar_usuario('A',$_POST['nombres'],$_POST['apellidos'],$_POST['correo'],$_POST['ciudad'],$_POST['ed_level'],$_POST['latitud'],$_POST['longitud'],$_POST['password'],$codigo_activacion,$config->activar_usuario,null,null);
			}

			
			
			if($respuesta!='mysql_no'){

				$_SESSION['id']=$respuesta;
				$_SESSION['username']='';
				$_SESSION['correo']=$_POST['correo'];
				$_SESSION['nombres']=$_POST['nombres'];
				$_SESSION['apellidos']=$_POST['apellidos'];
				$_SESSION['latitud_ini']=$_POST['latitud'];
				$_SESSION['longitud_ini']=$_POST['longitud'];
				$_SESSION['tipo']=$_POST['tipo'];
				$_SESSION['ciudad']=$_POST['ciudad'];
				$_SESSION['usuario_activo']=0;
				$_SESSION['foto']=$resultado['foto'];
				$_SESSION['situacion_usuario']=1;



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
					$mail->AddAddress($_POST['correo']); //direccion de destino
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
		}
		}
		}
		}
		}
		}
		}
	}
}
	if($no_entra){

		echo json_encode($resultado);

	}
	}
?>