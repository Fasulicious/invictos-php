<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/RECOMENDACION/DAORecomendacion.php");

		$DAORecomendacion=new DAORecomendacion();
	
		$respuesta=$DAORecomendacion->check_recomendacion($_SESSION['id'],$_POST['cod_profe'],$_POST['correo']);
		//esto me ayudará a saber si hay o no una recomendación anteriormente hecha
		if(!$respuesta['data']){
			//si no hay recomendación entonces puedo enviar un correo y una recomendación nueva


			$r=$DAORecomendacion->set_recomendacion($_SESSION['id'],$_POST['cod_profe'],$_POST['correo']);


			$datos_profe=$DAORecomendacion->obtener_datos_profesor($_POST['cod_profe']);


			if(!$datos_profe['error']){

			if($datos_profe['data']){

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
				$mail->AddAddress($_POST['correo']); //direccion de destino

				$mail->Subject=$_SESSION['nombres'].' '.$_SESSION['apellidos'].' te ha recomendado un profesor';
				

				$foto_profesor=$datos_profe['data'][0]->foto;
				$nombre_profesor=$datos_profe['data'][0]->nombres.' '.$datos_profe['data'][0]->apellidos;
				$calificacion_profesor=$datos_profe['data'][0]->calificacion;

				$foto=$_SESSION['foto'];
				if(empty($foto)){
					$foto='profesor_default.png';
				}


				$materias_profesor='';
				foreach ($datos_profe['data'] as $materia) {
					$materias_profesor.='<div style="display:inline-block; vertical-align:middle; margin-right:5px;">'.$materia->nombre_materia.'</div>';	                  
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
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Recomendaci&oacute;n</h2>
                            Tienes un nuevo mensaje de recomendaci&oacute;n
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    min-height: 120px;    margin: auto;    margin-bottom: 25px;    margin-top: 25px;    padding: 15px 15px 25px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">
                          

                              <div style="    font-size: 20px;    margin-bottom: 5px;">
                                Recomendaci&oacute;n
                              </div>
                              <div style="    padding-bottom: 7px; border-bottom: 1px solid #d8d8d8;    margin-bottom: 13px; color:gray;  ">
                              <a href="http://'.$config->dir_raiz.'/'.$_SESSION['id'].'">'.$_SESSION['nombres'].' '.$_SESSION['apellidos'].'</a> te recomienda al profesor:
                              </div>
                              <a href="http://'.$config->dir_raiz.'/'.$_POST['cod_profe'].'" style="margin-left: 60px;">
                              <div style="display: inline-block; vertical-align: middle; width: 60px; height: 60px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">

                              <img width="60px" height="60px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/'.$foto_profesor.'"/>
                              </div>

                              <div style="display: inline-block; vertical-align: middle; color:gray;     width: 260px;    padding-left: 5px;" >
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
                          </div>


                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>
                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td></td>
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

		print json_encode($r);

?>