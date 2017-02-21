/**
 * Created by ijiajia on 2016/6/14.
 */
define(function(require, exports, module){
    // require 引入模块
    // exports 导出模块
    // module  批量导出模块
    var A=require('sum-a');
    var B=require('sum-b');

    exports.sum=function(){
        return A.a+ B.a;
    };
});











