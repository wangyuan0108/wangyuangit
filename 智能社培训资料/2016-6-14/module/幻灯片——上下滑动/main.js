/**
 * Created by ijiajia on 2016/6/14.
 */
define(function(require, exports, module){
    var M=require('move');

    exports.init=function(){
        var oPlay=document.getElementById('play');
        var aBtn=oPlay.children[0].children;
        var oUl=oPlay.children[1];
        var aLi=oUl.children;

        for(var i=0; i<aBtn.length; i++){
            aBtn[i].index=i;
            aBtn[i].onclick=function(){
                for(var i=0; i<aBtn.length; i++){
                    aBtn[i].className='';
                }
                this.className='active';
                // oUl.style.top=-aLi[0].offsetHeight*this.index+'px';
                M.move(oUl, {top: -aLi[0].offsetHeight*this.index}, 300);
            };
        }
    }
});