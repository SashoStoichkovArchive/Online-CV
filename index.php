<?php
    // include_once("dist/index.html");
    // include_once("dist/css/styles.min.css");
    // include_once("dist/js/scripts.min.js");

    // foreach (glob("dist/images/*") as $filename){
    //     include_once($filename);
    // }
?>

<?php
    foreach (glob("*") as $filename){
        include $filename;
    }
?>

<?php // include_once("home.html"); ?>