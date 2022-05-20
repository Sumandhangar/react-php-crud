<?php

	// ******************************************************
	require 'db_connection.php';
	$data = json_decode(file_get_contents("php://input"));  
		$userid = mysqli_real_escape_string($db_conn, trim($data->userid));
		$allUsers = mysqli_query($db_conn,"Delete FROM users where id=$userid ");
		if($userid){ 
			echo json_encode(["success"=>true]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
	



		

?>