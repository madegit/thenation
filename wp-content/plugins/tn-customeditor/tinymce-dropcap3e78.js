jQuery(document).ready(function($){ 
    $(".poetry1").children("p:first-of-type").html(function() {
        if ("0" == $(this).children("img").length) {
            var t = $(".poetry1").children("p:first-of-type").html();
            $(".poetry1").children("p:first-of-type").html(t.replace(/^(<.?>)?([A-Za-z0-9])/g, '$1<span class="dropcap">$2</span>'))
        }
    });
    $('.poetry1').children().last().find('p:last').addClass('redotclass'); 
});