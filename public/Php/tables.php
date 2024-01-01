<?php

include './config.php';
include './database.php';

try {
    $db->exec("CREATE TABLE IF NOT EXISTS `category` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(255) DEFAULT NULL,
        `service_period` integer DEFAULT 0,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");
    
    $db->exec("CREATE TABLE IF NOT EXISTS `product` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_category` integer NOT NULL,
        `name` varchar(255) DEFAULT NULL,
        `discription` TEXT DEFAULT NULL,
         PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");
    
    
    $db->exec("CREATE TABLE IF NOT EXISTS `serviceInfo` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_product` integer NOT NULL,
        `service_date` Date DEFAULT NULL,
        `discription` TEXT DEFAULT NULL,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");
        
        die("OK");
}catch (PDOException $e) {
    echo "error" . $e;
}

