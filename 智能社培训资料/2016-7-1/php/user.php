<?php
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $act=$_POST['act'];

    switch($act){
        case 'login':
            // 1.连接数据库
            mysql_connect('localhost', 'root', 'admin123');
            // 2.选择数据库
            mysql_select_db('2016-7-1');
            // 3.编写sql语句
            $sql="SELECT * FROM user WHERE username='".$user."'";
            // 4.执行sql语句
            $result=mysql_query($sql);
            // 5.抓取一条数据
            $row=mysql_fetch_row($result);

            if($row){
                if($row[1]==$pass){
                    echo '{err: 0, msg: "登录成功"}';
                }else{
                    echo '{err: 1, msg:"密码错误"}';
                }
            }else{
                echo '{err: 1, msg: "用户名不存在"}';
            }
            break;
        case 'add':
            // 1.连接数据库
            mysql_connect('localhost', 'root', 'admin123');
            // 2.选择数据库
            mysql_select_db('2016-7-1');
            // 3.编写sql
            $sql="SELECT * FROM user WHERE username='".$user."'";
            // 4.执行sql语句
            $result=mysql_query($sql);
            // 5.抓取
            $row=mysql_fetch_row($result);

            if($row){
                echo '{err: 1, msg: "用户名已存在"}';
            }else{
                // 3.编写sql语句
                $ADD_USER="INSERT INTO user VALUES('".$user."', '".$pass."')";
                // 4.执行sql语句
                mysql_query($ADD_USER);

                echo '{err: 0, msg:"注册成功"}';
            }
            break;
    }
?>