<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $user_id = $_POST["user_id"];
    $user_pwd = $_POST["user_pwd"];

    $query = "select * from user_info where user_id='" . $user_id . "'";

    $result = $conn->query($query);

    $row = mysqli_fetch_array($result);

    // echo json_encode($row["user_pwd"]);
    if ($row["user_pwd"] == $user_pwd) {
        $_SESSION["user_id"] = $user_id;
        $_SESSION["identity"] = $row["identity"];
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