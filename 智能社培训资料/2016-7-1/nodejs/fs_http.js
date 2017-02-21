/**
 * Created by ijiajia on 2016/7/1.
 */
var fs=require('fs');
var http=require('http');

var httpServer=http.createServer(function(req, res){
    console.log('有人来了'+req.url);

    fs.readFile('www'+req.url, function(err, data){
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    });
});
httpServer.listen(8080);










