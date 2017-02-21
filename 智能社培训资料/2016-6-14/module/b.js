/**
 * Created by ijiajia on 2016/6/14.
 */
define(function(require, exports, module){
    // require  移入其他模块
    // exports  导出模块
    // module   批量导出模块
    // exports.a='abc';
    // exports.a=[1,2,3,4];
    /*exports.a={
        a: 12,
        b: 5
    };*/
    exports.a=function(){
        alert(1);
    };
});