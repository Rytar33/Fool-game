<?php
    try {
    include_once "db.php";
    $id = $_COOKIE['id'];
    if(isset($_POST['shirtcard'])) {
        $sql = 'UPDATE user SET backgroundCard = :backgroundCard WHERE id = :id';
        $result = $connect->prepare($sql);
        if($result->execute([':backgroundCard' => $_POST['shirtcard'], ':id' => $id])){
            // header("Location: mainmenu.php");
            echo '<script type="text/javascript">location.replace("./mainmenu.php");</script>';
         }
        // exit;
    }
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fool game</title>
</head>
<body>
    <div class="wrapper">
        <form action="" method="post">
         <?php
            $sql = "SELECT * FROM user";
            $result = $connect->query($sql);
            while($row = $result->fetch()){
               if(($row["id"] == $id)) {
         ?>
            <div class="go__back"><input type="submit" value="Назад"></div>
            <div class="card_default">
                <input type="radio" name="shirtcard" value="default" <?php if($row["backgroundCard"] == 'default') echo 'checked' ?>>
                <label for="">Стандартная</label>
            </div>
            <div class="card_pyro">
                <input type="radio" name="shirtcard" value="pyro" <?php if($row["backgroundCard"] == 'pyro') echo 'checked' ?>>
                <label for="">Пиро</label>
            </div>
            <div class="card_anemo">
                <input type="radio" name="shirtcard" value="anemo" <?php if($row["backgroundCard"] == 'anemo') echo 'checked' ?>>
                <label for="">Анемо</label>
            </div>
            <div class="card_gydro">
                <input type="radio" name="shirtcard" value="gydro" <?php if($row["backgroundCard"] == 'gydro') echo 'checked' ?>>
                <label for="">Гидро</label>
            </div>
            <?php     
                }  
            }
            } catch (PDOException $error) {
                echo "Connect into database error: " . $error->getMessage();
            }      
            ?>
        </form>
    </div>
</body>
</html>