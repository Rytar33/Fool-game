<?php
   if(isset($_COOKIE['name']) and isset($_COOKIE['password']) and isset($_COOKIE['email'])) {
      $to = "maks.Khromakov@mail.ru";
      $from = $_COOKIE['email'];
      $message = rand(10000, 99999);
      setcookie('message', $message, time() + 180);
      $headers = "From: $from". "\r\n" .
      "Reply-To: $from" . "\r\n" . 
      "X-Mailer: PHP/". phpversion();
      mail($to, 'Код подтверждения', "Код: $message", $headers);
   }
   if(isset($_POST['code'])) {
      if($_POST['code'] == $_COOKIE['message']) {
         include_once "db.php";
         $sql = 'INSERT INTO user (name, email, password, backgroundCard) VALUES (:name, :email, :password, "default")';
         $result = $connect->prepare($sql);
         if($result->execute([':name' => $_COOKIE['name'], ':email' => $_COOKIE['email'], ':password' => $_COOKIE['password']])){
            setcookie('password', $_COOKIE['password'], time() - (86400));
            setcookie('email', $_COOKIE['email'], time() - (86400));
            $sql = "SELECT * FROM user";
            $result = $connect->query($sql);
            while($row = $result->fetch()) {
               if($row["name"] == $_COOKIE['name']) {
                  setcookie('id', $row["id"], time() + (86400 * 7));
                  setcookie('name', $_COOKIE["name"], time() + (86400 * 6));
                  setcookie('message', $message, time() - 180);
                  break;
               }
            }
            $sql = 'INSERT INTO statisticswithbot (:id) VALUES (:id)';
            $result = $connect->prepare($sql);
            $result->execute([':id' => $_COOKIE['id']]);
            $sql = 'INSERT INTO statisticswithplayer (:id) VALUES (:id)';
            $result = $connect->prepare($sql);
            $result->execute([':id' => $_COOKIE['id']]);
            echo '<script type="text/javascript">location.replace("./mainmenu.php");</script>';
         }
         // $result = $connect->execute($sql);
      } else {
         header('Location: reg-check-final.php');
         echo "Неверный код! Повторите попытку.";
      }
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="style/login.css">
</head>
<body>
<div class="wrapper">
      <div class="form-box" style="width: 600px; height: 350px">
         <div class="form-value">
            <form action="" method="post">
               <h2>Проверка почты</h2> 
               <div class="input-box mail">
                  <ion-icon name="lock-closed"></ion-icon>
                  <input type="number" name="code" required>
                  <label for="">Код</label>
               </div>
               <div class="remember">
                  <label for="">Вам на почту в ближайшее время придёт код авторизации.</label>
               </div>
               <button type="submit"><span>Подтвердить</span></button>
               <div class="register">
                  <p>Не пришёл код? <span>Отправить заново</span></p>
               </div>
            </form>
         </div>
      </div>
</div>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>