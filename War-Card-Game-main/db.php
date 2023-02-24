<?php
   $connect = new PDO("mysql:host=localhost;port=3300;dbname=db users", "mysql", "mysql");
   $sql = "SELECT * FROM users";
   $result = $connect->query($sql);  
?>