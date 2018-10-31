<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $user_id = $_POST['user_id'];

    if (empty($user_id)) {
	echo "empty";
    } else {

    $sql = "SELECT * FROM app_like_answer WHERE user_id = $user_id ";
    $r = mysqli_query($db,$sql);

while($row = mysqli_fetch_array($r)){
    array_push($result,array(mysqli_num_rows($r)));
   }
}
}

echo json_encode(mysqli_num_rows($r));

mysqli_close($db);