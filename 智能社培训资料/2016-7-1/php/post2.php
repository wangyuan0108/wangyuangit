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
        $user=$_POST['username'];
        $pass=$_POST['password'];

        if($user=='admin' && $pass=='admin'){
            echo '登录成功';
        }else{
            echo '登录失败';
        }
    ?>
</body>
</html>