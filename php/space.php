<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $_SESSION["author_id"] = $_POST["author_id"];

    $query = "select * from user_info where user_id='" . $_SESSION["author_id"] . "'";
    $result = $conn->query($query);
    $row = mysqli_fetch_array($result);

    $_SESSION["author_name"] = $row["user_name"];
    $_SESSION["author_ava"] = $row["ava_path"];

    echo json_encode(array(
        "author_id" => $_SESSION["author_id"],
        "author_name" => $row["user_name"]
    ));
?>