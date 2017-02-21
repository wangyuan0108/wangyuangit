/**
 * Created by ijiajia on 2016/7/1.
 */
// 1、引入模块
var http=require('http');
// 2、建立服务器
var httpServer=http.createServer(function(){
    console.log('有人来了');
});
// 3.监听端口号
httpServer.listen(8080);














