/**
 * Created by ijiajia on 2016/6/22.
 */
function show(json){
    var oUl=document.getElementById('ul1');
    var arr=json.s;

    oUl.innerHTML='';
    for(var i=0; i<arr.length; i++){
        var oLi=document.createElement('li');
        oLi.innerHTML=arr[i];
        oUl.appendChild(oLi);
    }
}
