<?php 

$sql = "SELECT * FROM app_notifications ORDER BY time DESC";

require 'AppConnect.php';

$r = mysqli_query($db,$sql);

$result = array();

while($row = mysqli_fetch_array($r)){
    array_push($result,array(
	'id'=>$row['id'],
        'user_id'=>$row['user_id'],
	'question_user_id'=>$row['question_user_id'],
	'question_id'=>$row['question_id'],
	'status'=>$row['status'],
	'question_user_name'=>$row['question_user_name'],
	'content'=>$row['content'],
	'time'=>$row['time']
    ));
   }

echo json_encode(array('result'=>$result));

mysqli_close($db);