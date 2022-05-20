<?php 
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if(isset($data->name) 
	&& isset($data->email) 
	&& !empty(trim($data->name))
	&& !empty(trim($data->email))
	){
	$name = mysqli_real_escape_string($db_conn, trim($data->name));
	$email = mysqli_real_escape_string($db_conn, trim($data->email));
	$add = mysqli_query($db_conn,"insert into users (user_name,user_email) values('$name','$email')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"newids"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 
} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>