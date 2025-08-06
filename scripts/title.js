$(window).on("load",function(){
    var pageTitle = document.title;
    var attentionMessage = 'SEVGİLİM ❤️';
    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if(!isPageActive){
            document.title = attentionMessage;
        }else {
            document.title = pageTitle;
        }
    });
});