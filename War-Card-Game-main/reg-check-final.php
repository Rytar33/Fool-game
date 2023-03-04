<?php
   if(isset($_COOKIE['name']) and isset($_COOKIE['password']) and isset($_COOKIE['email'])) {
      $to = "maks.Khromakov@mail.ru";
      $from = $_COOKIE['email'];

      $message = rand(10000, 99999);
      $headers = "From: $from". "\r\n" .
      "Reply-To: $from" . "\r\n" . 
      "X-Mailer: PHP/". phpversion();
      if(mail($to, 'Код подтверждения', "Код: $message", $headers)) {
         echo "Письмо отправленно.";
      }
      if($_POST['code'] == $message) {
         include_once "db.php";
         $sql = 'INSERT INTO user (name, email, password, backgroundCard) VALUES ('. $_COOKIE['name'] .', '. $_COOKIE['email'] .', '. $_COOKIE['password'] .', "pyro")';
         $result = $connect->query($sql);
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
            <form action="" method="get">
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