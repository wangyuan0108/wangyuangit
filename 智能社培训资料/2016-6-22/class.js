/**
 * Created by ijiajia on 2016/6/22.
 */
// 获取class是sClass的元素
function getByClass(oParent, sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aEle=oParent.getElementsByTagName('*');
        var arr=[];
        // var reg=/sClass/;
        var reg=new RegExp('\\b'+sClass+'\\b');
        for(var i=0; i<aEle.length; i++){
            if(reg.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}
// 检测一个元素有没有这个class
function hasClass(obj, sClass){
    var reg=new RegExp('\\b'+sClass+'\\b');
    return reg.test(obj.className);
}
// 添加class
function addClass(obj, sClass){
    if(obj.className){
        if(!hasClass(obj, sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
}
// 删除class
function removeClass(obj, sClass){
    var reg=new RegExp('\\b'+sClass+'\\b', 'g');
    if(hasClass(obj, sClass)){
        obj.className=obj.className.replace(reg, '').replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
    }
}