<?php

	session_start();

	if(!isset($_SESSION['id'])){

		header('Access-Control-Allow-Origin: *');
		require('../../CONEXION/Conexion.php');
		require('../DAO/DAOLogin.php');

		$DAOLogin=new DAOLogin();
		 
		$consulta=$DAOLogin->logear_con_id_fb($_POST['user']);
		if($consulta=='no user'){
			$resultado=$DAOLogin->registrar_usuario_fb($_POST['user'],$_POST['nombre'],$_POST['correo']);

			if($resultado=='mysql_si'){
/*
$w = stream_get_wrappers();
echo 'openssl: ',  extension_loaded  ('openssl') ? 'yes':'no', "\n";
echo 'http wrapper: ', in_array('http', $w) ? 'yes':'no', "\n";
echo 'https wrapper: ', in_array('https', $w) ? 'yes':'no', "\n";
echo 'wrappers: ', var_export($w);*/



				$image = file_get_contents('https://graph.facebook.com/'.$_POST['user'].'/picture?type=large');
				$dir = '../../../IMG/USUARIOS/WEB/'.$_POST['user'].'.jpg';
				file_put_contents($dir, $image);

/*


				$ch = curl_init();
				curl_setopt ($ch, CURLOPT_URL, 'https://graph.facebook.com/'.$_POST['user'].'/picture?type=large');
				curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
				$data = curl_exec($ch);
				curl_close($ch);
				$fileName = '../../../IMG/USUARIOS/WEB/'.$_POST['user'].'.jpg';
				$file = fopen($fileName, 'w+');
				fputs($file, $data);
				fclose($file);
/*
*/

/*
				$ch = curl_init();
				curl_setopt ($ch, CURLOPT_URL, 'https://graph.facebook.com/'.$_POST['user'].'/picture?type=normal');
				curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
				$data = curl_exec($ch);
				curl_close($ch);
				$fileName = '../../../IMG/USUARIOS/MOVIL/'.$_POST['user'].'.jpg';
				$file = fopen($fileName, 'w+');
				fputs($file, $data);
				fclose($file);






				$ch = curl_init();
				curl_setopt ($ch, CURLOPT_URL, 'https://graph.facebook.com/'.$_POST['user'].'/picture?type=small');
				curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
				$data = curl_exec($ch);
				curl_close($ch);
				$fileName = '../../../IMG/USUARIOS/MINI/'.$_POST['user'].'.jpg';
				$file = fopen($fileName, 'w+');
				fputs($file, $data);
				fclose($file);*/


/*				$image = 'https://graph.facebook.com/'.$_POST['user'].'/picture?type=large';
				$dir = $_SERVER['DOCUMENT_ROOT'] . '/IMG/USUARIOS/MINI/'.$_POST['user'].'.jpg';

				if ( copy($image, $dir) ) {
				    echo "Copy success!";
				}else{
				    echo "Copy failed.";
				}
*/
				$image = file_get_contents('https://graph.facebook.com/'.$_POST['user'].'/picture?type=normal');
				$dir = '../../../IMG/USUARIOS/MOVIL/'.$_POST['user'].'.jpg';
				file_put_contents($dir, $image);


				$image = file_get_contents('https://graph.facebook.com/'.$_POST['user'].'/picture?type=small');
				$dir = '../../../IMG/USUARIOS/MINI/'.$_POST['user'].'.jpg';
				file_put_contents($dir, $image);


				$consulta=$DAOLogin->logear_con_id_fb($_POST['user']);

				echo 'registro_fb';
			}

		}
		
		if ($consulta->tipo == 'P'){
			echo $consulta->id;
		}

		$_SESSION['id']=$consulta->id;
		$_SESSION['id_fb']=$consulta->id_fb;
		$_SESSION['correo']=$consulta->correo;
		$_SESSION['nombres']=$consulta->nombres;
		$_SESSION['apellidos']=$consulta->apellidos;
		$_SESSION['foto']=$consulta->foto;
		$_SESSION['tipo']=$consulta->tipo;
		$_SESSION['usuario_activo']=$consulta->usuario_activo;
		$_SESSION['situacion_usuario']=$consulta->situacion_usuario;

	}
?>