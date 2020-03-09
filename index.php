<?php
    foreach (glob("dist/*") as $filename) {
        include $filename;
    }
?>