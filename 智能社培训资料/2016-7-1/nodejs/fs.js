/**
 * Created by ijiajia on 2016/7/1.
 */
var fs=require('fs');

fs.readFile('1.js', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});









