$(function () {
    $('.scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.section').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $('html, body').stop().animate({
                scrollTop: $(this).prev().offset().top
            }, 800, 'easeInOutExpo');
            e.preventDefault();
        } else {
            $('html, body').stop().animate({
                scrollTop: $(this).next().offset().top
            }, 800, 'easeInOutExpo');
            e.preventDefault();
        }
    });
});

$(function () { 
    $("[data-toggle='tooltip']").tooltip(); 
  
});
