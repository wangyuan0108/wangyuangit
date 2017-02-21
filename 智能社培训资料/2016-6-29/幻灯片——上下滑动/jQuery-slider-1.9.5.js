/**
 * Created by ijiajia on 2016/6/29.
 */
$.fn.slider=function(){
    this.each(function(index, element){
        var aBtn=$(this).find('ol li');
        var oUl=$(this).find('ul');

        aBtn.click(function(){
            aBtn.removeClass('active');
            $(this).addClass('active');
            oUl.animate({top: -150*$(this).index()});
        });
    });
}