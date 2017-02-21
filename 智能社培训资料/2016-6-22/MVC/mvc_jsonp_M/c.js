/**
 * Created by ijiajia on 2016/6/22.
 */
window.onload=function(){
    var oT=document.getElementById('t1');

    oT.onkeyup=function(){
        data(oT.value, function(json){
            show(json);
        });
    };
};