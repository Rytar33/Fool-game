<?php
   if(!empty($_COOKIE['name']) or !empty($_COOKIE['id'])) {
      echo '<script type="text/javascript">location.replace("./mainmenu.php");</script>';
   }
   $username = "";
   $password = "";
   try {
      include_once "db.php";
      if(isset($_GET["username"]) and isset($_GET["pass"])) {
         $username = $_GET["username"];
         $password = $_GET["pass"];
         while($row = $result->fetch()){
            if(($row["name"] == $username) and ($row["password"] == $password)) {
               setcookie('name', $username, time() + (86400 * 7), "localhost/War-Card-Game-main");
               setcookie('id', $row["id"], time() + (86400 * 7));
               echo '<script type="text/javascript">location.replace("./mainmenu.php");</script>';
               exit;
            }
         }
      }
      if(isset($_POST["username"]) and isset($_POST["email"]) and isset($_POST["pass"]) and isset($_POST["repeatpass"])) {
         $isaccept = true;
         if(count($_POST["username"]) <= 2) {
            $isaccept = false;
         } else if(count($_POST["username"]) > 13) {
            $isaccept = false;
         }
         if (count($_POST["email"]) > 312) {
            $isaccept = false;
         } else if(count($_POST["email"]) < 11) {
            $isaccept = false;
         }
         if (count($_POST["pass"]) < 5) {
            $isaccept = false;
            
         }
         if ($_POST["pass"] != $_POST["repeatpass"]) {
            $isaccept = false;
         }
      }
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <link rel="icon" href="./img/icon.jpg">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./style/login.css">
   <title>Fool game</title>
</head>
<body>
   <?php
      } catch (PDOException $error) {
         echo "Connect into database error: " . $error->getMessage();
      }
   ?>
   <div class="wrapper">
      <div class="form-box">
         <div class="form-value">
            <form action="" method="get">
               <h2>Вход</h2>
               <div class="input-box">
                  <div class="check">
                     <ion-icon name="checkmark-sharp"></ion-icon>
                     <!-- <ion-icon name="close-sharp"></ion-icon> -->
                  </div>
                  <ion-icon name="person"></ion-icon>
                  <input type="text" name="username" required>
                  <label for="">Имя</label>
               </div>
               <div class="input-box">
                  <ion-icon name="lock-closed"></ion-icon>
                  <input type="password" name="pass" required>
                  <label for="">Пароль</label>
               </div>
               <div class="remember">
                  <label for=""><input type="checkbox" name="rememberUser">Запомнить меня</label>
               </div>
               <button type="submit"><span>Войти</span></button>
               <div class="register">
                  <p>Нету аккаунта? <a href="#registration">Зарегестрируйтесь</a></p>
               </div>
               <div class="forget">
                  <a href="#">Забыли Пароль?</a>
               </div>
            </form>
            <!-- <form action="" method="post">
               <h2>Регистрация</h2>
               <div class="input-box">
                  <ion-icon name="person"></ion-icon>
                  <input type="text" name="username" required>
                  <label for="">Имя</label>
               </div>
               <div class="input-box password">
                  <ion-icon name="mail"></ion-icon>
                  <input type="email" name="email" required>
                  <label for="">Почта</label>
               </div>
               <div class="input-box password">
                  <ion-icon name="lock-closed"></ion-icon>
                  <input type="password" name="pass" required>
                  <label for="">Пароль</label>
               </div>
               <div class="input-box">
                  <ion-icon name="lock-closed"></ion-icon>
                  <input type="password" name="repeatpass" required>
                  <label for="">Повторите пароль</label>
               </div>
               <div class="remember">
                  <label for="">Тут типо должна быть капча</label>
               </div>
               <button type="submit"><span>Зарегестрироваться</span></button>
               <div class="register">
                  <p>Уже есть аккаунт? <a href="#">Войти</a></p>
               </div>
            </form> -->
         </div>
      </div>
   </div>
   <script src="./scripts/login.js"></script>
   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>