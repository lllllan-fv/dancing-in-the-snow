<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $user_pwd = $_POST["user_pwd"];
    $ava_path = $_POST["ava_path"];

    $modifyPwd = $user_pwd == "" ? "" : ", user_pwd='" . $user_pwd . "'";
    $modifyAva = $ava_path == "" ? "" : ", ava_path='" . $ava_path . "'";

    $query = "update user_info set user_name='" . $user_name . "'" . $modifyPwd . $modifyAva . " where user_id='" . $user_id . "'";

    $res = mysqli_query($conn, $query);

    $_SESSION['user_name'] = $user_name;
    if ($user_pwd != "") $_SESSION['user_pwd'] = $user_pwd;

    echo json_encode(array(
        "status" => "1",
        "msg" => "修改成功"
    ));
?>