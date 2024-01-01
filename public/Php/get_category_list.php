<?php
include 'config.php';
include 'database.php';
include 'functions.php';

try {
    $data = getCategoryList($db);
    print_r(json_encode($data));
} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>
