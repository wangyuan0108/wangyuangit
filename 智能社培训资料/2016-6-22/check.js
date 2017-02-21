/**
 * Created by ijiajia on 2016/6/22.
 */
var reg={
    email:/^\w+@[0-9a-zA-Z-]+(\.[a-z]{2,8}){1,2}$/,
    age: /^(1[89]|[2-9]\d|100)$/,
    tel: /^(0\d{2,3}-)?[1-9]\d{6,7}$/,
    cnName: /^[\u4e00-\u9fa5]{2,4}$/
};

function checkForm(){
    var oForm=document.getElementById('form');
    var aInput=document.getElementsByTagName('input');

    function check(obj, reg){
        if(obj.value){
            if(reg.test(obj.value)){
                obj.parentNode.children[1].innerHTML='';
                obj.className='success';
                return true;
            }else{
                obj.parentNode.children[1].innerHTML=obj.getAttribute('data-err');
                obj.className='error';
                return false;
            }
        }else{
            obj.parentNode.children[1].innerHTML='* 内容不能为空';
            obj.className='error';
            return false;
        }
    }
    oForm.onsubmit=function(){
        var bFlag=true;
        for(var i=0; i<aInput.length; i++){
            // 有没有这个正则
            if(reg[aInput[i].name]){
                // 如果通过返回true , 如果不通过false -> 阻止默认事件
                if(!check(aInput[i], reg[aInput[i].name])){
                    bFlag=false;
                }
            }
        }
        return bFlag;
    };
// 失去焦点判断
    for(var i=0; i<aInput.length; i++){
        // 看有没有这个正则
        if(reg[aInput[i].name]){
            (function(index){
                aInput[i].onblur=function(){
                    check(aInput[index], reg[aInput[index].name]);
                };
            })(i);
        }
    }
}
