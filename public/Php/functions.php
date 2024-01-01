<?php

function say_error($message)
{
    http_response_code(422);
    header('Content-Type: application/json');
    print_r(json_encode(array("status" => "error", "message" => $message)));
    die();

}

function result_OK($message)
{
    http_response_code(200);
    print_r(json_encode(array("status" => "ok", "message" => $message)));
    die();
}