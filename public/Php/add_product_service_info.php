<?php
include_once('database_config.php');

try {
    $id_product = $_REQUEST['id_product'];
    $discription = $_REQUEST['discription'];
    $timeService = $_REQUEST['time_service'];

    $dt = new DateTime("@$timeService");
    $newDate = $dt->format('Y-m-d H:i:s');

    $result = addProductService($db , $id_product , $discription , $newDate);
    if ($result){
        result_OK("افزودن سرویس محصول با موفقیت انجام شد");
    } else {
        say_error("خطای در افزودن محصول");
    }

} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>
