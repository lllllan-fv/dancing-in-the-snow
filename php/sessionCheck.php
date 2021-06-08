<?php
    if(session_status() !== 2){
        session_start(); 
    }

    function getSession($data) {
        return isset($_SESSION[$data]) ? $_SESSION[$data] : $_SESSION[$data] = NULL;
    }
?>  