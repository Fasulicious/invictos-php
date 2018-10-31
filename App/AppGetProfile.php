<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $ok = $_POST['ok'];

    if (empty($id) || empty($ok)) {
	echo "empty";
    } else {

    $sql = "SELECT * FROM grl_tbl_users WHERE id = $id";
    $r = mysqli_query($db,$sql);

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
	'id_fb'=>$row['id_fb'],
	'name'=>$row['nombres'],
        'last_name'=>$row['apellidos'],
	'email'=>$row['correo'],
	'active'=>$row['usuario_activo'],
        'profile'=>$row['foto'],
	'phrase'=>$row['presentacion'],
	'profession'=>$row['profesion'],
	'birth_date'=>$row['fecha_nacimiento'],
	'thought'=>$row['pensamiento'],
	'currency'=>$row['moneda'],
	'city'=>$row['ciudad'],
	'type'=>$row['tipo'],
	'note'=>$row['calificacion'],
	'address'=>$row['direccion'],
	'link_fb'=>$row['link_facebook'],
	'link_twitter'=>$row['link_twitter'],
	'link_linkedin'=>$row['link_linkedin'],
	'ranking'=>$row['ranking'],
	'work_hours'=>$row['horas_trabajo'],
	'studies'=>$row['educacion'],
	'photo'=>$row['portada'],
	'phone_number'=>$row['telefono'],
	'education_level'=>$row['nivel_educativo'],
	'latitude'=>$row['latitud_ini'],
	'longitude'=>$row['longitud_ini'],       
	'username'=>$row['username'],
	'show_age'=>$row['mostrar_edad'],
	'show_phone'=>$row['mostrar_telefono']
    ));
   }
}
}

echo json_encode(array('result'=>$result));

mysqli_close($db);