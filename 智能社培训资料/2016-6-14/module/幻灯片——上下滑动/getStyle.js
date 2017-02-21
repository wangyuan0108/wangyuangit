/**
 * Created by ijiajia on 2016/6/14.
 */
define(function(require, exports, module){

    exports.G=function(obj, name){
        return (obj.currentStyle || getComputedStyle(obj, false))[name];
    };
});
