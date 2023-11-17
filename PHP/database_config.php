<?php
$host = 'localhost';
$dbname = 'h208890_rahgosha';
$username = 'root';
$password = 'root';
error_reporting(0);
ini_set('display_errors', 0);

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

} catch (PDOException $ex) {

    die();

}

$db->exec("CREATE TABLE IF NOT EXISTS `category` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `service_period` integer DEFAULT 0,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

$db->exec("CREATE TABLE IF NOT EXISTS `product` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_category`integer DEFAULT NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `discription` TEXT DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

$db->exec("CREATE TABLE IF NOT EXISTS `serviceInfo` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_product` integer DEFAULT NOT NULL,
    `service_date` Date DEFAULT NULL,
    `discription` TEXT DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");


function getCategoryList($db) {
    try {
        $stmt = $db->prepare("SELECT * FROM category;");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    } catch (PDOException $e) {
        echo "error" . $e;
    }

    return false;
}

function addProduct($db , $id_category , $name , $discription) {
    try {
        $stmt = $db->prepare("INSERT INTO `product` (`id_category`, `name`,`discription`) VALUES (?, ?,?)");
        $stmt->execute([$id_category, $name, $discription]);
        return true;
    } catch (PDOException $e) {
        echo "error";
    }
    return false;
}

function getProductList($db , $id_category) {
    try {
        $stmt = $db->prepare("SELECT * FROM product WHERE id_category = :idC;");
        $stmt->bindParam(':idC', $id_category, PDO::PARAM_STR);

        $stmt->execute();
        $result = $stmt->fetchall(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0) {
            return $result;
        } else {
            return false;
        }
    } catch (PDOException $e) {
        echo "error" . $e;
    }

    return false;
}

function addProductService($db , $id_product , $discription , $date) {
    try {
        $stmt = $db->prepare("INSERT INTO `serviceInfo` (`id_product`, `service_date`,`discription`) VALUES (?, ?,?)");
        $stmt->execute([$id_product, $date, $discription]);
        return true;
    } catch (PDOException $e) {
        echo "error";
    }
    return false;
}

function say_error($message)
{
    http_response_code(422);
    header('Content-Type: application/json');
    print_r(json_encode(array("status" => "error", "message" => $message)));

}

function result_OK($message)
{
    print_r(json_encode(array("status" => "ok", "message" => $message)));

}

?>
