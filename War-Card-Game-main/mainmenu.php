<?php
   if(empty($_COOKIE['name']) or empty($_COOKIE['id'])) {
      echo '<script type="text/javascript">location.replace("./index.php");</script>';
   }
?>
<?php
   if(isset($_POST['ex'])){
      setcookie('name', $_COOKIE['name'], time() - (86400 * 7), "localhost/War-Card-Game-main");
      setcookie('id', $_COOKIE['id'], time() - (86400 * 7));
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <link rel="icon" href="./img/icon.jpg">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./style/styleMainMenu.css">
   <title>Menu</title>
</head>
<body>
   <div class="wrapper">
      <div class="menu__content">
         <a href="gamewithbot.php">Начать игру</a>
         <a href="settings.php">Смена рубашки</a>
         <a href="statistics.php">Статистика</a>
         <a class="exit" href="index.php">
            Выйти
            <form action="" method="post">
               <input type="submit" name="ex" value="">
            </form>
         </a>
      </div>
      <div class="bottom__uid">ID: <?php echo $_COOKIE["id"] ?></div>
   </div>
</body>
</html>