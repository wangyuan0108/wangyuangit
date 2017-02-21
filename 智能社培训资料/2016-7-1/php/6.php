<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
</head>
<body>
    <?php
        $a=7;

        switch($a){
            case 1:
                echo '星期一';
                break;
            case 2:
                echo '星期二';
                break;
            case 3:
                echo '星期三';
                break;
            case 4:
                echo '星期四';
                break;
            case 5:
                echo '星期五';
                break;
            default:
                echo '周末';
                break;
        }
    ?>
</body>
</html>