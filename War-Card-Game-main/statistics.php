<?php
   $connect = new PDO("mysql:host=localhost;port=3306;dbname=db users", "mysql", "mysql");
   $sql = "SELECT * FROM statisticswithbot";
   $result = $connect->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <div class="wrapper">
      <div class="go__back"><a href="mainmenu.php">Назад</a></div>
      <div class="statistics_game_bot">
         <?php
            while($row = $result->fetch()){
               if(($row["id"] == $_COOKIE["id"])){
                  echo 'Битва с ботом' . '<br/>';
                  echo 'Количество игр: '. $row["quantityGame"] . ' Выйгрышей: '. $row["quantityWin"] . ' Поражений: '. $row["quantityLose"] . ' Ничья: '. $row["quantityDraw"];
               }
            }
         ?>
      </div>
      <div class="statistics_game_player">
         <?php
            $sql = "SELECT * FROM statisticswithplayer";
            $result = $connect->query($sql);
            while($row = $result->fetch()){
               if(($row["id"] == $_COOKIE["id"])){
                  echo 'Битва с игроками' . '<br/>';
                  echo 'Количество игр: '. $row["quantityGame"] . ' Выйгрышей: '. $row["quantityWin"] . ' Поражений: '. $row["quantityLose"] . ' Ничья: '. $row["quantityDraw"];
               }
            }
         ?>
      </div>
   </div>
</body>
</html>