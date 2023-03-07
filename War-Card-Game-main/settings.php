<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fool game</title>
</head>
<body>
    <div class="wrapper">
        <form action="" method="post">
            <div class="go__back"><a href="mainmenu.php">Назад</a></div>
            <div class="card_default">
                <input type="radio" name="shirtcard" value="default">
                <label for="">Стандартная</label>
            </div>
            <div class="card_pyro">
                <input type="radio" name="shirtcard" value="pyro" checked>
                <label for="">Пиро</label>
            </div>
            <div class="card_anemo">
                <input type="radio" name="shirtcard" value="anemo">
                <label for="">Анемо</label>
            </div>
            <div class="card_gydro">
                <input type="radio" name="shirtcard" value="gydro">
                <label for="">Гидро</label>
            </div>
        </form>
    </div>
</body>
</html>
