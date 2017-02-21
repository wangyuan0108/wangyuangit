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
    res.write('<html><head><title>test</title></head><body><div>divdivdiv</div></body></html>');
    res.end();
});
// 3.监听端口号
httpServer.listen(8080);














