/**
 * Created by ijiajia on 2016/6/22.
 */
define(function(require, exports, module){
    var M=require('m');
    var V=require('v');

    exports.C=function(){
        var oBtn=document.getElementById('btn1');

        oBtn.onclick=function(){
            M.data(function(str){
                V.show(str);
            });
        };
    };
});












