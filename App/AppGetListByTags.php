<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $id = $_POST['id'];
    $ok = $_POST['ok'];

    if (empty($id) || empty($ok)) {
	echo "empty";
    } else {

    $sql = "SELECT * FROM conocimiento_profe WHERE id_profesor = $id";
    $r = mysqli_query($db, $sql);

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
	'user_id'=>$row['id_profesor'],
	'tag_id'=>$row['id_conocimiento'],
        'level'=>$row['nivel']
    ));
   }
}
}

echo json_encode(array('result'=>$result));

mysqli_close($db);