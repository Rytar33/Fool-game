<?php
   $http = 'localhost';
   $port = '3306';
   $database = 'db users';
   $mysqlLogin = 'mysql';
   $mysqlPassword = 'mysql';
   $connect = new PDO("mysql:host=$http;port=$port;dbname=$database", $mysqlLogin, $mysqlPassword);  
?>