<?php 

$sql = "SELECT * FROM conocimientos";

require 'AppConnect.php';

$r = mysqli_query($db,$sql);

$result = array();

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
        'tag'=>$row['nombre'],
	'tag_id'=>$row['id']
    ));
   }

echo json_encode(array('result'=>$result));

mysqli_close($db);