<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $user_id = $_POST["user_id"];
    $user_pwd = $_POST["user_pwd"];

    $query = "select * from user_info where user_id='" . $user_id . "'";

    $result = $conn->query($query);

    $row = mysqli_fetch_array($result);

    if ($row["user_pwd"] == $user_pwd) {
        $_SESSION["user_id"] = $row["user_id"];
        $_SESSION["user_name"] = $row["user_name"];
        $_SESSION["user_pwd"] = $row["user_pwd"];
        $_SESSION["ava_path"] = $row["ava_path"];
        $_SESSION["identity"] = $row["identity"];
        $_SESSION["realname"] = $row["realname"];
        $_SESSION["email"] = $row["email"];
        echo json_encode(array(
            "status"=>"1",
            "msg"=>"登录成功"
        ));
    } else {
        echo json_encode(array("
            status"=>"0",
            "msg"=>"登录失败"
        ));
    }
    
?>