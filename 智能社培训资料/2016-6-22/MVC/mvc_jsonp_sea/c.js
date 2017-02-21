/**
 * Created by ijiajia on 2016/6/22.
 */
define(function(require, exports, module){
    var M=require('m');
    var V=require('v');

    exports.C=function(){
        var oT=document.getElementById('t1');

        oT.onkeyup=function(){
            M.data(oT.value, function(json){
                V.show(json);
            });
        };
    };
});









