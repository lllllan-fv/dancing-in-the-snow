<?php
    $myfile = fopen("../article/new.md", "w");

    $txt = "jiuzhe Gates \n";
    fwrite($myfile, $txt);
?>