/**
 * Created by ijiajia on 2016/6/17.
 */
function jsonp(url, data, cbName , fnSucc){
    var fnName='show'+Math.random();
    // 替换fnName里面的小数点
    fnName=fnName.replace('.', '');
    window[fnName]=function(json){
        fnSucc && fnSucc(json);
    };

    var arr=[];
    for(var name in data){
        arr.push(name+'='+data[name]);
    }
    var str=arr.join('&');
    var oS=document.createElement('script');
    oS.src=url+'?'+str+'&'+cbName+'='+fnName;
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
}