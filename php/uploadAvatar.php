<?php
    $avatar = $_FILES['avatar']['name'];

    $avatar = time().$avatar;

    $target = "img/ava/" . $avatar;

    if(!file_exists($target)) {
        move_uploaded_file($_FILES['avatar']['tmp_name'],$target);   
    } 
    echo $avatar;
?>