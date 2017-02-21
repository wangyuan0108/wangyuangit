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
        $user=$_GET['username'];
        $pass=$_GET['password'];

        echo '你的用户名是'.$user.'，密码是'.$pass;
    ?>
</body>
</html>