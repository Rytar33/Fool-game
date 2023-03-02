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
      <div class="form-box" style="width: 600px;">
         <div class="form-value">
            <form action="" method="get">
               <h2>Проверка почты</h2>
               <div class="input-box">
                  <div class="check"></div>
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
                  <p>Нету аккаунта? <span>Зарегестрируйтесь</span></p>
               </div>
               <div class="forget">
                  <a href="#">Забыли Пароль?</a>
               </div>
            </form>
         </div>
      </div>
</div>
</body>
</html>