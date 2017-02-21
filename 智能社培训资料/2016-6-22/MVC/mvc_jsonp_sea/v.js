/**
 * Created by ijiajia on 2016/6/22.
 */
define(function(require, exports, module){

    exports.show=function(json){
        var oUl=document.getElementById('ul1');

        oUl.innerHTML='';
        var arr=json.s;
        for(var i=0; i<arr.length; i++){
            var oLi=document.createElement('li');
            oLi.innerHTML=arr[i];
            oUl.appendChild(oLi);
        }
    };
});