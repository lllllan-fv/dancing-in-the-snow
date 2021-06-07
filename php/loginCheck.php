<?php
    require_once("sessionCheck.php");

    $user_id = getSession("user_id");
    $user_name = getSession("user_name");
    $identity = getSession("identity");
    $realname = getSession("realname");
    $email = getSession("email");
    echo json_encode(array(
        "user_id" => $user_id,
        "user_name" => $user_name,
        "identity" => $identity,
        "realname" => $realname,
        $email => $email
    ));
?>