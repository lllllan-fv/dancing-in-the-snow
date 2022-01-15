<?php
    $host = "";
    $username = "";
    $password = "";
    $databasename = "dsdb";

    $conn = mysqli_connect($host, $username, $password, $databasename);
    // ! 下面两条语句用来防止中文乱码
    mysqli_query($conn, "set character set 'utf8'");
    mysqli_query($conn, "set names 'utf8'");
    if (mysqli_connect_errno()) {
        echo "Could not connect to database.";
        exit();
    }
?>