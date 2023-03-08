<?php
   try {
      include_once "db.php";
      $game = '';
      // $sql = "SELECT * FROM user";
      // $result = $connect->query($sql);
      // while($row = $result->fetch()){
      //    if(($row["id"] == $_COOKIE['id'])) {
      //       $shirtcard = $row['backgroundCard'];
      //       $urlImg = "./img/".$shirtcard.".jpg";
      //       echo "<script type='text/javascript'>const hiddenCard = document.getElementsByClassName('hidden').style.background = 'url('".$urlImg."')';</script>";
      //       break;
      //    }
      // }
      if(isset($_POST["losebtn"])) $game = 'quantityLose';
      if(isset($_POST["drawbtn"])) $game = 'quantityDraw';
      if(isset($_POST["winbtn"])) $game = 'quantityWin';
      if(isset($_POST["winbtn"]) or isset($_POST["drawbtn"]) or isset($_POST["losebtn"])) {
         $id = $_COOKIE['id'];
         $sql = 'UPDATE statisticswithbot SET '. $game .' = '. $game .' + 1, quantityGame = quantityGame + 1 WHERE id = '.$id.'';
         $result = $connect->prepare($sql);
         if($result->execute([':game' => $game, ':id' => $id])){
            header("Location: gamewithbot.php");
         }
      }
   } catch (PDOException $error) {
      echo "Connect into database error: " . $error->getMessage();
   }
?>
<!DOCTYPE html>
<html lang="ru">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script src="./scripts/scriptGameBot.js" type="module"></script>
   <script src="./scripts/menu.js" type="module"></script>
   <link rel="icon" href="./img/icon.jpg">
   <link rel="stylesheet" href="./style/styleGame.css">
   <link rel="stylesheet" href="./style/menu.css">
   <title>Fool game</title>
</head>
<body>
   <div class="wrapper">
      <div class="burger-menu">
         <button class="burger-icon">
             <span></span>
             <span></span>
             <span></span>
         </button>
         <div class="menu">
           <div class="content none">
            <div class="upp__content">
               <span>Чат(в разработке)</span>
               <span>Закончить игру(в разработке)</span>
               <span><a href="mainmenu.php">Выйти в главное меню</a></span>
            </div>
              <div class="bottom__content">
                  <span>Created game Rutar</span>
                  <span>Alfa 0.2v</span>
              </div>
           </div>
         </div>
      </div>
      <div class="game__wrapper">
         <div class="text__information"></div>
         <div class="field__game">
            <div class="field__enemy">
               <div class="field__container">
                  
               </div>
            </div>
            <div class="field__fight">
               <div class="fight__content">
                  <div class="cards__place">
                     <div id="1" class="place">
                        <div class="place__enemy"></div>
                        <div class="place__player"></div>
                     </div>
                  </div>
                  <div class="deck__place">
                     <div class="deck__content">
                        <div class="trump__card">
                           <div class="trump__suit"></div>
                        </div>
                        <div class="deck card hidden">0</div>
                        <span class="button__do"></span>
                     </div>
                  </div>
               </div>
            </div>
            <div class="field__player">
               <div class="field__container">

               </div>
            </div>
         </div>
      </div>
      <div class="bottom__uid">ID: <?php echo $_COOKIE['id'] ?></div>
   </div>
   <?php
      include_once "db.php";
      $sql = "SELECT * FROM user";
      $result = $connect->query($sql);
      while($row = $result->fetch()){
         if(($row["id"] == $_COOKIE['id'])) {
            $shirtcard = $row['backgroundCard'];
            $urlImg = "./img/".$shirtcard.".jpg";
            echo '<script type="text/javascript">const hiddenCard = document.getElementsByClassName("hidden");
            for (let i = 0; i < hiddenCard.length; i++) {
               hiddenCard[i].style.backgroundImage = "url('.$urlImg.')";
            }
            </script>';
            break;
         }
      }
      ?>
</body>
</html>