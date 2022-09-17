<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debjyoti Saha</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="wrapper" id="wrapper">
        <div class="container">
            <nav>
                <ul class="pages center-h">
                    <li class="pages--home"><a href='#home'>Home</a></li>
                    <li class="pages--about"><a href='#about-me'>About me</a></li>
                    <li class="pages--projects"><a href="#projects">Projects</a></li>
                    <li class="pages--contact"><a href="#contact">Contact</a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
            <?php include 'partials/home.php'; ?>
            <?php include 'partials/about.php'; ?>
            <?php include 'partials/projects.php'; ?>
            <?php include 'partials/contact.php'; ?>
        </div>
    </div>
    <?php include 'partials/javascript.php'; ?>
</body>
</html>