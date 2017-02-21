/**
 * Created by ijiajia on 2016/6/2.
 */
function addEvent(obj, sEv, fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv, fn, false);
    }else{
        obj.attachEvent('on'+sEv, fn);
    }
}
function removeEvent(obj, sEv, fn){
    if(obj.removeEventListener){
        obj.removeEventListener(sEv, fn, false);
    }else{
        obj.detachEvent('on'+sEv, fn);
    }
}