<?php
include 'config.php';
include 'database.php';
include 'functions.php';

try {
    $name = $_REQUEST['name'];
    $sp = $_REQUEST['service_period'];
    $description = $_REQUEST['description'];
    $il = $_REQUEST['img_link'];
    $inputs = $_REQUEST['inputs'];


    // if ($ja != null) {
        $result = addCategory($db , $name , $sp , $description , $il , $inputs);
        if ($result){
            result_OK("افزودن دسته بندی با موفقیت انجام شد");
        } else {
            say_error("خطای در افزودن دسته بندی");
        }
            // } else {
    //     say_error("ورودی inputs نامعتبر");

    // }


    

} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>