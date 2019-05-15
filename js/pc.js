define([], function(){

    var Tips = (function(){

        var $tipBox = $(".tips-box");

        return {
            show: function(){
                $tipBox.removeClass("hide");
            },
            hide: function(){
                $tipBox.addClass("hide");
            },
            init: function(){
                
            }
        }
    })();

    var resetTags = function(){
        var tags = $(".tagcloud a");
        tags.css({"font-size": "12px"});
        for(var i=0,len=tags.length; i