<?php
require 'db_connection.php';
	$allUsers = mysqli_query($db_conn,"SELECT * FROM users order by id desc");
		if(mysqli_num_rows($allUsers) > 0){
			while($row_users = mysqli_fetch_array($allUsers)){ 
				$json_array[] = array(
				  'id' =>  $row_users['id'],
				  'user_name' =>  $row_users['user_name'],
				  'user_email' =>  $row_users['user_email'],
				);
			}
			echo json_encode(["success"=>true,"fetchusers"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?>