<?php
   $connect = new PDO("mysql:host=localhost;port=3306;dbname=db users", "mysql", "mysql");
   $sql = "SELECT * FROM user";
   $result = $connect->query($sql);  
?>