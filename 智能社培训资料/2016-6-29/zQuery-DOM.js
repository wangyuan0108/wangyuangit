/**
 * Created by ijiajia on 2016/6/29.
 */
function ZQuery(arg){

    this.domString='';      // 创建DOM
    this.elements=[];       // 存元素
    switch(typeof arg){
        case 'function':
            domReady(arg);
            break;
        case 'string':
            if(arg.indexOf('>')!=-1){
                this.domString=arg;
                console.log(this.domString);
            }else{
                this.elements=getEle(arg);
            }
            break;
        default:    // this
            this.elements.push(arg);
    }
}
ZQuery.prototype.css=function(name, value){
    if(arguments.length==2){    // 赋值
        for(var i=0; i<this.elements.length; i++){
            this.elements[i].style[name]=value;
        }
    }else{
        if(typeof name=='string'){  // 获取
            return getStyle(this.elements[0], name);
        }else{  // 批量设置
            var json=name;
            for(var name in json){
                for(var i=0; i<this.elements.length; i++){
                    this.elements[i].style[name]=json[name];
                }
            }
        }
    }
};
ZQuery.prototype.attr=function(name, value){
    if(arguments.length==2){
        for(var i=0; i<this.elements.length; i++){
            this.elements[i].setAttribute(name, value);
        }
    }else{
        if(typeof name=='string'){
            return this.elements[0].getAttribute(name);
        }else{
            var json=name;
            for(var name in json){
                for(var i=0; i<this.elements.length; i++){
                    this.elements[i].setAttribute(name, json[name]);
                }
            }
        }
    }
};
// 事件
/*ZQuery.prototype.click=function(fn){
    for(var i=0; i<this.elements.length; i++){
        addEvent(this.elements[i], 'click', fn);
    }
};*/
;'click mouseover mouseout mousedown mousemove mouseup focus blur input change'.replace(/\w+/g, function(sEv){
    ZQuery.prototype[sEv]=function(fn){
        for(var i=0; i<this.elements.length; i++){
            addEvent(this.elements[i], sEv, fn);
        }
    };
});
// mouseenter mouseleave
ZQuery.prototype.mouseenter=function(fn){
    for(var i=0; i<this.elements.length; i++){
        addEvent(this.elements[i], 'mouseover', function(ev){
            var form=ev.fromElement || ev.relatedTarget;
            if(this.contains(form))return;
            fn.apply(this, arguments);
        });
    }
};
ZQuery.prototype.mouseleave=function(fn){
    for(var i=0; i<this.elements.length; i++){
        addEvent(this.elements[i], 'mouseout', function(ev){
            var to=ev.toElement || ev.relatedTarget;
            if(this.contains(to))return;
            fn.apply(this, arguments);
        });
    }
};
ZQuery.prototype.hover=function(fnOver, fnOut){
    this.mouseenter(fnOver);
    this.mouseleave(fnOut);
};
ZQuery.prototype.toggle=function(){
    var args=arguments;
    var _this=this;
    for(var i=0; i<this.elements.length; i++){
        ;(function(count){
            addEvent(_this.elements[i], 'click', function(){
                var fn=args[count%args.length];
                fn.apply(this, arguments);
                count++;
            })
        })(0);
    }
};
ZQuery.prototype.bind=function(sEv, fn){
    for(var i=0; i<this.elements.length; i++){
        addEvent(this.elements[i], sEv, fn);
    }
};
// DOM添加 删除
ZQuery.prototype.appendTo=function(str){
    var aParent=getEle(str);
    for(var i=0; i<aParent.length; i++){
        aParent[i].insertAdjacentHTML('beforeEnd', this.domString);
    }
};
ZQuery.prototype.prependTo=function(str){
    var aParent=getEle(str);
    for(var i=0; i<aParent.length; i++){
        aParent[i].insertAdjacentHTML('afterBegin', this.domString);
    }
};
ZQuery.prototype.insertBefore=function(str){
    var aParent=getEle(str);
    for(var i=0; i<aParent.length; i++){
        aParent[i].insertAdjacentHTML('beforeBegin', this.domString);
    }
};
ZQuery.prototype.insertAfter=function(str){
    var aParent=getEle(str);
    for(var i=0; i<aParent.length; i++){
        aParent[i].insertAdjacentHTML('afterEnd', this.domString);
    }
};
ZQuery.prototype.remove=function(){
    for(var i=0; i<this.elements.length; i++){
        this.elements[i].parentNode.removeChild(this.elements[i]);
    }
};

