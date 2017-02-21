/**
 * Created by ijiajia on 2016/7/1.
 */
var fs=require('fs');
var http=require('http');
var mysql=require('mysql');

var httpServer=http.createServer(function(req, res){
    console.log('有人来了'+req.url);

    // favicon.ico
    if(req.url=='/favicon.ico')return;
    var url=req.url=='/'?'/index.html':req.url;
    // 接口
    if(url.split('?')[0]=='/artical'){
        // 连接数据库
        var db=mysql.createConnection({
            host: 'localhost',  // 数据库地址
            user: 'root',       // 用户名
            password: 'admin123', // 密码
            database: '2016-7-1'
        });
        // sql语句
        var sql='SELECT * FROM article';
        // 执行sql语句
        db.query(sql, function(err, data){
            if(err){
                console.log(err);
            }else{
                res.write(JSON.stringify(data));
                res.end();
            }
        });
    }else{
        fs.readFile('www'+url, function(err, data){
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        });
    }
});
httpServer.listen(8080);










