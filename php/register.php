<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $user_pwd = $_POST["user_pwd"];
    $ava_path = $_POST["ava_path"];
    $realname = $_POST["realname"];
    $email = $_POST["email"];

    $query = "select * from user_info where user_id='" . $user_id . "'";

    $result = $conn->query($query);

    $row = mysqli_fetch_array($result);

    if ($row) {
        echo json_encode(array(
            "status" => "0",
            "msg" => "账号已存在"
        ));
    } else {
        $query = "insert into user_info values ('$user_id', '$user_name', '$user_pwd', '0', '$ava_path', '$realname', '$email')";

        $res = mysqli_query($conn, $query);

        $_SESSION['user_id'] = $user_id;
        $_SESSION['identity'] = '0';
        echo json_encode(array(
            "status" => "1",
            "msg" => "注册成功"
        ));
    }
?>