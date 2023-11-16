<?php
include_once('database_config.php');

try {
    $id_category = $_REQUEST['id_category'];

    $result = getProductList($db , $id_category);
    print_r(json_encode($result));
} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>