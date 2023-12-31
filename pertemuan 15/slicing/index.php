<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="./img/favicon.png" type="image/png">
    <title>Satner Portfolio</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="./css/bootstrap.css">
    <link rel="stylesheet" href="./vendors/linericon/style.css">
    <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link rel="stylesheet" href="./vendors/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="./css/magnific-popup.css">
    <link rel="stylesheet" href="./vendors/nice-select/css/nice-select.css">
    <!-- main css -->

    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <?php
    include_once "./partition/header.php";
    //tangkap request di URL
    /* include_once "./partition/about.php";
    include_once "./partition/home.php";
    include_once "./partition/brand.php";
    include_once "./partition/feature.php";
    include_once "./partition/portfolio.php";
    include_once "./partition/newsletter.php";*/
    $hal = isset($_REQUEST['hal']) ? $_REQUEST['hal'] : 'home';
    if (file_exists($hal . '.php')) {
        include_once $hal . '.php';
    } else {
        include_once 'home.php';
    }
    include_once "./partition/footer.php";

    ?>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="./js/jquery-3.2.1.min.js"></script>
    <script src="./js/popper.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/stellar.js"></script>
    <script src="./js/jquery.magnific-popup.min.js"></script>
    <script src="./vendors/nice-select/js/jquery.nice-select.min.js"></script>
    <script src="./vendors/isotope/imagesloaded.pkgd.min.js"></script>
    <script src="./vendors/isotope/isotope-min.js"></script>
    <script src="./vendors/owl-carousel/owl.carousel.min.js"></script>
    <script src="./js/jquery.ajaxchimp.min.js"></script>
    <script src="./js/mail-script.js"></script>
    <!--gmaps Js-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
    <script src="./js/gmaps.min.js"></script>
    <script src="./js/theme.js"></script>
</body>

</html>