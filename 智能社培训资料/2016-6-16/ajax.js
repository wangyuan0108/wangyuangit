/**
 * Created by ijiajia on 2016/6/16.
 */
function json2url(json){
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}
function ajax(json){
    // 1、准备一个ajax
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 2、建立链接
    oAjax.open('GET', json.url+'?'+json2url(json.data), true);
    // 3、发送请求
    oAjax.send();
    // 4、接收数据
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if((oAjax.status>=200 && oAjax.status<300) || oAjax.status==304){
                json.success && json.success(oAjax.responseText);
            }else{
                json.error && json.error(oAjax.status);
            }
        }
    };
}