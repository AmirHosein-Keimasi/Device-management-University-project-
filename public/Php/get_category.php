<?php
include 'config.php';
include 'database.php';
include 'functions.php';

try {
    $id_category = $_REQUEST['id_category'];

    $data = getCategory($db , $id_category);
    print_r(json_encode($data));
} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>
