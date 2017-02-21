/**
 * Created by ijiajia on 2016/6/7.
 */
define(function(require, exports, module){
    var getStyle=require('getStyle');
    exports.move=function(obj, json, duration, complete){
        var start={};
        var dis={};

        for(var name in json){
            start[name]=parseFloat(getStyle.G(obj, name));
            dis[name]=json[name]-start[name];
        }
        var count=Math.floor(duration/30);
        var n=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            n++;

            for(var name in json){
                var a=n/count;
                var cur=start[name]+dis[name]*a;

                if(name=='opacity'){
                    obj.style.opacity=cur;
                    obj.style.filter='alpha(opacity='+cur*100+')';
                }else{
                    obj.style[name]=cur+'px';
                }
            }

            if(n==count){
                clearInterval(obj.timer);
                complete && complete();
            }
        }, 30);
    }
});