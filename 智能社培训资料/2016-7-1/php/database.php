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
        // 1.连接数据库
        mysql_connect('localhost', 'root', 'admin123');
        // 2.选择数据库
        mysql_select_db('2016-7-1');
        // 3.编写sql语句
        $sql="SELECT * FROM user";
        // 4.执行sql语句
        $result=mysql_query($sql);  // 只能看不能用
        // 5.抓取一条数据
        $row=mysql_fetch_row($result);
        echo $row[1];
    ?>
</body>
</html>