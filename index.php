<?php
    include_once("dist/index.html");
    include_once("dist/css/styles.min.css");
    include_once("dist/js/scripts.min.js");

    foreach (glob("dist/images/*") as $filename){
        include $filename;
    }
?>