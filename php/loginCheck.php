<?php
    require_once("sessionCheck.php");

    $user_id = getSession("user_id");
    $identity = getSession("identity");
    echo json_encode(array("user_id" => $user_id, "identity" => $identity));
?>