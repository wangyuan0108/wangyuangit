function json2url(json){
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}
function ajax(url, data, fnSucc, fnError){
    // 准备ajax对象
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 2、建立链接
    oAjax.open('GET', url+'?'+json2url(data), true);

    // 3、发送请求
    oAjax.send();

    // 接收数据
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status==200){
                fnSucc && fnSucc(oAjax.responseText);
            }else{
                fnError && fnError(oAjax.status);
            }
        }
    };
}