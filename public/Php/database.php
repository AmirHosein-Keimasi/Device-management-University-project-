<?php

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
} catch (PDOException $ex) {
    die();
}

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

function getCategory($db, $id_category) {

    try {
        $stmt = $db->prepare("SELECT * FROM category where id = :idC ;");
        $stmt->bindParam(':idC', $id_category, PDO::PARAM_STR);

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    } catch (PDOException $e) {
        echo "error" . $e;
    }

    return false;
}

function addProduct($db , $id_category , $name , $discription , $value) {
    try {
        $stmt = $db->prepare("INSERT INTO `product` (`id_category`, `name`,`discription` ,`values` ) VALUES (?, ?,? , ?)");
        $stmt->execute([$id_category, $name, $discription , $value]);
        $lastId = $db->lastInsertId();

        $stmt2 = $db->prepare("INSERT INTO `serviceinfo` (`id_product`, `service_date`, `discription`) VALUES (?, ?,?)");
        $stmt2->execute([$lastId, Date("Y-m-d") , ""]);
        
        return true;
    } catch (PDOException $e) {
        echo "error $e";
    }
    return false;
}

function getProductList($db , $id_category) {
    try {
        $stmt = $db->prepare("SELECT 
        p.id AS product_id, 
        p.id_category, 
        p.name AS product_name, 
        p.discription, 
        c.name AS category, 
        MAX(s.service_date) AS latest_service_date ,
        p.values AS product_values
        FROM 
        product p
        INNER JOIN 
        category c ON p.id_category = c.id 
        INNER JOIN 
        serviceinfo s ON s.id_product = p.id 
        WHERE 
        id_category = :idC
        GROUP BY 
        p.id, p.id_category, p.name, p.discription, c.name;");
        $stmt->bindParam(':idC', $id_category, PDO::PARAM_STR);

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
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

function getNearService($db) {
    try {
        $stmt = $db->prepare("SELECT product.id as product_id , product.name as product_name , product.discription , category.name as category_name , MAX(serviceinfo.service_date) as last_service_date , (category.service_period - DATEDIFF(CURRENT_DATE() ,MAX(serviceinfo.service_date))) as remaining_days from product INNER JOIN category ON product.id_category = category.id INNER JOIN serviceinfo ON serviceinfo.id_product = product.id GROUP BY product.id ORDER BY remaining_days;");

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
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

function addCategory($db , $name , $service_period , $description , $img_link , $inputs) {
    try {
        $stmt = $db->prepare("INSERT INTO `category` (`name`, `service_period`,`description` , `imgLink` , `inputs`) VALUES (?, ?, ? , ? , ?)");
        $stmt->execute([$name , $service_period , $description , $img_link , $inputs]);
        return true;
    } catch (PDOException $e) {
        echo "error";
    }
    return false;
}