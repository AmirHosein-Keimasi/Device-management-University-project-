<?php
include 'config.php';
include 'database.php';
include 'functions.php';

try {
    if(!isset($_REQUEST['id_category']) or empty($_REQUEST['id_category'])) say_error("category id is not set.");
    $myData = json_decode($_REQUEST['json_values'], true);
    if(!isset($myData['nameProduct']) or empty($myData['nameProduct'])) say_error("nameProduct is not set.");
    if(!isset($myData['description']) or empty($myData['description'])) say_error("description is not set.");
    $pName = $myData['nameProduct'];
    $pDescription = $myData['description'];
    unset($myData['nameProduct']);
    unset($myData['description']);
    foreach($myData as $key => $value){
        if(is_null($value) or $value === "") say_error($key . " is not set");
    }
    addProduct($db, $_REQUEST['id_category'], $pName, $pDescription, json_encode($myData));
    result_OK("محصول با موفقیت اضافه شد.");
} catch (Exception $e) {
    say_error("خطای داخلی سرور");
}

?>