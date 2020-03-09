<?php
    // include_once("dist/index.html");
    // include_once("dist/css/styles.min.css");
    // include_once("dist/js/scripts.min.js");

    // foreach (glob("dist/images/*") as $filename){
    //     include_once($filename);
    // }
?>

<?php
    foreach (glob("dist/*.html") as $filename){
        include_once $filename;
    }

    // foreach (glob("dist/*.ico") as $filename){
    //     include_once $filename;
    // }

    foreach (glob("dist/css/*.css") as $filename){
        include_once $filename;
    }

    foreach (glob("dist/js/*.js") as $filename){
        include_once $filename;
    }

    foreach (glob("dist/images/*.+(png|jpg|jpeg|gif|svg)") as $filename){
        include_once $filename;
    }
?>

<?php // include_once("home.html"); ?>