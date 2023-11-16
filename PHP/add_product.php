<?php
include_once('database_config.php');

try {
    $id_category = $_REQUEST['id_category'];
    $name = $_REQUEST['name_product'];
    $discription = $_REQUEST['discription'];

    $result = addProduct($db , $id_category , $name , $discription);
    if ($result){
        result_OK("افزودن محصول با موفقیت انجام شد");
    } else {
        say_error("خطای در افزودن محصول");
    }

} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>