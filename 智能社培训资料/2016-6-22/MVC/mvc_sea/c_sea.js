/**
 * Created by ijiajia on 2016/6/22.
 */
define(function(require, exports, module){
    var M=require('m_sea');
    var V=require('v_sea');

    exports.C=function(){
        var oBtn=document.getElementById('btn1');

        oBtn.onclick=function(){
            V.show(M.data());
        };
    };
});