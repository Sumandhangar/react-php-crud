<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

$userid = mysqli_real_escape_string($db_conn, trim($data->userid));

	$allUsers = mysqli_query($db_conn,"SELECT * FROM users where id='".$userid."' ");
	$all_users = mysqli_fetch_array($allUsers,MYSQLI_ASSOC);
	echo json_encode(["success"=>true,"editlist"=>$all_users]);
	return;
	
?>