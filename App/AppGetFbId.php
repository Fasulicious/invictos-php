<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $ok = $_POST['ok'];

    if (empty($id) && empty($ok)) {
	echo "empty";
    } else {

    $sql = "SELECT * FROM grl_tbl_users WHERE id_fb = $id";
    $r = mysqli_query($db, $sql);

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
	'name'=>$row['nombres'],
	'last_name'=>$row['apellidos']
    ));
   }
}
}

echo json_encode(array('result'=>$result));

mysqli_close($db);