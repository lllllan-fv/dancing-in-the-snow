<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dancing in the snow</title>

    <!-- ! 主页logo -->
    <link rel="icon" href="img/favicon.png" type="image/x-icon" />

    <!-- ! 设置所有链接打开新页面 -->
    <base target="_blank" />

    <!-- ^ Bootstrap 3.4.1 -->
    <link href="css/bootstrap-3.4.1.min.css" rel="stylesheet">

    <!-- ^ animate 4.1.1 -->
    <link href="css/animate.css" rel="stylesheet">

    <!-- ^ wow 1.1.2 -->
    <script src="js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>

    <!-- ^ 图标库 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    <!-- ^ markdwon -->
    <link href="css/simplemde-1.11.2.min.css" rel="stylesheet">

    <!-- # home -->
    <link rel="stylesheet" href="css/style.css">

    <!-- # css -->
    <link rel="stylesheet" href="css/page.css">

    <!-- # css -->
    <link rel="stylesheet" href="">

</head>

<body id="top">

    <div class="imgsection page-head">
        <div class="page-title animate__animated"></div>
        <div class="page-author">
            <a></a>
            <p></p>
        </div>
    </div>

    <!-- ! navigation -->
    <section id="navigation" class="fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-2 text-left">
                    <div class="nav-logo"><a data-scroll href="#top">DS<span>.</span></a></div>
                </div>
                <div class="col-xs-10 text-right">
                    <div>
                        <a href="#" data-placement="bottom" title="Menu" class="nav-menu" data-toggle="dropdown"><i class="col-red bi bi-list" style="color: #45aaf2;"></i></a>
                        <div class="dropdown-menu">
                            <div class="arrow-up"></div>
                            <ul>
                                <li id="a-register">
                                    <a href="register.html">Register<i class="bi bi-pencil-square"></i></a>
                                </li>
                                <li id="a-login">
                                    <a href="login.html">Login<i class="bi bi-box-arrow-in-left"></i></a>
                                </li>
                                <li id="a-logout">
                                    <a>Logout<i class="bi bi-box-arrow-right"></i></a>
                                </li>
                                <li id="a-modify">
                                    <a href="modify.html">Modify Info<i class="bi bi-eraser-fill"></i></a>
                                </li>
                                <li id="a-write">
                                    <a>Write<i class="bi bi-pen-fill"></i></a>
                                </li>
                                <li id="a-index">
                                    <a href="index.html">Home<i class="bi bi-house-fill"></i></a>
                                </li>
                                <li id="a-space">
                                    <a href="space.html">Space<i class="bi bi-person-circle"></i></a>
                                </li>
                                <li id="a-admin">
                                    <a href="admin.html">Admin<i class="bi bi-gear-wide"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ! /navigation -->

    <!-- <div class="bg"></div> -->

    <div class="page-body">
        <div class="body-text"></div>
        <div class="body-info">
            <div class="posted"></div>
            <a role="button" class="edit" id="edit">编辑</a>
        </div>
    </div>


    <!-- ! footer copy -->
    <footer>
        <div class="container">
            <div class="row">

                <div class="col-sm-6 col-xs-12">
                    <p class="copyright wow animate__animated animate__lightSpeedInRight" data-wow-delay="1.5s">© Copyright 2021. More informations <a href="history.html" title="更多信息">click here</a></p>
                    <!--  /.copyright  -->
                </div>

                <div class="col-sm-6 col-xs-12">
                    <p class="designed wow animate__animated animate__lightSpeedInLeft" data-wow-delay="1.5s">Designed and Developed by lllllan</p>
                    <!--  /.designed  -->
                </div>

            </div>
            <!--  /.row  -->
        </div>
        <!--  /.container  -->
    </footer>
    <!-- ! /footer -->

    <!-- ^  jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="js/jquery-3.6.0.min.js"></script>

    <!-- ^ bootstrap.js 3.4.1 -->
    <script src="js/bootstrap-3.4.1.min.js"></script>

    <!-- ^ smooth-scrool.js -->
    <script src="js/smooth-scroll.js"></script>
    <script type="text/javascript">
        smoothScroll.init();
    </script>

    <!-- ^ 刷新回到页面顶部 -->
    <script type="text/javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>

    <!-- ^ markdown to html -->
    <script src="js/parser.js"></script>

    <!-- ^ markdwon -->
    <script src="js/simplemde-1.11.2.min.js"></script>

    <!-- # page.js -->
    <script type="text/javascript" src="js/page.js"></script>

    <!-- # basic.js -->
    <script type="text/javascript" src="js/basic.js"></script>

    <!-- # getArticle.js -->
    <script type="text/javascript" src="js/getArticle.js"></script>

    <!-- # js -->
    <script type="text/javascript" src=""></script>

</body>

</html>