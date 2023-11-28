<?php
include_once('database_config.php');

try {
    $data = getNearService($db);
    print_r(json_encode($data));

} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>
