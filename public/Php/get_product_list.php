<?php
include 'config.php';
include 'database.php';
include 'functions.php';

try {
    $id_category = $_REQUEST['id_category'];

    $result = getProductList($db , $id_category);
    print_r(json_encode($result));
} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>