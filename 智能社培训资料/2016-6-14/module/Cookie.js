/**
 * Created by ijiajia on 2016/6/14.
 */
define(function(require, exports, module){
    module.exports={
        addCookie: function(name, value, iDay){
            // 有过期时间
            if(iDay){
                var oDate=new Date();
                oDate.setDate(oDate.getDate()+iDay);
                document.cookie=name+'='+value+'; path=/; expires='+oDate.toUTCString();
                // 没有过期时间
            }else{
                document.cookie=name+'='+value+'; path=/';
            }
        },
        getCookie: function(name){
            var arr=document.cookie.split('; ');

            for(var i=0; i<arr.length; i++){
                var arr2=arr[i].split('=');
                if(arr2[0]==name){
                    return arr2[1];
                }
            }
            return '';
        },
        removeCookie: function(name){
            this.addCookie(name, '123', -1);
        }
    }
});