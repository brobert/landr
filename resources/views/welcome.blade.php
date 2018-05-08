<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
        <!-- START META SECTION -->
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Lander.v2 - Bootstrap WebApp &amp; Dashboard</title>
        <meta name="author" content="optimisticdesigns">
        <meta name="description" content="Lander.v2 Admin is a clean and flat backend built with twitter bootstrap">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{URL::asset('/image/touch/apple-touch-icon-144x144-precomposed.png')}}">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{URL::asset('/image/touch/apple-touch-icon-114x114-precomposed.png')}}">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{URL::asset('/image/touch/apple-touch-icon-72x72-precomposed.png')}}">
        <link rel="apple-touch-icon-precomposed" href="{{URL::asset('/image/touch/apple-touch-icon-57x57-precomposed.png')}}">
        <link rel="shortcut icon" href="{{URL::asset('/image/favicon.ico')}}">
        <!--/ END META SECTION -->

        <!-- START STYLESHEETS -->
        <!-- Plugins stylesheet : optional -->
        <!--/ Plugins stylesheet : optional -->

        <!-- Application stylesheet : mandatory -->
        <link rel="stylesheet" href="{{URL::asset('/css/app.css')}}">
        <link rel="stylesheet" href="{{URL::asset('/plugins/nprogress/nprogress.css')}}">
        <!--/ Application stylesheet -->

        <!-- Theme stylesheet -->
        <link rel="stylesheet" href="{{URL::asset('/css/themes/theme.css')}}">
        <!--/ Theme stylesheet -->

        <!-- modernizr script -->
        <script type="text/javascript" src="/plugins/modernizr/js/modernizr.js"></script>

        <!--/ modernizr script -->
        <!-- END STYLESHEETS -->
        <style type="text/css">
            .jqstooltip {
                position: absolute;
                left: 0px;
                top: 0px;
                visibility: hidden;
                background: rgb(0, 0, 0) transparent;
                background-color: rgba(0,0,0,0.6);
                filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
                -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
                color: white;
                font: 10px arial, san serif;
                text-align: left;
                white-space: nowrap;
                padding: 5px;
                border: 1px solid white;
                box-sizing: content-box;
                z-index: 10000;
            }
            .jqsfield {
                color: white;
                font: 10px arial, san serif;
                text-align: left;
            }
        </style>
    </head>
    <body  id="main">
    	<div id="app-container" ></div>
    </body>
    <script type="text/javascript" src="/js/app.js"></script>
</html>
