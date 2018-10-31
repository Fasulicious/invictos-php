<?php 

require 'AppConnect.php';

$result = array();

if(isset($_POST)){
    $answer_id = $_POST['answer_id'];
    $user_id = $_POST['user_id'];

    if (empty($answer_id) || empty($user_id)) {
	echo "empty";
    } else {

    $sql = "SELECT * FROM app_like_answer WHERE answer_id = $answer_id AND user_id = $user_id ";
    $r = mysqli_query($db,$sql);

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
	'answer_id'=>$row['answer_id'],
	'like_status'=>$row['like_status']
    ));
   }
}
}

echo json_encode(array('result'=>$result));

mysqli_close($db);