function $(arg){
    return new ZQuery(arg);
}
function addEvent(obj, sEv, fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv, function(ev){
            var oEvent=ev || event;
            if(fn.apply(obj, arguments)==false){    // 阻止冒泡
                oEvent.cancelBubble=true;
                oEvent.preventDefault();
            }
        }, false);
    }else{
        obj.attachEvent('on'+sEv, function(ev){
            var oEvent=ev || event;
            if(fn.apply(obj, arguments)==false){
                oEvent.cancelBubble=true;
                return false;
            }
        });
    }
}

function getStyle(obj, name){
    return (obj.currentStyle || getComputedStyle(obj, false))[name];
}
function domReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded', function(){
            fn && fn();
        }, false);
    }else{
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
                fn && fn();
            }
        };
    }
}
function getByClass(oParent, sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aEle=oParent.getElementsByTagName('*');
        var arr=[];
        var reg=new RegExp('\\b'+sClass+'\\b');
        for(var i=0; i<aEle.length; i++){
            if(reg.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}
function getByStr(aParent, str){
    var aChild=[];
    for(var i=0; i<aParent.length; i++){
        switch(str.charAt(0)){
            case '#':
                var obj=document.getElementById(str.substring(1));
                aChild.push(obj);
                break;
            case '.':
                var aEle=getByClass(aParent[i], str.substring(1));
                for(var j=0; j<aEle.length; j++){
                    aChild.push(aEle[j]);
                }
                break;
            default:
                if(/^\w+\.\w+$/.test(str)){ // li.red   \w+\.\w+
                    var aStr=str.split('.');
                    var aEle=aParent[i].getElementsByTagName(aStr[0]);
                    var reg=new RegExp('\\b'+aStr[1]+'\\b');
                    for(var j=0; j<aEle.length; j++){
                        if(reg.test(aEle[j].className)){
                            aChild.push(aEle[j]);
                        }
                    }
                }else if(/^\w+\:\w+(\(\d+\))?$/.test(str)){  // 伪类 li:first li:last li:eq()
                    // str -> li:firt
                    // str -> li:eq(2)
                    var aStr=str.split(/:|\(|\)/);
                    var aEle=aParent[i].getElementsByTagName(aStr[0]);
                    switch(aStr[1]){
                        case 'first':
                            aChild.push(aEle[0]);
                            break;
                        case 'last':
                            aChild.push(aEle[aEle.length-1]);
                            break;
                        case 'eq':
                            aChild.push(aEle[aStr[2]]);
                            break;
                        case 'odd':
                            for(var j=1; j<aEle.length; j+=2){
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'even':
                            for(var j=0; j<aEle.length; j+=2){
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'gt':
                            for(var j=parseInt(aStr[2])+1; j<aEle.length; j++){
                                aChild.push(aEle[j]);
                            }
                            break;
                        case 'lt':
                            for(var j=0; j<aStr[2]; j++){
                                aChild.push(aEle[j]);
                            }
                            break;
                    }
                }else if(/^\w+\[\w+=\w+\]$/.test(str)){ // 属性
                    var aStr=str.split(/\[|\]|=/);
                    var aEle=aParent[i].getElementsByTagName(aStr[0]);
                    for(var j=0; j<aEle.length; j++){
                        if(aEle[j].getAttribute(aStr[1])==aStr[2]){
                            aChild.push(aEle[j]);
                        }
                    }
                }else{
                    var aEle=aParent[i].getElementsByTagName(str);
                    for(var j=0; j<aEle.length; j++){
                        aChild.push(aEle[j]);
                    }
                }
                break;
        }
    }
    return aChild;
}
function getEle(str){
    var arr=str.replace(/^\s+|\s+$/g, '').split(' ');
    var aParent=[document];
    var aChild=[];

    for(var i=0; i<arr.length; i++){
        aChild=getByStr(aParent, arr[i]);
        aParent=aChild;
    }
    return aChild;
}