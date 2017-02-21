/**
 * Created by ijiajia on 2016/7/1.
 */
// 1、引入模块
var http=require('http');
// 2、建立服务器
var httpServer=http.createServer(function(req, res){
    // request 请求  客户端 -> 服务器
    // response 回复 服务器 -> 客户端
    console.log('有人来了'+req.url);
    switch(req.url){
        case '/':
            res.write('<html><head><title>test</title></head><body><h1>index222222.html</h1><a href="/">index</a><br><a href="/a.html">aaaa</a><br><a href="/b.html">bbbb</a></body></html>');
            res.end();
            break;
        case '/a.html':
            res.write('<html><head><title>test</title></head><body><h1>a.html</h1><a href="/">index</a><br><a href="/a.html">aaaa</a><br><a href="/b.html">bbbb</a></body></html>');
            res.end();
            break;
        case '/b.html':
            res.write('<html><head><title>test</title></head><body><h1>b.html</h1><a href="/">index</a><br><a href="/a.html">aaaa</a><br><a href="/b.html">bbbb</a></body></html>');
            res.end();
            break;
        default:
            res.write('404');
            res.end();
    }
});
// 3.监听端口号
httpServer.listen(8080);














