<?php 

$sql = "SELECT * FROM cuentas";

require 'AppConnect.php';

$r = mysqli_query($db,$sql);

$result = array();

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'cod_profesor'=>$row['cod_profesor'],
	'fecha_ini'=>$row['fecha_ini'],
	'fecha_fin'=>$row['fecha_fin'],
	'monto_acumulado'=>$row['monto_acumulado'],
	'comision'=>$row['comision'],
    'pagado'=>$row['pagado']
    ));
}

echo json_encode(array('result'=>$result));

mysqli_close($db);
