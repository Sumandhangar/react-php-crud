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
	$userid = mysqli_real_escape_string($db_conn, trim($data->userid));

	$edit = mysqli_query($db_conn,"UPDATE users set user_name='".$name."',user_email='".$email."' where id= '".$userid."' ");
	if($edit){
		echo json_encode(["success"=>true]);
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